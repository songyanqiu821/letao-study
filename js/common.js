$(function(){

	var navLi = $('.navs li')

	navLi.on('click',function(){

		$(this).find('ul').slideToggle();

	});

});

// 获取表单数据方法
$.fn.serializeToJson = function () {

	var formAry = this.serializeArray();

	// var result = {username:'zhangsan', password:123123}
	var result = {};

	formAry.forEach(function (item) {
		result[item.name] = item.value;
	});

	return result;

}
// 允许cookie

$.ajaxSetup({crossDomain: true, xhrFields: {withCredentials: true}});


// 基础路径 【此处是定义了个对象】
var  APP = {//http://fullstack.net.cn:3000
	baseURL :'http://fullstack.net.cn:3000'
}