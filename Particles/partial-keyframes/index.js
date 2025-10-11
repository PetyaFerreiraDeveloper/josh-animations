const buttonFromTo = document.querySelector(".toggle-from-to");
const buttonOnlyTo = document.querySelector(".toggle-only-to");
const balls = document.querySelectorAll(".ball");

buttonFromTo.addEventListener("click", () => {
  balls.forEach((ball) => {
    ball.classList.toggle("from-to-transparent");
  });
});

buttonOnlyTo.addEventListener("click", () => {
  balls.forEach((ball) => {
    ball.classList.toggle("only-to-transparent");
  });
});
