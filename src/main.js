debugger

import {
    imageTemplate,
    imagesTemplate,
    showLoader,
    hideLoader
} from "./js/render-functions";
import { getImages } from "./js/pixabay-api"
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";



const formEl = document.querySelector('.form')
const galleryEl = document.querySelector('.gallery-list')
const loader = document.querySelector('.loader')


formEl.addEventListener('submit', e => {
    e.preventDefault()

    const formData = new FormData(formEl)
    const userInput = formData.get('userInput').trim()

    showLoader(loader)
    if (userInput === '') {
        iziToast.warning({
            title: 'Empty search',
            message: "Please enter a search query!",
        });
        return;
    }
    getImages(userInput).then(data => {
        if (data.hits.length !== 0) {
                const markup = imagesTemplate(data.hits)
                galleryEl.innerHTML = markup
                lightbox.refresh()
            
            } else {
                iziToast.warning({
                    title: 'No Results',
                    message: "Sorry, there are no images matching your search query. Please try again!",
                });
                galleryEl.innerHTML = ''
            }
        }).catch(err => {
            iziToast.error({
                title: 'Error',
                message: 'Something went wrong. Please try again later.',
            })
            console.log(err);
        }).finally(() => {
            hideLoader(loader)
            formEl.reset()
        })
        
    }
    
)

const lightbox = new SimpleLightbox('.gallery-list a', {
    captionsData: 'alt',
    captionDelay: 250,
});
