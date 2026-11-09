(function(){
  const skip=/play\(\)|AbortError|NotAllowedError|NotSupportedError|Failed to fetch|NetworkError|offline|Load failed|ResizeObserver/i;
  const show=m=>{try{
    if(skip.test(m))return;
    let b=document.getElementById("errb");
    if(!b){b=document.createElement("div");b.id="errb";b.setAttribute("role","alert");
      b.style.cssText="position:fixed;top:0;left:0;right:0;z-index:99;background:#b3261e;color:#fff;padding:8px 12px;font:12px/1.5 monospace;direction:ltr;text-align:left;white-space:pre-wrap;max-height:35vh;overflow:auto";
      b.onclick=()=>b.remove();document.body.append(b)}
    b.textContent="ERROR: "+m+"\n(tap to close)";
  }catch(e){}};
  window.addEventListener("error",e=>show((e.message||"")+" @ "+String(e.filename||"").split("/").pop()+":"+e.lineno));
  window.addEventListener("unhandledrejection",e=>show("promise: "+((e.reason&&(e.reason.stack||e.reason.message))||e.reason)));
})();
const N="الفاتحة,البقرة,آل عمران,النساء,المائدة,الأنعام,الأعراف,الأنفال,التوبة,يونس,هود,يوسف,الرعد,إبراهيم,الحجر,النحل,الإسراء,الكهف,مريم,طه,الأنبياء,الحج,المؤمنون,النور,الفرقان,الشعراء,النمل,القصص,العنكبوت,الروم,لقمان,السجدة,الأحزاب,سبأ,فاطر,يس,الصافات,ص,الزمر,غافر,فصلت,الشورى,الزخرف,الدخان,الجاثية,الأحقاف,محمد,الفتح,الحجرات,ق,الذاريات,الطور,النجم,القمر,الرحمن,الواقعة,الحديد,المجادلة,الحشر,الممتحنة,الصف,الجمعة,المنافقون,التغابن,الطلاق,التحريم,الملك,القلم,الحاقة,المعارج,نوح,الجن,المزمل,المدثر,القيامة,الإنسان,المرسلات,النبأ,النازعات,عبس,التكوير,الانفطار,المطففين,الانشقاق,البروج,الطارق,الأعلى,الغاشية,الفجر,البلد,الشمس,الليل,الضحى,الشرح,التين,العلق,القدر,البينة,الزلزلة,العاديات,القارعة,التكاثر,العصر,الهمزة,الفيل,قريش,الماعون,الكوثر,الكافرون,النصر,المسد,الإخلاص,الفلق,الناس".split(",");
const C=[7,286,200,176,120,165,206,75,129,109,123,111,43,52,99,128,111,110,98,135,112,78,118,64,77,227,93,88,69,60,34,30,73,54,45,83,182,88,75,85,54,53,89,59,37,35,38,29,18,45,60,49,62,55,78,96,29,22,24,13,14,11,11,18,12,12,30,52,52,44,28,28,20,56,40,31,50,40,46,42,29,19,36,25,22,17,19,26,30,20,15,21,11,8,8,19,5,8,8,11,11,8,3,9,5,4,7,3,6,3,5,4,5,6];
const T="mddddmmddmmmdmmmmmmmmdmdmmmmmmmmdmmmmmmmmmmmmmmmmmdddmmmmmmdmdddddddddddmmmmmmmmmmdmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmddmmmmmmmmmmdmmmm".slice(0,0)+"mddddmmddm"+"mmdmmmmmmm"+"mdmdmmmmmm"+"mmdmmmmmmm"+"mmmmmmdddm"+"mmmmdmdddd"+"ddddddmmmm"+"mmmmmdmmmm"+"mmmmmmmmmm"+"mmmmmmmddm"+"mmmmmmmmmd"+"mmmm";
const L={1:["بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ","ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَٰلَمِينَ","ٱلرَّحْمَٰنِ ٱلرَّحِيمِ","مَٰلِكِ يَوْمِ ٱلدِّينِ","إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ","ٱهْدِنَا ٱلصِّرَٰطَ ٱلْمُسْتَقِيمَ","صِرَٰطَ ٱلَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ ٱلْمَغْضُوبِ عَلَيْهِمْ وَلَا ٱلضَّآلِّينَ"],
112:["قُلْ هُوَ ٱللَّهُ أَحَدٌ","ٱللَّهُ ٱلصَّمَدُ","لَمْ يَلِدْ وَلَمْ يُولَدْ","وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌۢ"],
113:["قُلْ أَعُوذُ بِرَبِّ ٱلْفَلَقِ","مِن شَرِّ مَا خَلَقَ","وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ","وَمِن شَرِّ ٱلنَّفَّٰثَٰتِ فِى ٱلْعُقَدِ","وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ"],
114:["قُلْ أَعُوذُ بِرَبِّ ٱلنَّاسِ","مَلِكِ ٱلنَّاسِ","إِلَٰهِ ٱلنَّاسِ","مِن شَرِّ ٱلْوَسْوَاسِ ٱلْخَنَّاسِ","ٱلَّذِى يُوَسْوِسُ فِى صُدُورِ ٱلنَّاسِ","مِنَ ٱلْجِنَّةِ وَٱلنَّاسِ"]};
const $=id=>document.getElementById(id);
const ar=n=>String(n);
const ico=n=>'<svg class="i" aria-hidden="true"><use href="#i-'+n+'"/></svg>';
const lbl=b=>b.querySelector("span")||b;
const setB=(b,i,t)=>{b.innerHTML=ico(i)+"<span>"+t+"</span>"};
const norm=s=>s.replace(/[إأآ]/g,"ا").replace(/ى/g,"ي").replace(/ة/g,"ه").replace(/[\u064B-\u0652\u0670]/g,"").trim();
const kind=i=>T[i]==="m"?"مكية":"مدنية";
let filt="",cur=0;
const store={get(k){try{return localStorage.getItem(k)}catch(e){return null}},set(k,v){try{localStorage.setItem(k,v)}catch(e){}}};

