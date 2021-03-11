$('.hamburger-menu').on('click', toggleMenu);

function toggleMenu(e) {
  e.preventDefault();
  $('.hamburger-menu__item, .header__menu').toggleClass('active');
  $('body').toggleClass('blocked');
}

