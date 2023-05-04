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

  toogleBtnIcon.classList = isOpen ? "fa fa-times" : "fa fa-bars";
};

const isClose = () => {
  const isClose = menu.classList.remove("open");

  toogleBtnIcon.classList = isClose ? "fa fa-times" : "fa fa-bars";
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
/* DESKTOP TEXT VARIABLES */
const boxDots1 = document.querySelector(".box_dots1");
const boxMore1 = document.querySelector(".box_more1");
const boxMoreText1 = document.querySelector(".box_more_text1");
/*  */
const boxDots2 = document.querySelector(".box_dots2");
const boxMore2 = document.querySelector(".box_more2");
const boxMoreText2 = document.querySelector(".box_more_text2");
/*  */
const boxDots3 = document.querySelector(".box_dots3");
const boxMore3 = document.querySelector(".box_more3");
const boxMoreText3 = document.querySelector(".box_more_text3");
/*  */
const boxDots4 = document.querySelector(".box_dots4");
const boxMore4 = document.querySelector(".box_more4");
const boxMoreText4 = document.querySelector(".box_more_text4");
/*  */
const boxDots5 = document.querySelector(".box_dots5");
const boxMore5 = document.querySelector(".box_more5");
const boxMoreText5 = document.querySelector(".box_more_text5");
/*  */
const boxDots6 = document.querySelector(".box_dots6");
const boxMore6 = document.querySelector(".box_more6");
const boxMoreText6 = document.querySelector(".box_more_text6");
/*  */
// const boxDots = document.querySelectorAll(".box_dots");
// const boxMore = document.querySelectorAll(".box_more");
// const boxMoreText = document.querySelectorAll(".box_more_text");

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

/* DESKTOP MORE TEXT FUNCTIONS */
const boxReadMore1 = () => {
  boxDots2.style.display = "inline";
  boxMoreText2.innerHTML = "Learn more";
  boxMore2.style.display = "none";
  /*  */
  boxDots3.style.display = "inline";
  boxMoreText3.innerHTML = "Learn more";
  boxMore3.style.display = "none";
  /*  */
  boxDots4.style.display = "inline";
  boxMoreText4.innerHTML = "Learn more";
  boxMore4.style.display = "none";
  /*  */
  boxDots5.style.display = "inline";
  boxMoreText5.innerHTML = "Learn more";
  boxMore5.style.display = "none";
  /*  */
  boxDots6.style.display = "inline";
  boxMoreText6.innerHTML = "Learn more";
  boxMore6.style.display = "none";
  /*  */
  if (boxDots1.style.display === "none") {
    boxDots1.style.display = "inline";
    boxMoreText1.innerHTML = "Learn more";
    boxMore1.style.display = "none";
  } else {
    boxDots1.style.display = "none";
    boxMoreText1.innerHTML = "Read less";
    boxMore1.style.display = "inline";
  }
};
/*  */
const boxReadMore2 = () => {
  boxDots1.style.display = "inline";
  boxMoreText1.innerHTML = "Learn more";
  boxMore1.style.display = "none";
  /*  */
  boxDots3.style.display = "inline";
  boxMoreText3.innerHTML = "Learn more";
  boxMore3.style.display = "none";
  /*  */
  boxDots4.style.display = "inline";
  boxMoreText4.innerHTML = "Learn more";
  boxMore4.style.display = "none";
  /*  */
  boxDots5.style.display = "inline";
  boxMoreText5.innerHTML = "Learn more";
  boxMore5.style.display = "none";
  /*  */
  boxDots6.style.display = "inline";
  boxMoreText6.innerHTML = "Learn more";
  boxMore6.style.display = "none";
  /*  */
  if (boxDots2.style.display === "none") {
    boxDots2.style.display = "inline";
    boxMoreText2.innerHTML = "Learn more";
    boxMore2.style.display = "none";
  } else {
    boxDots2.style.display = "none";
    boxMoreText2.innerHTML = "Read less";
    boxMore2.style.display = "inline";
  }
};
/*  */
const boxReadMore3 = () => {
  boxDots1.style.display = "inline";
  boxMoreText1.innerHTML = "Learn more";
  boxMore1.style.display = "none";
  /*  */
  boxDots2.style.display = "inline";
  boxMoreText2.innerHTML = "Learn more";
  boxMore2.style.display = "none";
  /*  */
  boxDots4.style.display = "inline";
  boxMoreText4.innerHTML = "Learn more";
  boxMore4.style.display = "none";
  /*  */
  boxDots5.style.display = "inline";
  boxMoreText5.innerHTML = "Learn more";
  boxMore5.style.display = "none";
  /*  */
  boxDots6.style.display = "inline";
  boxMoreText6.innerHTML = "Learn more";
  boxMore6.style.display = "none";
  /*  */
  if (boxDots3.style.display === "none") {
    boxDots3.style.display = "inline";
    boxMoreText3.innerHTML = "Learn more";
    boxMore3.style.display = "none";
  } else {
    boxDots3.style.display = "none";
    boxMoreText3.innerHTML = "Read less";
    boxMore3.style.display = "inline";
  }
};
/*  */
const boxReadMore4 = () => {
  boxDots1.style.display = "inline";
  boxMoreText1.innerHTML = "Learn more";
  boxMore1.style.display = "none";
  /*  */
  boxDots2.style.display = "inline";
  boxMoreText2.innerHTML = "Learn more";
  boxMore2.style.display = "none";
  /*  */
  boxDots3.style.display = "inline";
  boxMoreText3.innerHTML = "Learn more";
  boxMore3.style.display = "none";
  /*  */
  boxDots5.style.display = "inline";
  boxMoreText5.innerHTML = "Learn more";
  boxMore5.style.display = "none";
  /*  */
  boxDots6.style.display = "inline";
  boxMoreText6.innerHTML = "Learn more";
  boxMore6.style.display = "none";
  /*  */
  if (boxDots4.style.display === "none") {
    boxDots4.style.display = "inline";
    boxMoreText4.innerHTML = "Learn more";
    boxMore4.style.display = "none";
  } else {
    boxDots4.style.display = "none";
    boxMoreText4.innerHTML = "Read less";
    boxMore4.style.display = "inline";
  }
};
/*  */
const boxReadMore5 = () => {
  boxDots1.style.display = "inline";
  boxMoreText1.innerHTML = "Learn more";
  boxMore1.style.display = "none";
  /*  */
  boxDots2.style.display = "inline";
  boxMoreText2.innerHTML = "Learn more";
  boxMore2.style.display = "none";
  /*  */
  boxDots3.style.display = "inline";
  boxMoreText3.innerHTML = "Learn more";
  boxMore3.style.display = "none";
  /*  */
  boxDots4.style.display = "inline";
  boxMoreText4.innerHTML = "Learn more";
  boxMore4.style.display = "none";
  /*  */
  boxDots6.style.display = "inline";
  boxMoreText6.innerHTML = "Learn more";
  boxMore6.style.display = "none";
  /*  */
  if (boxDots5.style.display === "none") {
    boxDots5.style.display = "inline";
    boxMoreText5.innerHTML = "Learn more";
    boxMore5.style.display = "none";
  } else {
    boxDots5.style.display = "none";
    boxMoreText5.innerHTML = "Read less";
    boxMore5.style.display = "inline";
  }
};
/*  */
const boxReadMore6 = () => {
  boxDots1.style.display = "inline";
  boxMoreText1.innerHTML = "Learn more";
  boxMore1.style.display = "none";
  /*  */
  boxDots2.style.display = "inline";
  boxMoreText2.innerHTML = "Learn more";
  boxMore2.style.display = "none";
  /*  */
  boxDots3.style.display = "inline";
  boxMoreText3.innerHTML = "Learn more";
  boxMore3.style.display = "none";
  /*  */
  boxDots4.style.display = "inline";
  boxMoreText4.innerHTML = "Learn more";
  boxMore4.style.display = "none";
  /*  */
  boxDots5.style.display = "inline";
  boxMoreText5.innerHTML = "Learn more";
  boxMore5.style.display = "none";
  /*  */
  if (boxDots6.style.display === "none") {
    boxDots6.style.display = "inline";
    boxMoreText6.innerHTML = "Learn more";
    boxMore6.style.display = "none";
  } else {
    boxDots6.style.display = "none";
    boxMoreText6.innerHTML = "Read less";
    boxMore6.style.display = "inline";
  }
};
/*  */
// const boxReadMore = () => {
//   boxDots.forEach((boxDots) => {
//     boxMore.forEach((boxMore) => {
//       boxMoreText.forEach((boxMoreText) => {
//         if (boxDots.style.display === "none") {
//           boxDots.style.display = "inline";
//           boxMoreText.innerHTML = "Learn more";
//           boxMore.style.display = "none";
//         } else {
//           boxDots.style.display = "none";
//           boxMoreText.innerHTML = "Read less";
//           boxMore.style.display = "inline";
//         }
//       });
//     });
//   });
// };

// boxMoreText.forEach((boxMoreText) => {
boxMoreText1.addEventListener("click", boxReadMore1);
boxMoreText2.addEventListener("click", boxReadMore2);
boxMoreText3.addEventListener("click", boxReadMore3);
boxMoreText4.addEventListener("click", boxReadMore4);
boxMoreText5.addEventListener("click", boxReadMore5);
boxMoreText6.addEventListener("click", boxReadMore6);
// });