function draw(){
  if(tab===3)return drawLib();
  if(tab===4)return drawH();
  if(tab)return drawP();
  const q=norm($("q").value),ul=$("list");let h="",c=0;
  const qv=clean($("q").value);$("qs").hidden=qv.length<2;$("qs").innerHTML=ico("search")+"<span>ابحث في نص القرآن عن «"+esc(qv)+"»</span>";
  N.forEach((nm,i)=>{
    if(filt&&T[i]!==filt)return;
    if(q&&!norm(nm).includes(q)&&String(i+1)!==q)return;
    c++;
    h+=`<li class="row${DONE.has(i+1)?' dn':''}" tabindex="0" data-n="${i+1}"><div class="no"><span>${ar(i+1)}</span></div><div class="nm">سورة ${nm}</div><div class="mt">${kind(i)}<br>${ar(C[i])} آية</div></li>`;
  });
  ul.innerHTML=h;$("empty").hidden=c>0;
}
function mark(){try{return JSON.parse(store.get("mark"))}catch(e){return null}}
function hero(){
  const m=mark();
  $("hero").hidden=!m;$("fab").hidden=!m;
  if(m)$("hn").textContent="سورة "+N[m.s-1]+" · آية "+ar(m.a);
  showPin();
  try{const d=hstats().due;$("bdg").textContent=d?d:""}catch(e){}
}
function paint(){
  document.querySelectorAll(".ay.sv").forEach(x=>x.classList.remove("sv"));
  const m=mark();
  $("fab").hidden=!m;
  if(m&&m.s===cur){const e=$("a"+m.a);if(e)e.classList.add("sv")}
  paintAll();
}
async function load(n){
  cur=n;cA=0;store.set("last",n);closePanels();
  const i=n-1;
  $("ttl").textContent="سورة "+N[i];
  setAudio();syncDone();
  $("pv").disabled=n===1;$("nx").disabled=n===114;
  const tx=$("tx");tx.innerHTML='<p class="msg">جارٍ تحميل السورة…</p>';
  PG=0;layout();
  let ay=null;
  try{ay=await getSurah(n)}catch(e){ay=L[n]||null}
  if(cur!==n)return;
  AY=ay||[];fillRange();
  const head='<div class="stt"><b class="sn">سورة '+N[i]+'</b><small>'+kind(i)+' · '+ar(C[i])+' آية</small></div>';
  const bsm=(n===1||n===9)?"":'<div class="bsm">بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</div>';
  tx.innerHTML=ay?head+bsm+ay.map((t,k)=>(HZ[n+":"+(k+1)]?'<span class="hz">'+hl(HZ[n+":"+(k+1)])+'</span>':'')+'<span class="ay" id="a'+(k+1)+'" data-a="'+(k+1)+'" tabindex="0">'+esc(t)+' <span class="n">'+ar(k+1)+"</span></span>").join(" ")+'<div class="sdq">صَدَقَ ٱللَّهُ ٱلْعَظِيمُ</div><i id="pend"></i>':'<p class="msg">تعذّر تحميل نص السورة. تحقق من الاتصال بالإنترنت ثم أعد المحاولة.</p>';
  PG=0;layout();
  paint();if(ay)markDay();
  const m=mark();
  if(goLast){goLast=false;setPage(NP-1,false)}
  else if(jump&&jump.s===n&&$("a"+jump.a)){const e=$("a"+jump.a);gotoAy(jump.a,false);e.classList.add("on");setTimeout(()=>e.classList.remove("on"),2500);jump=null}
  else if(m&&m.s===n&&$("a"+m.a))gotoAy(m.a,false);
}
let cH=null;
function route(){
  cH=location.hash;
  const m=/^#s(\d+)$/.exec(location.hash),n=m?+m[1]:0,rd=n>=1&&n<=114;
  $("home").hidden=rd;$("read").hidden=!rd;$("back").hidden=!rd;document.body.classList.toggle("rd",rd);
  closePanels();
  if(rd)load(n);else{$("ttl").textContent="المصحف الشريف";$("au").pause();stopApi();mcStop();hero()}
}
const go=n=>{
  const h="#s"+n;
  try{if($("read").hidden)history.pushState({r:1},"",h);else history.replaceState(history.state,"",h)}catch(e){location.hash=h;return}
  route();
};
$("list").addEventListener("click",e=>{const r=e.target.closest(".row");if(r){jump=r.dataset.a?{s:+r.dataset.n,a:+r.dataset.a}:null;go(r.dataset.n)}});
$("list").addEventListener("keydown",e=>{if(e.key==="Enter"){const r=e.target.closest(".row");if(r){jump=r.dataset.a?{s:+r.dataset.n,a:+r.dataset.a}:null;go(r.dataset.n)}}});
$("q").addEventListener("input",draw);
$("chips").addEventListener("click",e=>{const b=e.target.closest(".chip");if(!b)return;filt=b.dataset.f;document.querySelectorAll(".chip").forEach(x=>x.setAttribute("aria-pressed",x===b));draw()});
$("hb").onclick=()=>{const m=mark();if(m)go(m.s)};
$("back").onclick=()=>{
  if(!$("sd").hidden||!$("audp").hidden||!$("sh").hidden)return closePanels();
  if(history.state&&history.state.r)history.back();
  else{try{history.replaceState(null,"",location.pathname+location.search)}catch(e){location.hash=""}route()}
};
$("pv").onclick=()=>{if(cur>1)go(cur-1)};$("nx").onclick=()=>{if(cur<114)go(cur+1)};
let AY=[],cA=0;const TF={};
const pad=n=>String(n).padStart(3,"0");
const RC={
sobhi:["إسلام صبحي",n=>"https://archive.org/download/002_20221103_202211/"+pad(n)+".mp3","4,7,9,16,22,28,33,37,39,40,45,65,69,112"],
kurdi:["رعد الكردي",n=>"https://archive.org/download/Raad-Al_Kurdi/"+pad(n)+".mp3","4,5,6,7,8,9,10,11,14,15,16,24,37,40,42"]};
function setAudio(){
  const v=$("rc").value;
  AUtk++;AUb=null;if(RC2[v])return setFull(v);
  if(!RC[v])return setApi(v);
  $("pb").hidden=true;stopApi();
  const r=RC[v],au=$("au"),miss=r[2].split(",").includes(String(cur));
  au.pause();au.hidden=miss;$("am").hidden=!miss;
  if(miss){au.removeAttribute("src");$("am").textContent="هذه السورة غير متوفرة بصوت "+r[0]+". جرّب القارئ الآخر."}
  else{au.src=r[1](cur);autoGo()}
}
$("au").addEventListener("error",()=>{
  const au=$("au");
  if(AUb&&AUi+1<AUb.length){AUi++;au.src=AUb[AUi]+pad(cur)+".mp3";return}
  if(au.getAttribute("src")){$("am").hidden=false;$("am").textContent="تعذّر تشغيل الصوت. تحقق من الاتصال بالإنترنت أو جرّب قارئًا آخر."}
});
$("au").addEventListener("playing",()=>{$("am").hidden=true});
const RCG=[...$("rc").querySelectorAll("optgroup")].map(g=>g.innerHTML);
let AM=store.get("amode")==="h"?"h":"l";
function fillRc(){
  const sel=$("rc");sel.innerHTML=RCG[AM==="l"?0:1];
  const v=store.get(AM==="l"?"rcL":"rcH")||(AM==="l"?store.get("rc"):null);
  if(v)sel.value=v;if(!sel.value)sel.selectedIndex=0;
  document.querySelectorAll("#amd button").forEach(b=>b.setAttribute("aria-pressed",b.dataset.m===AM));
}
fillRc();
$("rc").onchange=()=>{store.set(AM==="l"?"rcL":"rcH",$("rc").value);setAudio()};
async function tafsir(n,ed){
  const k=ed+n;if(TF[k])return TF[k];
  const full=await idb.get("t."+ed);
  if(Array.isArray(full)&&full.length===114&&Array.isArray(full[n-1])){TF[k]=full[n-1];return TF[k]}
  const r=await fetch("https://api.alquran.cloud/v1/surah/"+n+"/"+ed);
  const j=await r.json();
  TF[k]=j.data.ayahs.map(a=>a.text);return TF[k];
}
async function showAy(a){
  if(a<1||a>AY.length)return;
  cA=a;const n=cur;
  closePanels();$("sh").hidden=false;document.body.classList.add("so");
  document.querySelectorAll(".ay.on").forEach(x=>x.classList.remove("on"));
  const e=$("a"+a);if(e)e.classList.add("on");
  $("sa").textContent="سورة "+N[n-1]+" · آية "+ar(a);
  $("st").textContent=AY[a-1];syncSheet();
  $("sf").textContent="جارٍ تحميل التفسير…";
  $("sp").disabled=a<=1;$("sn").disabled=a>=AY.length;
  try{
    const t=await tafsir(n,$("tf").value);
    if(cur===n&&cA===a)$("sf").textContent=t[a-1]||"لا يوجد تفسير لهذه الآية.";
  }catch(err){
    if(cur===n&&cA===a)$("sf").textContent="تعذّر تحميل التفسير. تحقق من الاتصال بالإنترنت ثم اضغط على الآية من جديد.";
  }
}
const goAy=()=>gotoAy(cA);
$("tx").addEventListener("click",e=>{const s=e.target.closest(".ay");if(!s)return;if($("tx").classList.contains("hide")&&!s.classList.contains("rv")){s.classList.add("rv");return}showAy(+s.dataset.a)});
$("tx").addEventListener("keydown",e=>{if(e.key==="Enter"){const s=e.target.closest(".ay");if(s)showAy(+s.dataset.a)}});
$("sx").onclick=()=>{$("sh").hidden=true;document.body.classList.remove("so");document.querySelectorAll(".ay.on").forEach(x=>x.classList.remove("on"))};
$("sp").onclick=()=>{showAy(cA-1);goAy()};
$("sn").onclick=()=>{showAy(cA+1);goAy()};
$("tf").onchange=()=>showAy(cA);
$("sv").onclick=()=>{
  store.set("mark",JSON.stringify({s:cur,a:cA}));paint();
  const b=lbl($("sv"));b.textContent="تم الحفظ ✓";setTimeout(()=>{b.textContent="حفظ مكاني هنا"},1600);
};
let U=[],ix=0,rep=0,playing=false;const pa=new Audio();
const ppSet=on=>{playing=on;setB($("pp"),on?"pause":"play",on?"إيقاف مؤقت":"تشغيل")};
function stopApi(){pa.pause();pa.removeAttribute("src");ix=0;ppSet(false);document.querySelectorAll(".ay.pl").forEach(x=>x.classList.remove("pl"))}
async function setApi(v){
  stopApi();const au=$("au");au.pause();au.hidden=true;au.removeAttribute("src");
  $("am").hidden=true;$("pb").hidden=false;U=[];const n=cur;
  try{
    const r=await fetch("https://api.alquran.cloud/v1/surah/"+n+"/"+v);
    const j=await r.json();
    if(cur===n)U=j.data.ayahs.map(a=>a.audio);
  }catch(e){$("am").hidden=false;$("am").textContent="تعذّر تحميل الصوت. تحقق من الاتصال بالإنترنت."}
}
function playAy(i){
  if(!U[i-1])return;
  ix=i;rep=0;
  document.querySelectorAll(".ay.pl").forEach(x=>x.classList.remove("pl"));
  const e=$("a"+i);if(e){e.classList.add("pl");gotoAy(i)}
  pa.src=U[i-1];pa.playbackRate=+$("spd").value||1;
  pa.play().then(()=>ppSet(true)).catch(()=>{$("am").hidden=false;$("am").textContent="تعذّر تشغيل الصوت."});
}
pa.addEventListener("ended",()=>{
  rep++;
  if(rep<+$("rp").value){pa.currentTime=0;pa.play();return}
  const lp=$("lp").checked,to=lp?+$("rt").value:U.length;
  if(ix<to)playAy(ix+1);else if(lp)playAy(+$("rf").value);else stopApi();
});
$("pp").onclick=()=>{if(playing){pa.pause();ppSet(false)}else if(ix){pa.play();ppSet(true)}else playAy($("lp").checked?+$("rf").value:(cA||1))};
$("ap").onclick=()=>playAy(Math.max(1,(ix||1)-1));
$("an").onclick=()=>playAy(Math.min(U.length,(ix||0)+1));
$("hd").onchange=()=>{const t=$("tx");t.classList.toggle("hide",$("hd").checked);t.querySelectorAll(".rv").forEach(x=>x.classList.remove("rv"))};
$("sl").onclick=async()=>{
  if(AM!=="h")await setMode("h");
  playAy(cA);
};
$("fab").onclick=()=>{
  const m=mark();if(!m)return;
  if(!$("read").hidden&&cur===m.s)gotoAy(m.a)
  else go(m.s);
};
const H="1:1,2:75,2:142,2:203,2:253,3:15,3:93,3:171,4:24,4:88,4:148,5:27,5:82,6:36,6:111,7:1,7:88,7:171,8:41,9:34,9:93,10:26,11:6,11:84,12:53,13:19,15:1,16:51,17:1,17:99,18:75,19:59,21:1,21:83,23:1,24:21,25:21,26:111,27:56,28:51,29:46,31:22,33:31,34:24,36:28,37:145,39:32,40:41,41:47,43:24,46:1,48:18,51:31,55:1,58:1,62:1,67:1,72:1,78:1,87:1".split(",");
const HZ={};H.forEach((x,i)=>{HZ[x]=i+1});
const hl=h=>h%2?"الجزء "+ar((h+1)/2):"الحزب "+ar(h);
let tab=0,jump=null;
function drawP(){
  const L2=tab===1?H.filter((_,i)=>i%2===0):H;let h="";
  L2.forEach((x,i)=>{
    const [s,a]=x.split(":").map(Number),lb=(tab===1?"الجزء ":"الحزب ")+ar(i+1);
    h+='<li class="row" tabindex="0" data-n="'+s+'" data-a="'+a+'"><div class="no"><span>'+ar(i+1)+'</span></div><div class="nm">'+lb+'</div><div class="mt">سورة '+N[s-1]+'<br>آية '+ar(a)+'</div></li>';
  });
  $("list").innerHTML=h;$("empty").hidden=true;
}
$("tabs").addEventListener("click",e=>{
  const b=e.target.closest(".tab");if(!b)return;
  tab=+b.dataset.t;
  document.querySelectorAll(".tab").forEach(x=>x.setAttribute("aria-selected",x===b));
  $("q").hidden=$("chips").hidden=tab!==0;$("list").hidden=tab>=3;$("lib").hidden=tab<3;$("qs").hidden=true;draw();
});
/* ===== أدعيتي ===== */
const DMAX=500,DMIN=3,DCAP=30;
const clean=s=>String(s==null?"":s).replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F\u202A-\u202E\u2066-\u2069]/g,"").replace(/\r\n?/g,"\n").replace(/[ \t]+\n/g,"\n").replace(/\n{3,}/g,"\n\n").trim();
const newId=()=>Date.now().toString(36)+Math.random().toString(36).slice(2,7);
function sanD(a){
  try{
    if(!Array.isArray(a))return[];
    const seen=new Set();let pinned=false;
    return a.slice(0,DCAP).filter(x=>x&&typeof x.t==="string"&&typeof x.id==="string").map(x=>{
      const p=!!x.pin&&!pinned;if(p)pinned=true;
      return{id:x.id.slice(0,40),t:clean(x.t).slice(0,DMAX),pin:p};
    }).filter(x=>x.t.length>=DMIN&&!seen.has(x.id)&&(seen.add(x.id),true));
  }catch(e){return[]}
}
function loadD(){try{return sanD(JSON.parse(store.get("duas")||"[]"))}catch(e){return[]}}
let D=loadD(),edId=null,lastF=null,dTimer=null;
function saveD(arr){try{localStorage.setItem("duas",JSON.stringify(arr));return true}catch(e){return false}}
function checkD(raw,skipId){
  const t=clean(raw);
  if(!t)return{err:"اكتب الدعاء أولاً."};
  if(t.length<DMIN)return{err:"الدعاء قصير جدًا."};
  if(t.length>DMAX)return{err:"الدعاء طويل، الحد الأقصى "+ar(DMAX)+" حرف."};
  if(D.some(x=>x.id!==skipId&&norm(x.t)===norm(t)))return{err:"هذا الدعاء محفوظ من قبل."};
  if(!skipId&&D.length>=DCAP)return{err:"وصلت للحد الأقصى ("+ar(DCAP)+" دعاء). احذف دعاءً لإضافة آخر."};
  return{t};
}
function showPin(){const p=D.find(x=>x.pin);$("pd").hidden=!p;if(p)$("pdt").textContent=p.t}
function setErr(m){$("derr").textContent=m||"";$("dt").setAttribute("aria-invalid",m?"true":"false")}
function cnt(){$("dc").textContent=ar($("dt").value.length)+" / "+ar(DMAX)}
function resetF(){edId=null;$("dt").value="";$("ds").textContent="حفظ الدعاء";$("dcx").hidden=true;$("dlb").textContent="اكتب الدعاء الذي تريده";setErr("");cnt()}
function drawD(){
  const ul=$("dl");ul.textContent="";$("de").hidden=D.length>0;
  D.forEach(x=>{
    const li=document.createElement("li");li.className="dc"+(x.pin?" pn":"");
    const p=document.createElement("p");p.textContent=x.t;
    const bar=document.createElement("div");bar.className="da";
    [["copy","نسخ"],["edit","تعديل"],["pin",x.pin?"إلغاء التثبيت":"📌 تثبيت في الرئيسية"],["del","حذف"]].forEach(([k,l])=>{
      const b=document.createElement("button");b.type="button";b.className="chip sm";b.dataset.k=k;b.dataset.id=x.id;b.textContent=l;bar.append(b);
    });
    li.append(p,bar);ul.append(li);
  });
  showPin();
}
function openD(){lastF=document.activeElement;$("dd").hidden=false;document.body.style.overflow="hidden";resetF();drawD();$("dt").focus();try{history.pushState({d:1},"")}catch(e){}}
function closeD(fromPop){if($("dd").hidden)return;$("dd").hidden=true;document.body.style.overflow="";if(lastF&&lastF.focus)lastF.focus();if(fromPop!==true&&history.state&&history.state.d){try{history.back()}catch(e){}}}
addEventListener("popstate",()=>{if(!$("dd").hidden){closeD(true);return}if(location.hash!==cH)route()});
function copyT(t,b){
  const ok=()=>{const l=lbl(b),o=l.textContent;l.textContent="تم النسخ ✓";setTimeout(()=>{l.textContent=o},1500)};
  const fb=()=>{const a=document.createElement("textarea");a.value=t;a.style.cssText="position:fixed;opacity:0";document.body.append(a);a.select();try{document.execCommand("copy")&&ok()}catch(e){}a.remove()};
  if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(t).then(ok,fb);else fb();
}
$("dua").onclick=openD;$("dx").onclick=()=>closeD();$("pd").onclick=openD;
$("dd").addEventListener("click",e=>{if(e.target===$("dd"))closeD()});
$("dt").addEventListener("input",()=>{cnt();setErr("")});
$("dcx").onclick=()=>{resetF();$("dt").focus()};
$("ds").onclick=()=>{
  const r=checkD($("dt").value,edId);
  if(r.err){setErr(r.err);$("dt").focus();return}
  let nd;
  if(edId)nd=D.map(x=>x.id===edId?{...x,t:r.t}:x);
  else nd=[{id:newId(),t:r.t,pin:D.length===0},...D];
  if(!saveD(nd)){setErr("تعذّر الحفظ على الجهاز.");return}
  D=nd;resetF();drawD();
  const b=$("ds");b.textContent="تم الحفظ ✓";setTimeout(()=>{if(!edId)b.textContent="حفظ الدعاء"},1500);
};
$("dl").addEventListener("click",e=>{
  const b=e.target.closest("button");if(!b)return;
  const id=b.dataset.id,x=D.find(d=>d.id===id);if(!x)return;
  const k=b.dataset.k;
  if(k==="copy")copyT(x.t,b);
  else if(k==="edit"){edId=id;$("dt").value=x.t;$("ds").textContent="حفظ التعديل";$("dcx").hidden=false;$("dlb").textContent="تعديل الدعاء";setErr("");cnt();$("dt").focus();$("dt").scrollIntoView({block:"center"})}
  else if(k==="pin"){
    const nd=D.map(d=>({...d,pin:d.id===id?!d.pin:false}));
    if(saveD(nd)){D=nd;drawD()}else setErr("تعذّر الحفظ على الجهاز.");
  }
  else if(k==="del"){
    if(!b.dataset.c){b.dataset.c="1";b.textContent="تأكيد الحذف؟";b.classList.add("dg");clearTimeout(dTimer);dTimer=setTimeout(()=>drawD(),3000);return}
    clearTimeout(dTimer);
    const nd=D.filter(d=>d.id!==id);
    if(nd.length&&!nd.some(d=>d.pin)&&x.pin)nd[0].pin=true;
    if(!saveD(nd)){setErr("تعذّر الحفظ على الجهاز.");return}
    D=nd;if(edId===id)resetF();drawD();
  }
});
document.addEventListener("keydown",e=>{
  if($("dd").hidden)return;
  if(e.key==="Escape"){closeD();return}
  if(e.key!=="Tab")return;
  const f=[...$("dd").querySelectorAll("button,textarea,select,input")].filter(x=>!x.disabled&&!x.hidden&&x.offsetParent!==null);
  if(!f.length)return;
  const a=f[0],z=f[f.length-1];
  if(e.shiftKey&&document.activeElement===a){e.preventDefault();z.focus()}
  else if(!e.shiftKey&&document.activeElement===z){e.preventDefault();a.focus()}
});

