$(document).ready(function() {
	$("#color-select li a").on("click", function(e) {
    var changeTo = $(this).parent().attr("class");
    $(this).parent().siblings().removeClass("active");
    $(this).parent().addClass("active");
    $("#god-no").removeClass().addClass(changeTo);

    e.preventDefault();
  });
  var $cover = $('#its-a-game').blockrain({
    autoplay: true,
    autoplayRestart: true,
    speed: 6,
    autoBlockWidth: true,
    autoBlockSize: 20,
    theme: {
      background: null,
      primary: '#2E3525',
      secondary: '#2E3525',
      stroke: '#8CA77B',
      strokeWidth: 2,
      innerStroke: null
    }
  });
});

var wow = new WOW(
  {
    mobile: false
  }
);
wow.init();