import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');
console.log(galleryEl);

function creatImagsGalleryMarkup(){
  return galleryItems.map(({preview, original, description})=> {
    return 
    `<div class="gallery__item">
// <a class="gallery__link" href="${original}">
//   <img
//     class="gallery__image"
//     src="${preview}"
//     data-source="${original}"
//     alt="${description}"
//   />
// </a>
// </div>`;
  }).join('');
}
// console.log()
console.log(creatImagsGalleryMarkup());



// const galleryEl = document.querySelector('.gallery');
// // console.log(galleryEl);

// const galleryMarkup = creatImagsGalleryMarkup(picture);
// console.log(galleryMarkup);

// galleryEl.insertAdjacentHTML('beforeend', galleryMarkup);

// function creatImagsGalleryMarkup(galleryItems) {
// return galleryItems.map(({preview, original, description}) => {
//     return
// `<div class="gallery__item">
// <a class="gallery__link" href="${original}">
//   <img
//     class="gallery__image"
//     src="${preview}"
//     data-source="${original}"
//     alt="${description}"
//   />
// </a>
// </div>`;
// }).join('');

// }
// console.log(creatImagsGalleryMarkup(picture));