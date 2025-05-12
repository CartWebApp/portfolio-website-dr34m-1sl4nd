// Select the door container
  const doorContainer = document.querySelector('.door-container');

  // Add a click event listener
  doorContainer.addEventListener('click', function () {
    // Add the 'open' class to trigger animations
    this.classList.add('open');

    // Wait for the animation to complete before redirecting
    setTimeout(() => {
      window.location.href = '/introduction.html'; // Replace with your next page's URL
    }, 2000); // Matches the CSS transition duration (2 seconds)
  });

  const canvas = document.getElementById('stars');
const context = canvas.getContext('2d');

// Set canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const stars = [];
const numStars = 200; // Number of stars

// Star class
class Star {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 2; // Star size
        this.speedX = (Math.random() - 0.5) * 0.5; // Horizontal movement
        this.speedY = (Math.random() - 0.5) * 0.5; // Vertical movement
    }

    draw() {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.fillStyle = 'white';
        context.fill();
        context.closePath();
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Reposition stars if they move out of bounds
        if (this.x < 0 || this.x > canvas.width) this.x = Math.random() * canvas.width;
        if (this.y < 0 || this.y > canvas.height) this.y = Math.random() * canvas.height;
    }
}

// Create stars
for (let i = 0; i < numStars; i++) {
    stars.push(new Star());
}

// Animate stars
function animate() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    stars.forEach(star => {
        star.update();
        star.draw();
    });

    requestAnimationFrame(animate);
}

animate();

// Adjust canvas size on window resize
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});