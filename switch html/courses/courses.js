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


// Courses section
const courseList = $('.courses__content-courses-list-cover');

const coursesApp = {
    coursesWidth: 50,
    index: 0,
    courses: [
        {
            name: 'Javascript cơ bản',
            img: 'https://cdn.fullstack.edu.vn/f8-learning/courses/1.png',
            link: './javascript-course.html'
        },
        {
            name: 'HTML, CSS từ Zero đến Hero',
            img: 'https://cdn.fullstack.edu.vn/f8-learning/courses/2.png',
            link: './html-css-course.html'
        },
        {
            name: 'Don\'t Touch Your Face',
            img: 'https://cdn.fullstack.edu.vn/f8-learning/courses/4/4.jpeg'
        },
        {
            name: 'Javascript nâng cao',
            img: 'https://cdn.fullstack.edu.vn/f8-learning/courses/12.png'
        },
        {
            name: 'ReactJS',
            img: 'https://cdn.fullstack.edu.vn/f8-learning/courses/13/13.png'
        },
        {
            name: 'Node & ExpressJS',
            img: 'https://cdn.fullstack.edu.vn/f8-learning/courses/6.png'
        },
        {
            name: 'Kiến Thức Nhập Môn',
            img: 'https://cdn.fullstack.edu.vn/f8-learning/courses/7.png'
        },
        {
            name: 'Responsive Với Grid System',
            img: 'https://cdn.fullstack.edu.vn/f8-learning/courses/3.png'
        },
        {
            name: 'HTML, CSS Tips & Tricks',
            img: 'https://cdn.fullstack.edu.vn/f8-learning/courses/5.png'
        }
    ],

    
    
    // Render course
    render: function() {
        const htmlsCourse = this.courses.map((data) => {
            return `
            <div class="grid__column-3">
                <div class="courses__content-courses-item">
                    <a href="${data.link}" class="courses__content-courses-link">
                        <img src="${data.img}" alt="" class="courses__content-courses-img">
                    </a>
                    <a href="" class="courses__content-courses-description">
                        <h3 class="courses__content-courses-description-text">${data.name}</h3>
                    </a>
                </div>
            </div>
            `
        })
        
        courseList.innerHTML = htmlsCourse.join('') 
        
    },

    start: function () {
        this.render()
    }
}
    
coursesApp.start()


