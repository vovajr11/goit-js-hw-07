import { galleryItems } from "./gallery-items.js";

const galleryList = document.querySelector(".gallery");
galleryList.addEventListener("click", openAndCloseModal);

const createGalleryItemMarkup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `
    <div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
        </a>
    </div>
    `
  )
  .join("");

galleryList.insertAdjacentHTML("beforeend", createGalleryItemMarkup);

function openAndCloseModal(evt) {
  evt.preventDefault();
  const { nodeName, dataset, alt } = evt.target;

  if (nodeName !== "IMG") {
    return;
  }

  const modal = basicLightbox.create(
    `
      <img src="${dataset.source}" alt="${alt}">
    `,
    {
      onShow: (instance) => {
        galleryList.addEventListener("keydown", (evt) => {
          if (evt.code === "Escape") {
            instance.close();
          }
        });
      },
    }
  );

  modal.show();
}
