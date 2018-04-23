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
  console.log(startX);
});
slider.addEventListener("mouseleave", () => {
  isDown = false;
  slider.classList.remove("active");
});
slider.addEventListener("mouseup", () => {
  isDown = false;
  slider.classList.remove("active");
});
slider.addEventListener("mousemove", () => {
  if (!isDown) return; // stop function from running
});
