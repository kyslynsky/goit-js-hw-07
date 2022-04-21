import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

// 1.Створення і рендер розмітки на підставі масиву даних galleryItems
// і наданого шаблону елемента галереї.

const galleryBlockEl = document.querySelector(".gallery");

const makeGalleryMarkup = ({ preview, original, description }) => {
  return `
<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
};

const makeGallery = galleryItems.map(makeGalleryMarkup).join("");

galleryBlockEl.insertAdjacentHTML("afterbegin", makeGallery);

// 2. Реалізація делегування на div.gallery і отримання url великого зображення.

galleryBlockEl.addEventListener("click", selectImg);

function selectImg(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  onImgClick(event.target.dataset.source);
};

// 3. Підключення скрипту і стилів бібліотеки модального вікна basicLightbox.
// Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані(.min) файли бібліотеки.
/* <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.css"/> */
// <script src="https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.js"></script>

// 4. Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.
// 5. Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям. Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.
// 6. Додай закриття модального вікна після натискання клавіші Escape. Зроби так, щоб прослуховування клавіатури було тільки доти, доки відкрите модальне вікно. Бібліотекаи basicLightbox містить метод для програмного закриття модального вікна.

let instance;

function onImgClick(source) {
  instance = basicLightbox.create(`<img src="${source}">`, {
    onShow: () => {
      window.addEventListener("keydown", onEskPress);
    },
    onClose: () => {
      window.removeEventListener("keydown", onEskPress);
    },
  });

  instance.show();
};

function onEskPress(event) {
  const ESC_KEY = "Escape";

  if (event.code === ESC_KEY) {
    instance.close();
  }

  console.log(event);
};
