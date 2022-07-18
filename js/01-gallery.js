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

galleryEl.addEventListener("click", onGallaryItemClick);
window.addEventListener("keydown", onKeyDown);

function onGallaryItemClick(evt) {
  evt.preventDefault();
  checkingEventListenerOnClassBelonging(evt);
}

function checkingEventListenerOnClassBelonging(e) {
  if (!e.target.classList.contains("gallery__image")) {
    return;
  }
  showImage(e);
}

function showImage(e) {
  const instance = basicLightbox.create(`
      <img src="${e.target.dataset.source}">
  `);
  instance.show();
}

// TO FINISH !!!!!!!!!!!!!!!!
function onKeyDown(eve) {
  console.log(eve.code);
}
