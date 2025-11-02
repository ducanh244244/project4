function initGallery() {
  console.log("🔴 Liverpool Gallery initialized!");
  const images = document.querySelectorAll(".gallery img");

  for (let i = 0; i < images.length; i++) {
    images[i].setAttribute("tabindex", "0");

    images[i].addEventListener("mouseover", function () {
      this.style.opacity = "0.8";
    });

    images[i].addEventListener("mouseleave", function () {
      this.style.opacity = "1";
    });

    images[i].addEventListener("focus", function () {
      console.log("⚽ Focused on:", this.alt);
      this.style.borderColor = "#ffcc00";
    });

    images[i].addEventListener("blur", function () {
      this.style.borderColor = "transparent";
    });
  }
}
