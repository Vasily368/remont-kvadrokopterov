

/*---------------popup-forma-------------*/

$(function () {
  $('.authorization').magnificPopup({
    type: 'inline',
    preloader: false,
    focus: '#username',
    modal: true
  });
  $(document).on('click', '.forma__popup-cross', function (e) {
    e.preventDefault();
    $.magnificPopup.close();
  });
});


/*----------menu-anchors--------*/

const anchors = document.querySelectorAll('a[href*="#"]')

for(let anchor of anchors){
  anchor.addEventListener('click',function(e){
    event.preventDefault();
    const blockID = anchor.getAttribute('href')
    document.querySelector('' + blockID ).scrollIntoView({
      behavior:'smooth',
      block: 'start' 
    })
  })
}


/*-----------------header__slider-----------------*/

$('.header__slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  dots:true,

});

/*--------------reviews__slider---------------*/


$('.reviews__slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  prevArrow:'<button type="button" class="slick-prev"><img src="./images/rev-prev.svg"></button>',
  nextArrow:'<button type="button" class="slick-next"><img src="./images/rev-next.svg"></button>',
  responsive:[
  {

  breakpoint: 416,
      settings: {
        arrows:false,
      }
    },
  ]

});


/*-----------------reviews__left-slider-----------------*/

$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  asNavFor: '.slider-nav',
  prevArrow:'<button type="button" class="slick-prev"><img src="./images/arrow-prev.svg"></button>',
  nextArrow:'<button type="button" class="slick-next"><img src="./images/arrow-next.svg"></button>',
  responsive:[
  {

  breakpoint: 1150,
      settings: {
        arrows:false,
      }
    },
  ]
});
$('.slider-nav').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,
  centerMode: false,
  focusOnSelect: true,
  arrows:false,
  
  
});

/*-------------------faq аккордеон---------------------*/

$(document).ready(function(){
  $('.faq__accordeon-haeder').click(function(event){
    $(this).toggleClass('active').next().slideToggle(300);
  });
});


/*--------------our-work__slider---------------*/


$('.our-work__slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive:[
  {

  breakpoint: 1150,
      settings: {
        slidesToShow: 3,
      }
    },
    {
     breakpoint: 960,
      settings: {
        slidesToShow: 2,
      } 
    },
    {
     breakpoint: 600,
      settings: {
        slidesToShow: 1,
        arrows:false,
      } 
    },
  ]
});


/*--------------- brands-select  -------------------*/

document.querySelector(".select__btn").addEventListener("click", function(){
  document.querySelector(".select__list").classList.toggle("select__list--open");

})

document.querySelectorAll(".select__list-item").forEach(function (listItem) {
  listItem.addEventListener("click", function(){
    document.querySelector(".select__btn").innerHTML = this.innerHTML;
    document.querySelector(".input__select").value = this.dataset.value;
    document.querySelector(".select__list").classList.remove("select__list--open");
  });
});

