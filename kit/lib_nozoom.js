// ===== TANPA EFEK ZOOM POP-UP (user 21 Nov, via Bot Instant): default untuk semua produksi Masa Sih baru =====
// Teks/objek langsung muncul (tanpa membesar/memantul), subtitle tanpa zoom, kamera tanpa push-in (zoom dikunci di awal scene; geser pelan tetap).
// Pop SFX tetap jalan. Kalau suatu saat mau efek zoom lagi: tulis ZOOMFX di body_<id>.js.
// Dipasang saat DOMContentLoaded karena subs/sceneLayer didefinisikan di <script> setelah scenes_<id>.js.
window.addEventListener('DOMContentLoaded',()=>{
 popS=function(t,t0){return t>=t0?1:0;};
 pop=function(t,t0){return t>=t0?1:0;};
 subs=eval('('+subs.toString().replace(/const k=0\.85\+0\.15\*eout\([^;]*\);/,'const k=1;')+')');
 sceneLayer=function(sc,t,op){const c=sc.cam(t),c0=sc.cam(sc.t0);const vb=viewBox([c[0],c[1],c0[2]]);
  return `<svg x="0" y="0" width="${W}" height="${H}" viewBox="${vb}" opacity="${op}">${sc.world(t)}</svg>`;};
 window.NOZOOM=true;
});
