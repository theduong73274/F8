

// Hidden courses list
const appDescriptionList = document.querySelector('.page__js-course-app-video-description')
const courseBtnList = document.querySelector('.page__js-course-app-list-hidden-btn');
const courseBoxList = document.querySelector('.page__js-course-app-list');
const courseVideoApp = document.querySelector('.page__js-course-app-video');
const activeBtnCourses = document.querySelector('.page__js-course-app-video-display-btn');
const courseVideoContent = document.querySelector('.page__js-course-app-video-content');

courseBtnList.onclick = () => {
    courseBoxList.style.width = '0px';
    courseVideoApp.style.width = '100%';
    activeBtnCourses.style.opacity = '1';
    activeBtnCourses.style.display = 'flex';
    courseVideoContent.style.height = '100%';
    appDescriptionList.style.padding = '0 200px';
}


activeBtnCourses.onclick = () => {
    courseBoxList.style.width = '320px';
    courseVideoApp.style.width = 'calc(100% - 320px)';
    activeBtnCourses.style.display = 'none';
    courseVideoContent.style.height = '100%';
    appDescriptionList.style.padding = '0 80px';
}

const btnOpenStyle = getComputedStyle(activeBtnCourses)

const boxCourseListStyle = getComputedStyle(courseBoxList)
console.log(boxCourseListStyle.width)
courseVideoContent.onmouseover = function() {
    if(boxCourseListStyle.width != '320px') {
        activeBtnCourses.style.opacity = '1';
        timeOut = setTimeout(function() {
            activeBtnCourses.style.opacity = '0'
        },5000)
    }
}

activeBtnCourses.onmouseover = function() {
    if(boxCourseListStyle.width != '320px') {
        activeBtnCourses.style.opacity = '1'
    }
}



// Courses List
const lessionsList = document.querySelector('.page__js-course-app-list-wrap')
const lessionItemTest = document.querySelector('.page__js-course-app-list-item-wrap')
const linkVideoCourses = document.querySelector('.page__js-course-app-video-content-wrap')

