$(document).ready(function() {
	$("#color-select li a").on("click", function(e) {
    var changeTo = $(this).parent().attr("class");
    $(this).parent().siblings().removeClass("active");
    $(this).parent().addClass("active");
    $("#god-no").removeClass().addClass(changeTo);

    e.preventDefault();
  });
});