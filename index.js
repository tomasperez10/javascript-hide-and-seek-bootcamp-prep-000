//Define a function getFirstSelector(selector) that accepts a selector and returns the first element that matches

function getFirstSelector(selector){
   return document.querySelector(selector)
  }


//Define a function nestedTarget() that pulls a .target out of #nested. Note: #nested = div and .target = div

function nestedTarget(){
   return document.getElementById('nested').querySelector('div.target')
  }
  
  //Define a function increaseRankBy(n) that increases the ranks in all of the .ranked-lists by n
  
  function increaseRankBy(n){
   const upRank = document.getElementById('app').querySelectorAll('ul.ranked-list')

    for (let i = 0; i < upRank.length; i++){
     upRank[i].innerHTML = ((parseInt(upRank[i].innerHTML)) + n)
     }
  }
  
  //Define a function deepestChild() that pulls out the most deeply nested child element from div#grand-node
  
  