var works = document.getElementsByClassName('works')[0];
var main = document.getElementsByClassName('main')[0];

document.getElementsByClassName('scroll-to-works')[0].onclick = function(e) {
  Velocity(works, 'scroll', {duration: 1000, easing: 'ease'});
};

document.getElementsByClassName('scroll-to-main')[0].onclick = function(e) {
  Velocity(main, 'scroll', {duration: 1000, easing: 'ease'});
};
