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

  // Create multiple particles
  const numberOfParticles = 5;
  Array(numberOfParticles).fill().forEach((_, index) => {
    const particle = document.createElement("span");
    particle.classList.add("particle");

    particle.style.top = randomPercent() + "%";
    particle.style.left = randomPercent() + "%";

    button.appendChild(particle);
  });
});
