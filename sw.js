const C="mushaf-v7",H=["api.alquran.cloud","fonts.googleapis.com","fonts.gstatic.com"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(["./","index.html","styles.css","app.js","manifest.json","icon.svg","icon-512.png"])));self.skipWaiting()});
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))).then(()=>self.clients.claim())));
self.addEventListener("fetch",e=>{
  const u=new URL(e.request.url);
  if(e.request.method!=="GET"||(u.origin!==location.origin&&!H.includes(u.hostname)))return;
  e.respondWith(fetch(e.request).then(r=>{
    if(r.ok||r.type==="opaque"){const k=r.clone();caches.open(C).then(c=>c.put(e.request,k)).catch(()=>{})}
    return r;
  }).catch(()=>caches.match(e.request).then(m=>m||Response.error())));
});
