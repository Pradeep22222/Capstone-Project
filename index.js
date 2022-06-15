const images = document.querySelectorAll(".galleryimage__div-img");
for (const img of images) {
  img.addEventListener("click", function (e) {
    const path = e.currentTarget.src;
    document.querySelector(".openimage").classList.toggle("hidden");
    document.querySelector(".openimage__img").setAttribute("src", path);
    document
      .querySelector(".gallery__images")
      .classList.toggle("gallery__images-fade");
  });
}

document
  .querySelector(".openimage__icon")
  .addEventListener("click", function () {
    document.querySelector(".openimage").classList.toggle("hidden");
    document
      .querySelector(".gallery__images")
      .classList.toggle("gallery__images-fade");
  });
