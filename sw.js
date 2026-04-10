// ── SERVICE WORKER ──
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then(() => console.log('Crowned in Glory: offline ready ✦'))
      .catch(err => console.log('SW error:', err));
  });
}
