const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
console.log(document.URL);

// header focus on inputelement and click information
const headerInputElement = $(".header__search-wrap input");
const rootElement = $(".app__wrap");
const bellBtn = $(".header__information-notify");
const boxNotify = $(".header__information-notify-box");
const inforImg = $(".header__information-img");
const boxUser = $(".header__information-user-box");

bellBtn.onclick = function () {
  boxNotify.classList.toggle("isopen");
};

bellBtn.addEventListener("click", function (e) {
  e.stopPropagation();
});

boxNotify.addEventListener("click", function (e) {
  e.stopPropagation();
});

headerInputElement.onfocus = function () {
  $(".header__search-wrap").style.border = "1px solid var(--primary-color)";
};
rootElement.onclick = function () {
  $(".header__search-wrap").style.border = "1px solid rgba(0, 0, 0, 0.1)";
  // Close boxNotify when click app
  boxNotify.classList.remove("isopen");
  // Close userBox when click app
  boxUser.classList.remove("isopen");
  // Close addBox
  addIcon.classList.remove("isrotate");
  boxAdd.classList.remove("isopen");
};

headerInputElement.addEventListener("click", function (e) {
  e.stopPropagation();
});

// Click infor
inforImg.onclick = function () {
  boxUser.classList.toggle("isopen");
};

inforImg.addEventListener("click", function (e) {
  e.stopPropagation();
});

boxUser.addEventListener("click", function (e) {
  e.stopPropagation();
});

// Add js

const addBtn = $(".page__sidebar-add-item-link");
const addIcon = $(".page__sidebar-add-item-icon");
const boxAdd = $(".page__sidebar-add-box");

addBtn.onclick = function () {
  addIcon.classList.toggle("isrotate");
  boxAdd.classList.toggle("isopen");
};

addBtn.addEventListener("click", function (e) {
  e.stopPropagation();
});

boxAdd.addEventListener("click", function (e) {
  e.stopPropagation();
});

// App
const blogsList = document.querySelector(".page__blog-content-main");

