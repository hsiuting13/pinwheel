const flower = document.querySelector(".flower");

let speed = 1;

flower.addEventListener("click", () => {
  // Increase speed on click
  speed *= 0.8;
 
  flower.style.cssText = `--spin-speed:${speed}s`;

});
