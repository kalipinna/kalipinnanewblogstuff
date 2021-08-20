function fixedNavi() {

  let topNavi = $("#navigation").offset().top;
  let topNaviHeight = $("#navigation").height() + 10;


  $(window).scroll(function() {
    if ($(this).scrollTop() >= topNavi) {
      $("#navigation").css({
        position: "fixed",
        backgroundImage: "url('https://static.tumblr.com/khncf5z/wmgqxohwv/lago_modificato.jpg')",
      });
      $("#stuff").css({
        paddingTop: topNaviHeight
      });

    } else {
      $("#navigation").css({
        position: "static",
        backgroundImage: "url('https://static.tumblr.com/khncf5z/wmgqxohwv/lago_modificato.jpg')",
        backgroundPosition: "top",
        backgroundSize: "cover",
        backgroundAttachment: "fixed"
      });

      $("#stuff").css({
        paddingTop: "0"
      });
    }
  });
};

fixedNavi();


window.addEventListener("resize", function() {
  fixedNavi()
});
