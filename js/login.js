// 登录页面的思路很简单：
// 	1、给登录按钮绑定点击事件
// 	2、验证用户输入的用户名和密码是否正确
// 	3、发送ajax请求【将表单数据一起发送】
// 	4、登录成功就跳转用户页面 登录失败 提示用户登录失败


$(function (){
// alert(11);测试入口函数看下文件是否引入成功
		// 点击登录按钮的时候
		$('#loginBtn').on('click',function(){
			// 获取表单数据【获取表单中的值的时候 一定要记得在input中加属性name值 经常容易忘记】
			var result = $('#loginForm').serializeToJson();
			// console.log(result);
			// 判断用户名是否存在
			if(!$.trim(result.username)){
				alert('请输入正确的用户名');
				// 不存在的话 终止当前的程序 不往下执行
				return;
			}
			// 判断密码是否存在
			if(!$.trim(result.password)){
				alert('请输入正确的密码');
				return;
			}

			// 发送ajax请求
			$.ajax({
				// 反引号这种写法是在es6中出现的语法，使用${}来包裹变量，并进行字符串的拼接
				// url: `${APP.baseURL}/employee/employeeLogin`,
				url: APP.baseURL +'/employee/employeeLogin',//请求的地址
				type:'post',//请求的方式
				// data:{
				// 	username:username,
				// 	password:password
				// }  ===  data:result
				data:result,//请求时需要传递的参数
				success:function (response){//请求返回的结果
					// console.log(response)
					if(response.success){
						// 登录成功
						location.href = "user.html";
					}else{
						// 登录失败
						alert(response.message);
					}
				}
			})	
		})
		
});