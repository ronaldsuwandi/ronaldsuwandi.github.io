var experiences = document.getElementsByClassName('experiences')[0];
var main = document.getElementsByClassName('main')[0];

document.getElementsByClassName('scroll-to-experiences')[0].onclick = function(e) {
  experiences.scrollIntoView({behavior: 'smooth'});
};

document.getElementsByClassName('scroll-to-main')[0].onclick = function(e) {
  main.scrollIntoView({behavior: 'smooth'});
};
