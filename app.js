const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
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

// Sidebar active

// Slider render

const sliderList = $(".page__content-slider-list");

const sliderContent = [
  {
    heading: "Thành quả của học viên",
    description:
      "Để đạt được kết quả tốt trong mọi việc ta cần xác định mục tiêu rõ ràng cho việc đó. Học lập trình cũng không là ngoại lệ.",
    link: "https://fullstack.edu.vn/blog/tong-hop-cac-san-pham-cua-hoc-vien-tai-f8.html",
    img: "https://files.fullstack.edu.vn/f8-prod/banners/Banner_01_2.png",
    button: "Xem thành quả",
    background:
      "linear-gradient(to right, rgb(118, 18, 255), rgb(5, 178, 255));",
    hover: "background-color: var(--white-color);",
    colorText: "#7612ff",
  },
  {
    heading: "F8 trên Youtube",
    description:
      "F8 được nhắc tới ở mọi nơi, ở đâu có cơ hội việc làm cho nghề IT và có những con người yêu thích lập trình F8 sẽ ở đó.",
    link: "https://www.youtube.com/channel/UCNSCWwgW-rwmoE3Yc4WmJhw",
    img: "https://files.fullstack.edu.vn/f8-prod/banners/Banner_03_youtube.png",
    button: "Truy cập kênh",
    background:
      "linear-gradient(to right, rgb(254, 33, 94), rgb(255, 148, 2));",
    hover: "background-color: var(--white-color);",
    colorText: "#fe215e",
  },
  {
    heading: "F8 trên Facebook",
    description:
      "F8 được nhắc tới ở mọi nơi, ở đâu có cơ hội việc làm cho nghề IT và có những con người yêu thích lập trình F8 sẽ ở đó.",
    link: "https://www.facebook.com/groups/649972919142215",
    img: "https://files.fullstack.edu.vn/f8-prod/banners/Banner_04_2.png",
    button: "Truy cập nhóm",
    background:
      "linear-gradient(to right, rgb(0, 126, 254), rgb(6, 195, 254));",
    hover: "background-color: var(--white-color);",
    colorText: "#007efe",
  },
];

const htmlsSlider = sliderContent.map(function (content, index) {
  return `
        <div class="page__content-slider-item" style="background: ${content.background};" data-index="${index}">
            <div class="page__content-slider-item-content">
                <h2 class="page__content-slider-item-heading">${content.heading}</h2>
                <p class="page__content-slider-item-description">${content.description}</p>
                <a href="${content.link}" class="page__content-slider-item-link" onpointerover="this.style.color= '${content.colorText}'" onpointerout="this.style.color='white'">${content.button}</a>
            </div>
            <div class="page__content-slider-img-wrap">
                <img src="${content.img}" alt="" class="page__content-slider-img">
            </div>
        </div>
    `;
});

sliderList.innerHTML = htmlsSlider.join("");

// Slider handle

const nextBtn = $(".page__content-slider-btn-next");
const prevBtn = $(".page__content-slider-btn-prev");
const slide = $(".page__content-slider-item");

let sliderItemElement = $$(".page__content-slider-item");
let index = 0;
let slideId;

const firstClone = sliderItemElement[0].cloneNode(true);
const lastClone =
  sliderItemElement[sliderItemElement.length - 1].cloneNode(true);

firstClone.id = "slider__first-clone";
lastClone.id = "slider__last-clone";

sliderList.append(firstClone);
// sliderList.append(lastClone)

const sliderWidth = 100;
const slicks = $$(".page__content-slider-slickdot li");

// Slider slickdot

const slickHandle = function () {
  for (let i = 0; i < slicks.length; i++) {
    if (i === index) {
      slicks[i].classList.add("slideractive");
    } else if (index === 3 || index === 0) {
      slicks[0].classList.add("slideractive");
      slicks[slicks.length - 1].classList.remove("slideractive");
    } else {
      slicks[i].classList.remove("slideractive");
    }
  }
};

const startSlider = () => {
  slideId = setInterval(() => {
    index++;
    sliderList.style.transform = `translateX(${-sliderWidth * index}px)`;
    sliderList.style.transition = "1s";
    slickHandle();
  }, 8000);
};

// startSlider()

sliderList.addEventListener("transitionend", () => {
  sliderItemElement = $$(".page__content-slider-item");
  if (sliderItemElement[index].id === firstClone.id) {
    sliderList.style.transition = "none";
    index = 0;
    sliderList.style.transform = `translateX(${-sliderWidth * index}%)`;
  }
});

