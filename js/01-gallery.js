import { galleryItems } from "./gallery-items.js";

// Change code below this line

const galleryWrapper = document.querySelector(".gallery");

const galleryEl = createGallery(galleryItems);
galleryWrapper.innerHTML = galleryEl;

galleryWrapper.addEventListener("click", onGalleryItemClick);

const modalEl = basicLightbox.create(`
<img src="">
`);

function onGalleryItemClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }

  modalEl.element().querySelector("img").src = e.target.dataset.source;
  modalEl.show(() => window.addEventListener("keydown", onEscKeyPress));
}

function onEscKeyPress(e) {
  const ESC_KEY_CODE = "Escape";
  const isEscKey = e.code === ESC_KEY_CODE;

  if (isEscKey) {
    modalEl.close(() => window.removeEventListener("keydown", onEscKeyPress));
  }
}

function createGallery(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}
