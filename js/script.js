const navbar = document.getElementsByTagName('nav')[0];
window.addEventListener('scroll', function () {
    console.log(this.window.scrollY)
    if (window.scrollY > 1) {
        navbar.classList.replace('bg-transparant', 'nav-color');
    } else if (this.window.scrollY <= 0) {
        navbar.classList.replace('nav-color', 'bg-transparant')
    }
});

const cardLayanan = document.getElementById("card-layanan");
const onGoing = document.getElementById("on-going");
function openOnGoing() {
    onGoing.style.display = "flex";
    onGoing.style.transform = "scale(1)";
    onGoing.style.visibility = "visible";
    onGoing.style.opacity = "1";
}
function closeOnGOing() {
    onGoing.style.display = "none";
    onGoing.style.transform = "scale(0)";
    onGoing.style.visibility = "hidden";
    onGoing.style.opacity = "0";
}