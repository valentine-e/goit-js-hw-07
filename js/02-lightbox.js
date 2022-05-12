import { galleryItems } from "./gallery-items.js";

// Change code below this line

const galleryWrapper = document.querySelector(".gallery");

const galleryEl = createGallery(galleryItems);
galleryWrapper.innerHTML = galleryEl;

const modalEl = new SimpleLightbox(".gallery__item", {
  captionsData: "alt",
  fadeSpeed: 250,
});

function createGallery(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join("");
}

console.log(galleryItems);
