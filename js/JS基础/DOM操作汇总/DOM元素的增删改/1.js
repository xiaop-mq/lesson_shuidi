// <!DOCTYPE html>
// <html>
// <head>
// 	<meta charset="UTF-8">
// 	<title>Document</title>
// 	<!-- IMPORT CSS -->
// 	<link rel="stylesheet" href="reset.min.css">
// 	<style>
// 		.addBtn {
// 			padding: 5px 15px;
// 			font-size: 20px;
// 		}

// 		.item {
// 			width: 300px;
// 			padding: 10px;
// 			margin-top: 10px;
// 			border: 1px dashed #555;
// 		}

// 		.item li {
// 			line-height: 30px;
// 		}

// 		.item li:nth-child(even) {
// 			background-color: #EEE;
// 		}
// 	</style>
// </head>

// <body>
// 	<button class="addBtn">+</button>
// 	<ul class="item">
// 		<li>
// 			我是LI1
// 			<!-- href="javascript:;" 阻止A标签点击跳转页面，只把他当做按钮 -->
// 			<a href="javascript:;" class="deleteBtn">删除</a>
// 		</li>
// 		<li>我是LI2</li>
// 	</ul>

// 	<!-- IMPORT JS -->
// 	<script>
// 		/*
// 		 * 点击加号ADDBTN，动态创建一个LI，并且插入到容器ITEM中
// 		 */
// 		let addBtn = document.querySelector('.addBtn'),
// 		    item = document.querySelector('.item'),
// 		    count = 2;
// 		addBtn.onclick = function () {
// 			// 1.动态创建一个LI（可以给其设置样式或者内容）
// 			let newLi = document.createElement('li');
// 			// newLi.style.xxx=xxx  newLi.className=xxx ... 新创建的元素是对象，可以尽情操作
// 			newLi.innerHTML = `我是LI${++count}`;

// 			// 2.把创建的LI添加到指定的容器中
// 			// insertBefore 添加到指定元素的前面
// 			// let first = item.firstElementChild;
// 			// item.insertBefore(newLi, first);

// 			// appendChild 添加到指定容器末尾
// 			item.appendChild(newLi);
// 		};

// 		/*
// 		 * 点击删除按钮移除元素 
// 		 */
// 		let deleteBtn = document.querySelector('.deleteBtn');
// 		    deleteBtn.onclick = function () {
// 			// 获取删除按钮的父元素（第一个LI）
// 			let parent = deleteBtn.parentNode;

// 			// 从容器中移除掉
// 			item.removeChild(parent);
// 		};
// 	</script>
// </body>
// </html>
