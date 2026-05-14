document.querySelectorAll("img").forEach(img => {
  img.addEventListener("mouseenter", () => {
    img.style.transform = "scale(1.05)";
  });
  img.addEventListener("mouseleave", () => {
    img.style.transform = "scale(1)";
  });
});

function openImage(src) {
  const popup = document.createElement("div");
  popup.className = "fixed inset-0 bg-black/80 flex items-center justify-center z-20";
  popup.innerHTML = `<img src="${src}" class="max-w-[90%] max-h-[90%]">`;
  
  popup.onclick = () => popup.remove();
  document.body.appendChild(popup);
}