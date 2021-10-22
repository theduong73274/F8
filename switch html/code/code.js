const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// header focus on inputelement and click information
const headerInputElement = $('.header__search-wrap input')
const rootElement = $('.app__wrap')
const bellBtn = $('.header__information-notify')
const boxNotify = $('.header__information-notify-box');
const inforImg = $('.header__information-img');
const boxUser = $('.header__information-user-box')


bellBtn.onclick = function() {
    boxNotify.classList.toggle('isopen')
}

bellBtn.addEventListener('click',function(e) {
    e.stopPropagation()
})

boxNotify.addEventListener('click', function(e) {
    e.stopPropagation()
})

headerInputElement.onfocus = function () {
    $('.header__search-wrap').style.border = '1px solid var(--primary-color)';
    
}
rootElement.onclick = function () {
    $('.header__search-wrap').style.border = '1px solid rgba(0, 0, 0, 0.1)'
    // Close boxNotify when click app
    boxNotify.classList.remove('isopen')
    // Close userBox when click app
    boxUser.classList.remove('isopen')
    // Close addBox
    addIcon.classList.remove('isrotate');
    boxAdd.classList.remove('isopen')
}

headerInputElement.addEventListener('click', function(e) {
    e.stopPropagation()
})

// Click infor
inforImg.onclick = function() {
    boxUser.classList.toggle('isopen')
}

inforImg.addEventListener('click', function(e) {
    e.stopPropagation()
})

boxUser.addEventListener('click', function(e) {
    e.stopPropagation()
})


// Add js

const addBtn = $('.page__sidebar-add-item-link')
const addIcon = $('.page__sidebar-add-item-icon')
const boxAdd = $('.page__sidebar-add-box')

addBtn.onclick = function() {
    addIcon.classList.toggle('isrotate');
    boxAdd.classList.toggle('isopen')
}

addBtn.addEventListener('click', function(e) {
    e.stopPropagation()
})

boxAdd.addEventListener('click', function(e) {
    e.stopPropagation()
})