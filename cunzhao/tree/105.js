var buildTree = function(preorder, inorder) {
    if(!preorder.length || !inorder.length) return null;
    let rootVal = preorder[0];
    let root = new TreeNode(rootVal);
    let i = inorder.findIndex(e => e === rootVal);
    root.left = buildTree(preorder.slice(1, i + 1),inorder.slice(0, i));
    root.right = buildTree(preorder.slice(i + 1),inorder.slice(i + 1));
    return root; 
};