## normal flow
- inline-level-box
  - 参与 IFC，水平方向一个接着一个布局
- block-level-box
  - 参与 BFC，垂直方向一个接着一个布局，规则元素垂直布局的规则，是一个隔离的容器
- relative-position

## BFC 特点
- margin 折叠：margin 认为留白，认为只要留白够了就行
- BFC 里面每个元素的左边，紧紧贴着**包含块**的左边
  左边固定，右边自适应
  ```html
  main 新 bfc，它和其他区域互不响应响应，float 区域和 bfc 不会发生重叠
  <div class="main">
      <div>
        main main
      </div>
    </div>
  ```
- 盒子可能会缩小因为有了 float（不占据位置），除非这个盒子新建一个 BFC
  清除浮动，假设他不清除浮动，浮动不占据 normal flow，必然会对外面的元素有影响是不是？？
  所以他要清除浮动


## BFC 建立
1. Floats
2. absolutely
3. display：inline-blocks, table-cells, and table-captions
4. overflow：visiable


