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