/* ===== v2: offline, search, library, notes ===== */
const API="https://api.alquran.cloud/v1";
const TOTAL=C.reduce((a,b)=>a+b,0);
const esc=s=>String(s).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]));
const jget=k=>{try{return JSON.parse(store.get(k))}catch(e){return null}};
const jset=(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v));return true}catch(e){return false}};
const okKey=k=>{const m=/^(\d{1,3}):(\d{1,3})$/.exec(k);if(!m)return false;const a=+m[1],b=+m[2];return a>=1&&a<=114&&b>=1&&b<=C[a-1]};
const sanFav=a=>Array.isArray(a)?[...new Set(a.filter(x=>typeof x==="string"&&okKey(x)))].slice(0,500):[];
const sanNotes=o=>{const r={};let n=0;if(o&&typeof o==="object"&&!Array.isArray(o))for(const k of Object.keys(o).slice(0,2000)){if(n>=500)break;if(okKey(k)&&typeof o[k]==="string"){const t=clean(o[k]).slice(0,300);if(t){r[k]=t;n++}}}return r};
const sanDone=a=>Array.isArray(a)?[...new Set(a.filter(x=>Number.isInteger(x)&&x>=1&&x<=114))]:[];
const sanDays=a=>Array.isArray(a)?[...new Set(a.filter(x=>typeof x==="string"&&/^\d{4}-\d{2}-\d{2}$/.test(x)))].sort().slice(-400):[];
const sanMark=m=>m&&Number.isInteger(m.s)&&Number.isInteger(m.a)&&m.s>=1&&m.s<=114&&m.a>=1&&m.a<=C[m.s-1]?{s:m.s,a:m.a}:null;
let FAV=new Set(sanFav(jget("fav"))),NOTES=sanNotes(jget("notes")),DONE=new Set(sanDone(jget("done"))),DAYS=sanDays(jget("days"));

/* IndexedDB (key-value) */
const idb={
  db:null,
  open(){return this.db||(this.db=new Promise((res,rej)=>{try{const r=indexedDB.open("mushaf",1);r.onupgradeneeded=()=>r.result.createObjectStore("kv");r.onsuccess=()=>res(r.result);r.onerror=()=>rej(r.error)}catch(e){rej(e)}}))},
  async get(k){try{const d=await this.open();return await new Promise((res,rej)=>{const q=d.transaction("kv").objectStore("kv").get(k);q.onsuccess=()=>res(q.result);q.onerror=()=>rej(q.error)})}catch(e){return undefined}},
  async set(k,v){const d=await this.open();return new Promise((res,rej)=>{const t=d.transaction("kv","readwrite");t.objectStore("kv").put(v,k);t.oncomplete=()=>res(true);t.onerror=()=>rej(t.error)})},
  async del(k){try{const d=await this.open();return await new Promise(res=>{const t=d.transaction("kv","readwrite");t.objectStore("kv").delete(k);t.oncomplete=()=>res(true);t.onerror=()=>res(false)})}catch(e){return false}}
};
const fixB=(n,a)=>{if(n!==1&&n!==9&&a[0])a[0]=a[0].split(" ").slice(4).join(" ");return a};
let QC,QN;
async function loadQ(){
  if(QC!==undefined)return QC;
  const q=await idb.get("q");
  QC=Array.isArray(q)&&q.length===114&&q.every((x,i)=>Array.isArray(x)&&x.length===C[i])?q:null;
  return QC;
}
async function getSurah(n){
  const q=await loadQ();
  if(q)return q[n-1];
  const r=await fetch(API+"/surah/"+n+"/quran-uthmani");
  if(!r.ok)throw new Error("http");
  const j=await r.json();
  const a=j.data.ayahs.map(x=>x.text);
  if(a.length!==C[n-1])throw new Error("len");
  return fixB(n,a);
}
async function dlAll(st){
  const jobs=[["q","/quran/quran-uthmani"],["t.ar.muyassar","/quran/ar.muyassar"],["t.ar.jalalayn","/quran/ar.jalalayn"]];
  for(let i=0;i<jobs.length;i++){
    st.textContent="جارٍ التحميل "+ar(i+1)+" / "+ar(jobs.length)+"…";
    const r=await fetch(API+jobs[i][1]);
    if(!r.ok)throw new Error("http");
    const j=await r.json(),sr=j&&j.data&&j.data.surahs;
    if(!Array.isArray(sr)||sr.length!==114||!sr.every((x,k)=>x&&Array.isArray(x.ayahs)&&x.ayahs.length===C[k]))throw new Error("bad");
    let arr=sr.map(x=>x.ayahs.map(a=>String(a.text)));
    if(i===0)arr=arr.map((a,k)=>fixB(k+1,a));
    await idb.set(jobs[i][0],arr);
  }
  QC=undefined;QN=undefined;Object.keys(TF).forEach(k=>delete TF[k]);
  await loadQ();
}
async function offStatus(){
  const el=$("dls");if(!el)return;
  const q=await idb.get("q"),has=Array.isArray(q)&&q.length===114;
  el.textContent=has?"✓ المصحف والتفسير محمّلان: تقرأ وتبحث وتطّلع على التفسير بدون إنترنت (الصوت يحتاج اتصالًا).":"غير محمّل بعد. بعد التحميل تقرأ وتبحث وتطّلع على التفسير بدون إنترنت.";
  const dl=document.querySelector('[data-act="dl"]'),dx=document.querySelector('[data-act="dlx"]');
  if(dl)setB(dl,"download",has?"إعادة التحميل":"تحميل المصحف والتفسير");
  if(dx)dx.hidden=!has;
}

/* search */
const normS=s=>s.replace(/[\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06ED\u0640]/g,"").replace(/[إأآٱ]/g,"ا").replace(/ى/g,"ي").replace(/ة/g,"ه").replace(/\s+/g," ").trim();
async function searchQ(raw){
  const t=normS(clean(raw));
  if(t.length<2||t.length>40)return{err:"اكتب كلمة من حرفين إلى 40 حرفًا."};
  const q=await loadQ();
  if(q){
    if(!QN)QN=q.map(x=>x.map(normS));
    const out=[];
    for(let i=0;i<114&&out.length<100;i++)for(let k=0;k<QN[i].length&&out.length<100;k++)if(QN[i][k].includes(t))out.push({s:i+1,a:k+1,t:q[i][k]});
    return{res:out};
  }
  const r=await fetch(API+"/search/"+encodeURIComponent(t)+"/all/quran-simple");
  if(r.status===404)return{res:[]};
  if(!r.ok)throw new Error("http");
  const j=await r.json(),m=(j.data&&j.data.matches)||[];
  return{res:m.filter(x=>x&&x.surah&&okKey(x.surah.number+":"+x.numberInSurah)).slice(0,100).map(x=>({s:x.surah.number,a:x.numberInSurah,t:String(x.text)}))};
}
function drawS(r){
  const ul=$("list");$("empty").hidden=true;
  if(r.err){ul.innerHTML='<li class="msg">'+esc(r.err)+'</li>';return}
  ul.innerHTML='<li class="msg">'+(r.res.length?ar(r.res.length)+(r.res.length>=100?"+":"")+" نتيجة":"لا توجد نتائج لهذه الكلمة.")+'</li>'+r.res.map(x=>'<li class="row" tabindex="0" data-n="'+x.s+'" data-a="'+x.a+'"><div class="no"><span>'+ar(x.a)+'</span></div><div class="nm sx">'+esc(x.t)+'</div><div class="mt">سورة '+N[x.s-1]+'</div></li>').join("");
}
$("qs").onclick=async()=>{
  $("list").innerHTML='<li class="msg">جارٍ البحث…</li>';$("qs").hidden=true;
  let r;try{r=await searchQ($("q").value)}catch(e){r={err:"تعذّر البحث. تحقق من الاتصال، أو حمّل المصحف للقراءة بدون إنترنت من «مكتبتي»."}}
  drawS(r);
};
$("q").addEventListener("keydown",e=>{if(e.key==="Enter"&&!$("qs").hidden)$("qs").click()});

