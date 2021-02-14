$('.link-btn').on('click', function(e) {
    e.preventDefault;
    $(this).toggleClass('link-btn-active');
    $('.nav').toggleClass('nav-active');
})


$("#rotate-1").on('click', function(){
    $(".front-1").css("z-index", "1");
    $(".back-1").css("z-index", "2");
})
$("#rotated-1").on('click', function(){
    $(".front-1").css("z-index", "2");
    $(".back-1").css("z-index", "1");
})

$("#rotate-2").on('click', function(){
    $(".front-2").css("z-index", "1");
    $(".back-2").css("z-index", "2");
})
$("#rotated-2").on('click', function(){
    $(".front-2").css("z-index", "2");
    $(".back-2").css("z-index", "1");
})

$("#rotate-3").on('click', function(){
    $(".front-3").css("z-index", "1");
    $(".back-3").css("z-index", "2");
})
$("#rotated-3").on('click', function(){
    $(".front-3").css("z-index", "2");
    $(".back-3").css("z-index", "1");
})


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    let scrollPos = 740;
    let scrollPos2 = 2450;
    let header = document.getElementById('header');

    if(document.body.scrollTop > scrollPos || document.documentElement.scrollTop > scrollPos) {
        header.classList.add('header-white');
    } else{
        header.classList.remove('header-white');
    }

    if(document.body.scrollTop > scrollPos2 || document.documentElement.scrollTop > scrollPos2) {
        header.classList.add('header-contact');
    } else{
        header.classList.remove('header-contact');
    }
}

$(function(){
    $('a[data-target^="anchour"]').bind('click.smoothscroll', function() {
        var target = $(this).attr('href'),
        bl_top = $(target).offset().top - 125;
    $('body, html').animate({scrollTop: bl_top}, 500);
    return false;
    })
})

var modal1 = document.getElementById('portfolio_modal1');
var btn1 = document.getElementById("myModalBtn1");
var span1 = document.getElementsByClassName("close1")[0];

btn1.onclick = function() {
    modal1.style.display = "block";
}

span1.onclick = function() {
    modal1.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
}

var modal2 = document.getElementById('portfolio_modal2');
var btn2 = document.getElementById("myModalBtn2");
var span2 = document.getElementsByClassName("close2")[0];

btn2.onclick = function() {
    modal2.style.display = "block";
}

span2.onclick = function() {
    modal2.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal2) {
        modal1.style.display = "none";
    }
}

var modal3 = document.getElementById('portfolio_modal3');
var btn3 = document.getElementById("myModalBtn3");
var span3 = document.getElementsByClassName("close3")[0];

btn3.onclick = function() {
    modal3.style.display = "block";
}

span3.onclick = function() {
    modal3.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal3) {
        modal1.style.display = "none";
    }
}

var firstTheme = document.getElementById('first');
var secondTheme = document.getElementById('second');
var thirdTheme = document.getElementById('third');

function first() {
	firstTheme.style.border = "3px white solid";
	secondTheme.style.border = "none";
	thirdTheme.style.border = "none";
	document.documentElement.style.setProperty("--theme", "#FFC632");
}

function second() {
	firstTheme.style.border = "none";
	secondTheme.style.border = "3px white solid";
	thirdTheme.style.border = "none";
	document.documentElement.style.setProperty("--theme", "#FF6332");
}

function third() {
	firstTheme.style.border = "none"; 
	secondTheme.style.border = "none";
	thirdTheme.style.border = "3px white solid";
	document.documentElement.style.setProperty("--theme", "#B132FF");
}

var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',

  loop: true,

  slidesPerView: 3,

  freeMode: false,

  spaceBetween: 19,

  loop: false,

  observer: true,

  observeParents: true,

  observeSlideChildren: true,

  dots: true,

  breakpoints: {
     // when window width is >= 320px
     // when window width is >= 480px
     10: {
       slidesPerView: 1.2,
       spaceBetween: 30
     },
     480: {
       slidesPerView: 1.2,
       spaceBetween: 30
     },
     // when window width is >= 640px
     600: {
       slidesPerView: 2.1,
       spaceBetween: 25
     },
     1024: {
       slidesPerView: 3,
       spaceBetween: 19
     }
   },
});
