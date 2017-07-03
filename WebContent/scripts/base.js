$(document).ready(function() {
	$(".navbar").attr("data-offset-top", $(".header").outerHeight() - 3);
	$(window).resize(function() {
		$(".navbar").attr("data-offset-top", $(".header").outerHeight() - 3);
	});
	$('.dropdown-submenu a.test').on("click", function(e){
	    $(this).next('ul').toggle();
	    e.stopPropagation();
	    e.preventDefault();
	  });
});
