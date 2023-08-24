import { galleryItems } from "./gallery-items.js";
// Change code below this line

const listEl = document.querySelector(".gallery");
galleryItems.forEach((item) => {
  const listItemEl = document.createElement("li");
  listItemEl.classList.add("gallery__item");
  listItemEl.innerHTML = `<a class="gallery__link" href="${item.original}">
  <img
    class="gallery__image"
    src="${item.preview}"
    alt="${item.description}"
  /> </a
>`;
  listEl.append(listItemEl);
});
document.addEventListener("DOMContentLoaded", function () {
  const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && lightbox) {
      lightbox.close();
    }
  });
});

console.log(galleryItems);
