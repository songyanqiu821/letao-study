$(function (){
	// alert(1);
	$.ajax({		
		type:'get',
		url: APP.baseURL+'/category/querySecondCategoryPaging',
		data:{
			page:1,
			pageSize:10
		},
		success:function (response){
			// console.log(response);
			var html = template('cateSecondTpl',{
				list:response,
				api:APP.baseURL
			});
			$('#cateSecondBox').html(html);

		}
	})



})