const lessionApp = {
    lessions: [
        {   stt: 1,
            title: 'Giới thiệu',
            lession: [
                {
                    id: 1,
                    name: '1. Làm được gì sau khóa học?',
                    icon: 'fas fa-play-circle',
                    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/R6plN3FvzFY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                    practice: 'flex'
                },
                {
                    id: 2,
                    name: '2. HTML, CSS là gì?',
                    icon: 'fas fa-play-circle',
                    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/zwsPND378OQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                    practice: 'flex'
                }
            ]
        },
        {
            stt: 2,
            title: 'Làm quen với công cụ',
            lession: [
                {
                    id: 3,
                    name: '3. Làm quen với Dev tools',
                    icon: 'fas fa-play-circle',
                    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/7BJiPyN4zZ0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                    practice: 'flex'
                },
                {
                    id: 4,
                    name: '4. Cài đặt môi trường',
                    icon: 'fas fa-play-circle',
                    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/ZotVkQDC6mU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                    practice: 'flex'
                }
            ]
        },
        {
            stt: 3,
            title: 'Phần 3: Làm quen với HTML',
            lession: [
                {
                    id: 5,
                    name: '5. Cấu trúc file HTML',
                    icon: 'fas fa-play-circle',
                    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/LYnrFSGLCl8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                    practice: 'flex'
                },
                {
                    id: 6,
                    name: '6. Comments trong HTML',
                    icon: 'fas fa-play-circle',
                    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/LYnrFSGLCl8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                    practice: 'flex'
                },
                {
                    id: 7,
                    name: '7. Test tính cẩn thận và chỉn chu của bạn',
                    icon: 'fas fa-file-alt',
                    iframe: '',
                    practice: 'flex'
                },
                {
                    id: 8,
                    name: '8. Thẻ HTML thông dụng',
                    icon: 'fas fa-play-circle',
                    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/AzmdwZ6e_aM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                    practice: 'flex'
                },
                {
                    id: 9,
                    name: '9. Attribute trong HTML',
                    icon: 'fas fa-play-circle',
                    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/UYpIh5pIkSA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                    practice: 'flex'
                }
            ]
        },
        {
            stt: 4,
            title: 'Làm quen với CSS',
            lession: [
                {
                    id: 10,
                    name: '10. Sử dụng CSS trong HTML',
                    icon: 'fas fa-play-circle',
                    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/NsSsJTg29oE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                    practice: 'flex'
                },
                {
                    id: 11,
                    name: '11. ID và Class',
                    icon: 'fas fa-play-circle',
                    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/NsSsJTg29oE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                    practice: 'flex'
                },
                {
                    id: 12,
                    name: '12. CSS selector',
                    icon: 'fas fa-file-alt',
                    iframe: '',
                    practice: 'flex'
                },
                {
                    id: 13,
                    name: '13. Độ ưu tiên trong CSS',
                    icon: 'fas fa-play-circle',
                    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/AgZ0PX28bnA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                    practice: 'flex'
                },
                {
                    id: 14,
                    name: '14. Đặt biến trong CSS',
                    icon: 'fas fa-play-circle',
                    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/x9fnxVTkpP4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                },
                {
                    id: 15,
                    name: '15. Đơn vị trong CSS',
                    icon: 'fas fa-play-circle',
                    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/pcUiTt6eBk0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                },
                {
                    id: 16,
                    name: '16. CSS Functions',
                    icon: 'fas fa-play-circle',
                    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/LZfoRgIYw2s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                },
                {
                    id: 17,
                    name: '17. Pseudo classes',
                    icon: 'fas fa-play-circle',
                    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/zEJiYc-SvWs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                },
                {
                    id: 18,
                    name: '18. Pseudo elements',
                    icon: 'fas fa-play-circle',
                    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/QuBLHCT7fuM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                }
            ]
        },
        {
            stt: 5,
            title: 'Đệm, viền và khoảng lề',
            lession: [
                {
                    id: 19,
                    name: '19. CSS Padding',
                    icon: 'fas fa-play-circle',
                    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/aj-lD4XXr8A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                },
                {
                    id: 20,
                    name: '20. CSS Border',
                    icon: 'fas fa-play-circle',
                    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/VbzOimNAOxE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                },
                {
                    id: 21,
                    name: '21. CSS Margin',
                    icon: 'fas fa-play-circle',
                    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/8X48l0CK5_4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                },
                {
                    id: 22,
                    name: '22. CSS Box-sizing',
                    icon: 'fas fa-play-circle',
                    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/bv16wjxgV4U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                }
            ]
        },
        {
            stt: 6,
            title: 'Thuộc tính tạo nền',
            lession: [
                {
                    id: 23,
                    name: '23. CSS Background-clip',
                    icon: 'fas fa-play-circle',
                    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/hMWhvbCJIq8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                },
                {
                    id: 24,
                    name: '24. CSS Background-image',
                    icon: 'fas fa-play-circle',
                    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/OPz7Uz20XNQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                },
                {
                    id: 25,
                    name: '25. CSS Background-size keywords',
                    icon: 'fas fa-play-circle',
                    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/8zsmGFNpqb4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                },
                {
                    id: 26,
                    name: '26. CSS Background-origin',
                    icon: 'fas fa-play-circle',
                    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/32a_fYd5zIo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                },
                {
                    id: 27,
                    name: '27. CSS Background-position',
                    icon: 'fas fa-play-circle',
                    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/R4q66obGDjs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                },
                {
                    id: 28,
                    name: '28. CSS Background shorthand',
                    icon: 'fas fa-play-circle',
                    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/4hf8kMSRUJI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                }
            ]
        },
        {
            stt: 7,
            title: 'Thuộc tính vị trí',
            lession: [
                {
                    id: 29,
                    name: '29. CSS Position: Relative',
                    icon: 'fas fa-play-circle',
                    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/h1No10BHI5Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                },
                {
                    id: 30,
                    name: '30. CSS Position: Absolute',
                    icon: 'fas fa-play-circle',
                    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/Y8tX8CzWsyA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                },
                {
                    id: 31,
                    name: '31. CSS Position: Fixed',
                    icon: 'fas fa-play-circle',
                    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/jAm8wm77aTM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                },
                {
                    id: 32,
                    name: '32. CSS Position: Sticky',
                    icon: 'fas fa-play-circle',
                    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/y0WuNaMgwpc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                },

            ]
        },
        {
            stt: 8,
            title: 'Xây dựng web The band',
            lession: [
                {
                    id: 33,
                    name: '33. Giới thiệu dự án',
                    icon: 'fas fa-play-circle',
                    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/RPHBgBsw6Xg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                },
                {
                    id: 34,
                    name: '34. Phân biệt & gọi tên các thành phần',
                    icon: 'fas fa-play-circle',
                    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/b8Z5Cyod9oI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                },
                {
                    id: 35,
                    name: '35. Phân tích dự án',
                    icon: 'fas fa-play-circle',
                    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/vBWCymyUySw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                },
                {
                    id: 36,
                    name: '36. Tạo project base',
                    icon: 'fas fa-play-circle',
                    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/IXyLoRZCAco" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                },
                {
                    id: 37,
                    name: '37. Header CSS',
                    icon: 'fas fa-play-circle',
                    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/Dj31dakHAwk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                },
                {
                    id: 38,
                    name: '38. Navigation CSS',
                    icon: 'fas fa-play-circle',
                    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/7nSW0GnwcYI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                },
                {
                    id: 39,
                    name: '39. Header search CSS',
                    icon: 'fas fa-play-circle',
                    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/bavLlrNZsTw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                },
                {
                    id: 40,
                    name: '40. Header fixed CSS',
                    icon: 'fas fa-play-circle',
                    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/iTAxoV0qZ_g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                },
                {
                    id: 41,
                    name: '41. Slider CSS',
                    icon: 'fas fa-play-circle',
                    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/BmkVXoKoqVA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                },
                {
                    id: 42,
                    name: '42. About section CSS',
                    icon: 'fas fa-play-circle',
                    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/lBt7LTM4ISs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                },
                {
                    id: 43,
                    name: '43. Team section CSS',
                    icon: 'fas fa-play-circle',
                    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/_sF4fWuE0iM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                },
                {
                    id: 44,
                    name: '44. Tour tickets CSS',
                    icon: 'fas fa-play-circle',
                    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/ZU_rWZF8a7U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                },
                {
                    id: 45,
                    name: '45. Tour places CSS',
                    icon: 'fas fa-play-circle',
                    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/6ab0QDpld50" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                },
                {
                    id: 46,
                    name: '46. Buy tickets modal',
                    icon: 'fas fa-play-circle',
                    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/7yKMQGE0x5M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                },
                {
                    id: 47,
                    name: '47. Buy tickets modal Javascript logic',
                    icon: 'fas fa-play-circle',
                    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/dQpW4-NzUJc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                },
                {
                    id: 48,
                    name: '48. Row - columns layout',
                    icon: 'fas fa-play-circle',
                    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/1iZNZnCcN1Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                },
                {
                    id: 49,
                    name: '49. Contact form CSS',
                    icon: 'fas fa-play-circle',
                    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/aKIVRblmz0Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                },
                {
                    id: 50,
                    name: '50. Map, footer CSS',
                    icon: 'fas fa-play-circle',
                    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/7dOdXFD7t6k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                },
                {
                    id: 51,
                    name: '51. Review',
                    icon: 'fas fa-play-circle',
                    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/u4t8JdDrqYg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                },

            ]
        },
        {
            stt: 9,
            title: 'Responsive web The band',
            lession: [
                {
                    id: 52,
                    name: '52. Responsive là gì?',
                    icon: 'fas fa-play-circle',
                    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/71uJhUFR8jM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                },
                {
                    id: 53,
                    name: '53. Media queries?',
                    icon: 'fas fa-play-circle',
                    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/joTJwyP1ZsA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                },
                {
                    id: 54,
                    name: '54. Tablet responsive',
                    icon: 'fas fa-play-circle',
                    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/ioOP6hknXxs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                },
                {
                    id: 55,
                    name: '55. Mobile menu responsive',
                    icon: 'fas fa-play-circle',
                    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/6nw9AWvYrak" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                },
                {
                    id: 56,
                    name: '56. Mobile menu fix bug',
                    icon: 'fas fa-play-circle',
                    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/2nXupDp91Z4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                },
                {
                    id: 57,
                    name: '57. Mobile submenu fix bug',
                    icon: 'fas fa-play-circle',
                    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/tl6M4YBNvaI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                },
                {
                    id: 58,
                    name: '58. Content responsive',
                    icon: 'fas fa-play-circle',
                    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/wEeGBwiTR0w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                },
                {
                    id: 59,
                    name: '59. Contact form responsive',
                    icon: 'fas fa-play-circle',
                    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/d6270etxQgY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                },
                {
                    id: 60,
                    name: '60. Review, fix UX',
                    icon: 'fas fa-play-circle',
                    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/2aG4eRKe7Io" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                },
                {
                    id: 61,
                    name: '61. Run and fix bug on mobile',
                    icon: 'fas fa-play-circle',
                    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/Cxi3cHpV238" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                },
                {
                    id: 62,
                    name: '62. Fix bugs',
                    icon: 'fas fa-play-circle',
                    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/2kquykrrpOs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                },

            ]
        },
        {
            stt: 10,
            title: 'Dựng bố cục web với Flexbox',
            lession: [
                {
                    id: 63,
                    name: '63. Giới thiệu Flexbox',
                    icon: 'fas fa-play-circle',
                    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/bVUN6nS82k8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                },
                {
                    id: 64,
                    name: '64. Giới thiệu Flexbox 2',
                    icon: 'fas fa-play-circle',
                    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/jX9KFgugpl4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                },
                {
                    id: 65,
                    name: '65. Học Flexbox qua ví dụ',
                    icon: 'fas fa-play-circle',
                    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/G19jZzK5FWI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                    practice: 'flex'
                },
                {
                    id: 66,
                    name: '66. Để học Flexbox tốt hơn bạn nên xem video này',
                    icon: 'fas fa-play-circle',
                    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/Ma8q2RYH5qY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                }
            ]
        },
        {
            stt: 11,
            title: 'Quy ước đặt tên class BEM',
            lession: [
                {
                    id: 67,
                    name: '67. BEM là gì?',
                    icon: 'fas fa-play-circle',
                    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/v1hSncGZg24" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                    practice: 'flex'
                },
                {
                    id: 68,
                    name: '68. Thực hành BEM - Level 1',
                    icon: 'fas fa-play-circle',
                    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/k1ZH5Mlj3tw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                },
                {
                    id: 69,
                    name: '69. Bài thực hành Level 2',
                    icon: 'fas fa-play-circle',
                    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/7c7ABhaQJGM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                },
                {
                    id: 70,
                    name: '70. Đặt tên class khi Block lồng nhau',
                    icon: 'fas fa-play-circle',
                    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/IddL557icoc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                }
            ]
        },
        {
            stt: 12,
            title: 'Xây dựng web Shopee',
            lession: [
                {
                    id: 71,
                    name: '71. Dựng base source',
                    icon: 'fas fa-play-circle',
                    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/1xNzl5SYjPo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                },
                {
                    id: 72,
                    name: '72. Reset CSS',
                    icon: 'fas fa-play-circle',
                    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/1mSomwO9NcI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                },
                {
                    id: 73,
                    name: '73. Dựng base CSS',
                    icon: 'fas fa-play-circle',
                    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/9DTlSDIS5rI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                },
                {
                    id: 74,
                    name: '74. Dựng khung web',
                    icon: 'fas fa-play-circle',
                    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/-umvdHAfR6E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                },
                {
                    id: 75,
                    name: '75. Navbar CSS',
                    icon: 'fas fa-play-circle',
                    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/x7l0JX68XyA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                },
                {
                    id: 76,
                    name: '76. Nhúng Font-Icons',
                    icon: 'fas fa-play-circle',
                    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/28zvYME7TuU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                },
                {
                    id: 77,
                    name: '77. Icons CSS',
                    icon: 'fas fa-play-circle',
                    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/2v24FwGdn8w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                },
                {
                    id: 78,
                    name: '78. Header QR code CSS',
                    icon: 'fas fa-play-circle',
                    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/_67MGXg3f2E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                },
                {
                    id: 79,
                    name: '79. Header notification CSS - Phần 1',
                    icon: 'fas fa-play-circle',
                    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/EoZbufb1DpA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                },
                {
                    id: 80,
                    name: '80. Header notification CSS - Phần 2',
                    icon: 'fas fa-play-circle',
                    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/q-L7slRcrp0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                },
                {
                    id: 81,
                    name: '81. Header notification CSS - Phần 3',
                    icon: 'fas fa-play-circle',
                    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/WcDXuQK9Miw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                },
                {
                    id: 82,
                    name: '82. Header notification CSS - Phần 4',
                    icon: 'fas fa-play-circle',
                    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/0F1nznhqFLM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                },
                {
                    id: 83,
                    name: '83. Base modal',
                    icon: 'fas fa-play-circle',
                    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/SzsOXXYNVaY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                },
                {
                    id: 84,
                    name: '84. Dựng khung form đăng ký',
                    icon: 'fas fa-play-circle',
                    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/8AN4u5P08AA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                },
                {
                    id: 85,
                    name: '85. CSS form đăng ký',
                    icon: 'fas fa-play-circle',
                    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/F2cFG5Gwy4g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                },
                {
                    id: 86,
                    name: '86. CSS form đăng ký - Phần 2',
                    icon: 'fas fa-play-circle',
                    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/OrkqigXQQ7M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                },
                {
                    id: 87,
                    name: '87. CSS form đăng nhập',
                    icon: 'fas fa-play-circle',
                    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/MiJeRDeqoaM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                },
                {
                    id: 88,
                    name: '88. Modal animation',
                    icon: 'fas fa-play-circle',
                    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/SSve_WMpQsE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                },
                {
                    id: 89,
                    name: '89. Dựng khung phần tìm kiếm',
                    icon: 'fas fa-play-circle',
                    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/DgNLJ9DqMdY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                },
                {
                    id: 90,
                    name: '90. Header tìm kiếm CSS',
                    icon: 'fas fa-play-circle',
                    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/7yQLu_ZAJU4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                },
                {
                    id: 91,
                    name: '91. Lịch sử tìm kiếm CSS',
                    icon: 'fas fa-play-circle',
                    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/wbCwt7IjxJw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                },
                {
                    id: 92,
                    name: '92. Header giỏ hàng trống CSS',
                    icon: 'fas fa-play-circle',
                    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/9qwSqLYKj38" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                },
                {
                    id: 93,
                    name: '93. Header cart badge',
                    icon: 'fas fa-play-circle',
                    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/z_RTV3Xxq-I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                },
                {
                    id: 94,
                    name: '94. Header cart - List products',
                    icon: 'fas fa-play-circle',
                    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/uGXwLlGeJ6E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                },
                {
                    id: 95,
                    name: '95. Header user info',
                    icon: 'fas fa-play-circle',
                    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/-KrqckTuUGU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                },
                {
                    id: 96,
                    name: '96. Header fix UI bugs',
                    icon: 'fas fa-play-circle',
                    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/TulFgYqnIFc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                },
                {
                    id: 97,
                    name: '97. Danh mục: Dựng khung',
                    icon: 'fas fa-play-circle',
                    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/9_9X9GzVOj0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                },
                {
                    id: 98,
                    name: '98. Danh mục: Base responsive',
                    icon: 'fas fa-play-circle',
                    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/f4LOGq3v0C0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                },
                {
                    id: 99,
                    name: '99. Danh mục CSS',
                    icon: 'fas fa-play-circle',
                    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/0U_NF5lSkdY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                },
                {
                    id: 100,
                    name: '100. Dựng khung: Sắp xếp sản phẩm',
                    icon: 'fas fa-play-circle',
                    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/N7T_9a1nZmk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                },
                {
                    id: 101,
                    name: '101. CSS: Sắp xếp sản phẩm',
                    icon: 'fas fa-play-circle',
                    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/y4XVfSDE_HA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                },
                {
                    id: 102,
                    name: '102. Dựng khung sản phẩm',
                    icon: 'fas fa-play-circle',
                    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/3oxSz7ctzrg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                },
                {
                    id: 103,
                    name: '103. Sản phẩm CSS',
                    icon: 'fas fa-play-circle',
                    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/3E_8Pnjnrms" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                },
                {
                    id: 104,
                    name: '104. Sản phẩm CSS - Phần 2',
                    icon: 'fas fa-play-circle',
                    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/G9Lx0ejUgzE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                },
                {
                    id: 105,
                    name: '105. Sản phẩm CSS - Phần 3',
                    icon: 'fas fa-play-circle',
                    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/bDOli8qw9U0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                },
                {
                    id: 106,
                    name: '106. Sản phẩm: CSS nhãn yêu thích',
                    icon: 'fas fa-play-circle',
                    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/yAeFXVxKrGA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                },
                {
                    id: 107,
                    name: '107. Sản phẩm: CSS nhãn giảm giá',
                    icon: 'fas fa-play-circle',
                    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/XL0RM7ZMKC8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                },
                {
                    id: 108,
                    name: '108. Hoàn thiện phần sản phẩm',
                    icon: 'fas fa-play-circle',
                    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/z72B8zpAsu4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                },
                {
                    id: 109,
                    name: '109. Fix UI bugs - Phần 2',
                    icon: 'fas fa-play-circle',
                    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/SJRQ99CYhvw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                },
                {
                    id: 110,
                    name: '110. Pagination UI',
                    icon: 'fas fa-play-circle',
                    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/cGe6IzIPBDI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                },
                {
                    id: 111,
                    name: '111. Dựng khung Footer',
                    icon: 'fas fa-play-circle',
                    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/9y4Zi53Ja3Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                },
                {
                    id: 112,
                    name: '112. Footer CSS',
                    icon: 'fas fa-play-circle',
                    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/qK3TvL4bp1o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                },

            ]
        },
        {
            stt: 13,
            title: 'Tự bay với đôi cánh của bạn',
            lession: [
                {
                    id: 113,
                    name: '113. Giới thiệu chương',
                    icon: 'fas fa-play-circle',
                    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/Q3YJHNT3dVo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                    practice: 'flex'
                }
            ]
        },
    ],

    // Render
    render: function () {
        const lessionsHtmls = this.lessions.map(function (data,index) {
            if(data.stt) {
                var lengthItem = data.lession.length
            }
            const testdata = data.lession.map(function(item,index) {
                return `
                <div class="page__js-course-app-list-content-item" dataset = ${item.id}>
                    <div class="page__js-course-app-list-content-item-icon">
                        <i class="fas fa-check"></i>
                    </div>
                    <div class="page__js-course-app-list-content-item-link">
                        <span class="page__js-course-app-list-content-item-text">${item.name}</span>
                        <span class="page__js-course-app-list-content-item-time">
                        <i class="${item.icon}"></i>
                        04:20
                        </span>
                    </div>
                </div>
                <div class="page__js-course-app-list-content-practice" style="display: ${item.practice};">
                    <span class="page__js-course-app-list-content-practice-text">Bài tập</span>
                    <div class="page__js-course-app-list-content-practice-icon">
                        <i class="fas fa-check"></i>
                    </div>
                    <div class="page__js-course-app-list-content-practice-icon">
                        <i class="fas fa-check"></i>
                    </div>
                </div>
                    `
                })

                return `
                <div class="">
                <div class="page__js-course-app-list-content-title">
                <span class="page__js-course-app-list-content-title-heading">Phần ${data.stt}: ${data.title}</span>
                    <div class="page__js-course-app-list-content-title-description">
                    <span class="page__js-course-app-list-content-title-current-course">${lengthItem}/${lengthItem} | 06:28</span>
                    </div>
                    </div>
                    ${testdata.join('')}
                    </div>
                    `
                })
                
                lessionsList.innerHTML = lessionsHtmls.join('')
                
                
    },

    // Load iframe video
    loadLinkCourse: function() {
        const _this = this
        lessionsList.onclick = function(e) {
            _this.lessions.map(function(data) {
                data.lession.map(function(item) {
                    // console.log(youtubes)
                    const courseNode = e.target.closest('.page__js-course-app-list-content-item')
                    const courseNodeNumber = Number(courseNode.getAttribute("dataset"))
                    if(courseNode && item.id === courseNodeNumber) {
                        if(item.iframe != '') {
                            courseVideoContent.innerHTML = item.iframe
                            // console.log((item.iframe).getDuration())
                        }
                    }
                })
            })
        }
    },
    
    
    // Run
    start: function () {
        this.loadLinkCourse()
        this.render()
    }
}

lessionApp.start()


// comment

const inputComment = document.querySelector('.page__js-course-app-video-description-comment-input')
const handleComment = document.querySelector('.page__js-course-app-video-description-comment-handle-descript')
const exitComment = document.querySelector('.page__js-course-app-video-description-comment-cancle')
const completeComment =document.querySelector('.page__js-course-app-video-description-comment-complete')

inputComment.onfocus = function() {
    handleComment.style.display = 'flex'
}

exitComment.onclick = function() {
    handleComment.style.display = 'none';
    inputComment.value = '';
    completeComment.style.backgroundColor = ''
}

inputComment.addEventListener('input', function(e) {
    if(e.target.value != '') {
        completeComment.style.backgroundColor = 'var(--primary-color)'
    } else {
        completeComment.style.backgroundColor = ''
    }
})


// Comment

const commentList = document.querySelector('.page__js-course-app-video-comment-app-wrap')

const commentApp = {
    comments: [
        {
            img: 'https://graph.facebook.com/443641620272752/picture?width=400&height=400" class="page__js-course-app-video-comment-app-user-img',
            name: 'Hoàng Anh',
            content: 'Cảm ơn anh Sơn đã xây dựng khóa học hay như vậy'
        },
        {
            img: 'https://fullstack.edu.vn/assets/images/nobody_m.256x256.jpg',
            name: 'Linh Tran',
            content: 'Sao a Sơn phát âm ra nhiều gió nghe hay thế ạ?'
        },
        {
            img: 'https://avatar-redirect.appspot.com/google/112851236903414529818?size=400',
            name: 'Kỳ Lê Xuân',
            content: 'bài khá dễ hiểu, học bài mới và cũng ôn luôn bài cũ, các bài có sự liên quan đến nhau'
        },
        {
            img: 'https://avatar-redirect.appspot.com/google/107464967909874209882?size=400',
            name: 'Hiệp Trần',
            content: 'Cho mình hỏi khóa học này miễn phí ạ? Sao lại có sự vô lý vậy nhỉ??'
        },
        {
            img: 'https://avatar-redirect.appspot.com/google/112609385398904073084?size=400',
            name: 'Viễn Đông',
            content: 'càng học càng cuốn ae ạ'
        },
        {
            img: 'https://avatar-redirect.appspot.com/google/113220886729801824688?size=400',
            name: 'Văn Lăng Nguyễn',
            content: 'Mọi người cho mình hỏi làm sao để code xong bên chrom nó hiện luôn như của a sơn vậy. Mình toàn ctrol+S sau đó qua web bấm F5 mới được.'
        },
        {
            img: 'https://avatar-redirect.appspot.com/google/114930983328114536231?size=400',
            name: 'Đào Tấn Hào',
            content: 'anh chị giúp em bài 2 với ạ, em làm hoài không hiểu đc...'
        },
        {
            img: 'https://graph.facebook.com/2556110291361032/picture?width=400&height=400',
            name: 'Hyng Minh',
            content: 'còn chia lấy phần nguyên là như nào anh'
        },
    ],

    render: function() {
        const commnetHtmls = this.comments.map(function(data) {
            return `
            <div class="page__js-course-app-video-comment-app-item">
                <img src="${data.img}" class="page__js-course-app-video-comment-app-user-img"></img>
                <div class="page__js-course-app-video-comment-app-item-content-wrap">
                    <div class="page__js-course-app-video-comment-app-item-content">
                        <h3 class="page__js-course-app-video-comment-app-item-name">${data.name}</h3>
                        <span class="page__js-course-app-video-comment-app-item-content-text">${data.content}</span>
                    </div>
                    <div class="page__js-course-app-video-comment-app-item-content-handle">
                        <span class="page__js-course-app-video-comment-app-item-content-handle-text">Thích</span>
                        <span class="page__js-course-app-video-comment-app-item-content-handle-text">Trả lời</span>
                        <span class="page__js-course-app-video-comment-app-item-content-handle-date">2 tháng trước</span>
                        <i class="fas fa-ellipsis-h"></i>
                    </div>
                </div>
            </div>
            `
        })

        commentList.innerHTML = commnetHtmls.join('')


    },

    start: function() {
        this.render()
    }

}

commentApp.start()

// Description

const tabsDescription = document.querySelectorAll('.description-tab')
const panesDescription = document.querySelectorAll('.description-pane')

tabsDescription.forEach(function(tab, index) {
    const pane = panesDescription[index]
    // console.log(pane)
    tab.onclick = function() {
        document.querySelector('.description-tab.isclick').classList.remove('isclick')
        document.querySelector('.description-pane.isopen-description').classList.remove('isopen-description')

        this.classList.add('isclick')
        pane.classList.add('isopen-description')
    }
})