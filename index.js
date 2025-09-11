// Map widget open/close behaviour — only this small script added
document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.getElementById("map-open-btn");
  const panel = document.getElementById("map-panel");
  const closeBtn = document.getElementById("map-close-btn");

  if (!openBtn || !panel || !closeBtn) return;

  openBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    panel.classList.toggle("hidden");
  });

  closeBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    panel.classList.add("hidden");
  });

  // Close panel when clicking outside
  document.addEventListener("click", (e) => {
    const isClickInside = panel.contains(e.target) || openBtn.contains(e.target);
    if (!isClickInside) panel.classList.add("hidden");
  });

  // Prevent the map button from interfering with page elements
  panel.addEventListener("click", (e)=> e.stopPropagation());
});
