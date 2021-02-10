import './style.css';

const openButton = document.getElementById('open');
const closeButton = document.getElementById('close');
const catalogButton = document.getElementById('catalog');

const mainNav = document.querySelector('.main-nav__list');
const catalogNav = document.querySelector('.header__catalog-list');


let openMenu = () => {
  mainNav.classList.add('main-nav__list--open');
  openButton.style.display = 'none';
  closeButton.style.display = 'block';
}

openButton.addEventListener('click', openMenu);

let closeMenu = () => {
  mainNav.classList.remove('main-nav__list--open');
  catalogNav.classList.remove('header__catalog-list--open');
  closeButton.style.display = 'none';
  openButton.style.display = 'block';
}

closeButton.addEventListener('click', closeMenu);

let openCatalog = () => {
  catalogNav.classList.add('header__catalog-list--open');
}

catalogButton.addEventListener('click', openCatalog);
