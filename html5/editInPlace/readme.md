- <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <!-- <div>这个家伙很懒，什么都没有留下</div> -->
      <!-- 如何修改界面：双击一下，文字能立刻变成一个输入框，立即输入，回车完成输入  
    - 双击在js中属于事件
    - 是一个状态的改变，使用dom来改变
    - 是一个本地存储
    -  将这些整合起来，我们使用面向对象来封装处理js代码 -->
    <div id="profile"></div>
     
    <script>
        //在线编辑 首字母大写就是一个类 类的本质就是封装：封装它内部本事的事件
    function EditInPlace(id,parent,value){
        this.id = id;
        this.value = value || 'default value';
        this.parentElement = document.getElementById(parent);//找到他的根节点
        this.createElements()//帮我们把节点显示到页面上
        this.attachEvents();//增加一个事件
    }//this添加属性
    EditInPlace.prototype.attachEvents = function(){//事件绑定
    // this 这个 -> 实例过后的对象
    //this会被覆盖掉 that不会 that来保存那个时候的数值
    var that = this;
    this.staticElement.addEventListener('click',
     function() {
        // console.log(this);
       
        // console.log('巴拉巴拉小魔仙');将文字隐藏起来，将输入框显示出来
        that.staticElement.style.display = 'none';
        that.fieldElement.style.display = 'block';
        that.saveBotton.style.display = 'block';
      },false);
    }
    //即是一个类 又是一个构造函数 原型链
    EditInPlace.prototype.createElements = function(){
        // console.log('显示文本');

      
        this.containerElement = document.createElement('div');//容器属性
        this.staticElement = document.createElement('span');//静态属性
        this.staticElement.innerText = this.value;//将值
        this.containerElement.appendChild(this.staticElement);

        this.fieldElement = document.createElement('input');
        this.fieldElement.type = 'text';
        this.fieldElement.value = this.value;
        this.fieldElement.style.display = 'none';//将输入框值藏起来
        this.saveBotton.type = 'botton';
        this.saveBotton.type = 'save';
        this.saveBotton.style.display = 'none';
        this.containerElement.appendChild = (this.saveBotton);
        this.parentElement.appendChild(this.fieldElement);
        this.parentElement.appendChild(this.containerElement);//挂在一个子节点
    }
    var profileEditor = new EditInPlace('titleClassical','profile','这个家伙很懒，什么都没有留下');//传递数据
    // titleclassic是id属性 profile是parent属性对应的就是里面的值
    </script>
</body>
</html>