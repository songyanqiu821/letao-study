$(function(){

	var navLi = $('.navs li')

	navLi.on('click',function(){

		$(this).find('ul').slideToggle();

	});

});

$.fn.serializeToJson = function () {

	var formAry = this.serializeArray();

	// var result = {username:'zhangsan', password:123123}
	var result = {};

	formAry.forEach(function (item) {
		result[item.name] = item.value;
	});

	return result;

}


var  APP = {
	baseURL :'http://fullstack.net.cn:3000'
}