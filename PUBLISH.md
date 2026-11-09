# Nashr el app (APK mousajjal + Google Play)

## 1) APK tajribi (debug) — yetsana3 weHdou
Kol ma tab3ath code lel branche `main` fi GitHub → Actions → "Build APK (debug)" → Artifacts → `mushaf-apk`.

## 2) APK / AAB mousajjal (lel nashr)
⚠️ A3mel el repo **Private** 9bal ma tkamel (el keystore ykoun fil artifacts).

1. Actions → **Create keystore (run once)** → Run workflow.
2. Nazzel el artifact `keystore-secrets` → fih fichier `secrets.txt` (KEYSTORE_PASSWORD, KEY_ALIAS, KEYSTORE_BASE64).
3. Settings → Secrets and variables → Actions → New repository secret. A3mel 3 secrets:
   - `KEYSTORE_BASE64` = el satr eli ba3d `KEYSTORE_BASE64=` (ndhif kamel)
   - `KEYSTORE_PASSWORD` = el password
   - `KEY_ALIAS` = `mushaf`
4. **7afadh 3ala `secrets.txt` fi blasa amina.** Ken tdhii3ou, ma tnajamch tbaddel el app 3ala Google Play abadan.
5. Actions → **Release (signed APK + AAB)** → Run workflow → Artifacts → `mushaf-release` (fih `.apk` w `.aab`).

## 3) Google Play
- Compte developer (25$ marra wa7da) : play.google.com/console
- Create app → el 3ounwan: «المصحف الشريف» → arfa3 el fichier `.aab`
- Package name: `com.mushaf.app` (badlou fi `capacitor.config.json` 9bal awel nashr ken t7eb esm unique mte3ek; ma yetbaddelch ba3d)
- Privacy policy: arfa3 `www/privacy.html` 3ala GitHub Pages (Settings → Pages) w a7ot el lien.
- Data safety: "No data collected".
- Icône 512: `www/icon-512.png`. Feature graphic 1024×500 + screenshots mel télépone.

## Wasf lel متجر (copy/paste)
**الاسم:** المصحف الشريف – قراءة وحفظ
**وصف قصير:** قرآن كامل بالرسم العثماني مع تلاوات لأشهر القرّاء وأدوات للحفظ والمراجعة.
**الوصف:**
مصحف كامل بتصميم إسلامي هادئ، تقلّب فيه الصفحات بالسحب كما في المصحف الورقي.
• قراءة صفحة بصفحة بملء الشاشة، مع إعدادات للمظهر (فاتح، ورقي، داكن، أسود) والسطوع وحجم الخط
• تلاوة السورة كاملة بأصوات أشهر القرّاء، وتلاوة آية بآية للحفظ مع التكرار وحلقة (من–إلى) وتغيير السرعة
• أدوات الحفظ: تعليم الآيات المحفوظة، مراجعة يومية بالتكرار المتباعد، تلميحات، متابعة تقدّم الحفظ
• وردي اليومي: ختمة خلال المدة التي تختارها وهدف حفظ يومي
• تفسير الميسر والجلالين، بحث في نص القرآن، مفضلة وملاحظات، أدعيتي
• يعمل بدون إنترنت بعد التحميل الأول (الصوت يحتاج اتصالًا)
بدون إعلانات وبدون جمع بيانات.

## Ta2kid mta3 Google Play (fil Play Console → App content)
- **Foreground service (mediaPlayback):** el app testakhdem service lel talawa fil kholfiya (notification m3a zorrar play/pause/next/prev).
- **Exact alarm (SCHEDULE_EXACT_ALARM):** lel tanbih fi waqt essalet bel dhabt.
- **Location (ikhtiyari):** bech yetsta3mel ken el user yodhghat "استخدم موقعي" lel awqat.
- Ki yel9a'oulek 3la el permissions, 9ol: "Prayer time reminders" w "Background Quran audio playback".
