const widthDocument = document.querySelector("html");
// const tabsDescription = document.querySelectorAll('.description-tab')
// const panesDescription = document.querySelectorAll('.description-pane')

const paneCourse = document.querySelector(".page__js-course-app-list-respon");
const paneContent = document.querySelector(
  ".page__js-course-app-video-description-wrap-content"
);
const tabCourse = document.querySelector(
  ".page__js-course-app-video-header-item-content"
);
const tabAbout = document.querySelector(
  ".page__js-course-app-video-header-item-about"
);

// Hidden courses list
const appDescriptionList = document.querySelector(
  ".page__js-course-app-video-description"
);
const courseBtnList = document.querySelector(
  ".page__js-course-app-list-hidden-btn"
);
const courseBoxList = document.querySelector(".page__js-course-app-list");
const courseVideoApp = document.querySelector(".page__js-course-app-video");
const activeBtnCourses = document.querySelector(
  ".page__js-course-app-video-display-btn"
);
const courseVideoContent = document.querySelector(
  ".page__js-course-app-video-content"
);
courseBtnList.onclick = function () {
  console.log(courseBtnList);
  courseBoxList.style.width = "0px";
  courseVideoApp.style.width = "100%";
  activeBtnCourses.style.opacity = "1";
  activeBtnCourses.style.display = "flex";
  courseVideoContent.style.height = "100%";
  appDescriptionList.style.padding = "0 200px";
  // alert()
};

activeBtnCourses.onclick = () => {
  courseBoxList.style.width = "320px";
  courseVideoApp.style.width = "calc(100% - 320px)";
  activeBtnCourses.style.display = "none";
  courseVideoContent.style.height = "100%";
  appDescriptionList.style.padding = "0 80px";
};

const btnOpenStyle = getComputedStyle(activeBtnCourses);

const boxCourseListStyle = getComputedStyle(courseBoxList);
courseVideoContent.onmouseover = function () {
  if (boxCourseListStyle.width != "320px") {
    activeBtnCourses.style.opacity = "1";
    timeOut = setTimeout(function () {
      activeBtnCourses.style.opacity = "0";
    }, 5000);
  }
};

activeBtnCourses.onmouseover = function () {
  if (boxCourseListStyle.width != "320px") {
    activeBtnCourses.style.opacity = "1";
  }
};

// Courses List
const lessionsList = document.querySelector(".page__js-course-app-list-wrap");
const lessionsList2 = document.querySelector(
  ".page__js-course-app-list-wrap-respon"
);
const lessionItemTest = document.querySelector(
  ".page__js-course-app-list-item-wrap"
);
const linkVideoCourses = document.querySelector(
  ".page__js-course-app-video-content-wrap"
);
const testscroll = document.querySelector(".page__js-course-app-video");