const getSliderItem = () => {
  return (sliderItemElement = $$(".page__content-slider-item"));
};

const moveToNextSlide = () => {
  sliderItemElement = getSliderItem();
  if (index >= sliderItemElement.length - 1) return;
  index++;
  sliderList.style.transform = `translateX(${-sliderWidth * index}%)`;
  sliderList.style.transition = "1s";
};

const moveToPrevSlide = () => {
  if (index <= 0) return;
  index--;
  sliderList.style.transform = `translateX(${-sliderWidth * index}%)`;
  sliderList.style.transition = "1s";
};

nextBtn.addEventListener("click", () => {
  moveToNextSlide();
  slickHandle();
});
prevBtn.addEventListener("click", () => {
  moveToPrevSlide();
  for (let i = 0; i < slicks.length; i++) {
    if (i === index) {
      slicks[i].classList.add("slideractive");
    } else if (index === 3 || index === 0) {
      slicks[0].classList.add("slideractive");
      slicks[slicks.length - 1].classList.remove("slideractive");
      slicks[1].classList.remove("slideractive");
    } else {
      slicks[i].classList.remove("slideractive");
    }
  }
});

// nextBtn.addEventListener('pointerover', () => {
//     clearInterval(slideId)
// })
// nextBtn.addEventListener('pointerout', startSlider, slickHandle())

// prevBtn.addEventListener('pointerover', () => {
//     clearInterval(slideId)
// })
// prevBtn.addEventListener('pointerout', startSlider)

// Courses section
const courseList = $(".page__content-home-courses-list-wrap");
const courseNextBtn = $(".course-next-btn");
const coursePrevBtn = $(".course-prev-btn");
let indexCourses = 0;
const testScroll = $(".page__content-home-courses-list-cover");
const inputScroll = $(".testWidthScroll");

const coursesApp = {
  coursesWidth: 50,
  index: 0,
  courses: [
    {
      name: "Javascript cơ bản",
      img: "	https://cdn.fullstack.edu.vn/f8-production/courses/1.png",
      link: "./javascript-course.html",
    },
    {
      name: "HTML, CSS từ Zero đến Hero",
      img: "https://cdn.fullstack.edu.vn/f8-production/courses/5.png",
      link: "./html-css-course.html",
    },
    {
      name: "Don't Touch Your Face",
      img: "https://cdn.fullstack.edu.vn/f8-production/courses/4/61a9e9e701506.png",
    },
    {
      name: "Javascript nâng cao",
      img: "https://cdn.fullstack.edu.vn/f8-production/courses/12.png",
    },
    {
      name: "ReactJS",
      img: "https://cdn.fullstack.edu.vn/f8-production/courses/13/13.png",
    },
    {
      name: "Node & ExpressJS",
      img: "https://cdn.fullstack.edu.vn/f8-production/courses/6.png",
    },
    {
      name: "Kiến Thức Nhập Môn",
      img: "https://cdn.fullstack.edu.vn/f8-production/courses/7.png",
    },
    {
      name: "Responsive Với Grid System",
      img: "https://cdn.fullstack.edu.vn/f8-production/courses/3.png",
    },
    {
      name: "HTML, CSS Tips & Tricks",
      img: "https://cdn.fullstack.edu.vn/f8-production/courses/5.png",
    },
  ],

  // Render course
  render: function () {
    const htmlsCourse = this.courses.map((data) => {
      return `
            <div class="page__content-home-courses-item">
                <div class="grid__column">
                    <a href="${data.link}" class="page__content-home-courses-link">
                        <img src="${data.img}" alt="" class="page__content-home-courses-img">
                    </a>
                    <a href="${data.link}" class="page__content-home-courses-description">
                        <h3 class="page__content-home-courses-description-text">${data.name}</h3>
                    </a>
                </div>
            </div>
            `;
    });

    courseList.innerHTML = htmlsCourse.join("");
  },

  handleEvent: function () {
    const _this = this;
    // Click button next courses

    courseNextBtn.onclick = function () {
      _this.nextBtnClick();
      _this.nextBtnDisable();
      _this.prevBtnDisable();
    };
    // Click button prev courses

    coursePrevBtn.onclick = function () {
      _this.prevBtnClick();
      _this.prevBtnDisable();
      _this.nextBtnDisable();
    };
  },

  // Transform sourses list

  nextBtnClick: function () {
    const coursesWidth = $(".page__content-home-courses-item").clientWidth;
    const courseItems = $$(".page__content-home-courses-item");
    if (indexCourses <= courseItems.length / 3 - 1) {
      indexCourses++;
      courseList.style.transform = `translateX(${
        -coursesWidth * indexCourses * 2
      }px)`;
    }
  },

  prevBtnClick: function () {
    const coursesWidth = $(".page__content-home-courses-item").clientWidth;
    if (indexCourses > 0) {
      indexCourses--;
      courseList.style.transform = `translateX(${
        -coursesWidth * indexCourses * 2
      }px)`;
    }
  },

  // Disable Next and Prev button

  nextBtnDisable: function () {
    const courseItems = $$(".page__content-home-courses-item");
    if (indexCourses === courseItems.length / 3) {
      courseNextBtn.style.opacity = "0";
    } else if (indexCourses < courseItems.length / 3) {
      courseNextBtn.style.opacity = "1";
    }
  },

  prevBtnDisable: function () {
    if (indexCourses === 0) {
      coursePrevBtn.style.opacity = "0";
    } else if (indexCourses != 0) {
      coursePrevBtn.style.opacity = "1";
    }
  },
  start: function () {
    this.render();
    this.handleEvent();
    this.prevBtnDisable();
  },
};

