document.addEventListener("DOMContentLoaded", function() {

    document.querySelector(".header_up_btn").addEventListener("click", function() {

      
      document.querySelector("body").classList.toggle("header_up_btn-active")

    });    

    document.querySelector(".block_btn-closed").addEventListener("click", function() {

      
        document.querySelector("body").classList.toggle("header_up_btn-active")
  
      });    
    
  });



const element = document.querySelector('.select');
const choices = new Choices(element, {
    itemSelectText: "",
    searchEnabled: false,
    shouldSort: false,
    
});


new Accordion('.accordion', {
  collapsible:true,
  active:false,
});


let tabsBtn = document.querySelectorAll('.tabs-nav__btn');
let tabsItem = document.querySelectorAll('.tabs-item');

tabsBtn.forEach(function(element){
  element.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;
 
    tabsBtn.forEach(function(btn){ btn.classList.remove('tabs-nav__btn--active')});
    e.currentTarget.classList.add('tabs-nav__btn--active');
 
    tabsItem.forEach(function(element){ element.classList.remove('tabs-item--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
  });
});




document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".header_up_block_btn").forEach(function (e) {
     e.addEventListener("click", function () {
        e.classList.add("header_up_block_btn-reset"),
        document.querySelectorAll
        (".header__wrapper-search").forEach(function (e) { 
          e.classList.add("search-active")
         })
      })
   }),
   document.querySelectorAll(".search-close").forEach(function (e) {
      e.addEventListener("click", function () {
         document.querySelectorAll
         (".header__wrapper-search ").forEach(function (e) {
          e.classList.remove("search-active") 
           }),  
           document.querySelectorAll(".header__button")  
           .forEach(function (e) {
            e.classList.remove("header__button--color")
            })
       })
    })
})


const swiper = new Swiper('.swiper',{
  slidesPerView: 4,
  slidesPerGroup: 1,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});
