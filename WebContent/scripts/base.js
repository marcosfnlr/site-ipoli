$(document).ready(function() {
	$(".navbar").attr("data-offset-top", $(".header").outerHeight() - 3);
	$(window).resize(function() {
		$(".navbar").attr("data-offset-top", $(".header").outerHeight() - 3);
	});
});
