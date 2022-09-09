let tabs = document.querySelectorAll(".toggle");
let contents = document.querySelectorAll(".tab-content-img");
let articles = document.querySelectorAll(".tab-content-article-container");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    contents.forEach((content) => {
      content.classList.remove("active");
    });
    articles.forEach((article) => {
      article.classList.remove("active");
    });
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    contents[index].classList.add("active");
    articles[index].classList.add("active");
    tabs[index].classList.add("active");
  });
});

function _class(name) {
  return document.getElementsByClassName(name);
}

let tabPanes = _class("toggle-header")[0].getElementsByTagName("div");

for (let i = 0; i < tabPanes.length; i++) {
  tabPanes[i].addEventListener("click", function () {
    _class("toggle-header")[0]
      .getElementsByClassName("active")[0]
      .classList.remove("active");
    tabPanes[i].classList.add("active");
    _class("tab-indicator")[0].style.top = `calc(1px + ${i * 193}px)`;
  });
}

//carousel
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

//hover

const card = document.querySelector("#card-hiring");
card.onmouseover = function () {
  let img = document.querySelector(".img-hover");
  let left = document.querySelector(".left");
  let lefttitle = document.querySelector(".left-title");
  left.style.color = "#8B8B8B";
  img.classList.add("active");
  lefttitle.style.color = "#ffffff";
};
card.onmouseout = function () {
  let img = document.querySelector(".img-hover");
  let left = document.querySelector(".left");
  let lefttitle = document.querySelector(".left-title");
  img.classList.remove("active");
  left.style.color = "#606060";
  lefttitle.style.color = "#232340";
};

//toggle
btn = document.querySelector(".toggle-mobile");
btn.onclick = function () {
  let navmobile = document.querySelector(".navbar-mobile");
  navmobile.classList.add("active");
};
close = document.querySelector(".close");
close.onclick = function () {
  let navmobile = document.querySelector(".navbar-mobile");
  navmobile.classList.remove("active");
};
