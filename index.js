function inOrder(currNode)
{
   if(currNode.left){
    inOrder(currNode.left)
  }
  console.log(currNode.data)
  if(currNode.right){
    inOrder(currNode.right)
  }
}

function findOrAdd(node, num)
{
  until(node.data != num)
  {
    if (num > node.data)
    {
      node = node.right
    }
    else
    {
      node = node.left
    }
  }
}

function max()
{
  
}

function min()
{
  
}
