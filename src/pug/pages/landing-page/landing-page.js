const imageUrls = ['./img/landing_bg2.jpg', '/img/landing_bg3.jpg', './img/landing_bg1.jpg'];
let imageIndex = 0;

const changeImage = () => {
  $('.landing-page').css('background-image', `url(${imageUrls[imageIndex]})`);
  imageIndex++;
  if (imageIndex === imageUrls.length) {
    imageIndex = 0;
  }
}

setInterval(changeImage, 5000);