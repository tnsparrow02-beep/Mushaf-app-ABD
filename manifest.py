import sys
p = sys.argv[1]
s = open(p, encoding="utf8").read()
perms = ["POST_NOTIFICATIONS", "FOREGROUND_SERVICE", "FOREGROUND_SERVICE_MEDIA_PLAYBACK",
         "SCHEDULE_EXACT_ALARM", "WAKE_LOCK", "ACCESS_COARSE_LOCATION", "ACCESS_FINE_LOCATION"]
add = "".join('    <uses-permission android:name="android.permission.%s" />\n' % x
              for x in perms if 'android.permission.%s"' % x not in s)
if 'android.hardware.location.gps' not in s:
    add += '    <uses-feature android:name="android.hardware.location.gps" android:required="false" />\n'
if add:
    s = s.replace("<application", add + "    <application", 1)
if "MediaService" not in s:
    s = s.replace("</application>",
                  '        <service android:name=".MediaService" android:exported="false" android:foregroundServiceType="mediaPlayback" />\n    </application>', 1)
open(p, "w", encoding="utf8").write(s)
