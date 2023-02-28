import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const gallery = document.querySelector('.gallery');

const icon = galleryItems
    .map(image => 
        `<a class="gallery__item" href="${image.original}">
            <img 
            class="gallery__image" 
            src="${image.preview}" 
            alt="${image.description}" 
            title="${image.description}"
            />
        </a>`)
    .join('');
gallery.insertAdjacentHTML('afterbegin', icon);

const lightbox = new SimpleLightbox('.gallery a', {captionDelay: 250,});