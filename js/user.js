// 实现登录拦截 【判断用户是否登录】
$.ajax({
	// url:`${APP.baseURL}/employee/checkRootLogin`,
	url:APP.baseURL + '/employee/checkRootLogin',
	type:'get',
	// 同步  异步是true 默认值   同步的话 此处的ajax和下面的入口函数按照代码执行顺序执行  
	// 异步的话 页面一上来 发送ajax请求 ，不用等它发送完 下面的入口函数就已经执行了
	async:false,
	success:function(response){
		// console.log(response)
		if(response.error){
			// 如果返回的error存在 说明未登录 跳转到登录页面
			location.href = 'login.html';
			// 不往下执行代码
			return;
		}
	}
})


$(function (){
	// alert(1)
	// 查询数据库信息 并将信息展示在页面上
	// 发送ajax请求
	$.ajax({		
		type:'get',
		url:APP.baseURL+'/user/queryUser',
		data:{
			page:1,
			pageSize:100,
		},
		success:function (response){
			// console.log(response)
			// 调用模板 拼接字符串
			var html = template('userTPL',response);
			// 将拼接好的字符串渲染在页面上 【此处注意是用html还是append追加】
			$('#userBox').html(html);
		}
	})


	// 利用事件委托 给按钮绑定点击事件
	$('#userBox').on('click','.userStatus',function (){
		// 获取自定义属性  也可以使用attr 使用data的时候可以不写data的前缀
		var userId = $(this).data('user-id');
		var isDelete = $(this).data('isdelete');
		// console.log(userId);
		// console.log(isDelete);

		$.ajax({
			type:'post',
			url:APP.baseURL +'/user/updateUser',
			data:{
				id:userId,
				// 此处注意要判断下 传入的是1还是0
				isDelete:isDelete==1 ? '0' : '1'
			},
			success:function(response){
				console.log(response)
				if(response.success){
					// 成功强制刷新页面
					location.reload();
				}else{
					// 不成功提示错误信息
					alert(response.message);
				}
			}
		})

	})
	


})