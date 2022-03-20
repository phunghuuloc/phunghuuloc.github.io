$(document).ready(function () {

  // Banner scroll
  $(window).scroll(function(){
    let value = this.window.scrollY;
    $("#stars").css("left", value * 0.25 + "px");
    $("#moon").css("top", value * 1.05 + "px");
    $("#mountains-behind").css("top", value * 0.5 + "px");
    $("#mountains-front").css("top", value * 0 + "px");

    if(value > 500) {
      $("header").addClass("bg-dark box-shadow");
    }else {
      $("header").removeClass("bg-dark box-shadow");
    }
  });

  // Music button
  let musicCount = 0;
  $(".music_btn").click(function () {
    if(musicCount == 0) {
      $("#music")[0].play();
      $(".music_btn img").css("animation", "music 5s linear infinite");
      $(".music_btn img").css("animation-play-state", "running");
      musicCount = 1;
    }else {
      $("#music")[0].pause();
      $(".music_btn img").css("animation-play-state", "paused");
      musicCount = 0;
    }
  })

  // typing animation script
  var typed = new Typed(".typing", {
    strings: ["Phùng Hữu Lộc", "lập trình viên", "fresher"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });

  // mobile button
  $(".mobile-btn").click(function () {
    if($(this).hasClass("mobile-btn_toggle")) {
      $(this).removeClass("mobile-btn_toggle");
      $("#mobile-nav").css("left", "-100%");
      $("body").css("overflow", "scroll");
    }else {
      $(this).addClass("mobile-btn_toggle");
      $("#mobile-nav").css("left", "0");
      $("body").css("overflow", "hidden");
    }
  });

  // mobile nav button
  $("#mobile-nav a").click(function() {
    $(".mobile-btn").removeClass("mobile-btn_toggle");
      $("#mobile-nav").css("left", "-100%");
      $("body").css("overflow", "scroll");
  });
})