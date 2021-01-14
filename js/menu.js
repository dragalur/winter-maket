/** @format */

/* MENU */
//data  button open menu
const menuButton = document.getElementById("button-open-bloc");
const menu = document.getElementById("menu");
const wraper = document.getElementById("contents");
//function for button open menu
menuButton.addEventListener("click", function () {
   menuButton.classList.toggle("button-open__change");
   wraper.classList.toggle("contents__active");
   menu.classList.toggle("menu__active");
});

//data menu-buttons
const contentButton = document.querySelectorAll("#menu__buttons");
const contentBloc = document.getElementsByClassName("content");

contentBloc[0].style.display = "block";
let contentNow = contentBloc[0];
contentButton[0].className = contentButton[0].className.replace(
   " menu__buttons__hover",
   " menu__button__active"
);

for (let i = 0; i < contentButton.length; i++) {
   contentButton[i].addEventListener("click", function () {
      contentNow.style.display = "none";
      contentBloc[i].style.display = "block";
      contentNow = contentBloc[i];

      let activeButton = document.getElementsByClassName(
         "menu__button__active"
      );
      activeButton[0].className = activeButton[0].className.replace(
         " menu__button__active",
         " menu__buttons__hover"
      );
      contentButton[i].className = contentButton[i].className.replace(
         " menu__buttons__hover",
         " menu__button__active"
      );
   });
}
