import { galleryItems } from "./gallery-items.js";
console.dir(galleryItems); //verific daca am legat bine codul

// Change code below this line

const listEl = document.querySelector(".gallery"); //identific clasa la care ma raportez (.gallery), pot verifica cu "console.dir(listEl)"

//creez un element "li"
galleryItems.forEach((item) => {
  const listItemEl = document.createElement("li");
  listItemEl.classList.add("gallery__item");
  listItemEl.innerHTML = `<a class="gallery__link" href="${item.original}">
    <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
    />
    </a>`;
  //adaug toate elementele "li"
  listEl.append(listItemEl);
});

let lightboxInstance = null; // Variabilă pentru a ține instanța ferestrei modale

listEl.addEventListener("click", openImageInLightbox); //se conecteaza lightbox la click

function openImageInLightbox(event) {
  const clickedOn = event.target;

  if (event.target.nodeName !== "IMG") {
    return;
  }

  event.preventDefault();

  //Verificăm dacă instanța ferestrei modale există deja; dacă da, o închidem înainte de a crea una nouă
  if (lightboxInstance) {
    lightboxInstance.close();
  }

  lightboxInstance = basicLightbox.create(
    `<img width="1400" height="900" src="${clickedOn.dataset.source}" />`
  );

  lightboxInstance.show();
}

// Ascultător de evenimente pentru tasta Escape
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && lightboxInstance) {
    lightboxInstance.close();
  }
});
