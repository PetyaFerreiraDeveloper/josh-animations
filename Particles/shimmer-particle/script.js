const button = document.querySelector('.add-shimmer');

const SHIMMER_DURATION = 1000; // in ms

function generateShimmer() {
  const shimmer = document.createElement('span');
  shimmer.classList.add('shimmer');
  shimmer.style.animationDuration = `${SHIMMER_DURATION}ms`;

  button.appendChild(shimmer);

  // Remove shimmer after animation duration
  window.setTimeout(() => {
    shimmer.remove()
  }, SHIMMER_DURATION + 200)
}

button.addEventListener('mouseenter', generateShimmer);
button.addEventListener("focus", generateShimmer);