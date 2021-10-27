const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
console.log(document.URL)

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



// App
const blogsList = document.querySelector('.page__blog-content-main')

const blogApp = {
    blogs: [
        {
            name: 'Long Nguyen',
            userImg: 'https://avatar-redirect.appspot.com/google/115663409059082752836?size=400',
            heading: '[Phần 1]Routing trong reactjs',
            content: 'Hôm nay chúng ta sẽ cùng nhau tìm hiểu cách routing trong reactjs qua thư viện react-router-dom. Hy vọng được thảo luận cùng anh em f8 đang học reactjs. Không đ...',
            img: 'https://cdn.fullstack.edu.vn/f8-learning/blog_posts/1027/6174b331c4b4f.png',
            date: 3,
            time: 5,
        },
        {
            name: 'Long Nguyen',
            heading: 'Lập trình hướng đối tượng oop',
            userImg: 'https://avatar-redirect.appspot.com/google/115663409059082752836?size=400',
            content: 'Hôm nay mình sẽ chia sẻ 1 chủ đề vô cùng quen thuộc với hầu hết các lập trình viên - Lập trình hướng đối tượng(định nghĩa, 4 tính chất oop, ví dụ demo). Hy vọng...',
            img: 'https://cdn.fullstack.edu.vn/f8-learning/blog_posts/1021/6173be68944ad.jpg',
            date: 4,
            time: 9,
        },
        {
            name: 'Sơn Đặng',
            heading: '[Vlog] Review tất cả đồ mình sử dụng cho F8',
            userImg: 'https://cdn.fullstack.edu.vn/f8-learning/user_avatars/1/615f31cb28848.jpg',
            content: 'Chào các bạn, mình mới ra video giới thiệu về các đồ đạc mình có sử dụng phục cho việc làm video trên...',
            img: 'https://cdn.fullstack.edu.vn/f8-learning/blog_posts/989/616fc1ee52039.jpg',
            date: 7,
            time: 2,
        },
        {
            name: 'Long Nguyen',
            userImg: 'https://avatar-redirect.appspot.com/google/115663409059082752836?size=400',
            heading: '[Cơ bản] Life cycle của Component trong Reactjs',
            content: 'Chào anh Sơn và...',
            img: 'https://cdn.fullstack.edu.vn/f8-learning/blog_posts/923/6169a3eaa8c07.png',
            date: 12,
            time: 3,
        },
        {
            name: 'Lê Thành Trung',
            userImg: 'https://cdn.fullstack.edu.vn/f8-learning/user_avatars/74901/6172af710d6d3.jpg',
            heading: 'Tổng hợp các tài liệu học Flutter - Tự học',
            content: 'Hello các bạn, nếu như bạn đang chán làm mảng dev web hoặc muốn đổi gió qua mảng dev mobile. Mình nghĩ bạn có thể thử sử dùng...',
            img: 'https://cdn.fullstack.edu.vn/f8-learning/blog_posts/773/6163ef9124d20.png',
            date: 15,
            time: 4,
        },
        {
            name: 'Name H',
            userImg: 'https://cdn.fullstack.edu.vn/f8-learning/user_avatars/101984/6165c2447dd50.jpg',
            heading: 'Những cách để tiến bộ vượt bậc trong lĩnh vực IT 😜',
            content: 'Hi, xin chào các bác lại là mình đây, dạo này hơi bận rộn công việc nên cũng ko có nhiều thời gian để viết blog 😅',
            img: 'https://cdn.fullstack.edu.vn/f8-learning/blog_posts/881/61647ca915ede.png',
            date: 16,
            time: 4,
        },
        {
            name: 'Minh Nguyen Quang',
            userImg: 'https://cdn.fullstack.edu.vn/f8-learning/user_avatars/4557/6163be5db7611.png',
            heading: 'Lịch sử ra đời "kì lạ" của Javascript?',
            content: 'Một sai lầm mà nhiều người đang mắc phải khi nghe đến cái tên JAVAscript đó là nghĩ rằng, giữa JS và Java có sự tương đồng nào đó....',
            img: 'https://cdn.fullstack.edu.vn/f8-learning/blog_posts/859/6163bd0aa40ca.jpg',
            date: 16,
            time: 12,
        },
        {
            name: 'Võ Minh Kha',
            userImg: 'https://cdn.fullstack.edu.vn/f8-learning/user_avatars/18159/61643a2b36731.jpg',
            heading: 'Ecommerce Website Part  3 ( Mern Stack Project ): Xây dựng Signup và Signin (Backend)',
            content: 'Chào các bạn, cũng một thời gian khá lâu rồi hôm nay lại lên F8 viết tiếp Part 3 chia sẻ với mọi người. Mình là Kha, một thành...',
            img: 'https://cdn.fullstack.edu.vn/f8-learning/blog_posts/811/6162b8c6b1e31.png',
            date: 17,
            time: 7,
        },
        {
            name: 'Tien Pham Ngoc',
            userImg: 'https://avatar-redirect.appspot.com/google/110021593610685676732?size=400',
            heading: 'Học như thế nào là phù hợp ?',
            content: 'Mình xin chia sẽ cách học hiệu qua của mình khi học ở F8 một thời gian !',
            img: 'https://cdn.fullstack.edu.vn/f8-learning/blog_posts/791/615de64e3f449.jpg',
            date: 21,
            time: 4,
        },
        {
            name: 'Văn Khải',
            userImg: 'https://fullstack.edu.vn/assets/images/nobody_m.256x256.jpg',
            heading: 'Các Đơn vị trong CSS',
            content: 'xin chào mọi người nha, lại là KiMiDev đây, hôm nay mình xin chia sẽ cho mọi người một chúc kiến thức về các đơn vị...',
            img: 'https://cdn.fullstack.edu.vn/f8-learning/blog_posts/785/615d79ff4a068.jpg',
            date: 21,
            time: 4,
        },
        {
            name: 'Võ Minh Kha',
            userImg: 'https://cdn.fullstack.edu.vn/f8-learning/user_avatars/18159/61643a2b36731.jpg',
            heading: 'Ecommerce Website Part 2 ( Mern Stack Project ): Kết nối với MongoDB',
            content: 'Chào các bạn trên cộng đồng F8, mình là Kha một thành viên trong cộng đồng Học lập trình web (F8 - Fullstack.edu.vn). Hôm nay mình...',
            img: 'https://cdn.fullstack.edu.vn/f8-learning/blog_posts/761/615b03b8310d5.png',
            date: 23,
            time: 4,
        }
    ],

    render: function() {
        const blogHtmls = this.blogs.map(function(data) {
            return `
            <div class="page__blog-content-main-item">
                <div class="page__blog-content-main-item-header">
                    <div class="page__blog-content-main-item-header-left">
                        <img src="${data.userImg}" alt="" class="page__blog-content-main-item-header-user">
                        <strong>${data.name}</strong>
                    </div>

                    <div class="page__blog-content-main-item-header-right">
                        <i class="far fa-bookmark"></i>
                        <i class="fas fa-ellipsis-h"></i>
                    </div>
                </div>

                <div class="page__blog-content-main-item-content">
                    <div class="page__blog-content-main-item-content-heading">
                        <h3>${data.heading}</h3>
                        <span>${data.content}</span>
                    </div>
                    <div class="page__blog-content-main-item-img">
                        <img src="${data.img}" alt="">
                    </div>
                </div>


                <div class="page__blog-content-main-item-footer">
                    <span>${data.date} ngày trước</span>
                    <span>${data.time} phút đọc</span>
                </div>
            </div>
            `
        })

        blogsList.innerHTML = blogHtmls.join('')
    },

    start: function() {
        this.render()
    }
}

