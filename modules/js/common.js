$(function(){

	// 只要滚动的长度大于0 ，就让header fixed 最上面
	if ($(document).scrollTop()) {
		if (!$('.tt-nav').hasClass('sticky')) {
			$('.tt-nav').addClass('sticky')
		}
	}

	// 鼠标移动到上面的时候出现的状态
	$('.clickHighlight').on('mouseenter','li',function(){
		$(this).children('img').removeClass('dis-none').parents().siblings().children('img').addClass('dis-none')
	})
	$('.clickHighlight').on('mouseleave', 'li', function () {
		$(this).children('img').addClass('dis-none')
	})

	// 判断当前的语言,并且设置不同的logo
	if (getCookie('checkOutLanguage')) {
		if (getCookie('checkOutLanguage') == 'zh') {
			// 页尾的logo
			$('.footer-logo>img').attr('src', '../../assets/img/logo-white.png')
			// $('.preloader-position>img').attr('src', '../../assets/img/logo-colored.png')
			$('.logo-brand>img').attr('src', '../../assets/img/logo.png')
		} else {
			$('.footer-logo>img').attr('src', '../../assets/img/logo-en-white.png')
			// $('.preloader-position>img').attr('src', '../../assets/img/logo-colored-en.png')
			$('.logo-brand>img').attr('src', '../../assets/img/logo-en.png')
		}
	}

	// 鼠标滚轮事件
	document.addEventListener('mousewheel', function () {
	}, {
		passive: false
	})
})