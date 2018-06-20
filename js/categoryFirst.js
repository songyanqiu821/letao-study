$(function (){
	// alert(1)
	// 当前页
	var page = 1;
	// 当前页显示的条数
	var pageSize = 10;
	// 总页数
	var totalPage = 0;

	getData ();

	$('#prev').on('click',function (){
		page--;
		if(page < 1){
			page = 1;
			alert("已经是第一页了");
			return;
			
		}
		getData ();
	});

	$('#next').on('click',function (){
		page++;
		if(page > totalPage){
			page = totalPage;
			alert('没有更多的数据了');
			return;
			
		}
		getData ();
	});


// 查询数据 将数据显示在页面上
		// 1、发送ajax请求
		// 2、将数据渲染在页面上
	function getData (){
		$.ajax({
			url:APP.baseURL + '/category/queryTopCategoryPaging',
			data:{
				// 当前页数
				page:page,
				// 当前页数的条数
				pageSize:pageSize
			},
			type:'get',
			success:function (response){
				// console.log(response);
				if(response.error){
					location.href='login.html';
				}else{
					// 调用模板 并拼接字符串
					var  html = template('categoryFirstTpl',response);
					// 将数据添加到标签上 并展示在页面上【此处需要注意的是表格的话 
					// 没有写tbody的话 浏览器会默认给添加一个tbody 容易出错】
					$('#categoryFirstBox').html(html);
				}
				// 计算总页数
				totalPage = Math.ceil(response.total / pageSize);				
			}
		})
	}

	// 当添加分类的保存按钮被点击的时候
		$('#addCategoryFirst').on('click', function () {
			// 获取用户输入的分类名称
			var categoryName = $.trim($('#categoryName').val());

			// 如果用户没有输入分类名称
			if (!categoryName) {
				alert('请输入分类名称');
				return;
			}

			$.ajax({
				url: `${APP.baseUrl}/category/addTopCategory`,
				type: 'post',
				data: {
					categoryName
				},
				success: function (response) {
					if (response.success) {
						location.reload();
					}else {
						alert(response.message);
					}
				}
			})

		});




})