blogApp.start()


var testLink = document.getElementsByTagName('a')

const testWarn = document.querySelector('.test-warn')
// testLink = [testLink]
console.log(testLink.length)
for(let i = 0; i < testLink.length; i++) {
    const testLinks = testLink[i]
    if(testLinks.getAttribute('href') === "undefined" || testLinks.getAttribute('href') === "") {
        testLinks.setAttribute("href", "#")
        testLinks.addEventListener('click', function(e) {
            e.preventDefault()
        })
    }

    testLinks.onclick = function() {
        if(testLinks.getAttribute('href') === '#') {
            // testWarn.style.display = 'block'
            // setTimeout(function() {
            // testWarn.style.display = 'none'

            // },3000)
            alert()
        }
    }
}


// const pageContent = document.querySelector('.page__content')
// var testLink = pageContent.getElementsByTagName('a')

// const noticeWarn = document.querySelector('#notice')
// for(let i = 0; i < testLink.length; i++) {
//     const testLinks = testLink[i]
//     if(testLinks.getAttribute('href') === "undefined" || testLinks.getAttribute('href') === "") {
//         testLinks.setAttribute("href", "#")
//         testLinks.addEventListener('click', function(e) {
//             e.preventDefault()
//         })
//     }

//     testLinks.onclick = function() {
//         if(testLinks.getAttribute('href') === '#') {
//             const warning = document.createElement('div')
//             warning.classList.add('notice__warn');
//             warning.innerHTML = `
//                 <div class="notice__warn-icon">
//                     <i class="fas fa-exclamation-circle"></i>
//                 </div>
//                 <div class="notice__warn-content">
//                     <h3 class="notice__warn-heading">Thông báo</h3>
//                     <span class="notice__warn-message">Nội dung đang trong quá trình hoàn thiện !</span>
//                 </div>
//             `
//             noticeWarn.appendChild(warning)

//             setTimeout(function() {
//                 noticeWarn.removeChild(warning)
//             },2500)
//         }
//     }
// }