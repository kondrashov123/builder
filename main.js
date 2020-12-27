$(document).ready(function () {
	$('.question_block').click(function(event){
		$(this).children().slideToggle();
		$(this).toggleClass("active");
	});
	$('.menu_burger').click(function(event){
		$('.menu_burger').toggleClass("active");
		$(".menu").toggleClass("active");
	});
});