//prevent form action
$(function() {
  button = $(".submit-form");

  button.on("click", function(e) {
    e.preventDefault();
  });
});

//Responsive Nav Bar
$(function() {
  menu = $("nav ul");

  //prevent redirect on hamburger and slide open menu
  $("#openup").on("click", function(e) {
    e.preventDefault();
    menu.slideToggle();
  });

  //Check on window resize
  $(window).resize(function() {
    var w = $(this).width();
    if (w > 480 && menu.is(":hidden")) {
      menu.removeAttr("style");
    }
  });

  $("nav li").on("click", function(e) {
    var w = $(window).width();
    if (w < 480) {
      menu.slideToggle();
    }
  });
  $(".open-menu").height($(window).height());
});

//Smooth scroll to section
$(".cf a").on("click", function(e) {
  if (this.hash !== "") {
    e.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 40
      },
      800
      // function() {
      //   window.location.hash = hash - 40;
      // }
    );
  }
});
