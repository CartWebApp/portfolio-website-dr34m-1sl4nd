// Select the door container
  const doorContainer = document.querySelector('.door-container');

  // Add a click event listener
  doorContainer.addEventListener('click', function () {
    // Add the 'open' class to trigger animations
    this.classList.add('open');

    // Wait for the animation to complete before redirecting
    setTimeout(() => {
      window.location.href = '/introduction.html'; // Replace with your next page's URL
    }, 1000); // Matches the CSS transition duration (1 second)
  });