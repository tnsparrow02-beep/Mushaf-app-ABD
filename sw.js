const C="mushaf-v8";
const SHELL=["./","index.html","styles.css","app.js","manifest.json","icon.svg","icon-512.png"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(C).then(c=>Promise.all(SHELL.map(u=>c.add(u).catch(()=>{})))));self.skipWaiting()});
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))).then(()=>self.clients.claim())));
self.addEventListener("fetch",e=>{
  const u=new URL(e.request.url);
  if(e.request.method!=="GET"||u.origin!==location.origin)return;
  e.respondWith(caches.open(C).then(c=>c.match(e.request).then(m=>{
    const net=fetch(e.request).then(r=>{if(r.ok)c.put(e.request,r.clone()).catch(()=>{});return r}).catch(()=>m||Response.error());
    return m||net;
  })));
});
