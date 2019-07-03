var languages = "checkOutLanguage";

function SetCookie(name, value) {
	var Days = 30; //此 cookie 将被保存 30 天
	var exp = new Date(); //new Date("December 31, 9998");
	exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
	document.cookie = languages + "=" + escape(value) + ";expires=" + exp.toGMTString();
	location.reload();
}

function getCookie(name) { //取cookies函数
	var arr = document.cookie.match(new RegExp("(^| )" + languages + "=([^;]*)(;|$)"));
	if (arr != null) return unescape(arr[2]);
	return null
}
$(function () {
	$('.menuzord-menu').on('click', '#language', function () {
		var value = 'zh'
		if ($(this).text().trim() == '中文') {
			$(this).text('English')
			value = 'zh'
		} else if ($(this).text().trim() == 'English') {
			$(this).text('中文')
			value = 'en'
		}
		SetCookie(languages, value);
		
	})
	//根据cookie选择语言
	if (getCookie(languages) != null) {
		if (getCookie(languages) == "en") {
			$("[data-localize]").localize("text", {
				pathPrefix: "lang",
				language: "en"
			});
			$('.top_lan #language').text('中文')
		}
		if (getCookie(languages) == "zh") {
			$("[data-localize]").localize("text", {
				pathPrefix: "lang",
				language: "zh"
			});
			$('.top_lan #language').text('English')
		}
		return;
	}else{
		var uulanguage = (navigator.language || navigator.browserLanguage).toLowerCase();
		// 获取系统默认是哪个国家
		if (uulanguage.indexOf("zh") > -1) {
			$("[data-localize]").localize("text", {
				pathPrefix: "lang",
				language: "zh"
			});
			$('.top_lan #language').text('English')
			SetCookie(languages, 'zh');
		} else {
			$("[data-localize]").localize("text", { //**主要的代码** jquery.localize.js 底层实现切换逻辑
				pathPrefix: "lang",
				language: "en"
			});
			$('.top_lan #language').text('中文')
			SetCookie(languages, 'en');
		};
	}
	

});