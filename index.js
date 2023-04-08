const toogleBtn = document.querySelector(".toogle_btn");
const toogleBtnIcon = document.querySelector(".toogle_btn i");
const menu = document.querySelector(".dropdown_menu");
const menuLists = document.querySelectorAll(".menu_lists li");

/* TEAM SECTION */
const slides = document.querySelectorAll(".slides");
const dots = document.querySelectorAll(".dot");

/* NAV-FUNCTIONS */

/* ACTIVE LINKS */
const removeActive = () => {
  menuLists.forEach((link) => {
    link.classList.remove("active");
  });
};

menuLists.forEach((link) => {
  link.addEventListener("click", () => {
    removeActive();
    link.classList.add("active");
  });
});

toogleBtn.onclick = () => {
  menu.classList.toggle("open");

  const isOpen = menu.classList.contains("open");

  toogleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};

const isClose = () => {
  const isClose = menu.classList.remove("open");

  toogleBtnIcon.classList = isClose ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};

document.onclick = (e) => {
  if (!toogleBtn.contains(e.target) && !menu.contains(e.target)) {
    isClose();
  }
};
document.onscroll = (e) => {
  if (!toogleBtn.contains(e.target) && !menu.contains(e.target)) {
    isClose();
  }
};

/* TEAM SLIDER FUNCTIONS */

let slideIndex = 1;
showSlides(slideIndex);

const plusSlides = (n) => {
  showSlides((slideIndex += n));
};

const currentSlide = (n) => {
  showSlides((slideIndex = n));
};

function showSlides(n) {
  let i;
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

/* MORE TEXT VARIABLES */
const moreDots = document.querySelectorAll(".more_dots");
const moreTexts = document.querySelectorAll(".more");
const btnTexts = document.querySelectorAll(".more_btn");

/* MORE TEXT FUNCTION */
const readMore = () => {
  moreDots.forEach((moreDot) => {
    moreTexts.forEach((moreText) => {
      btnTexts.forEach((btnText) => {
        if (moreDot.style.display === "none") {
          moreDot.style.display = "inline";
          btnText.innerHTML = "Learn more";
          moreText.style.display = "none";
        } else {
          moreDot.style.display = "none";
          btnText.innerHTML = "Read less";
          moreText.style.display = "inline";
        }
      });
    });
  });
};

btnTexts.forEach((btnText) => {
  btnText.addEventListener("click", readMore);
});
