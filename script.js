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