const blogApp = {
  blogs: [
    {
      name: "Long Nguyen",
      userImg:
        "https://avatar-redirect.appspot.com/google/115663409059082752836?size=400",
      heading: "[Phần 1]Routing trong reactjs",
      content:
        "Hôm nay chúng ta sẽ cùng nhau tìm hiểu cách routing trong reactjs qua thư viện react-router-dom. Hy vọng được thảo luận cùng anh em f8 đang học reactjs. Không đ...",
      img: "https://files.fullstack.edu.vn/f8-prod/blog_posts/1027/6174b33191e7d.png",
      date: 3,
      time: 5,
    },
    {
      name: "Long Nguyen",
      heading: "Lập trình hướng đối tượng oop",
      userImg:
        "https://avatar-redirect.appspot.com/google/115663409059082752836?size=400",
      content:
        "Hôm nay mình sẽ chia sẻ 1 chủ đề vô cùng quen thuộc với hầu hết các lập trình viên - Lập trình hướng đối tượng(định nghĩa, 4 tính chất oop, ví dụ demo). Hy vọng...",
      img: "https://files.fullstack.edu.vn/f8-prod/blog_posts/1021/6173be682d527.jpg",
      date: 4,
      time: 9,
    },
    {
      name: "Sơn Đặng",
      heading: "[Vlog] Review tất cả đồ mình sử dụng cho F8",
      userImg:
        "https://files.fullstack.edu.vn/f8-prod/user_avatars/1/6207343556533.png",
      content:
        "Chào các bạn, mình mới ra video giới thiệu về các đồ đạc mình có sử dụng phục cho việc làm video trên...",
      img: "https://files.fullstack.edu.vn/f8-prod/blog_posts/989/616fc0a5c6192.jpg",
      date: 7,
      time: 2,
    },
    {
      name: "Long Nguyen",
      userImg:
        "https://avatar-redirect.appspot.com/google/115663409059082752836?size=400",
      heading: "[Cơ bản] Life cycle của Component trong Reactjs",
      content: "Chào anh Sơn và...",
      img: "https://files.fullstack.edu.vn/f8-prod/blog_posts/923/6169a3ea51b04.png",
      date: 12,
      time: 3,
    },
    {
      name: "Lê Thành Trung",
      userImg: "https://fullstack.edu.vn/assets/images/nobody_m.256x256.jpg",
      heading: "Tổng hợp các tài liệu học Flutter - Tự học",
      content:
        "Hello các bạn, nếu như bạn đang chán làm mảng dev web hoặc muốn đổi gió qua mảng dev mobile. Mình nghĩ bạn có thể thử sử dùng...",
      img: "https://files.fullstack.edu.vn/f8-prod/blog_posts/773/6163ef9082e42.png",
      date: 15,
      time: 4,
    },
    {
      name: "Name H",
      userImg: "https://fullstack.edu.vn/assets/images/nobody_m.256x256.jpg",
      heading: "Những cách để tiến bộ vượt bậc trong lĩnh vực IT 😜",
      content:
        "Hi, xin chào các bác lại là mình đây, dạo này hơi bận rộn công việc nên cũng ko có nhiều thời gian để viết blog 😅",
      img: "https://files.fullstack.edu.vn/f8-prod/blog_posts/881/61647ca8983cf.png",
      date: 16,
      time: 4,
    },
    {
      name: "Minh Nguyen Quang",
      userImg: "https://fullstack.edu.vn/assets/images/nobody_m.256x256.jpg",
      heading: 'Lịch sử ra đời "kì lạ" của Javascript?',
      content:
        "Một sai lầm mà nhiều người đang mắc phải khi nghe đến cái tên JAVAscript đó là nghĩ rằng, giữa JS và Java có sự tương đồng nào đó....",
      img: "https://files.fullstack.edu.vn/f8-prod/blog_posts/859/6163bd0a46e3c.jpg",
      date: 16,
      time: 12,
    },
    {
      name: "Long HD",
      userImg:
        "https://avatar-redirect.appspot.com/google/107399353614086722090?size=400",
      heading: "TyperScrip là gì, Vì sao nên dùng TyperScript",
      content:
        "Typescript là một dự án mã nguồn mở được Microsoft phát triển, được xem là một phiên bản nâng cao của Javascript...",
      img: "https://files.fullstack.edu.vn/f8-prod/blog_posts/1073/6179eca8efb18.jpg",
      date: 17,
      time: 7,
    },
    {
      name: "Tien Pham Ngoc",
      userImg:
        "https://avatar-redirect.appspot.com/google/110021593610685676732?size=400",
      heading: "Học như thế nào là phù hợp ?",
      content:
        "Mình xin chia sẽ cách học hiệu qua của mình khi học ở F8 một thời gian !",
      img: "https://f40-zpg.zdn.vn/6414417963368895323/8af558e3d88910d74998.jpg",
      date: 21,
      time: 4,
    },
    {
      name: "Văn Khải",
      userImg: "https://fullstack.edu.vn/assets/images/nobody_m.256x256.jpg",
      heading: "Các Đơn vị trong CSS",
      content:
        "xin chào mọi người nha, lại là KiMiDev đây, hôm nay mình xin chia sẽ cho mọi người một chúc kiến thức về các đơn vị...",
      img: "https://files.fullstack.edu.vn/f8-prod/blog_posts/785/615d79fe6078c.jpg",
      date: 21,
      time: 4,
    },
    {
      name: "Quang Trần Anh",
      userImg: "https://fullstack.edu.vn/assets/images/nobody_m.256x256.jpg",
      heading: "Tailwind css và cách cài đặt cơ bản",
      content:
        "Bạn đang lo lắng vì đặt tên class, sợ bị trùng css không mong muốn, hay muốn một framework hỗ trợ css dễ học mà dễ tùy biến theo ý thích đã có tailwind css...",
      img: "https://files.fullstack.edu.vn/f8-prod/blog_posts/1653/61b46a3d757cc.png",
      date: 23,
      time: 4,
    },
  ],

  render: function () {
    const blogHtmls = this.blogs.map(function (data) {
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
            `;
    });

    blogsList.innerHTML = blogHtmls.join("");
  },

  start: function () {
    this.render();
  },
};

blogApp.start();

var testLink = document.getElementsByTagName("a");

const testWarn = document.querySelector(".test-warn");
// testLink = [testLink]
console.log(testLink.length);
for (let i = 0; i < testLink.length; i++) {
  const testLinks = testLink[i];
  if (
    testLinks.getAttribute("href") === "undefined" ||
    testLinks.getAttribute("href") === ""
  ) {
    testLinks.setAttribute("href", "#");
    testLinks.addEventListener("click", function (e) {
      e.preventDefault();
    });
  }

  testLinks.onclick = function () {
    if (testLinks.getAttribute("href") === "#") {
      // testWarn.style.display = 'block'
      // setTimeout(function() {
      // testWarn.style.display = 'none'

      // },3000)
      alert();
    }
  };
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

const menuRespon = document.querySelector(".header__icon-menu");
const sidebarRespon = document.querySelector(".side__bar-respon");
const sidebarLeft = document.querySelector(".side__bar-respon-left");
const exitSibar = document.querySelector(".side__bar-respon-right");

menuRespon.onclick = function () {
  sidebarRespon.classList.add("iscover-fill");
  sidebarLeft.classList.add("isopen-sidebar-respon");
};

exitSibar.onclick = function () {
  sidebarRespon.classList.remove("iscover-fill");
  sidebarLeft.classList.remove("isopen-sidebar-respon");
};
