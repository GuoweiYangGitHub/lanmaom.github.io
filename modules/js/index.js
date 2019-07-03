$(function(){

	setInterval(function(){
		setTimeout(function () {
			$('.banner-content').toggleClass('is-loading')
		}, 200);
	},3000);

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