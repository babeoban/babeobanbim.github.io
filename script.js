window.addEventListener('scroll', ceveal);

    function ceveal(){
      var reveals = document.querySelectorAll('.ceveal');

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

const phrases = ["Địt mẹ ngữ văn", "Địt mả bà ngữ văn", "Địt mả tổ ngữ văn", "Địt mẹ bộ giáo dục", "Địt tiên sư bộ giáo dục"];
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

const scrollBtn = document.getElementById('scroll-btn');

scrollBtn.addEventListener('click', () => {
  const currentSection = document.querySelector('section:not([style*="none"])');
  const nextSection = currentSection.nextElementSibling;
  if (nextSection) {
    const targetPosition = nextSection.offsetTop;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 600; // in milliseconds
    const easing = cubicBezier(0.42, 0, 0.58, 1);

    let start = null;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const easedProgress = easing(progress / duration);
      const currentPosition = startPosition + distance * easedProgress;
      window.scrollTo(0, currentPosition);
      if (progress < duration) window.requestAnimationFrame(step);
    };

    window.requestAnimationFrame(step);
  }
});

// cubic-bezier function
function cubicBezier(x1, y1, x2, y2) {
  const P1 = [0, 0];
  const P2 = [x1, y1];
  const P3 = [x2, y2];
  const P4 = [1, 1];

  return (t) => {
    const [x, y] = cubicBezierPoint(t, P1, P2, P3, P4);
    return y;
  };
}

function cubicBezierPoint(t, P1, P2, P3, P4) {
  const x = getCubicBezierCoordinate(t, P1[0], P2[0], P3[0], P4[0]);
  const y = getCubicBezierCoordinate(t, P1[1], P2[1], P3[1], P4[1]);
  return [x, y];
}

function getCubicBezierCoordinate(t, p1, p2, p3, p4) {
  return (
    p1 * (1 - t) ** 3 +
    3 * p2 * t * (1 - t) ** 2 +
    3 * p3 * t ** 2 * (1 - t) +
    p4 * t ** 3
  );
}


window.addEventListener('scroll', bveal);

    function bveal(){
      var reveals = document.querySelectorAll('.bveal');

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
    
const scrollButtonAbout = document.querySelector('.scroll-to-about');
const scrollButtonContent = document.querySelector('.scroll-to-content');

scrollButtonAbout.addEventListener('click', (event) => {
  event.preventDefault();
  const aboutSection = document.getElementById('About');
  aboutSection.scrollIntoView({behavior: 'smooth'});
});

scrollButtonContent.addEventListener('click', (event) => {
  event.preventDefault();
  const contentSection = document.getElementById('Content');
  contentSection.scrollIntoView({behavior: 'smooth'});
});

function togglePopup() {
  var popup = document.getElementById("popup");
  if (popup.style.display === "none") {
    popup.style.display = "block";
  } else {
    popup.style.display = "none";
  }
}