/* progress: days, streak, khatma */
const dk=d=>d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0");
function markDay(){const t=dk(new Date());if(DAYS.includes(t))return;DAYS=sanDays([...DAYS,t]);jset("days",DAYS)}
function streak(){const s=new Set(DAYS),d=new Date();if(!s.has(dk(d)))d.setDate(d.getDate()-1);let c=0;while(s.has(dk(d))){c++;d.setDate(d.getDate()-1)}return c}
function syncDone(){const d=DONE.has(cur);$("dn").title=$("dn").ariaLabel=d?"تمت قراءة السورة (اضغط للإلغاء)":"أتممت قراءة هذه السورة";$("dn").classList.toggle("ok",d)}
$("dn").onclick=()=>{if(DONE.has(cur))DONE.delete(cur);else DONE.add(cur);jset("done",[...DONE]);syncDone()};

/* ayah: favorite, note, copy, share */
function paintAll(){document.querySelectorAll("#tx .ay").forEach(e=>{const k=cur+":"+e.dataset.a;e.classList.toggle("mm",!!HF[k]);e.classList.toggle("fv",FAV.has(k));e.classList.toggle("hn",!!NOTES[k])})}
const nErr=m=>{$("nerr").textContent=m||""};
function syncSheet(){const k=cur+":"+cA;setB($("mm"),"check",HF[k]?"محفوظة (اضغط للإلغاء)":"حفظتها");setB($("fv"),FAV.has(k)?"star-f":"star",FAV.has(k)?"في المفضلة":"أضف للمفضلة");$("nt").value=NOTES[k]||"";nErr("")}
$("fv").onclick=()=>{
  if(!cA)return;const k=cur+":"+cA;
  if(FAV.has(k))FAV.delete(k);else{if(FAV.size>=500)return nErr("وصلت للحد الأقصى للمفضلة (500).");FAV.add(k)}
  if(!jset("fav",[...FAV]))return nErr("تعذّر الحفظ على الجهاز.");
  syncSheet();paintAll();
};
$("ns").onclick=()=>{
  if(!cA)return;const k=cur+":"+cA,t=clean($("nt").value);
  if(t.length>300)return nErr("الملاحظة طويلة، الحد الأقصى 300 حرف.");
  if(!t&&!NOTES[k])return nErr("اكتب الملاحظة أولاً.");
  if(!t)delete NOTES[k];
  else{if(!NOTES[k]&&Object.keys(NOTES).length>=500)return nErr("وصلت للحد الأقصى للملاحظات (500).");NOTES[k]=t}
  if(!jset("notes",NOTES))return nErr("تعذّر الحفظ على الجهاز.");
  nErr("");paintAll();
  const b=lbl($("ns"));b.textContent=t?"تم الحفظ ✓":"تم حذف الملاحظة";setTimeout(()=>{b.textContent="حفظ الملاحظة"},1500);
};
const ayRef=()=>AY[cA-1]+" ﴿"+ar(cA)+"﴾ [سورة "+N[cur-1]+"]";
$("cp").onclick=()=>{if(cA)copyT(ayRef(),$("cp"))};
$("shr").onclick=()=>{if(!cA)return;const t=ayRef();if(navigator.share)navigator.share({text:t}).catch(()=>{});else copyT(t,$("shr"))};

/* audio: range loop, speed, sleep timer */
function fillRange(){const n=AY.length,o=Array.from({length:n},(_,i)=>'<option value="'+(i+1)+'">'+ar(i+1)+'</option>').join("");$("rf").innerHTML=o;$("rt").innerHTML=o;$("rf").value=1;$("rt").value=n||1}
$("rf").onchange=()=>{if(+$("rf").value>+$("rt").value)$("rt").value=$("rf").value};
$("rt").onchange=()=>{if(+$("rt").value<+$("rf").value)$("rf").value=$("rt").value};
const RATES=["0.75","1","1.25","1.5"];
function applyRate(){const r=+$("spd").value||1;pa.defaultPlaybackRate=pa.playbackRate=r;const a=$("au");a.defaultPlaybackRate=a.playbackRate=r}
{const r=store.get("rate");if(RATES.includes(r))$("spd").value=r}
applyRate();
$("spd").onchange=()=>{store.set("rate",$("spd").value);applyRate()};
let slTm=null;
$("slt").onchange=()=>{clearTimeout(slTm);const m=+$("slt").value;if(m>0)slTm=setTimeout(()=>{$("au").pause();stopApi();mcStop();$("slt").value="0"},m*60000)};

/* library tab */
function confirm2(b,label,fn){
  if(!b.dataset.c){b.dataset.c="1";const o=b.textContent;b.textContent=label;setTimeout(()=>{delete b.dataset.c;b.textContent=o},3500);return}
  fn();
}
function drawLib(){
  $("empty").hidden=true;$("qs").hidden=true;
  const dn=[...DONE],ayD=dn.reduce((a,n)=>a+C[n-1],0),pct=Math.round(ayD/TOTAL*100);
  const saved=[...new Set([...FAV,...Object.keys(NOTES)])].sort((x,y)=>{const[a,b]=x.split(":").map(Number),[c,d]=y.split(":").map(Number);return a-c||b-d});
  let h='<div class="card"><h3>ختمتي</h3><div class="pbar" role="progressbar" aria-label="تقدّم الختمة" aria-valuenow="'+pct+'" aria-valuemin="0" aria-valuemax="100"><i style="width:'+pct+'%"></i></div><p>أتممت '+ar(dn.length)+' من 114 سورة · '+ar(pct)+'٪ من الآيات</p><div class="stat"><div><b>'+ar(streak())+'</b>أيام متتالية</div><div><b>'+ar(DAYS.length)+'</b>أيام قراءة</div><div><b>'+ar(ayD)+'</b>آية مقروءة</div></div><button class="nv dg" data-act="rsd">تصفير الختمة</button></div>';
  h+='<div class="card"><h3>آياتي المحفوظة</h3>';
  if(!saved.length)h+='<p>لا توجد آيات مفضلة أو ملاحظات بعد. اضغط على أي آية ثم «أضف للمفضلة» أو اكتب ملاحظة.</p>';
  else h+='<ul>'+saved.map(k=>{const[a,b]=k.split(":").map(Number);return '<li class="row" tabindex="0" data-n="'+a+'" data-a="'+b+'"><div class="no"><span>'+ar(b)+'</span></div><div class="nm">سورة '+N[a-1]+(FAV.has(k)?' '+ico("star-f"):'')+(NOTES[k]?'<small>'+esc(NOTES[k])+'</small>':'')+'</div></li>'}).join("")+'</ul>';
  h+='</div>';
  h+='<div class="card"><h3>القراءة بدون إنترنت</h3><p id="dls">…</p><button class="nv" data-act="dl">'+ico("download")+'<span>تحميل المصحف والتفسير</span></button><button class="nv dg" data-act="dlx" hidden>حذف البيانات المحمّلة</button></div>';
  h+='<div class="card"><h3>نسخة احتياطية</h3><p>انسخ بياناتك (الأدعية، المفضلة، الملاحظات، الختمة) واحفظها في مكان آمن، ثم الصقها هنا لاستعادتها على أي جهاز.</p><button class="nv" data-act="bk">نسخ بياناتي</button><textarea id="bkt" placeholder="الصق النسخة الاحتياطية هنا" aria-label="نسخة احتياطية"></textarea><p class="er" id="bke" role="alert"></p><button class="nv" data-act="rs">استعادة من النسخة</button></div>';
  $("lib").innerHTML=h;offStatus();
}
const openRow=r=>{jump={s:+r.dataset.n,a:+r.dataset.a};go(r.dataset.n)};
$("lib").addEventListener("keydown",e=>{if(e.key==="Enter"){const r=e.target.closest(".row");if(r)openRow(r)}});
$("lib").addEventListener("click",async e=>{
  const row=e.target.closest(".row");if(row)return openRow(row);
  const b=e.target.closest("button[data-act]");if(!b)return;
  const act=b.dataset.act;
  if(act==="rsd")confirm2(b,"تأكيد التصفير؟",()=>{DONE=new Set();DAYS=[];jset("done",[]);jset("days",[]);drawLib()});
  else if(act==="dl"){
    b.disabled=true;let ok=true;
    try{await dlAll($("dls"))}catch(err){ok=false}
    b.disabled=false;await offStatus();
    if(!ok&&$("dls"))$("dls").textContent="تعذّر التحميل. تحقق من الاتصال ثم أعد المحاولة.";
  }
  else if(act==="dlx")confirm2(b,"تأكيد الحذف؟",async()=>{await Promise.all(["q","t.ar.muyassar","t.ar.jalalayn"].map(k=>idb.del(k)));QC=undefined;QN=undefined;Object.keys(TF).forEach(k=>delete TF[k]);offStatus()});
  else if(act==="bk"){
    copyT(JSON.stringify({v:1,mark:mark(),fav:[...FAV],notes:NOTES,done:[...DONE],days:DAYS,duas:D,hf:HF,goals:GL}),b);
  }
  else if(act==="rs"){
    const er=$("bke"),raw=$("bkt").value.trim();er.textContent="";
    if(!raw)return er.textContent="الصق النسخة الاحتياطية أولاً.";
    if(raw.length>1500000)return er.textContent="النسخة كبيرة جدًا.";
    let o;try{o=JSON.parse(raw)}catch(err){return er.textContent="النسخة غير صالحة."}
    if(!o||typeof o!=="object"||o.v!==1)return er.textContent="هذه ليست نسخة احتياطية من التطبيق.";
    confirm2(b,"سيتم استبدال بياناتك، اضغط للتأكيد",()=>{
      const nf=sanFav(o.fav),nn=sanNotes(o.notes),nd=sanDone(o.done),ny=sanDays(o.days),nu=sanD(o.duas),nm=sanMark(o.mark);
      const nh=sanHF(o.hf);const ok=jset("hf",nh)&&jset("fav",nf)&&jset("notes",nn)&&jset("done",nd)&&jset("days",ny)&&saveD(nu)&&jset("mark",nm);
      if(!ok){er.textContent="تعذّر الحفظ على الجهاز.";return}
      HF=nh;FAV=new Set(nf);NOTES=nn;DONE=new Set(nd);DAYS=ny;D=nu;
      hero();drawLib();$("bke").textContent="تمت الاستعادة ✓";
    });
  }
});
addEventListener("hashchange",()=>{if(location.hash!==cH)route()});
if("serviceWorker"in navigator&&/^https?:$/.test(location.protocol)&&!(window.Capacitor&&Capacitor.isNativePlatform&&Capacitor.isNativePlatform()))navigator.serviceWorker.register("sw.js").catch(()=>{});
else if("serviceWorker"in navigator&&window.Capacitor&&Capacitor.isNativePlatform&&Capacitor.isNativePlatform()){try{navigator.serviceWorker.getRegistrations().then(r=>r.forEach(x=>x.unregister())).catch(()=>{})}catch(e){}}

