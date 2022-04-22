import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї. Використовуй готовий код з першого завдання.

const galleryBlockEl = document.querySelector(".gallery");

const makeGalleryMarkup = ({ preview, original, description }) => {
  return `
    <li>
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
    </li>`;
};

const makeGallery = galleryItems.map(makeGalleryMarkup).join("");

galleryBlockEl.insertAdjacentHTML("afterbegin", makeGallery);

// Ініціалізація бібліотеки після створення і додання елементів галереї у div.gallery. Для цього ознайомся з документацією SimpleLightbox - насамперед секції «Usage» і «Markup».
// Подивися в документації секцію «Options» і додай відображення підписів до зображень з атрибута alt. Нехай підпис буде знизу і з'являється через 250 мілісекунд після відкриття зображення.

let lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
  enableKeyboard: true,
});
