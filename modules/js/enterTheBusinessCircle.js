$(function(){
	$('.portfolio-container').on('click', '.portfolio-filter li', function () {
		console.log($(this))
	})


	if (getCookie('checkOutLanguage')) {
		if (getCookie('checkOutLanguage') == 'zh') {
			$('.hasTexts').css('line-height', '38px')
		} else {
			$('.hasTexts').css('line-height', '0')
		}
	}

})