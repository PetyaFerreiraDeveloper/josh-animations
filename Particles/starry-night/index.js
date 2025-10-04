const button = document.querySelector('.add-stars');
const container = document.querySelector('.container');

button.addEventListener('click', () => { 
  
  const NUMBER_OF_STARS = 10;

  Array(NUMBER_OF_STARS).fill().forEach((_, index) => {
    const star = document.createElement('div');
    star.classList.add('star');
    star.textContent = '⭐'; // Add star emoji
    star.style.top = Math.random() * 100 + "%";
    star.style.left = Math.random() * 100 + "%";
    container.appendChild(star);
  })
  
})