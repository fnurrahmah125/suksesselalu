// Navbar
window.onscroll = function () {
  borderNavbar();
};

const navbar = document.getElementById("navbar");
function borderNavbar() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    navbar.style.boxShadow = "0 1px 6px 0 #333";
  } else {
    navbar.style.boxShadow = "none";
  }
}

// Menu toggle
const menuToggle = document.querySelector(".navbar-toggler");
const span1 = document.querySelector(".navbar-toggler span:nth-child(1)");
const span2 = document.querySelector(".navbar-toggler span:nth-child(2)");
const span3 = document.querySelector(".navbar-toggler span:nth-child(3)");

menuToggle.addEventListener("click", function () {
  span1.classList.toggle("span-child1");
  span2.classList.toggle("span-child2");
  span3.classList.toggle("span-child3");
});

// Counter
const numberOne = document.querySelector(".numberOne");
const numberTwo = document.querySelector(".numberTwo");

function counterOne() {
  let counter = 0;
  setInterval(() => {
    if (counter == 32) {
      clearInterval;
    } else {
      counter += 1;
      numberOne.innerHTML = `+${counter}.6%`;
    }
  }, 130);
}

function counterTwo() {
  let counter = 0;
  setInterval(() => {
    if (counter == 18) {
      clearInterval;
    } else {
      counter += 1;
      numberTwo.innerHTML = `+${counter}.5%`;
    }
  }, 180);
}

counterOne();
counterTwo();
