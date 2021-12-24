import { galleryItems } from "./gallery-items.js";

const galleryLightbox = new SimpleLightbox(".gallery-item a", {
  captions: true,
  captionDelay: 250,
});
const galleryList = document.querySelector(".gallery");

const createGalleryItemMarkup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `
      <div class="gallery-item">
        <a href="${original}">
            <img class="gallery__image" title="${description}" src="${preview}" alt="${description}" />
        </a>
      </div>
    `
  )
  .join("");

galleryList.insertAdjacentHTML("beforeend", createGalleryItemMarkup);
galleryLightbox.refresh();
