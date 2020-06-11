const btn = document.querySelector('.search-btn');
const div = document.querySelector('.display');
const preloader = document.querySelector(".preloader");




// loader settings for fade out
const fadeEffect = setInterval(() => {
  if (!preloader.style.opacity) {
    preloader.style.opacity = 1;
  }
  if (preloader.style.opacity > 0) {
    preloader.style.opacity -= 0.1;
  } else {
    clearInterval(fadeEffect);
  }
}, 300);

window.addEventListener("load", fadeEffect);


// get array of buttons in services
const buttons = document.querySelectorAll('button.service-btn');

if (btn) {
    btn.addEventListener('click', () => {
        if (div.style.display === 'none') {
            div.style.display = 'block';
        } else {
            div.style.display = 'none';
        }
    });
}

// pick last two from array
const [ ,resturantButton, swimButton, gymButton] = buttons;

// change innertext of services button
const reduceOurServices = () => {
    // console.log(window.outerWidth);
    if (window.innerWidth < 363) {
        resturantButton.style.padding = '2px';
        swimButton.style.padding = '2px';
    }

    if (window.innerWidth < 694) {
        gymButton.innerText = 'Gym';
        swimButton.innerText = 'Swimming';
    }

};
