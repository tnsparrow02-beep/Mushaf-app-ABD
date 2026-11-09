#!/usr/bin/env bash
# usage: native/build.sh debug|release   (run from repo root after "npx cap sync android")
set -u
MODE="${1:-debug}"
APPID=$(node -p "require('./capacitor.config.json').appId")
PKGDIR="android/app/src/main/java/$(echo "$APPID" | tr . /)"
MAIN="$PKGDIR/MainActivity.java"
MAN=android/app/src/main/AndroidManifest.xml
BAK="${RUNNER_TEMP:-/tmp}/MainActivity.bak"

mkdir -p android/app/src/main/res/drawable
cp native/ic_stat_mushaf.xml android/app/src/main/res/drawable/ic_stat_mushaf.xml
python3 native/manifest.py "$MAN"
cp "$MAIN" "$BAK"
for f in MediaCtlPlugin MediaService MainActivity; do
  sed "s/__PKG__/$APPID/g" "native/$f.java" > "$PKGDIR/$f.java"
done

if [ "$MODE" = "release" ]; then
  TASK=(assembleRelease bundleRelease
    "-Pandroid.injected.signing.store.file=${KS_FILE}"
    "-Pandroid.injected.signing.store.password=${KP}"
    "-Pandroid.injected.signing.key.alias=${KA:-mushaf}"
    "-Pandroid.injected.signing.key.password=${KP}")
else
  TASK=(assembleDebug)
fi

run() { (cd android && chmod +x gradlew && ./gradlew "$@" --no-daemon); }
if ! run "${TASK[@]}"; then
  echo "::warning::Native media notification failed to compile; building without it."
  rm -f "$PKGDIR/MediaCtlPlugin.java" "$PKGDIR/MediaService.java"
  cp "$BAK" "$MAIN"
  run "${TASK[@]}" || exit 1
fi
