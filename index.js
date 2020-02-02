//Define a function getFirstSelector(selector) that accepts a selector and returns the first element that matches

function getFirstSelector(selector){
   return document.querySelector(selector)
  }


//Define a function nestedTarget() that pulls a .target out of #nested. Note: #nested = div and .target = div

function nestedTarget(){
   return document.getElementById('nested').querySelector('div.target')
  }
  
  //Define a function increaseRankBy(n) that increases the ranks in all of the .ranked-lists by n
  
function increaseRankBy(n) {
   var ranks = document.querySelectorAll('ul.ranked-list li');
   for (var i = 0; i < ranks.length; i++) {
     ranks[i].innerHTML = parseInt(ranks[i].innerHTML) + n
   }
 }
  
  //Define a function deepestChild() that pulls out the most deeply nested child element from div#grand-node
  
  function deepestChild(){
   var deep = document.getElementById('grand-node').querySelectorAll('div')
   return deep[deep.length-1]
  }