// ----------------------------------------------------------------
// Функция для отправки данных на mail php
// ----------------------------------------------------------------
const ERROR_MESSAGE = 'Some error !';
const SUCCESS_MESSAGE = 'Successfule send !';

const form = document.querySelector('.contact__user_form__form');
form.addEventListener('submit', formSend);

async function formSend(event) {
    event.preventDefault();

    const formData = new FormData(form);

    let response = await fetch('script/php/mail.php', {
        method: 'POST',
        body: formData,
        mode: 'no-cors'
    });

    if (response.ok) {
        console.log(SUCCESS_MESSAGE);
        form.reset();
    } else {
        console.log(ERROR_MESSAGE);
    }
}

// ----------------------------------------------------------------
// Галерея 
// ----------------------------------------------------------------
const gallery_item = document.querySelectorAll('.gallery ul li img');

const close__button = document.querySelector('.close');
const wrapper = document.querySelector('.gallery__item_wrapper');
const image = document.querySelector('.gallery__image');

gallery_item.forEach((item) => {
    item.addEventListener('click', galleryItemFunk);
})

close__button.addEventListener('click', close);



function galleryItemFunk(item) {
    const item__src = item.target.getAttribute('src');
    
    if (wrapper.classList.contains('none')) {
        wrapper.classList.remove('none');
        wrapper.classList.add('active');

        image.setAttribute('src', item__src);
    }
}

function close() {
    if (wrapper.classList.contains('active')) { 
        wrapper.classList.remove('active');
        wrapper.classList.add('none');

        image.removeAttribute('src', null)
    }
}

