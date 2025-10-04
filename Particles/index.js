// Simple random percentage function
function randomPercent() {
  return Math.random() * 100;
}

const button = document.querySelector(".particleButton");

button.addEventListener("click", function () {
  button.classList.toggle("liked");
  const isLiked = button.classList.contains("liked");

  // Bail out early if the user is *undoing* their like.
  // No particles in this case.
  if (!isLiked) return;

  // Create fadeout duration constant to control particle lifespan in one place
  const FADE_OUT_DURATION = 1000; // in ms
  
  const particles = [];

  // Create multiple particles
  const numberOfParticles = 5;
  Array(numberOfParticles).fill().forEach((_, index) => {
    const particle = document.createElement("span");
    particle.classList.add("particle");

    particle.style.top = randomPercent() + "%";
    particle.style.left = randomPercent() + "%";
    particle.style.animationDuration = `${FADE_OUT_DURATION}ms`;

    button.appendChild(particle);
  });
});
