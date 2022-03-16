
// Табы
document.querySelectorAll('.tabs-nav__btn').forEach(function(tabsBtn){
    tabsBtn.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;
    document.querySelectorAll('.tabs-nav__btn').forEach(function(btn){
    btn.classList.remove('tabs-nav__btn--active')});
    e.currentTarget.classList.add('tabs-nav__btn--active');
    document.querySelectorAll('.tabs-item').forEach(function(tabsBtn){
    tabsBtn.classList.remove('tabs-item--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
    });
    });


// Слайдер
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    loop: true,
    // пагинация
    pagination: {
    el: '.swiper-pagination',
    clickable: true
    },
    // навигация
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
    });


// Аккордион 

// Инициализация аккордеона
$(".accordion").accordion({
    heightStyle: "content",
    active: 365
});

// Сворачивание контента аккордеона по клику на заголовок (глючит)
$(function(){
    $(".accord-btn").click(function(){
        $(this).next(".accord-content").slideToggle();
    });
});



// Бургер-меню

//Включение/отключение для навигации и скринридера
// let visibleMenuBtn = document.querySelector('.burger-nav');
// let visiblePopap = document.querySelector('.burger-nav');


// Активация/дезактивация меню по событию
// let bgMenuBtn = document.querySelector('.burger');
// let bgMenu = document.querySelector('.burger-nav');

// bgMenuBtn.addEventListener('click', function(){
// 	bgMenuBtn.classList.toggle('active');
// 	bgMenu.classList.toggle('active');
// })


// Бургер-меню Новый скрипт

// Обработчик событий по пробелу и энтеру для бургер-меню
const CODE_SPACE = 32;
const CODE_ENTER = 13;


const toggleClass = function(element, className) {
    var className = className || 'active';
    element.classList.toggle(className);
}

let bgMenuBtn = document.querySelector('.burger');
let bgMenu = document.querySelector('.burger-nav');

const toggleMenu = function () {
    toggleClass(bgMenuBtn);
    toggleClass(bgMenu);
}

const isFocus = (el) => document.activeElement === el;

bgMenuBtn.addEventListener('click', toggleMenu)

document.addEventListener('keydown', function (e) {
    if((CODE_SPACE === e.keyCode || CODE_ENTER === e.keyCode) && isFocus(bgMenuBtn)) {
    toggleMenu();
    e.preventDefault();
    }
});







// Поиск
let searchBtn = document.querySelector('.top-menu__btn-search');
let searchForm = document.querySelector('.search-form');
let closeForm = document.querySelector('.close-search');


searchBtn.addEventListener('click', function(){
    searchForm.classList.toggle('visible');
    searchBtn.classList.toggle('outlineNone');
})

closeForm.addEventListener('click', function(){
    searchForm.classList.toggle('visible');
    searchBtn.classList.toggle('outlineNone');
})





// Поворот иконки faq

let rotateBtn1 = document.querySelector('.faq-quest1');
let rotateBtn2 = document.querySelector('.faq-quest2');
let rotateBtn3 = document.querySelector('.faq-quest3');
let rotateBtn4 = document.querySelector('.faq-quest4');
let rotateBtn5 = document.querySelector('.faq-quest5');

// Делаю независимые иконки для каждого вопроса
rotateBtn1.addEventListener('click', function(){
    rotateBtn1.classList.toggle('transform');
})

rotateBtn2.addEventListener('click', function(){
    rotateBtn2.classList.toggle('transform');
})

rotateBtn3.addEventListener('click', function(){
    rotateBtn3.classList.toggle('transform');
})

rotateBtn4.addEventListener('click', function(){
    rotateBtn4.classList.toggle('transform');
})

rotateBtn5.addEventListener('click', function(){
    rotateBtn5.classList.toggle('transform');
})



// Переназначем значение атрибута
let sliderLabel1 = document.querySelector(".swiper-pagination-bullet-active");
let sliderLabel2 = document.querySelector(".swiper-slide");
// let sliderLabel3 = document.querySelectorAll(".swiper-pagination-bullets");

// console.log(sliderLabel1);
// console.log(sliderLabel2);  
// console.log(sliderLabel3);
sliderLabel1.setAttribute("aria-label", "Следующий слайд");
sliderLabel2.setAttribute("aria-label", "один из трех");
// sliderLabel3.setAttribute("aria-label", "Следующий слайд");