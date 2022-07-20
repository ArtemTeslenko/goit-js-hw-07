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

galleryEl.addEventListener("click", fuckingInstance);

function fuckingInstance(e) {
  e.preventDefault();
  const instance = basicLightbox.create(
    `<img src="${e.target.dataset["source"]}"/>`
  );
  if (e.target.nodeName !== "IMG") {
    return;
  }
  instance.show();

  window.addEventListener("keydown", function () {
    instance.close();
  });
}
