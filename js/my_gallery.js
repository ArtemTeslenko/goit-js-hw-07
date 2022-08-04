const galleryItems = [
  {
    original: "https://source.unsplash.com/random/1280x854?capybara=1",
    description: "Cute capybara",
  },
  {
    original: "https://source.unsplash.com/random/1280x854?capybara=2",
    description: "Cute capybara",
  },
  {
    original: "https://source.unsplash.com/random/1280x854?capybara=3",
    description: "Cute capybara",
  },
  {
    original: "https://source.unsplash.com/random/1280x854?capybara=4",
    description: "Cute capybara",
  },
  {
    original: "https://source.unsplash.com/random/1280x854?capybara=5",
    description: "Cute capybara",
  },
  {
    original: "https://source.unsplash.com/random/1280x854?capybara=6",
    description: "Cute capybara",
  },
  {
    original: "https://source.unsplash.com/random/1280x854?capybara=7",
    description: "Cute capybara",
  },
  {
    original: "https://source.unsplash.com/random/1280x854?capybara=8",
    description: "Cute capybara",
  },
  {
    original: "https://source.unsplash.com/random/1280x854?capybara=9",
    description: "Cute capybara",
  },
];

const galleryEl = document.querySelector(".gallery_wrapper");
const bodyEl = document.querySelector("body");

//markup
const markup = [...galleryItems]
  .map(({ original, description }) => {
    return `<div class="gallery_item">
        <img class="gallery_img" src="${original}" alt="${description}"/>
    </div>`;
  })
  .join(" ");

galleryEl.innerHTML = markup;

//overlay
const overlayEl = document.createElement("div");
overlayEl.classList = "gallery_overlay";
bodyEl.appendChild(overlayEl);

//show img
galleryEl.addEventListener("click", onImgClick);

function onImgClick(e) {
  if (!e.target.classList.contains("gallery_img")) {
    return;
  }
  overlayEl.classList.add("is-active");
  createNewImg(e);
}

function createNewImg(e) {
  const wholeImg = document.createElement("img");

  wholeImg.src = e.target.src;
  wholeImg.classList = "gallery_whole-img";
  overlayEl.appendChild(wholeImg);

  overlayEl.addEventListener("click", deleteNewImg);

  function deleteNewImg() {
    wholeImg.remove();
    overlayEl.classList.remove("is-active");
  }
}
