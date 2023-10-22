// Navbar
const navbar = document.getElementsByTagName("nav")[0];
window.addEventListener("scroll", function () {
  // console.log(this.window.scrollY)
  if (window.scrollY > 1) {
    navbar.classList.replace("bg-transparant", "nav-color");
  } else if (this.window.scrollY <= 0) {
    navbar.classList.replace("nav-color", "bg-transparant");
  }
});

// On Going
const onGoing = document.getElementById("on-going");
function openOnGoing() {
  onGoing.style.display = "flex";
  onGoing.style.transform = "scale(1)";
  onGoing.style.visibility = "visible";
  onGoing.style.opacity = "1";
}
function closeOnGoing() {
  onGoing.style.display = "none";
  onGoing.style.transform = "scale(0)";
  onGoing.style.visibility = "hidden";
  onGoing.style.opacity = "0";
}

// Slide-modal
const propertySlider = document.getElementById("property-modal");
function openSlider() {
  propertySlider.style.display = "flex";
  propertySlider.style.transform = "scale(1)";
  propertySlider.style.visibility = "visible";
  propertySlider.style.opacity = "1";
}
function closeSlider() {
  propertySlider.style.display = "none";
  propertySlider.style.transform = "scale(0)";
  propertySlider.style.visibility = "hidden";
  propertySlider.style.opacity = "0";
}

// Slide
const img = [
  "Assets/img/Fitur Rumah 1.png",
  "Assets/img/Hero Image.png",
  "Assets/img/Fitur Rumah 1.png",
  "Assets/img/Hero Image.png",
];
let i = 0;
const slide = document.getElementById("slide");
slide.src = img[i];
function changeImgRight() {
  // slide.style.transform = "translateX(-1000px)";
  // slide.style.opacity = "0";
  // slide.style.transition = "all 1s ease-in";
  // setTimeout(() => {
  // slide.style.transform = "translateX(0px)";
  // slide.style.opacity = "1";
  // }, 2000);
  if (i < img.length - 1) {
    i++;
  } else {
    i = 0;
  }
  slide.src = img[i];
}
function changeImgLeft() {
  // slide.style.transform = "translateX(1000px)";
  // slide.style.opacity = "0";
  // slide.style.transition = "all 1s ease-in";
  // setTimeout(() => {
  //   slide.style.transform = "translateX(0px)";
  // slide.style.opacity = "1";
  // }, 2000);
  if (i == 0) {
    i = img.length - 1;
  } else {
    i--;
  }
  slide.src = img[i];
}