const lessionApp = {
  lessions: [
    {
      stt: 1,
      title: "Giới thiệu",
      lession: [
        {
          id: 1,
          name: "1. Lời khuyên trước khóa học",
          icon: "fas fa-play-circle",
          iframe:
            '<iframe width="560" id="testok" height="315" src="https://www.youtube.com/embed/-jV06pqjUUc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          practice: "flex",
        },
        {
          id: 2,
          name: "2. Cài đặt môi trường",
          icon: "fas fa-play-circle",
          iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/efI98nT8Ffo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        },
      ],
    },
    {
      stt: 2,
      title: "Làm quen",
      lession: [
        {
          id: 3,
          name: "3. Cách sử dụng JS với HTML (Text)",
          icon: "fas fa-file-alt",
          iframe: "",
        },
        {
          id: 4,
          name: "4. Cách sử dụng JS với HTML (Video)",
          icon: "fas fa-play-circle",
          iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/W0vEUmyvthQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          practice: "flex",
        },
        {
          id: 5,
          name: "5. Biến và khai báo biến",
          icon: "fas fa-file-alt",
          iframe: "",
          practice: "flex",
        },
        {
          id: 6,
          name: "6. Gán giá trị cho biến",
          icon: "fas fa-file-alt",
          iframe: "",
        },
        {
          id: 7,
          name: "7. Học về biến qua video",
          icon: "fas fa-play-circle",
          iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/CLbx37dqYEI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          practice: "flex",
        },
        {
          id: 8,
          name: "8. Test tính cẩn thận, chỉn chu của bạn",
          icon: "fas fa-file-alt",
          iframe: "",
          practice: "flex",
        },
        {
          id: 9,
          name: "9. Cú pháp comments",
          icon: "fas fa-file-alt",
          iframe: "",
        },
        {
          id: 10,
          name: "10. Học comments qua video",
          icon: "fas fa-play-circle",
          iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/xRpXBEq6TOY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          practice: "flex",
        },
        {
          id: 11,
          name: "11. Một số hàm built-in",
          icon: "fas fa-play-circle",
          iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/xRpXBEq6TOY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          practice: "flex",
        },
        {
          id: 12,
          name: "12. Làm quen với toán tử",
          icon: "fas fa-play-circle",
          iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/SZb-N7TfPlw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          practice: "flex",
        },
        {
          id: 13,
          name: "13. Lưu ý khi làm bài tập",
          icon: "fas fa-file-alt",
          iframe: "",
          practice: "flex",
        },
        {
          id: 14,
          name: "14. Toán tử số học",
          icon: "fas fa-play-circle",
          iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/m_h7-dgKnMU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          practice: "flex",
        },
        {
          id: 15,
          name: "15. Toán tử ++ -- với tiền tố & hậu tố",
          icon: "fas fa-play-circle",
          iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/aM-DUx6Qnc8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          practice: "flex",
        },
        {
          id: 16,
          name: "16. Toán tử gán",
          icon: "fas fa-play-circle",
          iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/ncRmjazgsE8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          practice: "flex",
        },
        {
          id: 17,
          name: "17. Toán tử chuỗi",
          icon: "fas fa-play-circle",
          iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/QCLVU6cZU_E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          practice: "flex",
        },
        {
          id: 18,
          name: "18. Toán tử so sánh - Phần 1",
          icon: "fas fa-play-circle",
          iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/rWM2lXtS-d8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          practice: "flex",
        },
        {
          id: 19,
          name: "19. Kiểu dữ liệu Boolean",
          icon: "fas fa-play-circle",
          iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/9cZEG1SSSQc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          practice: "flex",
        },
        {
          id: 20,
          name: "20. Câu lệnh điều kiện If",
          icon: "fas fa-play-circle",
          iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/9MpHrdWBdxg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          practice: "flex",
        },
        {
          id: 21,
          name: "21. Toán tử logical",
          icon: "fas fa-play-circle",
          iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/9MpHrdWBdxg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          practice: "flex",
        },
        {
          id: 22,
          name: "22. Kiểu dữ liệu",
          icon: "fas fa-play-circle",
          iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/P-fMQ3elxSE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          practice: "flex",
        },
        {
          id: 23,
          name: "23. Toán tử so sánh - Phần 2",
          icon: "fas fa-play-circle",
          iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/meCXeMeyFdE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          practice: "flex",
        },
        {
          id: 24,
          name: "24. Truthy và Falsy là gì?",
          icon: "fas fa-file-alt",
          iframe: "",
          practice: "flex",
        },
        {
          id: 25,
          name: "25. Toán tử logical và câu lệnh điều kiện If",
          icon: "fas fa-play-circle",
          iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/j1PbSq5kJKY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          practice: "flex",
        },
      ],
    },
    {
      stt: 3,
      title: "Kiến thức cốt lỗi (phần 1)",
      lession: [
        {
          id: 26,
          name: "26. Chuỗi",
          icon: "fas fa-play-circle",
          iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/j1PbSq5kJKY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          practice: "flex",
        },
        {
          id: 27,
          name: "27. Làm việc với chuỗi",
          icon: "fas fa-play-circle",
          iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/b4YivuRmcEw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          practice: "flex",
        },
        {
          id: 28,
          name: "28. Kiểu số",
          icon: "fas fa-file-alt",
          iframe: "",
          practice: "flex",
        },
        {
          id: 29,
          name: "29. Số và làm việc với số",
          icon: "fas fa-play-circle",
          iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/varb35t44v0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          practice: "flex",
        },
        {
          id: 30,
          name: "30. Mảng",
          icon: "fas fa-play-circle",
          iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/YzO65uOJNMg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          practice: "flex",
        },
        {
          id: 31,
          name: "31. Làm việc với mảng",
          icon: "fas fa-play-circle",
          iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/KrYacXScNQk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          practice: "flex",
        },
        {
          id: 32,
          name: "32. Function",
          icon: "fas fa-play-circle",
          iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/4g9ENVc2KLA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          practice: "flex",
        },
        {
          id: 33,
          name: "33. Tham số trong function",
          icon: "fas fa-play-circle",
          iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/jE6UPl17Nvo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          practice: "flex",
        },
        {
          id: 34,
          name: "34. Return trong function",
          icon: "fas fa-play-circle",
          iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/OOoeAIrn69M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          practice: "flex",
        },
        {
          id: 35,
          name: "35. Hiểu hơn về function",
          icon: "fas fa-play-circle",
          iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/aTQojRq0N4c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          practice: "flex",
        },
        {
          id: 36,
          name: "36. Hiểu rõ về test cases tại F8",
          icon: "fas fa-file-alt",
          iframe: "",
          practice: "flex",
        },
        {
          id: 37,
          name: "37. Các loại function",
          icon: "fas fa-play-circle",
          iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/scwab9DMNtM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          practice: "flex",
        },
        {
          id: 38,
          name: "38. Object",
          icon: "fas fa-play-circle",
          iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/orIXdOPFWeM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          practice: "flex",
        },
        {
          id: 39,
          name: "39. Object constructor",
          icon: "fas fa-play-circle",
          iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/orIXdOPFWeM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        },
        {
          id: 40,
          name: "40. Object prototype",
          icon: "fas fa-play-circle",
          iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/Wi-khBYt658" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        },
        {
          id: 41,
          name: "41. Đối tượng Date",
          icon: "fas fa-play-circle",
          iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/cufyZUUIXjw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          practice: "flex",
        },
        {
          id: 42,
          name: "42. Lệnh rẽ nhánh If else",
          icon: "fas fa-play-circle",
          iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/X9OA4308oIY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          practice: "flex",
        },
        {
          id: 43,
          name: "43. Lệnh rẽ nhánh Switch",
          icon: "fas fa-play-circle",
          iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/24lIiJ4xVQE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        },
        {
          id: 44,
          name: "44. Toán tử 3 ngôi (Ternary operator)",
          icon: "fas fa-play-circle",
          iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/L9pPv8pp71s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          practice: "flex",
        },
        {
          id: 45,
          name: "45. Giới thiệu vòng lặp",
          icon: "fas fa-play-circle",
          iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/1zeMUJeBkeA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        },
        {
          id: 46,
          name: "46. Vòng lặp For",
          icon: "fas fa-play-circle",
          iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/tzaq2ay3Q0w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        },
        {
          id: 47,
          name: "47. Vòng lặp For - Phần 2",
          icon: "fas fa-play-circle",
          iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/L0a9ZgIEjW8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        },
        {
          id: 48,
          name: "48. Vòng lặp For - Phần 3",
          icon: "fas fa-play-circle",
          iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/L0a9ZgIEjW8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        },
        {
          id: 49,
          name: "49. Vòng lặp For/in",
          icon: "fas fa-play-circle",
          iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/stbbeMsgldc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        },
        {
          id: 50,
          name: "50. Vòng lặp For/of",
          icon: "fas fa-play-circle",
          iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/qhShGK5Y10U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        },
        {
          id: 51,
          name: "51. Vòng lặp While",
          icon: "fas fa-play-circle",
          iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/rdH9Dm7IVxU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        },
        {
          id: 52,
          name: "52. Vòng lặp Do/while",
          icon: "fas fa-play-circle",
          iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/Or48jZzowUk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        },
        {
          id: 53,
          name: "53. Break và Continue trong vòng lặp",
          icon: "fas fa-play-circle",
          iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/zSHt_S7W2a8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        },
        {
          id: 54,
          name: "54. Vòng lặp lồng nhau (Nested loop)",
          icon: "fas fa-play-circle",
          iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/zSHt_S7W2a8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        },
        {
          id: 55,
          name: "55. Thêm ví dụ về vòng lặp",
          icon: "fas fa-play-circle",
          iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/MY-eJLzbSZc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        },
        {
          id: 56,
          name: "56. Làm việc với mảng - Phần 2",
          icon: "fas fa-play-circle",
          iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/AT-yhX26_Ao" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          practice: "flex",
        },
        {
          id: 57,
          name: "57. Array map() method",
          icon: "fas fa-play-circle",
          iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/-xZkVmkDwbU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          practice: "flex",
        },
        {
          id: 58,
          name: "58. Array reduce() method",
          icon: "fas fa-play-circle",
          iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/-JMh3A556cw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          practice: "flex",
        },
        {
          id: 59,
          name: "59. Ví dụ: Array reduce() method",
          icon: "fas fa-play-circle",
          iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/-JMh3A556cw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          practice: "flex",
        },
        {
          id: 60,
          name: "60. Phương thức reduce có logic như thế nào?",
          icon: "fas fa-play-circle",
          iframe: "",
          practice: "flex",
        },
        {
          id: 61,
          name: "61. String/Array includes() method",
          icon: "fas fa-play-circle",
          iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/PozYw4lVgl0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          practice: "flex",
        },
        {
          id: 62,
          name: "62. Math object",
          icon: "fas fa-play-circle",
          iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/WGsNbFwt0H4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        },
        {
          id: 63,
          name: "63. Callback?",
          icon: "fas fa-play-circle",
          iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/W8vJ-yOtSbE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          practice: "flex",
        },
        {
          id: 64,
          name: "64. Callback - Phần 2",
          icon: "fas fa-play-circle",
          iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/W8vJ-yOtSbE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        },
        {
          id: 65,
          name: "65. Empty elements of array?",
          icon: "fas fa-play-circle",
          iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/sQBlrbbqEak" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        },
        {
          id: 66,
          name: "66. My forEach() method",
          icon: "fas fa-play-circle",
          iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/zfEBuHWif4Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        },
        {
          id: 67,
          name: "67. My filter() method",
          icon: "fas fa-play-circle",
          iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/eRM7ekb1iQU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        },
        {
          id: 68,
          name: "68. My some() method",
          icon: "fas fa-play-circle",
          iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/kUObhKJ-RoU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        },
        {
          id: 69,
          name: "69. My every() method",
          icon: "fas fa-play-circle",
          iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/mmxZ6buXHN4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        },
      ],
    },
    {
      stt: 4,
      title: "HTML DOM",
      lession: [
        {
          id: 70,
          name: "70. HTML DOM là gì?",
          icon: "fas fa-play-circle",
          iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/TsTr-tKCREc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        },
        {
          id: 71,
          name: "71. HTML DOM vs DOM API",
          icon: "fas fa-play-circle",
          iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/82KhrbZ7LvA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        },
        {
          id: 72,
          name: "72. Document object",
          icon: "fas fa-play-circle",
          iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/ZS2v9B9DRm8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          practice: "flex",
        },
        {
          id: 73,
          name: "73. Get element methods",
          icon: "fas fa-play-circle",
          iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/gETNXKi3l_U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          practice: "flex",
        },
        {
          id: 74,
          name: "74. Get element methods - 2",
          icon: "fas fa-play-circle",
          iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/gETNXKi3l_U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          practice: "flex",
        },
        {
          id: 75,
          name: "75. Get element methods - 3",
          icon: "fas fa-play-circle",
          iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/-4u0Gg1YFQw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        },
        {
          id: 76,
          name: "76. Attribute node & Text node",
          icon: "fas fa-play-circle",
          iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/8S1L12Ttu-U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        },
        {
          id: 77,
          name: "77. DOM attribute",
          icon: "fas fa-play-circle",
          iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/8S1L12Ttu-U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          practice: "flex",
        },
        {
          id: 78,
          name: "78. InnerText vs textContent Property",
          icon: "fas fa-play-circle",
          iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/ViPTAlLPnV4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          practice: "flex",
        },
        {
          id: 79,
          name: "79. InnerHTML vs OuterHTML Property",
          icon: "fas fa-play-circle",
          iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/SXW4QSjk4Js" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          practice: "flex",
        },
        {
          id: 80,
          name: "80. Node properties",
          icon: "fas fa-play-circle",
          iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/YWTO5hO7d8A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          practice: "flex",
        },
        {
          id: 81,
          name: "81. DOM CSS",
          icon: "fas fa-play-circle",
          iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/79gnz1TttHw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          practice: "flex",
        },
        {
          id: 82,
          name: "82. ClassList Property",
          icon: "fas fa-play-circle",
          iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/xr2d_1h4U0Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          practice: "flex",
        },
        {
          id: 83,
          name: "83. DOM events",
          icon: "fas fa-play-circle",
          iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/AA3WWZAMv_0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        },
        {
          id: 84,
          name: "84. DOM events example",
          icon: "fas fa-play-circle",
          iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/Ze4b9x7zgas" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        },
        {
          id: 85,
          name: "85. PreventDefault and StopPropagation",
          icon: "fas fa-play-circle",
          iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/4ZnQur6rewg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        },
        {
          id: 86,
          name: "86. Event listener",
          icon: "fas fa-play-circle",
          iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/U624VLOxiTo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        },
      ],
    },
    {
      stt: 5,
      title: "Kiến thức cốt lỗi (phần 2)",
      lession: [
        {
          id: 87,
          name: "87. JSON là gì?",
          icon: "fas fa-play-circle",
          iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/U624VLOxiTo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          practice: "flex",
        },
        {
          id: 88,
          name: "88. Promise (sync, async)",
          icon: "fas fa-play-circle",
          iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/Uph14HYkgEQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        },
        {
          id: 89,
          name: "89. Promise (pain)",
          icon: "fas fa-play-circle",
          iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/bgSbjJIwrj0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        },
        {
          id: 90,
          name: "90. Promise (concept)",
          icon: "fas fa-play-circle",
          iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/_4F8ihblZFU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          practice: "flex",
        },
        {
          id: 91,
          name: "91. Promise (chain)",
          icon: "fas fa-play-circle",
          iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/Ldl571DAlXI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        },
        {
          id: 92,
          name: "92. Promise methods (resolve, reject, all)",
          icon: "fas fa-play-circle",
          iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/pxyxbaq8i8c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        },
        {
          id: 93,
          name: "93. Promise example",
          icon: "fas fa-play-circle",
          iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/pxyxbaq8i8c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        },
        {
          id: 94,
          name: "94. Fetch",
          icon: "fas fa-play-circle",
          iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/8KkM6JFjJZA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        },
        {
          id: 95,
          name: "95. JSON server",
          icon: "fas fa-play-circle",
          iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/5UJGRHNZc9M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        },
        {
          id: 96,
          name: "96. Sử dụng Postman làm việc với REST API",
          icon: "fas fa-play-circle",
          iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/CvX_5uyUXSs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        },
        {
          id: 97,
          name: "97. Thêm/sửa/xóa khóa học với Fetch và REST API",
          icon: "fas fa-play-circle",
          iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/TRjVXmk8q8I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        },
      ],
    },
    {
      stt: 6,
      title: "ECMAScript 6+",
      lession: [
        {
          id: 98,
          name: "98. ECMAScript 6 là gì?",
          icon: "fas fa-play-circle",
          iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/MFDXxCNqjKQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          practice: "flex",
        },
        {
          id: 99,
          name: "99. Let & Const",
          icon: "fas fa-play-circle",
          iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/tCPTBPua1Xo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        },
        {
          id: 100,
          name: "100. Template literals",
          icon: "fas fa-play-circle",
          iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/7Ls-fa8iVXA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        },
        {
          id: 101,
          name: "101. Arrow function",
          icon: "fas fa-play-circle",
          iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/9QeNLypIiZs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        },
        {
          id: 102,
          name: "102. Classes",
          icon: "fas fa-play-circle",
          iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/9QeNLypIiZs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        },
        {
          id: 103,
          name: "103. Default parameter values",
          icon: "fas fa-play-circle",
          iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/451KRGBBRJY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        },
        {
          id: 104,
          name: "104. Enhanced object literals",
          icon: "fas fa-play-circle",
          iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/WB6FQdp41hs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        },
        {
          id: 105,
          name: "105. Destructuring",
          icon: "fas fa-play-circle",
          iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/J1m4vLDUhEI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        },
        {
          id: 106,
          name: "106. Spread",
          icon: "fas fa-play-circle",
          iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/J1m4vLDUhEI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        },
        {
          id: 107,
          name: "107. Tagged template literals",
          icon: "fas fa-play-circle",
          iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/MJZICS7nQk8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        },
        {
          id: 108,
          name: "108. Modules",
          icon: "fas fa-play-circle",
          iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/08lWi4T2Bfg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        },
        {
          id: 109,
          name: "109. Optional chaining (?.)",
          icon: "fas fa-play-circle",
          iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/kxX7kKjXXKs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        },
      ],
    },
    {
      stt: 7,
      title: "Các bài thực hành",
      lession: [
        {
          id: 110,
          name: "110. Xây dựng Tabs UI",
          icon: "fas fa-play-circle",
          iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/oYC6wGu-sWo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        },
        {
          id: 111,
          name: "111. Code Music Player",
          icon: "fas fa-play-circle",
          iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/vAecGPWxzFE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        },
      ],
    },
    {
      stt: 8,
      title: "Kiến thức bổ sung",
      lession: [
        {
          id: 112,
          name: "112. Đệ quy là gì? Học về đệ quy!",
          icon: "fas fa-play-circle",
          iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/ZwbBiGf35V4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          practice: "flex",
        },
        {
          id: 113,
          name: "113. Polyfill là gì? Khi nào cần sử dụng?",
          icon: "fas fa-play-circle",
          iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/zFO-sSfReFs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        },
      ],
    },
    {
      stt: 9,
      title: "Nên học thêm (thực hành)",
      lession: [
        {
          id: 114,
          name: "114. Form validation cách 1 - Phần 1",
          icon: "fas fa-play-circle",
          iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/vAecGPWxzFE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          practice: "flex",
        },
        {
          id: 115,
          name: "115. Form validation cách 1 - Phần 2",
          icon: "fas fa-play-circle",
          iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/ZdvRm1bfGAk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        },
        {
          id: 116,
          name: "116. Form validation cách 1 - Phần 3",
          icon: "fas fa-play-circle",
          iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/LpgoBaULw30" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        },
        {
          id: 117,
          name: "117. Form validation cách 1 - Phần 4",
          icon: "fas fa-play-circle",
          iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/jRnBvlMUvK0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        },
        {
          id: 118,
          name: "118. Form validation cách 1 - thành quả",
          icon: "fas fa-play-circle",
          iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/wMH2bHlpWco" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        },
        {
          id: 119,
          name: "119. Form validation cách 2 - Phần 1",
          icon: "fas fa-play-circle",
          iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/jhvEPY8cEu0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        },
        {
          id: 120,
          name: "120. Form validation cách 2 - Phần 2",
          icon: "fas fa-play-circle",
          iframe:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/V88PFJNlE-I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        },
      ],
    },
  ],

  // Render
  render: function () {
    const lessionsHtmls = this.lessions.map(function (data, index) {
      if (data.stt) {
        var lengthItem = data.lession.length;
      }
      const testdata = data.lession.map(function (item, index) {
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
                    `;
      });

      return `
                <div class="">
                <div class="page__js-course-app-list-content-title">
                <span class="page__js-course-app-list-content-title-heading">Phần ${
                  data.stt
                }: ${data.title}</span>
                    <div class="page__js-course-app-list-content-title-description">
                    <span class="page__js-course-app-list-content-title-current-course">${lengthItem}/${lengthItem} | 06:28</span>
                    </div>
                    </div>
                    ${testdata.join("")}
                    </div>
                    `;
    });

    lessionsList.innerHTML = lessionsHtmls.join("");
    lessionsList2.innerHTML = lessionsHtmls.join("");
  },

  // Load iframe video
  loadLinkCourse: function () {
    const _this = this;
    lessionsList.onclick = function (e) {
      _this.lessions.map(function (data) {
        data.lession.map(function (item) {
          const courseNode = e.target.closest(
            ".page__js-course-app-list-content-item"
          );
          const courseNodeNumber = Number(courseNode.getAttribute("dataset"));
          if (courseNode && item.id === courseNodeNumber) {
            console.log(courseNode, item);
            if (item.iframe != "") {
              courseVideoContent.innerHTML = item.iframe;
            }
          }
        });
      });
    };

    // responsive
    lessionsList2.onclick = function (e) {
      _this.lessions.map(function (data) {
        data.lession.map(function (item) {
          testscroll.scrollTop = 0;
          const courseNode = e.target.closest(
            ".page__js-course-app-list-content-item"
          );
          const courseNodeNumber = Number(courseNode.getAttribute("dataset"));
          if (courseNode && item.id === courseNodeNumber) {
            if (item.iframe != "") {
              courseVideoContent.innerHTML = item.iframe;
            }
          }
        });
      });
    };
  },

  // Run
  start: function () {
    this.loadLinkCourse();
    this.render();

    // responsive
    if (window.innerWidth <= 1023) {
      paneCourse.classList.add("isopen-description");
      paneContent.classList.remove("isopen-description");
      tabCourse.classList.add("isclick");
      tabAbout.classList.remove("isclick");
    } else {
      paneCourse.classList.remove("isopen-description");
      paneContent.classList.add("isopen-description");
      tabCourse.classList.remove("isclick");
      tabAbout.classList.add("isclick");
    }
  },
};

lessionApp.start();

// comment

const inputComment = document.querySelector(
  ".page__js-course-app-video-description-comment-input"
);
const handleComment = document.querySelector(
  ".page__js-course-app-video-description-comment-handle-descript"
);
const exitComment = document.querySelector(
  ".page__js-course-app-video-description-comment-cancle"
);
const completeComment = document.querySelector(
  ".page__js-course-app-video-description-comment-complete"
);

inputComment.onfocus = function () {
  handleComment.style.display = "flex";
};

exitComment.onclick = function () {
  handleComment.style.display = "none";
  inputComment.value = "";
  completeComment.style.backgroundColor = "";
};

inputComment.addEventListener("input", function (e) {
  if (e.target.value != "") {
    completeComment.style.backgroundColor = "var(--primary-color)";
  } else {
    completeComment.style.backgroundColor = "";
  }
});

// Comment

const commentList = document.querySelector(
  ".page__js-course-app-video-comment-app-wrap"
);

const commentApp = {
  comments: [
    {
      img: 'https://graph.facebook.com/443641620272752/picture?width=400&height=400" class="page__js-course-app-video-comment-app-user-img',
      name: "Hoàng Anh",
      content: "Cảm ơn anh Sơn đã xây dựng khóa học hay như vậy",
    },
    {
      img: "https://fullstack.edu.vn/assets/images/nobody_m.256x256.jpg",
      name: "Linh Tran",
      content: "Sao a Sơn phát âm ra nhiều gió nghe hay thế ạ?",
    },
    {
      img: "https://avatar-redirect.appspot.com/google/112851236903414529818?size=400",
      name: "Kỳ Lê Xuân",
      content:
        "bài khá dễ hiểu, học bài mới và cũng ôn luôn bài cũ, các bài có sự liên quan đến nhau",
    },
    {
      img: "https://avatar-redirect.appspot.com/google/107464967909874209882?size=400",
      name: "Hiệp Trần",
      content:
        "Cho mình hỏi khóa học này miễn phí ạ? Sao lại có sự vô lý vậy nhỉ??",
    },
    {
      img: "https://avatar-redirect.appspot.com/google/112609385398904073084?size=400",
      name: "Viễn Đông",
      content: "càng học càng cuốn ae ạ",
    },
    {
      img: "https://avatar-redirect.appspot.com/google/113220886729801824688?size=400",
      name: "Văn Lăng Nguyễn",
      content:
        "Mọi người cho mình hỏi làm sao để code xong bên chrom nó hiện luôn như của a sơn vậy. Mình toàn ctrol+S sau đó qua web bấm F5 mới được.",
    },
    {
      img: "https://avatar-redirect.appspot.com/google/114930983328114536231?size=400",
      name: "Đào Tấn Hào",
      content: "anh chị giúp em bài 2 với ạ, em làm hoài không hiểu đc...",
    },
    {
      img: "https://graph.facebook.com/2556110291361032/picture?width=400&height=400",
      name: "Hyng Minh",
      content: "còn chia lấy phần nguyên là như nào anh",
    },
  ],

  render: function () {
    const commnetHtmls = this.comments.map(function (data) {
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
            `;
    });

    commentList.innerHTML = commnetHtmls.join("");
  },

  start: function () {
    this.render();
  },
};

commentApp.start();

// Responsive

const windowWidth = window.innerWidth;

window.addEventListener("resize", function (e) {
  const heightPercent = (e.target.innerWidth / windowWidth) * 100 - 20;
  if (e.target.innerWidth > 739 && e.target.innerWidth <= 1023) {
    paneCourse.classList.add("isopen-description");
    paneContent.classList.remove("isopen-description");
    tabCourse.classList.add("isclick");
    tabAbout.classList.remove("isclick");
    linkVideoCourses.style.height = `${heightPercent}%`;
  } else {
    paneCourse.classList.remove("isopen-description");
    paneContent.classList.add("isopen-description");
    tabCourse.classList.remove("isclick");
    tabAbout.classList.add("isclick");
  }
});

// Description

const tabsDescription = document.querySelectorAll(".description-tab");
const panesDescription = document.querySelectorAll(".description-pane");

tabsDescription.forEach(function (tab, index) {
  const pane = panesDescription[index];
  tab.onclick = function () {
    document
      .querySelector(".description-tab.isclick")
      .classList.remove("isclick");
    document
      .querySelector(".description-pane.isopen-description")
      .classList.remove("isopen-description");

    this.classList.add("isclick");
    pane.classList.add("isopen-description");
  };
});
