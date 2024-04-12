document.addEventListener('DOMContentLoaded', function() {
    const rightButton = document.getElementById('right')
    const leftButton = document.getElementById('left')


    rightButton.addEventListener('click', function() {
    const carousel = document.querySelector('.carousel');
    carousel.scrollBy({
      left: 250,
      behavior: 'smooth'
    });
    })
    leftButton.addEventListener('click', function() {
        const carousel = document.querySelector('.carousel');
        carousel.scrollBy({
          left: -250,
          behavior: 'smooth'
        });
    })
    // Add your code here to execute after the document is loaded
  })