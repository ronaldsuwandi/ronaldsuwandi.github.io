// custom js
document.addEventListener('DOMContentLoaded', function() {
  var logoImg = document.getElementById('js-logo');
  if (logoImg) {
    var srcs = ['/img/avatar/ronald.jpg',
                '/img/avatar/ski.jpg',
                '/img/avatar/onepiece.jpg',
                '/img/avatar/coffeefest.jpg'];

    var i = random(0, srcs.length-1);
    logoImg.src = srcs[i];
  }

  function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}, false);