/* ===== v3: page-by-page reader, panels, settings ===== */
let PG=0,NP=1,PW=0,AP=[],goLast=false,lastDrag=0;const PAD=22;
function updBar(){$("pgl").textContent="صفحة "+(PG+1)+" من "+NP;const r=$("pgr");r.max=NP;r.value=PG+1;r.disabled=NP<2}
function setPage(p,anim=true){
  PG=Math.max(0,Math.min(NP-1,p));trackRead();
  const tx=$("tx");tx.style.transition=anim?"transform .28s ease":"none";tx.style.transform="translateX("+(PG*PW)+"px)";updBar();
}
function layout(){
  const v=$("pgv"),tx=$("tx");if($("read").hidden)return;
  const cs=getComputedStyle(v),W=v.clientWidth,Hh=v.clientHeight-parseFloat(cs.paddingTop)-parseFloat(cs.paddingBottom);
  if(W<80||Hh<80)return;
  const cw=W-2*PAD;
  tx.style.transition="none";tx.style.transform="none";
  tx.style.width=cw+"px";tx.style.height=Hh+"px";tx.style.columnWidth=cw+"px";tx.style.columnGap=2*PAD+"px";tx.style.margin="0 "+PAD+"px";
  PW=W;
  const vr=v.getBoundingClientRect();
  const pg=el=>{const r=el&&el.getClientRects()[0];return r?Math.max(0,Math.floor((vr.right-r.right)/W)):0};
  AP=[...tx.querySelectorAll(".ay")].map(pg);
  NP=Math.max(1,AP.reduce((a,b)=>Math.max(a,b),pg($("pend")))+1);
  setPage(PG,false);
}
function anchorAy(){
  const i=AP.findIndex(p=>p>=PG);
  return i<0?AP.length:AP[i]===PG?i+1:Math.max(1,i);
}
function relayout(){if($("read").hidden)return;const a=anchorAy();layout();if(a&&AP[a-1]!=null)setPage(AP[a-1],false)}
let rlT,rlK="";const rl=()=>{cancelAnimationFrame(rlT);rlT=requestAnimationFrame(()=>{const v=$("pgv"),k=v.clientWidth+"x"+v.clientHeight+"|"+cur+"|"+getComputedStyle($("tx")).fontSize;if(k===rlK)return;rlK=k;relayout()})};
function gotoAy(a,anim=true){if(AP[a-1]!=null)setPage(AP[a-1],anim)}
function nextPage(){if(PG<NP-1)setPage(PG+1);else if(cur<114)go(cur+1)}
function prevPage(){if(PG>0)setPage(PG-1);else if(cur>1){goLast=true;go(cur-1)}}
$("pgn").onclick=nextPage;$("pgp").onclick=prevPage;
$("pgr").oninput=()=>setPage(+$("pgr").value-1);
if(window.ResizeObserver)new ResizeObserver(rl).observe($("pgv"));else addEventListener("resize",rl);
if(document.fonts&&document.fonts.addEventListener)document.fonts.addEventListener("loadingdone",rl);
{
  let d=null;const v=$("pgv"),tx=$("tx");
  v.addEventListener("pointerdown",e=>{if(e.pointerType==="mouse"&&e.button!==0)return;d={x:e.clientX,y:e.clientY,t:Date.now(),h:false,id:e.pointerId}});
  addEventListener("pointermove",e=>{
    if(!d||e.pointerId!==d.id)return;
    const dx=e.clientX-d.x,dy=e.clientY-d.y;
    if(!d.h){if(Math.abs(dx)>12&&Math.abs(dx)>Math.abs(dy)*1.3)d.h=true;else return}
    const edge=(PG>=NP-1&&dx>0)||(PG<=0&&dx<0);
    tx.style.transition="none";tx.style.transform="translateX("+(PG*PW+(edge?dx/3:dx))+"px)";
  },{passive:true});
  const end=e=>{
    if(!d||e.pointerId!==d.id)return;
    const dx=e.clientX-d.x,h=d.h,dt=Date.now()-d.t;d=null;
    if(!h)return;lastDrag=Date.now();
    if(e.type==="pointercancel")return setPage(PG);
    const th=PW*.2,fast=dt<300&&Math.abs(dx)>40;
    if(dx>th||(fast&&dx>0))nextPage();else if(dx<-th||(fast&&dx<0))prevPage();else setPage(PG);
  };
  addEventListener("pointerup",end);addEventListener("pointercancel",end);
  v.addEventListener("click",e=>{if(Date.now()-lastDrag<400){e.stopPropagation();e.preventDefault()}},true);
}
addEventListener("keydown",e=>{
  if($("read").hidden||!$("dd").hidden||/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName))return;
  if(e.key==="ArrowLeft")nextPage();else if(e.key==="ArrowRight")prevPage();
});

/* panels */
function closePanels(){
  ["sh","audp","sd"].forEach(x=>$(x).hidden=true);
  document.body.classList.remove("so");document.querySelectorAll(".ay.on").forEach(x=>x.classList.remove("on"));
}
$("abtn").onclick=()=>{const o=$("audp").hidden;closePanels();$("audp").hidden=!o};
$("ax").onclick=()=>{$("audp").hidden=true};

/* settings */
const SD0={th:"auto",fs:30,lh:2.4,br:100,wm:0,wk:false,vn:true},THS=["auto","light","sepia","dark","black"];
const SD={...SD0};
const cl=(v,a,b,d)=>typeof v==="number"&&isFinite(v)?Math.max(a,Math.min(b,v)):d;
{
  const o=jget("set")||{},lt=store.get("theme"),lf=+store.get("fs");
  SD.th=THS.includes(o.th)?o.th:THS.includes(lt)?lt:"auto";
  SD.fs=cl(o.fs!==undefined?o.fs:lf,22,56,30);SD.lh=cl(o.lh,1.8,3.4,2.4);
  SD.br=cl(o.br,30,100,100);SD.wm=cl(o.wm,0,100,0);SD.wk=o.wk===true;SD.vn=o.vn!==false;
}
let WL=null;
async function wake(){
  try{
    if(SD.wk&&!document.hidden&&navigator.wakeLock){if(!WL){WL=await navigator.wakeLock.request("screen");WL.addEventListener("release",()=>{WL=null})}}
    else if(WL){await WL.release();WL=null}
  }catch(e){WL=null}
}
document.addEventListener("visibilitychange",wake);
function applySet(){
  const d=document.documentElement;
  if(SD.th==="auto")delete d.dataset.theme;else d.dataset.theme=SD.th;
  d.style.setProperty("--fs",SD.fs+"px");d.style.setProperty("--lh",SD.lh);
  $("dim").style.opacity=(100-SD.br)/100*.8;$("warm").style.opacity=SD.wm/100*.35;
  document.body.classList.toggle("nonum",!SD.vn);
  wake();
}
function syncSet(){
  $("sbr").value=SD.br;$("sbo").textContent=SD.br+"%";
  $("swm").value=SD.wm;$("swo").textContent=SD.wm+"%";
  $("sfs").value=SD.fs;$("sfo").textContent=SD.fs;
  $("slh").value=SD.lh;$("slo").textContent=SD.lh.toFixed(1);
  $("swk").checked=SD.wk;$("svn").checked=SD.vn;
  document.querySelectorAll(".th").forEach(b=>b.setAttribute("aria-pressed",b.dataset.th===SD.th));
}
function chSet(){applySet();syncSet();jset("set",SD);rl()}
$("ths").addEventListener("click",e=>{const b=e.target.closest(".th");if(b){SD.th=b.dataset.th;chSet()}});
[["sbr","br"],["swm","wm"],["sfs","fs"],["slh","lh"]].forEach(([id,k])=>{$(id).oninput=()=>{SD[k]=+$(id).value;chSet()}});
$("swk").onchange=()=>{SD.wk=$("swk").checked;chSet()};
$("svn").onchange=()=>{SD.vn=$("svn").checked;chSet()};
$("srs").onclick=()=>{Object.assign(SD,SD0);chSet()};
$("sbtn").onclick=()=>{const o=$("sd").hidden;closePanels();$("sd").hidden=!o;if(o)syncSet()};
$("sdx").onclick=()=>{$("sd").hidden=true};
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&!$("sd").hidden)$("sd").hidden=true});
applySet();syncSet();

