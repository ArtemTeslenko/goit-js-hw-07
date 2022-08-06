import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
        />
        </a>
    </div>`
  )
  .join("");

galleryEl.innerHTML = markup;

galleryEl.addEventListener("click", onPictureClick);

function onPictureClick(e) {
  e.preventDefault();
  if (!e.target.classList.contains("gallery__image")) {
    return;
  }
  openModal(e);
}

function openModal(e) {
  const instance = basicLightbox.create(
    `<img src="${e.target.dataset["source"]}"/>`
  );

  instance.show();

  window.addEventListener("keydown", escPress);

  function escPress(e) {
    if (e.code !== "Escape") {
      return;
    }
    console.log("esc");
    closeModal();
  }

  function closeModal() {
    instance.close();
    window.removeEventListener("keydown", escPress);
  }
}
