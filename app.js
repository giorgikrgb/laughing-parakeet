function updateClock() {
  const now = new Date();

  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

updateClock();

setInterval(updateClock, 1000);


let currentSlide = 0;

const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[index].classList.add("active");
}

function nextSlide() {
  currentSlide++;

  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }

  showSlide(currentSlide);
}

let interval = setInterval(nextSlide, 3000);

const slider = document.querySelector(".slider");

slider.addEventListener("mouseenter", () => {
  clearInterval(interval);
});
slider.addEventListener("mouseleave", () => {
  interval = setInterval(nextSlide, 3000);
});

slider.addEventListener("mouseleave", () => {
  interval = setInterval(nextSlide, 3000);
});

const slider = document.querySelector(".slider");

slider.addEventListener("mouseenter", () => {
  clearInterval(interval);
});

slider.addEventListener("mouseleave", () => {
  interval = setInterval(nextSlide, 3000);
});

const buttonsContainer = document.getElementById("buttons");

slides.forEach((slide, index) => {
  const button = document.createElement("button");

  button.textContent = index + 1;

  button.addEventListener("click", () => {
    currentSlide = index;
    showSlide(currentSlide);
  });

  buttonsContainer.appendChild(button);
});

const lectureDate = new Date("May 22, 2027 20:00:00");

function updateCountdown() {
  const now = new Date();

  const difference = lectureDate - now;

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));

  const hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) /
    (1000 * 60 * 60)
  );

  const minutes = Math.floor(
    (difference % (1000 * 60 * 60)) /
    (1000 * 60)
  );

  document.getElementById("countdown").textContent =
    `${days} დღე ${hours} საათი ${minutes} წუთი`;
}

updateCountdown();

setInterval(updateCountdown, 1000);