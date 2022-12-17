import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const imagesMarkup = creatImagsGallery(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', imagesMarkup);



function creatImagsGallery(galleryItems){
  return galleryItems
  .map(({preview, original, description }) => {
    return `<div class="gallery__item">
 <a class="gallery__link" href="${original}">
   <img
    class="gallery__image"
     src="${preview}"
     data-source="${original}"
     alt="${description}"
   />
 </a>
 </div>`;
  })
  .join('');
}

galleryContainer.addEventListener('click', onGalleryContainerClick);

function onGalleryContainerClick(evt) {
  evt.preventDefault()
if(!evt.target.classList.contains('gallery__image')) {
  return;
}

const urlLargeImage = evt.target.getAttribute('data-source');

const instance = basicLightbox.create(`
    <img
    class="gallery__image"
     src="${urlLargeImage}" 
     width="800" height="600">
`, {
  onShow: (instance) => {window.addEventListener("keyup", escapeClose)}
})

instance.show()

function escapeClose(evt) {
  if(evt.key === "Escape") {
      instance.close()
      window.removeEventListener("keyup", escapeClose)
  }
}
}
