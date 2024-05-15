function navigateTo(page) {
  fetch(`${page}.html`)
    .then((Response) => Response.text())
    .then((html) => {
      document.getElementById("content").innerHTML = html;
      if (page === "about") {
        //Load image slider JavaScript
        loadSlider();
      }
    })
    .catch((error) => console.error("Error fetching page:", error));
}

function loadSlider() {
  // for image slider
  let currentSlide = 0;
  const slides = document.querySelectorAll("#about-slider img");

  function showSlide() {
    slides.forEach((slide) => slide.classList.remove("active"));
    slides[currentSlide].classList.add("active");
  }
  showSlide();
}
function nextSlide() {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide();
}

//initially load home page (index.html)
navigateTo("home");