/* ===== v4: hifdh (memorization), wird, full-surah reciters ===== */
const dayN=()=>{const d=new Date();return Math.floor((d.getTime()-d.getTimezoneOffset()*60000)/864e5)};
const IVL=[1,2,4,8,16,32,64,120];
const sanHF=o=>{const r={};let n=0;if(o&&typeof o==="object"&&!Array.isArray(o))for(const k of Object.keys(o)){if(n>=TOTAL)break;const v=o[k];if(okKey(k)&&Array.isArray(v)&&v.length===3&&v.every(Number.isInteger)){r[k]=[Math.max(0,Math.min(7,v[0])),v[1],v[2]];n++}}return r};
let HF=sanHF(jget("hf"));
const saveHF=()=>jset("hf",HF);
const KD=[0,30,60,90,180,365],MG=[0,3,5,10,20];
let GL=(()=>{const g=jget("goals")||{};return{kd:KD.includes(g.kd)?g.kd:30,mg:MG.includes(g.mg)?g.mg:5}})();
const freshDS=()=>({d:dayN(),r:[],m:0});
let DS=jget("ds");
if(!DS||DS.d!==dayN()||!Array.isArray(DS.r)||!Number.isInteger(DS.m))DS=freshDS();
let DSet=new Set(DS.r.filter(k=>typeof k==="string"&&okKey(k)));
function rollDay(){if(DS.d!==dayN()){DS=freshDS();DSet=new Set()}}
var dsT=0;
document.addEventListener("visibilitychange",()=>{if(document.hidden&&dsT){clearTimeout(dsT);dsT=0;jset("ds",DS)}});
function trackRead(){
  rollDay();let ch=false;
  AP.forEach((p,i)=>{if(p===PG){const k=cur+":"+(i+1);if(!DSet.has(k)){DSet.add(k);ch=true}}});
  if(ch){DS.r=[...DSet];clearTimeout(dsT);dsT=setTimeout(()=>jset("ds",DS),1500)}
}
function setMem(s,a,on){
  const k=s+":"+a;
  if(on){if(!HF[k]){HF[k]=[0,dayN()+1,dayN()];rollDay();DS.m++}}else delete HF[k];
}
function markRange(s,f,t,on){for(let a=f;a<=t;a++)setMem(s,a,on);saveHF();jset("ds",DS);paintAll();hero()}
function hstats(){
  const ks=Object.keys(HF),t=dayN(),per={};
  ks.forEach(k=>{const s=+k.split(":")[0];per[s]=(per[s]||0)+1});
  let full=0;Object.keys(per).forEach(s=>{if(per[s]>=C[s-1])full++});
  return{n:ks.length,per,full,due:ks.filter(k=>HF[k][1]<=t).length,pct:Math.round(ks.length/TOTAL*1000)/10};
}
$("mm").onclick=()=>{if(!cA)return;const k=cur+":"+cA;setMem(cur,cA,!HF[k]);saveHF();jset("ds",DS);syncSheet();paintAll();hero()};
$("mr").onclick=()=>{
  const f=+$("rf").value,t=+$("rt").value;if(!f||!t)return;
  markRange(cur,Math.min(f,t),Math.max(f,t),true);
  const l=lbl($("mr")),o="علّم المدى كمحفوظ";l.textContent="تم ✓ ("+(Math.abs(t-f)+1)+" آية)";setTimeout(()=>{l.textContent=o},1800);
};
function drawH(){
  $("empty").hidden=true;$("qs").hidden=true;rollDay();
  const st=hstats(),q=GL.kd?Math.ceil(TOTAL/GL.kd):0,rd=DSet.size;
  const opt=(arr,c,f)=>arr.map(v=>'<option value="'+v+'"'+(v===c?" selected":"")+">"+f(v)+"</option>").join("");
  const pc=(a,b)=>b?Math.min(100,Math.round(a/b*100)):0;
  let h='<div class="card"><h3>حفظي</h3><div class="pbar"><i style="width:'+Math.min(100,st.n/TOTAL*100)+'%"></i></div><p>'+st.n+" من "+TOTAL+" آية ("+st.pct+'%)</p><div class="hst"><div><b>'+st.n+'</b>آية محفوظة</div><div><b>'+st.full+'</b>سورة كاملة</div><div><b>'+st.due+'</b>مراجعة اليوم</div></div>';
  h+='<button class="nv big" data-act="h-rv"'+(st.due?"":" disabled")+'>'+ico("check")+"<span>"+(st.due?"ابدأ مراجعة اليوم ("+st.due+")":"لا توجد مراجعات مستحقة")+'</span></button><button class="nv" data-act="h-rr"'+(st.n?"":" disabled")+' style="width:100%;margin-top:8px">مراجعة عشوائية من محفوظي</button>';
  h+='<p class="sub">طريقة المراجعة: تُعرض عليك الآية السابقة وتكمل أنت الآية التالية من حفظك، ثم تقيّم نفسك فتُجدول المراجعة تلقائيًا (التكرار المتباعد).</p></div>';
  h+='<div class="card"><h3>وردي اليومي</h3><label class="hrow"><span>ختم القرآن خلال</span><select id="gkd">'+opt(KD,GL.kd,v=>v?v+" يومًا":"بدون هدف")+'</select></label>';
  if(q)h+='<div class="pbar"><i style="width:'+pc(rd,q)+'%"></i></div><p class="sub">قرأت اليوم '+rd+" من "+q+" آية</p>";
  h+='<label class="hrow"><span>الحفظ الجديد يوميًا</span><select id="gmg">'+opt(MG,GL.mg,v=>v?v+" آيات":"بدون هدف")+'</select></label>';
  if(GL.mg)h+='<div class="pbar"><i style="width:'+pc(DS.m,GL.mg)+'%"></i></div><p class="sub">حفظت اليوم '+DS.m+" من "+GL.mg+" آيات</p>";
  h+='</div>';
  h+='<div class="card"><h3>أضف سورة محفوظة</h3><label class="hrow"><span>السورة</span><select id="hsel">'+N.map((n,i)=>'<option value="'+(i+1)+'">'+(i+1)+" · "+n+"</option>").join("")+'</select></label><div class="sh-b"><button class="nv" data-act="h-all">علّمها كاملة</button><button class="nv dg" data-act="h-none">إزالة الحفظ</button></div><p class="sub">أو علّم آية بآية من داخل السورة: اضغط على الآية ثم «حفظتها»، أو حدّد مدى من قائمة التلاوة.</p></div>';
  const ss=Object.keys(st.per).map(Number).sort((a,b)=>a-b);
  h+='<div class="card"><h3>سوري</h3>';
  if(!ss.length)h+='<p>لم تضف أي سورة بعد.</p>';
  else h+="<ul>"+ss.map(n=>'<li class="row" tabindex="0" data-n="'+n+'" data-a="1"><div class="no"><span>'+n+'</span></div><div class="nm">سورة '+N[n-1]+'<div class="pbar mini"><i style="width:'+pc(st.per[n],C[n-1])+'%"></i></div></div><div class="mt">'+st.per[n]+" / "+C[n-1]+"</div></li>").join("")+"</ul>";
  h+="</div>";
  $("lib").innerHTML=h;
}
$("lib").addEventListener("change",e=>{
  const t=e.target;
  if(t.id==="gkd"||t.id==="gmg"){GL[t.id==="gkd"?"kd":"mg"]=+t.value;jset("goals",GL);drawH()}
});
$("lib").addEventListener("click",e=>{
  const b=e.target.closest("button[data-act]");if(!b||!b.dataset.act.startsWith("h-"))return;
  const act=b.dataset.act;
  if(act==="h-rv")startReview(false);
  else if(act==="h-rr")startReview(true);
  else if(act==="h-all"){const n=+$("hsel").value;markRange(n,1,C[n-1],true);drawH()}
  else if(act==="h-none")confirm2(b,"تأكيد الإزالة؟",()=>{const n=+$("hsel").value;markRange(n,1,C[n-1],false);drawH()});
});
/* review session */
let RV=null;const SC={};
async function surahTxt(n){if(SC[n])return SC[n];const a=await getSurah(n);return(SC[n]=a)}
function startReview(random){
  const t=dayN();let ks=Object.keys(HF);
  if(random)ks=ks.sort(()=>Math.random()-.5).slice(0,10);
  else ks=ks.filter(k=>HF[k][1]<=t).sort((x,y)=>HF[x][1]-HF[y][1]).slice(0,20);
  if(!ks.length)return;
  RV={items:ks.map(k=>{const[s,a]=k.split(":").map(Number);return{s,a,k}}),i:0,good:0,rand:random};
  $("rvw").hidden=false;document.body.style.overflow="hidden";rvDraw();
}
async function rvDraw(){
  const R=RV;if(!R)return;
  if(R.i>=R.items.length){
    $("rvp").style.width="100%";$("rvn").textContent="";
    $("rvb").innerHTML='<p class="rvc">أتممت المراجعة</p><p class="rvr">أجدت في '+R.good+" من "+R.items.length+'</p><div class="rva"><button class="nv okb" data-rv="end">إنهاء</button></div>';
    return;
  }
  const it=R.items[R.i];
  $("rvn").textContent=(R.i+1)+" / "+R.items.length;$("rvp").style.width=(R.i/R.items.length*100)+"%";
  $("rvb").innerHTML='<p class="msg">…</p>';
  let tx;try{tx=await surahTxt(it.s)}catch(e){$("rvb").innerHTML='<p class="msg">تعذّر تحميل النص. تحقق من الاتصال بالإنترنت.</p><div class="rva"><button class="nv" data-rv="end">إغلاق</button></div>';return}
  if(RV!==R||R.items[R.i]!==it)return;
  R.words=(tx[it.a-1]||"").split(" ");R.hint=0;R.cur=it;
  const prev=it.a>1?tx[it.a-2]:null;
  $("rvb").innerHTML='<p class="rvr">سورة '+N[it.s-1]+" · الآية "+it.a+"</p>"+(prev?'<p class="rvc ctx">'+esc(prev)+"</p>":'<p class="rvr">بداية السورة</p>')+'<div class="rvh hid" id="rvh">أكمل الآية من حفظك</div><div class="rva"><button class="nv" data-rv="hint">تلميح</button><button class="nv" data-rv="show">أظهر الآية</button></div>';
}
function grade(it,good){
  const v=HF[it.k];if(!v)return;const t=dayN();
  if(good){if(v[1]<=t){v[0]=Math.min(7,v[0]+1);v[1]=t+IVL[v[0]]}v[2]=t}
  else{v[0]=0;v[1]=t+1;v[2]=t}
  saveHF();
}
$("rvb").addEventListener("click",e=>{
  const b=e.target.closest("button[data-rv]");if(!b||!RV)return;
  const R=RV,k=b.dataset.rv,h=$("rvh");
  if(k==="hint"&&h){R.hint++;h.className="rvh";h.textContent=R.words.slice(0,R.hint).join(" ")+(R.hint<R.words.length?" …":"");if(R.hint>=R.words.length)b.disabled=true}
  else if(k==="show"&&h){
    h.className="rvh";h.textContent=R.words.join(" ")+" ﴿"+R.cur.a+"﴾";
    b.parentNode.innerHTML='<button class="nv dg2" data-rv="bad">أحتاج مراجعة</button><button class="nv okb" data-rv="good">أحسنت، حفظتها</button>';
  }
  else if(k==="good"||k==="bad"){if(k==="good")R.good++;grade(R.cur,k==="good");R.i++;rvDraw()}
  else if(k==="end")closeRv();
});
function closeRv(){RV=null;$("rvw").hidden=true;document.body.style.overflow="";hero();if(tab===4)drawH()}
$("rvx").onclick=closeRv;
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&!$("rvw").hidden)closeRv()});

/* full-surah reciters (mp3quran, resolved at runtime with fallback) */
const RC2={
  afs:["مشاري العفاسي",/العفاسي/,["https://server8.mp3quran.net/afs/"]],
  sds:["عبد الرحمن السديس",/السديس/,["https://server11.mp3quran.net/sds/"]],
  maher:["ماهر المعيقلي",/المعيقلي/,["https://server12.mp3quran.net/maher/"]],
  shur:["سعود الشريم",/الشريم/,["https://server7.mp3quran.net/shur/"]],
  basit:["عبد الباسط عبد الصمد",/عبدالباسط/,["https://server7.mp3quran.net/basit/"]],
  husr:["محمود خليل الحصري",/الحصري/,["https://server13.mp3quran.net/husr/"]],
  minsh:["محمد صديق المنشاوي",/المنشاوي/,["https://server10.mp3quran.net/minsh/"]],
  yasser:["ياسر الدوسري",/الدوسري/,["https://server11.mp3quran.net/yasser/"]],
  gmd:["سعد الغامدي",/الغامدي/,["https://server7.mp3quran.net/s_gmd/"]],
  qtm:["ناصر القطامي",/القطامي/,["https://server6.mp3quran.net/qtm/"]],
  ajm:["أحمد العجمي",/العجمي/,["https://server10.mp3quran.net/ajm/128/"]],
  hthfi:["علي الحذيفي",/الحذيفي/,["https://server9.mp3quran.net/hthfi/"]],
  shatri:["أبو بكر الشاطري",/الشاطري/,["https://server11.mp3quran.net/shatri/"]]
};
let AUb=null,AUi=0,AUtk=0;
async function mqList(){
  try{const c=await idb.get("mq");if(c&&c.t&&Date.now()-c.t<6048e5&&Array.isArray(c.l))return c.l}catch(e){}
  const ctl=new AbortController(),tm=setTimeout(()=>ctl.abort(),7000);
  try{
    const r=await fetch("https://www.mp3quran.net/api/v3/reciters?language=ar",{signal:ctl.signal});
    if(!r.ok)throw new Error("http");
    const j=await r.json();
    const l=(j.reciters||[]).map(x=>({n:normS(x.name||"").replace(/\s/g,""),m:(x.moshaf||[]).map(m=>({n:String(m.name||""),s:String(m.server||""),l:String(m.surah_list||""),t:+m.surah_total||0}))}));
    idb.set("mq",{t:Date.now(),l}).catch(()=>{});
    return l;
  }finally{clearTimeout(tm)}
}
async function resolveRec(v){
  const d=RC2[v],bases=[...d[2]];let list=null;
  try{
    const l=await mqList(),r=l.find(x=>d[1].test(x.n));
    if(r&&r.m.length){
      const full=r.m.filter(m=>m.t>=114),pool=full.length?full:r.m;
      const pick=(v==="basit"||v==="husr"||v==="minsh")?(pool.find(m=>/مرتل/.test(m.n))||pool[0]):pool[0];
      if(pick&&/^https:\/\//.test(pick.s)){
        bases.unshift(pick.s.endsWith("/")?pick.s:pick.s+"/");
        list=new Set(pick.l.split(",").map(Number).filter(Boolean));
      }
    }
  }catch(e){}
  return{bases:[...new Set(bases)],list};
}
async function setFull(v){
  stopApi();const au=$("au");au.pause();$("pb").hidden=true;au.hidden=false;$("am").hidden=true;
  const n=cur,tk=AUtk;
  const r=await resolveRec(v);
  if(tk!==AUtk||cur!==n)return;
  if(r.list&&r.list.size&&!r.list.has(n)){au.hidden=true;au.removeAttribute("src");$("am").hidden=false;$("am").textContent="هذه السورة غير متوفرة بصوت "+RC2[v][0]+". جرّب قارئًا آخر.";return}
  AUb=r.bases;AUi=0;au.src=AUb[0]+pad(n)+".mp3";autoGo();
}
/* first run: download Quran + tafsir in the background so everything works offline */
async function autoDl(){
  try{
    const cn=navigator.connection;
    if(!navigator.onLine||store.get("adl")==="1"||(cn&&(cn.saveData||cn.type==="cellular")))return;
    const q=await idb.get("q");
    if(!(Array.isArray(q)&&q.length===114))await dlAll({textContent:""});
    store.set("adl","1");
  }catch(e){}
}
setTimeout(function t(){const r=$("read");if(r&&!r.hidden){setTimeout(t,60000);return}autoDl()},90000);