coursesApp.start();

// Featured-post

const featuredPostList = $(".page__content-home-featured-post-list-wrap");
const featuredPostNextBtn = $(".featured-post-next-btn");
const featuredPostPrevBtn = $(".featured-post-prev-btn");
let indexfeaturedPost = 0;

const featuredPostApp = {
  featuredPostWidth: 50,
  index: 0,
  featuredPost: [
    {
      name: "[Vlog] Review tất cả đồ mình sử dụng cho F8",
      img: "https://files.fullstack.edu.vn/f8-prod/blog_posts/989/616fc0a5c6192.jpg",
      avatar:
        "https://files.fullstack.edu.vn/f8-prod/user_avatars/1/6207343556533.png",
      user: "Sơn Đặng",
      date: "2 ngày trước",
    },
    {
      name: "[Cơ bản] Life cycle của Component trong Reactjs",
      img: "https://files.fullstack.edu.vn/f8-prod/blog_posts/923/616999882d4d4.png",
      avatar:
        "https://avatar-redirect.appspot.com/google/115663409059082752836?size=400",
      user: "Long Nguyen",
      date: "6 ngày trước",
    },
    {
      name: "Tổng hợp các tài liệu học Flutter - Tự học",
      img: "https://files.fullstack.edu.vn/f8-prod/blog_posts/773/6163ef9082e42.png",
      avatar: "https://fullstack.edu.vn/assets/images/nobody_m.256x256.jpg",
      user: "Lê Thành Trung",
      date: "10 ngày trước",
    },
    {
      name: "Những cách để tiến bộ vượt bậc trong lĩnh vực IT 😜",
      img: "https://files.fullstack.edu.vn/f8-prod/blog_posts/881/61647ca8983cf.png",
      avatar: "https://fullstack.edu.vn/assets/images/nobody_m.256x256.jpg",
      user: "Name H",
      date: "10 ngày trước",
    },
    {
      name: 'Lịch sử ra đời "kì lạ" của Javascript?',
      img: "https://files.fullstack.edu.vn/f8-prod/blog_posts/859/6163bd0a46e3c.jpg",
      avatar: "https://fullstack.edu.vn/assets/images/nobody_m.256x256.jpg",
      user: "Minh Nguyen Quang",
      date: "11 ngày trước",
    },
    {
      name: "TyperScrip là gì, Vì sao nên dùng TyperScript",
      img: "https://files.fullstack.edu.vn/f8-prod/blog_posts/1073/6179eca8efb18.jpg",
      avatar:
        "https://avatar-redirect.appspot.com/google/107399353614086722090?size=400",
      user: "Long HD",
      date: "12 ngày trước",
    },
    {
      name: "Học như thế nào là phù hợp ?",
      img: "https://f40-zpg.zdn.vn/6414417963368895323/8af558e3d88910d74998.jpg",
      avatar:
        "https://avatar-redirect.appspot.com/google/110021593610685676732?size=400",
      user: "Tien Pham Ngoc",
      date: "15 ngày trước",
    },
    {
      name: "Các Đơn vị trong CSS",
      img: "https://files.fullstack.edu.vn/f8-prod/blog_posts/785/615d79fe6078c.jpg",
      avatar: "https://fullstack.edu.vn/assets/images/nobody_m.256x256.jpg",
      user: "Văn Khải",
      date: "16 ngày trước",
    },
    {
      name: "Tailwind css và cách cài đặt cơ bản",
      img: "https://files.fullstack.edu.vn/f8-prod/blog_posts/1653/61b46a3d757cc.png",
      avatar: "https://fullstack.edu.vn/assets/images/nobody_m.256x256.jpg",
      user: "Quang Trần Anh",
      date: "18 ngày trước",
    },
    {
      name: "Viết nhanh các thẻ JXS như HTML trong VSCode",
      img: "https://files.fullstack.edu.vn/f8-prod/blog_posts/753/615a892b33493.jpg",
      avatar:
        "https://avatar-redirect.appspot.com/google/116024080956366197990?size=400",
      user: "Thien Phu",
      date: "18 ngày trước",
    },
    {
      name: "Tiện ích hiển thị keystrokes  trong Windows & MacOS",
      img: "https://files.fullstack.edu.vn/f8-prod/blog_posts/661/61546ab0450a5.png",
      avatar: "https://fullstack.edu.vn/assets/images/nobody_m.256x256.jpg",
      user: "Lê Thành Trung",
      date: "22 ngày trước",
    },
  ],

  // Render featuredPost
  render: function () {
    const htmlsFeaturedPost = this.featuredPost.map((data) => {
      return `
            <div class="page__content-home-featured-post-item">
                <div class="grid__column">
                    <a href="" class="page__content-home-featured-post-link">
                        <img src="${data.img}" alt="" class="page__content-home-featured-post-img">
                    </a>
                    <a href="" class="page__content-home-featured-post-description">
                        <h3 class="page__content-home-featured-post-description-text">${data.name}</h3>
                    </a>
                    <div class="page__content-home-featured-post-information">
                        <img src="${data.avatar}" class="page__content-home-featured-post-information-avatar"></img>
                        <p class="page__content-home-featured-post-information-name">${data.user}</p>
                        <span class="page__content-home-featured-post-information-date">${data.date}</span>
                    </div>
                </div>
            </div>
            `;
    });

    featuredPostList.innerHTML = htmlsFeaturedPost.join("");
  },

  handleEvent: function () {
    const _this = this;
    // Click button next featuredPost

    featuredPostNextBtn.onclick = function () {
      _this.nextBtnClick();
      _this.nextBtnDisable();
      _this.prevBtnDisable();
    };
    // Click button prev featuredPost

    featuredPostPrevBtn.onclick = function () {
      _this.prevBtnClick();
      _this.prevBtnDisable();
      _this.nextBtnDisable();
    };
  },

  // Transform featuredPost list

  nextBtnClick: function () {
    const featuredPostWidth = $(
      ".page__content-home-featured-post-item"
    ).clientWidth;
    const featuredPostItems = $$(".page__content-home-featured-post-item");
    if (indexfeaturedPost <= featuredPostItems.length / 3) {
      indexfeaturedPost++;
      featuredPostList.style.transform = `translateX(${
        -featuredPostWidth * indexfeaturedPost * 2
      }px)`;
    }
  },

  prevBtnClick: function () {
    const featuredPostWidth = $(
      ".page__content-home-featured-post-item"
    ).clientWidth;
    if (indexfeaturedPost > 0) {
      indexfeaturedPost--;
      featuredPostList.style.transform = `translateX(${
        -featuredPostWidth * indexfeaturedPost * 2
      }px)`;
    }
  },

  // Disable Next and Prev button

  nextBtnDisable: function () {
    const featuredPostItems = $$(".page__content-home-featured-post-item");
    if (indexfeaturedPost === Math.ceil(featuredPostItems.length / 3)) {
      featuredPostNextBtn.style.opacity = "0";
    } else if (indexCourses < featuredPostItems.length / 3) {
      featuredPostNextBtn.style.opacity = "1";
    }
  },

  prevBtnDisable: function () {
    if (indexfeaturedPost === 0) {
      featuredPostPrevBtn.style.opacity = "0";
    } else if (indexfeaturedPost != 0) {
      featuredPostPrevBtn.style.opacity = "1";
    }
  },
  start: function () {
    this.render();
    this.handleEvent();
    this.prevBtnDisable();
  },
};

