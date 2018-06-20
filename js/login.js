$(function (){

// alert(11);
	$('#loginBtn').on('click',function (){
		var result = $('#loginForm').serializeToJson();
		// console.log(result);
		if(!$.trim(result.username)){
			alert('请输入正确的用户名');
			return;
		}
		if(!$.trim(result.password)){
			alert('请输入正确的密码');
			return;
		}

		$.ajax({
			url: APP.baseURL +'/employee/employeeLogin',
			type:'post',
			data:result,
			success:function (response){
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
	});

	
});