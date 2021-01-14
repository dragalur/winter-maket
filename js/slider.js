/**
 * /* SLIDER
 *
 * @format
 */

//data for slider
let position = 0;
const sliderShow = 1;
const sliderSlides = 1;
const slider = document.getElementById("slider");
const sliderList = document.getElementById("slider-list");
const sliderItem = document.getElementsByClassName("slide-item");
const sliderItemWidth = slider.offsetWidth / sliderShow;
const sliderMove = sliderItemWidth * sliderSlides;
const sliderPositionEdge = sliderItemWidth * (sliderItem.length - 1);
const sliderDotsBloc = document.getElementById("slider-dots");

//loop for set width elements of slider
for (var i = 0; i < sliderItem.length; i++) {
   sliderItem[i].style.minWidth = sliderItemWidth + "px";
}

const arrowLeft = document.getElementById("arrow-left");
const arrowRight = document.getElementById("arrow-right");
//function slides in right for right arrow and timer
const scroll = () => {
   if (position <= -sliderPositionEdge) {
      position = 0;
   } else position -= sliderMove;
   setPosition(position);
};

arrowLeft.addEventListener("click", function () {
   if (position >= 0) {
      position = -sliderPositionEdge;
   } else position += sliderMove;
   setPosition(position);
});

arrowRight.addEventListener("click", scroll);
//function set position element and active dots
const setPosition = (position) => {
   sliderList.style.transform = "translateX(" + position + "px)";
   dots(Math.abs(position / sliderItemWidth));
};
//create count of dots for slider
for (let i = 0; i < sliderItem.length / sliderShow; i++) {
   let div = document.createElement("div");
   div.className = "dots dots-notActive";
   sliderDotsBloc.appendChild(div);
}
const sliderDots = document.getElementsByClassName("dots");

sliderDots[0].classList.add("dots-active"); //add first dot status active
//add function on dots
for (let i = 0; i < sliderDots.length; i++) {
   sliderDots[i].addEventListener("click", function () {
      position = -(i * sliderItemWidth);
      setPosition(position);
   });
}
//function add class action dots
const dots = (i) => {
   let del = document.getElementsByClassName("dots-active");
   del[0].className = del[0].className.replace(" dots-active", "");
   sliderDots[i].classList.add("dots-active");
};

var sliderTimer = setInterval(scroll, 2000);

//functions stop and start timer when pointer on elements 1213131
//fdgdfgdgdg
let chec = true;
slider.onpointerover = (event) => {
   clearTimeout(sliderTimer);
   chec = false;
};
slider.onpointerout = (event) => {
   if (!chec) sliderTimer = setInterval(scroll, 2000);
};