featuredPostApp.start();

// Featured-video

const featuredVideoList = $(".page__content-home-featured-video-list-wrap");
const featuredVideoNextBtn = $(".featured-video-next-btn");
const featuredVideoPrevBtn = $(".featured-video-prev-btn");
let indexfeaturedVideo = 0;

const featuredVideoApp = {
  featuredVideoWidth: 50,
  index: 0,
  featuredVideo: [
    {
      name: "Sinh viên IT đi thực tập cần biết những gì? | Đi thực tập cần chuẩn bị những gì? | Thực tập IT",
      img: "https://i.ytimg.com/vi/YH-E4Y3EaT4/hqdefault.jpg",
      view: 127.638,
      like: 3.609,
      comment: 194,
      link: "https://www.youtube.com/watch?v=YH-E4Y3EaT4",
    },
    {
      name: '"Code Thiếu Nhi Battle" Tranh Giành Trà Sữa Size L',
      img: "https://i.ytimg.com/vi/sgq7BH6WxL8/hqdefault.jpg",
      view: 112.326,
      like: 2.808,
      comment: 147,
      link: "https://www.youtube.com/watch?v=sgq7BH6WxL8",
    },
    {
      name: "Phương pháp & quan điểm học lập trình của Sơn Đặng",
      img: "https://i.ytimg.com/vi/DpvYHLUiZpc/hqdefault.jpg",
      view: 37.807,
      like: 2.425,
      comment: 202,
      link: "https://www.youtube.com/watch?v=DpvYHLUiZpc",
    },
    {
      name: "Làm sao để có thu nhập cao và đi xa hơn trong ngành IT?",
      img: "https://i.ytimg.com/vi/oF7isq9IjZM/hqdefault.jpg",
      view: 37.316,
      like: 1.934,
      comment: 196,
      link: "https://www.youtube.com/watch?v=oF7isq9IjZM",
    },
    {
      name: "Lần trở lại này F8 sẽ làm gì cho các bạn? Học lập trình để đi làm tại F8 nào!",
      img: "https://i.ytimg.com/vi/ZGmpvhqYSDU/hqdefault.jpg",
      view: 14.699,
      like: 1.818,
      comment: 399,
      link: "https://www.youtube.com/watch?v=ZGmpvhqYSDU",
    },
    {
      name: "ReactJS là gì? Tại sao nên học ReactJS?",
      img: "https://i.ytimg.com/vi/x0fSBAgBrOQ/hqdefault.jpg",
      view: 28.722,
      like: 1.648,
      comment: 316,
      link: "https://www.youtube.com/watch?v=x0fSBAgBrOQ",
    },
    {
      name: "Làm được gì sau khóa học?",
      img: "https://i.ytimg.com/vi/R6plN3FvzFY/hqdefault.jpg",
      view: 220.718,
      like: 1.511,
      comment: 91,
      link: "https://www.youtube.com/watch?v=R6plN3FvzFY&feature=youtu.be",
    },
    {
      name: "Chọn ngành IT có sai lầm? Những trải nghiệm thực tế sau 2 tháng làm việc tại doanh nghiệp?",
      img: "https://i.ytimg.com/vi/2sg1yNl1WvE/hqdefault.jpg",
      view: 37.33,
      like: 1.451,
      comment: 159,
      link: "https://www.youtube.com/watch?v=2sg1yNl1WvE&feature=youtu.be",
    },
    {
      name: "Javascript có thể làm được gì? Giới thiệu qua về trang F8 | Học lập trình Javascript cơ bản",
      img: "https://i.ytimg.com/vi/0SJE9dYdpps/hqdefault.jpg",
      view: 212.258,
      like: 1.351,
      comment: 80,
      link: "https://www.youtube.com/watch?v=0SJE9dYdpps&feature=youtu.be",
    },
    {
      name: "Học Flexbox qua ví dụ",
      img: "https://i.ytimg.com/vi/G19jZzK5FWI/hqdefault.jpg",
      view: 60.416,
      like: 1.094,
      comment: 94,
      link: "https://www.youtube.com/watch?v=YH-E4Y3EaT4",
    },
    {
      name: "Làm sao để có thu nhập cao và đi xa hơn trong ngành IT?",
      img: "https://i.ytimg.com/vi/oF7isq9IjZM/hqdefault.jpg",
      view: 37.316,
      like: 1.934,
      comment: 196,
      link: "https://www.youtube.com/watch?v=G19jZzK5FWI&feature=youtu.be",
    },
  ],

  // Render featuredVideo
  render: function () {
    const htmlsFeaturedPost = this.featuredVideo.map((data) => {
      return `
            <div class="page__content-home-featured-video-item">
                <div class="grid__column">
                    <a href="${data.link}" target="_blank" class="page__content-home-featured-video-link">
                        <img src="${data.img}" alt="" class="page__content-home-featured-video-img">
                    </a>
                    <a href="${data.link}" target="_blank" class="page__content-home-featured-video-description">
                        <h3 class="page__content-home-featured-video-description-text">${data.name}</h3>
                    </a>
                    <div class="page__content-home-featured-video-information">
                        <div class="page__content-home-featured-video-view">
                            <i class="fas fa-eye"></i>
                            <strong>${data.view}</strong>
                        </div>
                        <div class="page__content-home-featured-video-like">
                            <i class="fas fa-thumbs-up"></i>
                            <strong>${data.like}</strong>
                        </div>
                        <div class="page__content-home-featured-video-comment">
                            <i class="fas fa-comment"></i>
                            <strong>${data.comment}</strong>
                        </div>
                    </div>
                </div>
            </div>
            `;
    });

    featuredVideoList.innerHTML = htmlsFeaturedPost.join("");
  },

  handleEvent: function () {
    const _this = this;
    // Click button next featuredVideo

    featuredVideoNextBtn.onclick = function () {
      _this.nextBtnClick();
      _this.nextBtnDisable();
      _this.prevBtnDisable();
    };
    // Click button prev featuredVideo

    featuredVideoPrevBtn.onclick = function () {
      _this.prevBtnClick();
      _this.prevBtnDisable();
      _this.nextBtnDisable();
    };
  },

  // Transform featuredVideo list

  nextBtnClick: function () {
    const featuredVideoWidth = $(
      ".page__content-home-featured-video-item"
    ).clientWidth;
    const featuredVideoItems = $$(".page__content-home-featured-video-item");
    if (indexfeaturedVideo <= featuredVideoItems.length / 3) {
      indexfeaturedVideo++;
      featuredVideoList.style.transform = `translateX(${
        -featuredVideoWidth * indexfeaturedVideo * 2
      }px)`;
    }
  },

  prevBtnClick: function () {
    const featuredVideoWidth = $(
      ".page__content-home-featured-video-item"
    ).clientWidth;
    if (indexfeaturedVideo > 0) {
      indexfeaturedVideo--;
      featuredVideoList.style.transform = `translateX(${
        -featuredVideoWidth * indexfeaturedVideo * 2
      }px)`;
    }
  },

  // Disable Next and Prev button

  nextBtnDisable: function () {
    const featuredVideoItems = $$(".page__content-home-featured-video-item");
    if (indexfeaturedVideo === Math.ceil(featuredVideoItems.length / 3)) {
      featuredVideoNextBtn.style.opacity = "0";
    } else if (indexCourses < featuredVideoItems.length / 3) {
      featuredVideoNextBtn.style.opacity = "1";
    }
  },

  prevBtnDisable: function () {
    if (indexfeaturedVideo === 0) {
      featuredVideoPrevBtn.style.opacity = "0";
    } else if (indexfeaturedVideo != 0) {
      featuredVideoPrevBtn.style.opacity = "1";
    }
  },
  start: function () {
    this.render();
    this.handleEvent();
    this.prevBtnDisable();
  },
};

featuredVideoApp.start();

const pageContent = document.querySelector(".page__content");
var testLink = pageContent.getElementsByTagName("a");

const noticeWarn = document.querySelector("#notice");
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
      const warning = document.createElement("div");
      warning.classList.add("notice__warn");
      warning.innerHTML = `
                <div class="notice__warn-icon">
                    <i class="fas fa-exclamation-circle"></i>
                </div>
                <div class="notice__warn-content">
                    <h3 class="notice__warn-heading">Thông báo</h3>
                    <span class="notice__warn-message">Nội dung đang trong quá trình hoàn thiện !</span>
                </div>
            `;
      noticeWarn.appendChild(warning);

      setTimeout(function () {
        noticeWarn.removeChild(warning);
      }, 2500);
    }
  };
}

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
