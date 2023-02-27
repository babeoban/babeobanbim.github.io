window.addEventListener('scroll', reveal);

    function reveal(){
      var reveals = document.querySelectorAll('.reveal');

      for(var i = 0; i < reveals.length; i++){

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheight - revealpoint){
          reveals[i].classList.add('active');
        }
        else{
          reveals[i].classList.remove('active');
        }
      }
    }
window.addEventListener('scroll', eveal);

    function eveal(){
      var reveals = document.querySelectorAll('.eveal');

      for(var i = 0; i < reveals.length; i++){

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheight - revealpoint){
          reveals[i].classList.add('active');
        }
        else{
          reveals[i].classList.remove('active');
        }
      }
    }

// get all the section elements
const sections = $('section');

// initialize the index to 0
let index = 0;

// listen for scroll events on the window
$(window).on('wheel', (event) => {
  // check if the user has scrolled up or down
  const direction = event.originalEvent.deltaY > 0 ? 'down' : 'up';

  // check if the user has scrolled to the bottom or top of the current section
  const sectionBottom = sections.eq(index).offset().top + sections.eq(index).outerHeight();
  const sectionTop = sections.eq(index).offset().top;
  const windowBottom = $(window).scrollTop() + $(window).height();

  if ((direction === 'down' && sectionBottom <= windowBottom) ||
      (direction === 'up' && sectionTop >= $(window).scrollTop())) {
    // if so, increment or decrement the index based on the direction and scroll to the next section
    if (direction === 'down' && index < sections.length - 1) {
      index++;
      $('html, body').animate({
        scrollTop: sections.eq(index).offset().top
      }, 800);
    } else if (direction === 'up' && index > 0) {
      index--;
      $('html, body').animate({
        scrollTop: sections.eq(index).offset().top
      }, 800);
    }
  }
});

const phrases = ["Canhvjp", "Coder", "Youtuber", "Ditmenguvaner"];
    typingText = document.getElementById("typing-text");
let index2 = 0;

function type() {
  let phrase = phrases[index2];
  let i = 0;
  const typeInterval = setInterval(() => {
    if (i <= phrase.length) {
      typingText.textContent = phrase.substring(0, i);
      i++;
    } else {
      clearInterval(typeInterval);
      setTimeout(() => {
        remove();
      }, 500);
    }
  }, 100);
}

function remove() {
  let phrase = phrases[index2];
  let i = phrase.length;
  const removeInterval = setInterval(() => {
    if (i >= 0) {
      typingText.textContent = phrase.substring(0, i);
      i--;
    } else {
      clearInterval(removeInterval);
      index2++;
      if (index2 >= phrases.length) {
        index2 = 0;
      }
      setTimeout(() => {
        type();
      }, 500);
    }
  }, 50);
}

type();

