const sectionscroll = () => {
  // Function to get all of the sections on the page
  const sections = document.querySelectorAll('section');
  // Set the currently active section to the first one
  let currentSection = 0;

  // Function to scroll to a given section
  const scrollToSection = (sectionIndex) => {
    sections[sectionIndex].scrollIntoView({ behavior: 'smooth'});
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
