const btn = document.querySelector('.search-btn');
const div = document.querySelector('.display');

btn.addEventListener('click', () => {
    if (div.style.display === 'none') {
        div.style.display = 'block';
    } else {
        div.style.display = 'none';
    }
})