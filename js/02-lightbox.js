import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryContainer = document.querySelector('.gallery');

const imagesMarkup = creatImagsGallery(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', imagesMarkup);

function creatImagsGallery(galleryItems){
  return galleryItems
  .map(({preview, original, description }) => {
    return `<li class="gallery__item">
 <a class="gallery__link" href="${original}">
   <img
    class="gallery__image"
     src="${preview}"
     alt="${description}"
   />
 </a>
 </li>`;
  })
  .join('');
}

galleryContainer.addEventListener('click', onGalleryContainerClick);

function onGalleryContainerClick(evt) {
  evt.preventDefault()
}

const altTitle = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250 });
