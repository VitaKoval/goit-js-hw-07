import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');
const galleryMarkup = createGalleryItems(galleryItems);

gallery.insertAdjacentHTML('beforeend', galleryMarkup);
gallery.addEventListener('click', onGalleryItemsClick);

function createGalleryItems(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<a class="gallery__link" href="${original}" target="_parent">
         <img
         class="gallery__image"
         src="${preview}"
         data-source="${original}"
         alt="${description}"
         />
         </a>
         </div>`
    }).join('');
}

function onGalleryItemsClick(event) {
    event.preventDefault();
    if (!event.target.classList.contains('gallery__image')) {
        return;
    }
  
    modalShow(event);
    // console.log(event.target)
    // console.log(event.target.dataset.source);
}

function modalShow(event) {
  const modal = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">`)
    modal.show();

    document.addEventListener('keydown', keyBoardPress)

    function keyBoardPress(event) {
    
    if (event.code === 'Escape') {
        // console.log(event.code)
        modal.close();
        document.removeEventListener('keydown', keyBoardPress)
    }
}
}

