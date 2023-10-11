// // navbar close onclick
// $(document).ready(function () {
//   $(document).click(function () {
//     // if($(".navbar-collapse").hasClass("in")){
//     $(".navbar-collapse").collapse("hide");
//     // }
//   });
// });

//toggle btn transform
let changeIcon = function (icon) {
  icon.classList.toggle("fa-times");
};

// copyright text year
var getYear = new Date().getFullYear();
document.getElementById("getYear").innerHTML = getYear;