/* ===== v5: separate listen/memorize players, media notification, prayer times ===== */
const NATIVE=!!(window.Capacitor&&Capacitor.isNativePlatform&&Capacitor.isNativePlatform());
const capPlug=n=>{try{if(typeof Capacitor.registerPlugin==="function")return Capacitor.registerPlugin(n)}catch(e){}return(Capacitor.Plugins&&Capacitor.Plugins[n])||null};
const LN=NATIVE?capPlug("LocalNotifications"):null;
const MC=(NATIVE&&Capacitor.isPluginAvailable&&Capacitor.isPluginAvailable("MediaCtl"))?capPlug("MediaCtl"):null;
let notifAsked=false;
async function notifPerm(){
  if(!LN)return false;
  try{let p=await LN.checkPermissions();if(p.display!=="granted")p=await LN.requestPermissions();return p.display==="granted"}catch(e){return false}
}

/* two separate players: listen (full surah) / memorize (ayah by ayah) */
function setMode(m){AM=m;store.set("amode",m);$("au").pause();stopApi();fillRc();return setAudio()}
document.querySelectorAll("#amd button").forEach(b=>{b.onclick=()=>{if(b.dataset.m!==AM)setMode(b.dataset.m)}});
let AUauto=false;
function autoNav(n){AUauto=true;setTimeout(()=>{AUauto=false},10000);go(n)}
function autoGo(){if(AUauto){AUauto=false;$("au").play().catch(()=>{})}}
$("au").addEventListener("ended",()=>{if(AM==="l"&&cur<114)autoNav(cur+1);else mcSync()});
["play","pause","emptied"].forEach(ev=>$("au").addEventListener(ev,mcSync));
pa.addEventListener("play",mcSync);

/* media notification (Android foreground service) + Web Media Session */
let mcOn=false,mcT=0;
const recName=()=>{const o=$("rc").selectedOptions[0];return o?o.textContent:""};
const isPlay=()=>AM==="l"?(!$("au").paused&&!!$("au").getAttribute("src")):playing;
let natOn=false;
function mcSync(){if(natOn)return;clearTimeout(mcT);mcT=setTimeout(mcDo,80)}
function mcDo(){
  if($("read").hidden){mcStop();return}
  const pl=isPlay();
  if(!pl&&!mcOn)return;
  if(!mcOn&&!notifAsked){notifAsked=true;notifPerm()}
  mcOn=true;
  let title,text;
  if(AM==="l"){title="سورة "+N[cur-1];text=recName()+" · استماع"}
  else{const r=+$("rp").value;title="سورة "+N[cur-1]+(ix?" — الآية "+ix:"");text=recName()+" · حفظ"+(r>1?" · تكرار "+Math.min(rep+1,r)+"/"+r:"")}
  if(MC)MC.update({title,text,playing:pl,mode:AM}).catch(()=>{});
  if("mediaSession" in navigator){try{navigator.mediaSession.metadata=new MediaMetadata({title,artist:text,album:"المصحف الشريف"});navigator.mediaSession.playbackState=pl?"playing":"paused"}catch(e){}}
}
function mcStop(){
  if(natOn||!mcOn)return;mcOn=false;
  if(MC)MC.stop().catch(()=>{});
  if("mediaSession" in navigator){try{navigator.mediaSession.playbackState="none"}catch(e){}}
}
function mcAct(a){
  const au=$("au");
  if(a==="play"||a==="pause"||a==="toggle"){
    if(AM==="l"){const w=a==="toggle"?au.paused:a==="play";if(w)au.play().catch(()=>{});else au.pause()}
    else{const w=a==="toggle"?!playing:a==="play";if(w!==playing)$("pp").click()}
  }else if(a==="next"){if(AM==="l"){if(cur<114)autoNav(cur+1)}else $("an").click()}
  else if(a==="prev"){if(AM==="l"){if(cur>1)autoNav(cur-1)}else $("ap").click()}
  else if(a==="stop"){au.pause();stopApi();mcStop()}
}
if(MC){try{MC.addListener("action",e=>mcAct(e.action))}catch(e){}}
/* background: hand the full-surah mp3 to the native player so it never cuts */
function natGoAy(){
  if(!MC||natOn||AM!=="h"||!playing||!ix||!U.length)return;
  natOn=true;clearTimeout(mcT);
  const lp=$("lp").checked,r=+$("rp").value||1,rate=+$("spd").value||1;
  pa.pause();
  MC.handoffAy({urls:U,ai:ix,rp:r,loop:lp,lf:+$("rf").value||1,lt:+$("rt").value||U.length,rate,stitle:"سورة "+N[cur-1],rec:recName(),title:"سورة "+N[cur-1]+" — الآية "+ix,text:recName()+" · حفظ"}).catch(()=>{natOn=false;pa.play().catch(()=>{})});
}
function natGo(){
  if(AM==="h")return natGoAy();
  if(!MC||natOn||AM!=="l"||!AUb)return;
  const au=$("au");if(au.paused||!au.getAttribute("src"))return;
  natOn=true;clearTimeout(mcT);
  const pos=Math.floor((au.currentTime||0)*1000),rate=au.playbackRate||1;
  au.pause();
  MC.handoff({base:AUb[AUi],n:cur,pos,rate,names:N,rec:recName(),title:"سورة "+N[cur-1],text:recName()+" · استماع"}).catch(()=>{natOn=false;au.play().catch(()=>{})});
}
async function natBack(){
  if(!natOn)return;
  try{
    const r=await MC.takeback();natOn=false;
    if(!r||!r.ok)return;
    const au=$("au");
    if(r.ay){
      if(r.n&&U.length){ix=r.n;rep=0;document.querySelectorAll(".ay.pl").forEach(x=>x.classList.remove("pl"));const e=$("a"+ix);if(e){e.classList.add("pl");gotoAy(ix)}pa.src=U[ix-1];pa.playbackRate=+$("spd").value||1;ppSet(false);if(r.playing)pa.play().then(()=>ppSet(true)).catch(()=>{})}
      mcSync();return;
    }
    if(r.n!==cur){AUauto=!!r.playing;setTimeout(()=>{AUauto=false},10000);go(r.n);return}
    if(r.pos>0){const seek=()=>{try{au.currentTime=r.pos/1000}catch(e){}};if(au.readyState>0)seek();else au.addEventListener("loadedmetadata",seek,{once:true})}
    if(r.playing)au.play().catch(()=>{});
    mcSync();
  }catch(e){natOn=false}
}
document.addEventListener("visibilitychange",()=>{document.hidden?natGo():natBack()});
if("mediaSession" in navigator){["play","pause","previoustrack","nexttrack","stop"].forEach(k=>{try{navigator.mediaSession.setActionHandler(k,()=>mcAct({previoustrack:"prev",nexttrack:"next"}[k]||k))}catch(e){}})}

