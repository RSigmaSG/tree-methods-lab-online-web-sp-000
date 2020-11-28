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

function findOrAdd(node, inputNode)
{
  while(node.data != inputNode.data)
  {
    if (inputNode.data > node.data)
    {
      if (node.right === null)
      {
        node.right = inputNode
      }
      else
      {
      node = node.right
      }
    }
    else
      if (node.left === null)
      {
        node.left = inputNode
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
