const mainImg = document.querySelector("#main-img");
function imgFunction() {
  if (window.innerWidth > 999) {
    mainImg.src = "../assets/images/image-web-3-desktop.jpg";
  } else {
    mainImg.src = "../assets/images/image-web-3-mobile.jpg";
  }
}

imgFunction();

const menuIcon = document.getElementById("icon-menu");
const closeMenu = document.querySelector(".cross");
const sideBar = document.querySelector("#sidebar");
const box = document.querySelector("#transCover");

menuIcon.addEventListener("click", () => {
  sideBar.style.right = "0";
  // sideBar.style.transform = "translateX(0%)";
  box.style.setProperty("--display", "block");
});

closeMenu.addEventListener("click", () => {
  sideBar.style.right = "-1800px";
  box.style.setProperty("--display", "none");
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 980) {
    mainImg.src = "../assets/images/image-web-3-desktop.jpg";
  } else {
    mainImg.src = "../assets/images/image-web-3-mobile.jpg";
  }
});