/* ---------- prayer times ---------- */
const PN=["الفجر","الشروق","الظهر","العصر","المغرب","العشاء"];
const PCITY=[
["تونس",36.8065,10.1815,"tn"],["أريانة",36.8665,10.1647,"tn"],["بن عروس",36.7533,10.2189,"tn"],["منوبة",36.8101,10.0863,"tn"],["بنزرت",37.2744,9.8739,"tn"],["نابل",36.4561,10.7376,"tn"],["الحمامات",36.4,10.6167,"tn"],["زغوان",36.4029,10.1429,"tn"],["باجة",36.7256,9.1817,"tn"],["جندوبة",36.5012,8.7802,"tn"],["الكاف",36.1676,8.7049,"tn"],["سليانة",36.0849,9.3708,"tn"],["سوسة",35.8256,10.6369,"tn"],["المنستير",35.7643,10.8113,"tn"],["المهدية",35.5047,11.0622,"tn"],["القيروان",35.6781,10.0963,"tn"],["القصرين",35.1676,8.8365,"tn"],["سيدي بوزيد",35.0382,9.4849,"tn"],["صفاقس",34.7406,10.7603,"tn"],["قفصة",34.425,8.7842,"tn"],["توزر",33.9197,8.1335,"tn"],["قبلي",33.7044,8.969,"tn"],["قابس",33.8815,10.0982,"tn"],["مدنين",33.3549,10.5055,"tn"],["جربة (حومة السوق)",33.8756,10.8575,"tn"],["تطاوين",32.9297,10.4518,"tn"],
["الجزائر",36.7538,3.0588,"alg"],["وهران",35.6971,-0.6308,"alg"],["الدار البيضاء",33.5731,-7.5898,"mor"],["الرباط",34.0209,-6.8416,"mor"],["طرابلس",32.8872,13.1913,"mwl"],["القاهرة",30.0444,31.2357,"egy"],["مكة المكرمة",21.3891,39.8579,"mak"],["المدينة المنورة",24.5247,39.5692,"mak"],["الرياض",24.7136,46.6753,"mak"],["جدة",21.4858,39.1925,"mak"],["دبي",25.2048,55.2708,"mwl"],["الدوحة",25.2854,51.531,"mwl"],["الكويت",29.3759,47.9774,"kwt"],["عمّان",31.9454,35.9284,"mwl"],["بغداد",33.3152,44.3661,"mwl"],["دمشق",33.5138,36.2765,"mwl"],["بيروت",33.8938,35.5018,"mwl"],["القدس",31.7683,35.2137,"mwl"],["إسطنبول",41.0082,28.9784,"mwl"],["باريس",48.8566,2.3522,"mwl"],["لندن",51.5072,-0.1276,"mwl"],["برلين",52.52,13.405,"mwl"],["روما",41.9028,12.4964,"mwl"],["مدريد",40.4168,-3.7038,"mwl"],["مونتريال",45.5017,-73.5673,"isna"],["نيويورك",40.7128,-74.006,"isna"]];
const PMETH={tn:["تونس",18,18],mwl:["رابطة العالم الإسلامي",18,17],egy:["الهيئة المصرية",19.5,17.5],kar:["كراتشي",18,18],isna:["أمريكا الشمالية",15,15],mak:["أم القرى (مكة)",18.5,90],alg:["الجزائر",18,17],mor:["المغرب",19,17],kwt:["الكويت",18,17.5]};
const rd2=d=>d*Math.PI/180,dg=r=>r*180/Math.PI;
const sn=d=>Math.sin(rd2(d)),cs=d=>Math.cos(rd2(d)),tn=d=>Math.tan(rd2(d));
const asn=x=>dg(Math.asin(x)),acs=x=>dg(Math.acos(x)),at2=(y,x)=>dg(Math.atan2(y,x)),acot=x=>dg(Math.atan(1/x));
const fa=a=>a-360*Math.floor(a/360),fh=h=>h-24*Math.floor(h/24);
function jdate(y,m,d){if(m<=2){y-=1;m+=12}const A=Math.floor(y/100),B=2-A+Math.floor(A/4);return Math.floor(365.25*(y+4716))+Math.floor(30.6001*(m+1))+d+B-1524.5}
function sunPos(jd){const D=jd-2451545,g=fa(357.529+.98560028*D),q=fa(280.459+.98564736*D),L=fa(q+1.915*sn(g)+.02*sn(2*g)),e=23.439-3.6e-7*D,RA=fh(at2(cs(e)*sn(L),cs(L))/15);return{decl:asn(sn(e)*sn(L)),eqt:q/15-RA}}
const midDay=(jd,t)=>fh(12-sunPos(jd+t).eqt);
function sunAt(jd,ang,t,lat,dir){
  const dec=sunPos(jd+t).decl,x=(-sn(ang)-sn(dec)*sn(lat))/(cs(dec)*cs(lat));
  if(x>1||x<-1)return NaN;
  return midDay(jd,t)+dir*acs(x)/15;
}
function asrAt(jd,f,t,lat){const dec=sunPos(jd+t).decl;return sunAt(jd,-acot(f+tn(Math.abs(lat-dec))),t,lat,1)}
/* returns ms timestamps [fajr,sunrise,dhuhr,asr,maghrib,isha] (NaN if undefined) */
function calcPT(date,lat,lng,M,asrF){
  const Y=date.getFullYear(),Mo=date.getMonth(),Dd=date.getDate();
  const tz=-new Date(Y,Mo,Dd,12).getTimezoneOffset()/60;
  const jd=jdate(Y,Mo+1,Dd)-lng/360;
  let t={fajr:5,sunrise:6,dhuhr:12,asr:13,sunset:18,maghrib:18,isha:18},r;
  for(let i=0;i<2;i++){
    const p=k=>t[k]/24;
    r={fajr:sunAt(jd,M[1],p("fajr"),lat,-1),sunrise:sunAt(jd,.833,p("sunrise"),lat,-1),dhuhr:midDay(jd,p("dhuhr")),asr:asrAt(jd,asrF,p("asr"),lat),sunset:sunAt(jd,.833,p("sunset"),lat,1),maghrib:sunAt(jd,.833,p("maghrib"),lat,1)};
    r.isha=M[2]>30?r.maghrib+M[2]/60:sunAt(jd,M[2],p("isha"),lat,1);
    t=r;
  }
  const sh=tz-lng/15;
  const ms=h=>{h=fh(h+sh);const m=Math.round(h*60);return new Date(Y,Mo,Dd,Math.floor(m/60),m%60).getTime()};
  const ex=(h,min)=>isNaN(h)?NaN:ms(h+min/60);
  return[ex(r.fajr,0),ex(r.sunrise,-1),ex(r.dhuhr,1),ex(r.asr,0),ex(r.maghrib,1),ex(r.isha,0)];
}
const PSD={c:0,g:null,m:null,asr:1,on:true,per:[true,true,true,true,true]};
let PS=(()=>{const o=jget("pt")||{};const s={...PSD,per:[...PSD.per]};
  if(Number.isInteger(o.c)&&o.c>=0&&o.c<PCITY.length)s.c=o.c;
  if(o.g&&isFinite(o.g.lat)&&isFinite(o.g.lon)&&Math.abs(o.g.lat)<=66&&Math.abs(o.g.lon)<=180)s.g={lat:+o.g.lat,lon:+o.g.lon};
  if(PMETH[o.m])s.m=o.m;if(o.asr===2)s.asr=2;if(o.on===false)s.on=false;
  if(Array.isArray(o.per)&&o.per.length===5)s.per=o.per.map(x=>x!==false);
  return s})();
const savePS=()=>jset("pt",PS);
function pLoc(){
  const c=PCITY[PS.c];
  const lat=PS.g?PS.g.lat:c[1],lon=PS.g?PS.g.lon:c[2];
  return{lat,lon,name:PS.g?"موقعي الحالي":c[0],m:PS.m||(PS.g?"mwl":c[3])};
}
const pTimes=d=>{const L=pLoc();return calcPT(d,L.lat,L.lon,PMETH[L.m],PS.asr)};
const fmtT=ms=>{if(isNaN(ms))return"—";const d=new Date(ms);return(d.getHours()<10?"0":"")+d.getHours()+":"+(d.getMinutes()<10?"0":"")+d.getMinutes()};
function nextPrayer(){
  const now=Date.now(),T=pTimes(new Date());
  for(const k of [0,2,3,4,5])if(T[k]>now)return{k,t:T[k],d:0};
  const tm=new Date();tm.setDate(tm.getDate()+1);return{k:0,t:pTimes(tm)[0],d:1};
}
const pName=(k,dt)=>k===2&&(dt||new Date()).getDay()===5?"الجمعة":PN[k];
function untilTxt(t){const m=Math.max(0,Math.round((t-Date.now())/60000)),h=Math.floor(m/60);return"بعد "+(h?h+" س ":"")+(m%60)+" د"}
function pcUpdate(){
  const n=nextPrayer();
  $("pcn").textContent="الصلاة القادمة: "+pName(n.k,new Date(n.t))+" · "+untilTxt(n.t);
  $("pct").textContent=fmtT(n.t);
  if(!$("ptd").hidden)ptRender();
}
function ptRender(){
  const L=pLoc(),T=pTimes(new Date()),n=nextPrayer(),now=new Date();
  $("pnx").innerHTML=pName(n.k,new Date(n.t))+" <b>"+fmtT(n.t)+"</b> · "+untilTxt(n.t)+"<br><span class=\"sub\">"+L.name+" · "+PMETH[L.m][0]+"</span>";
  $("ptl").innerHTML=PN.map((nm,k)=>'<li class="prow'+(k===1?" sr":"")+(k===n.k&&!n.d?" nx":"")+'"><span class="pn">'+pName(k,now)+"</span><b>"+fmtT(T[k])+"</b>"+(k===1?'<span style="width:2.5em"></span>':'<input type="checkbox" class="sw" data-p="'+(k>1?k-1:0)+'" aria-label="تنبيه '+nm+'"'+(PS.per[k>1?k-1:0]?" checked":"")+">")+"</li>").join("");
  $("pon").checked=PS.on;$("pasr").value=String(PS.asr);
  $("pcity").value=PS.g?"g":String(PS.c);
}
async function schedulePrayers(){
  if(!LN||!PS.on)return;
  if(!(await notifPerm())){$("pmsg").textContent="لم يُسمح بالإشعارات. فعّلها من إعدادات الهاتف لتصلك التنبيهات.";return}
  try{await LN.createChannel({id:"prayer",name:"مواقيت الصلاة",description:"تنبيه عند دخول وقت الصلاة",importance:5,visibility:1,vibration:true})}catch(e){}
  try{
    const pend=await LN.getPending();
    const ids=(pend.notifications||[]).filter(n=>n.id>=1000&&n.id<2000).map(n=>({id:n.id}));
    if(ids.length)await LN.cancel({notifications:ids});
  }catch(e){}
  const L=pLoc(),notes=[],now=Date.now();
  for(let d=0;d<12;d++){
    const dt=new Date();dt.setDate(dt.getDate()+d);const T=pTimes(dt);
    [0,2,3,4,5].forEach((k,j)=>{
      if(PS.per[j]&&T[k]>now)notes.push({id:1000+d*10+j,title:"حان الآن وقت صلاة "+pName(k,dt),body:fmtT(T[k])+" · "+L.name,schedule:{at:new Date(T[k]),allowWhileIdle:true},channelId:"prayer",smallIcon:"ic_stat_mushaf"});
    });
  }
  try{if(notes.length)await LN.schedule({notifications:notes});store.set("psd",String(dayN()))}catch(e){$("pmsg").textContent="تعذّرت جدولة التنبيهات."}
  try{const s=await LN.checkExactNotificationSetting();$("pex").hidden=s.exact_alarm==="granted"}catch(e){}
}
function openPt(){
  $("pcity").innerHTML='<option value="g" hidden>موقعي الحالي</option>'+PCITY.map((c,i)=>'<option value="'+i+'">'+c[0]+"</option>").join("");
  $("pmeth").innerHTML=Object.keys(PMETH).map(k=>'<option value="'+k+'">'+PMETH[k][0]+"</option>").join("");
  $("pmeth").value=pLoc().m;
  $("pmsg").textContent=NATIVE?"":"تنبيهات الصلاة تعمل في تطبيق الأندرويد. المواقيت محسوبة حسب توقيت جهازك.";
  ptRender();$("ptd").hidden=false;
  if(NATIVE)schedulePrayers();
}
$("pcard").onclick=openPt;
$("ptx").onclick=()=>{$("ptd").hidden=true};
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&!$("ptd").hidden)$("ptd").hidden=true});
const ptChg=()=>{savePS();ptRender();pcUpdate();schedulePrayers()};
$("pcity").onchange=()=>{const v=$("pcity").value;if(v!=="g"){PS.c=+v;PS.g=null;PS.m=null;$("pmeth").value=pLoc().m}ptChg()};
$("pmeth").onchange=()=>{PS.m=$("pmeth").value;ptChg()};
$("pasr").onchange=()=>{PS.asr=+$("pasr").value;ptChg()};
$("pon").onchange=async()=>{PS.on=$("pon").checked;savePS();if(PS.on)schedulePrayers();else if(LN){try{const p=await LN.getPending();const ids=(p.notifications||[]).filter(n=>n.id>=1000&&n.id<2000).map(n=>({id:n.id}));if(ids.length)await LN.cancel({notifications:ids})}catch(e){}}};
$("ptl").addEventListener("change",e=>{const t=e.target;if(t.dataset&&t.dataset.p!==undefined){PS.per[+t.dataset.p]=t.checked;savePS();schedulePrayers()}});
$("pex").onclick=()=>{if(LN)LN.changeExactNotificationSetting().catch(()=>{})};
$("pgps").onclick=()=>{
  const m=$("pmsg");
  if(!navigator.geolocation){m.textContent="تحديد الموقع غير متاح. اختر مدينتك من القائمة.";return}
  m.textContent="جارٍ تحديد الموقع…";
  navigator.geolocation.getCurrentPosition(p=>{
    PS.g={lat:Math.round(p.coords.latitude*1e4)/1e4,lon:Math.round(p.coords.longitude*1e4)/1e4};PS.m=null;
    m.textContent="تم تحديد موقعك.";$("pmeth").value=pLoc().m;ptChg();
  },()=>{m.textContent="تعذّر تحديد الموقع. اختر مدينتك من القائمة."},{timeout:15000,maximumAge:6e5});
};
setInterval(()=>{if(!$("home").hidden||!$("ptd").hidden)pcUpdate()},30000);
document.addEventListener("visibilitychange",()=>{if(!document.hidden){pcUpdate();if(NATIVE&&store.get("psd")!==String(dayN()))schedulePrayers()}});
setTimeout(()=>{if(NATIVE)schedulePrayers()},3000);
pcUpdate();

hero();
draw();route();
