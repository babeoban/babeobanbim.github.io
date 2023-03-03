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

const phrases = ["#DMNV", "Địt mẹ ngữ văn", "Địt mả bà ngữ văn", "Địt mả tổ ngữ văn", "Địt mẹ bộ giáo dục", "Địt tiên sư bộ giáo dục"];
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
          reveals[i].classList.remove('active');scrollIntoView
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

var idx = false
function toggleContribute() {
  if (idx) {
    return
  }
  var popup = document.createElement("div");
  
  // Update the popup's HTML content
  popup.innerHTML = `
  <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeObz1mfIWLfLX8y8p3SSoC2wDwg1-Pr4DPGzgGktgwDffXsw/viewform?embedded=true" width="640" height="700" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
  `;
  
  popup.className = "ctrbup";
  document.body.appendChild(popup);
// Add scale animation on popup display
popup.animate(
  [
    // Initial state: small and transparent
    { transform: 'scale(0.5)', opacity: 0, left: '50%', top: '50%' },
    // Intermediate state: grow and become opaque
    { transform: 'scale(1.1)', opacity: 0.8, left: '50%', top: '50%' },
    // Final state: shrink slightly and settle
    { transform: 'scale(1)', opacity: 1, left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }
  ],
  {
    duration: 500, // animation duration in milliseconds
    easing: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)' // animation easing function
  }
);

  
  var closeBtn = document.createElement("a");
  closeBtn.innerHTML = "&times;";
  closeBtn.href = "#";
  closeBtn.className = "close-button";
  closeBtn.onclick = function() {
    document.body.removeChild(popup);
    idx = false
  }
  popup.appendChild(closeBtn);
  
  // Update the popup's CSS styling
  popup.style.color = "#333";
  popup.style.fontSize = "18px";
  popup.style.backgroundColor = "#f1f1f1";
  idx = true
}

function toggleDev() {
  if (idx) {
    return
  }
  var popup = document.createElement("div");
  
  // Update the popup's HTML content
  popup.innerHTML = `
  <h1>Development log</h1>
  <p>Địt con cụ bộ giáo dục</p>
  `;
  
  popup.className = "devbup";
  document.body.appendChild(popup);
// Add scale animation on popup display
popup.animate(
  [
    // Initial state: small and transparent
    { transform: 'scale(0.5)', opacity: 0, left: '50%', top: '50%' },
    // Intermediate state: grow and become opaque
    { transform: 'scale(1.1)', opacity: 0.8, left: '50%', top: '50%' },
    // Final state: shrink slightly and settle
    { transform: 'scale(1)', opacity: 1, left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }
  ],
  {
    duration: 500, // animation duration in milliseconds
    easing: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)' // animation easing function
  }
);

  
  var closeBtn = document.createElement("a");
  closeBtn.innerHTML = "&times;";
  closeBtn.href = "#";
  closeBtn.className = "close-button";
  closeBtn.onclick = function() {
    document.body.removeChild(popup);
    idx = false
  }
  popup.appendChild(closeBtn);
  
  // Update the popup's CSS styling
  popup.style.color = "#333";
  popup.style.fontSize = "18px";
  popup.style.backgroundColor = "#f1f1f1";
  idx = true
}

function toggleAbout() {
  if (idx) {
    return
  }
  var popup = document.createElement("div");
  
  // Update the popup's HTML content
  popup.innerHTML = `
  <h1 class="center">Info</h1>
    <p class="black">Web dev: Canhvjp<br>
      120 lines of HTML code<br>
      390 lines of javascript<br>
      400 lines of CSS<br>
      <a href="lincense.html">Lincense! (MIT LINCENSE)</a><br>
      <a href="https://github.com/babeoban/babeoban.github.io">Source code!</a>
    </p>
  `;
  
  popup.className = "abtbup";
  document.body.appendChild(popup);
// Add scale animation on popup display
popup.animate(
  [
    // Initial state: small and transparent
    { transform: 'scale(0.5)', opacity: 0, left: '50%', top: '50%' },
    // Intermediate state: grow and become opaque
    { transform: 'scale(1.1)', opacity: 0.8, left: '50%', top: '50%' },
    // Final state: shrink slightly and settle
    { transform: 'scale(1)', opacity: 1, left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }
  ],
  {
    duration: 500, // animation duration in milliseconds
    easing: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)' // animation easing function
  }
);

  
  var closeBtn = document.createElement("a");
  closeBtn.innerHTML = "&times;";
  closeBtn.href = "#";
  closeBtn.className = "close-button";
  closeBtn.onclick = function() {
    document.body.removeChild(popup);
    idx = false
  }
  popup.appendChild(closeBtn);
  
  // Update the popup's CSS styling
  popup.style.color = "#333";
  popup.style.fontSize = "18px";
  popup.style.backgroundColor = "#f1f1f1";
  idx = true
}

const sectionscroll = () => {
  // Function to get all of the sections on the page
  const sections = document.querySelectorAll('section');
  // Set the currently active section to the first one
  let currentSection = 0;

  // Function to scroll to a given section
  const scrollToSection = (sectionIndex) => {
    sections[sectionIndex].scrollIntoView({ behavior: 'smooth' });
    currentSection = sectionIndex;
  };

  // Event listener for scrolling
  window.addEventListener('wheel', (event) => {
    // Check if the user has scrolled using the mouse wheel or touchpad
    if (!event.ctrlKey && !event.shiftKey && !event.altKey) {
      event.preventDefault();
      const direction = event.deltaY > 0 ? 1 : -1;
      const nextSection = currentSection + direction;
      // Only scroll if the next section exists
      if (sections[nextSection]) {
        scrollToSection(nextSection);
      }
    }
  });

  // Event listener for non-mouse wheel or touchpad scrolling
  window.addEventListener('scroll', () => {
    // Check if the user has scrolled using a non-mouse wheel or touchpad method
    if (window.scrollY !== sections[currentSection].offsetTop) {
      // Prevent default scrolling behavior
      event.preventDefault();
      // Find the nearest section and scroll to it
      let nearestSection = 0;
      let smallestDifference = Infinity;
      for (let i = 0; i < sections.length; i++) {
        const difference = Math.abs(sections[i].offsetTop - window.scrollY);
        if (difference < smallestDifference) {
          smallestDifference = difference;
          nearestSection = i;
        }
      }
      scrollToSection(nearestSection);
    }
  });
};

// Call sectionscroll function to initialize scrolling
sectionscroll();
