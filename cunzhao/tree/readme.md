## 二叉树的遍历
## 构造二叉树系列
- #105.从前序与中序遍历序列构造二叉树[1]
  前序遍历 preorder = [3,9,20,15,7] root left right
  中序遍历 inorder = [9,3,15,20,7] left root right
      3
    /   \
   9    20
       /   \
      15   7
- #106.从中序与后序遍历序列构造二叉树 
  中序遍历 inorder = [9,3,15,20,7] left root right
  后序遍历 postorder = [9,15,7,20,3] left right root
- #889.	根据前序和后序遍历构造二叉树 [3]
输入：pre = [1,2,4,5,3,6,7] root left right
 post = [4,5,2,6,7,3,1] left right root
输出：[1,2,3,4,5,6,7]
- ## 226.翻转二叉树