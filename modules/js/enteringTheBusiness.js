$(function(){
	// 点击招聘职位页面
	$('.job-menu').on('click', 'li', function () {
		// $(this).children('.suspensionLayer').toggleClass('dis-none')
		$(this).children('.suspensionLayer').slideToggle(300)
	})
})