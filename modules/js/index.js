$(function(){
	var windowWidth = $(window).width()
	$(window).on('resize',function(){
		windowWidth = $(window).width()
	})

	fn()
	setInterval(fn,20)
	function fn(){
		var banWidth = $('.tp-bannertimer').width()
		// 获取百分比
		var  percentage = banWidth / windowWidth * 100
		$('.banner-content').eq(0).children('.line').css('width', percentage + '%')
		$('.banner-content').eq(1).children('.line').css('width', percentage + '%')
	}

	// 监视一个dom的宽度
	if (getCookie('checkOutLanguage')) {
		if (getCookie('checkOutLanguage') == 'zh') {
			$('.banner-content').data('fontsize', ['60', '60', '60', '20'])
			$('.banner-content').data('lineheight', ['76', '60', '60', '50'])
		} else {
			$('.banner-content').data('fontsize', ['36', '26', '20', '12'])
			$('.banner-content').data('lineheight', ['60', '60', '60', '50'])
		}
	}
})	
