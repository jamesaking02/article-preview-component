const shareBtn = document.querySelectorAll(".share-bttn")
const sharePanel = document.querySelector(".share-panel")
shareBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    sharePanel.classList.toggle("active")
    sharePanel.classList.toggle("visible")
  })
})

// Prevent transitions on page load
window.addEventListener("DOMContentLoaded", () => {
  document.querySelector("body").classList.remove("preload")
})