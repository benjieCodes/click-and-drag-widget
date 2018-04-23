const slider = document.querySelector(".items");
let isDown = false;

// to know where initial click is located
let startX;
let scrollLeft;

slider.addEventListener("mousedown", event => {
  isDown = true;
  slider.classList.add("active");
  startX = event.pageX - slider.offsetLeft; // finds the position of click
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener("mouseleave", () => {
  isDown = false;
  slider.classList.remove("active");
});
slider.addEventListener("mouseup", () => {
  isDown = false;
  slider.classList.remove("active");
});
slider.addEventListener("mousemove", event => {
  if (!isDown) return; // stop function from running
  event.preventDefault();
  const x = event.pageX - slider.offsetLeft; // finds where the mouse position is moving
  console.log({ x, startX });
});
