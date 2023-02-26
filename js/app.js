let allCourseFees = 0;
let allCourseMonths = 0;
$("#computerBasic").click(function () {
  if ($(this).is(":checked")) {
    allCourseFees += 50000;
    allCourseMonths += 2;
  } else {
    allCourseFees -= 50000;
    allCourseMonths -= 2;
  }
});
$("#programBasic").click(function () {
  if ($(this).is(":checked")) {
    allCourseFees += 200000;
    allCourseMonths += 3;
  } else {
    allCourseFees -= 200000;
    allCourseMonths -= 3;
  }
});
$("#webDesign").click(function () {
  if ($(this).is(":checked")) {
    allCourseFees += 250000;
    allCourseMonths += 3;
  } else {
    allCourseFees -= 250000;
    allCourseMonths -= 3;
  }
});
$("#graphicDesign").click(function () {
  if ($(this).is(":checked")) {
    allCourseFees += 250000;
    allCourseMonths += 3;
  } else {
    allCourseFees -= 250000;
    allCourseMonths -= 3;
  }
});
$("#webDeveloper").click(function () {
  if ($(this).is(":checked")) {
    allCourseFees += 250000;
    allCourseMonths += 3;
  } else {
    allCourseFees -= 250000;
    allCourseMonths -= 3;
  }
});
$("#rockstarDeveloper").click(function () {
  if ($(this).is(":checked")) {
    allCourseFees += 250000;
    allCourseMonths += 3;
  } else {
    allCourseFees -= 250000;
    allCourseMonths -= 3;
  }
});
// inject in html
$("input.form-check-input").click(function () {
  if (allCourseFees > 0 && allCourseMonths > 0) {
    $("#courseFees").html(
      " <span> - &nbsp;</span> " +
        "<span class='text-danger'>" +
        allCourseFees +
        "</span>" +
        "<span> ကျပ် </span>"
    );
    $("#courseMonths").html(
      " <span> -  &nbsp;</span> " +
        "<span class='text-danger'>" +
        allCourseMonths +
        "</span>" +
        "<span> လ </span>"
    );
  } else {
    $("#courseFees").text("");
    $("#courseMonths").text("");
  }
});

$(".scroll-top").css("position", "fixed");
$(".scroll-top").css("top", "60%");
$(".scroll-top").css("right", "-50px");

$(window).scroll(() => {
  var $height = $(window).scrollTop();
  if ($(window).height() < 1270) {
    if ($height > 800) {
      $(".scroll-top").css("right", "25px");
      $(".scroll-top").css("opacity", "100%");
    } else {
      $(".scroll-top").css("right", "-50px");
      $(".scroll-top").css("opacity", "0");
    }
  } else {
    if ($height > 1270) {
      $(".scroll-top").css("right", "25px");
      $(".scroll-top").css("opacity", "100%");
    } else {
      $(".scroll-top").css("right", "-50px");
      $(".scroll-top").css("opacity", "0");
    }
  }
});
