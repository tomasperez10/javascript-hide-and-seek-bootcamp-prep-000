//Define a function getFirstSelector(selector) that accepts a selector and returns the first element that matches

function getFirstSelector(selector){
   return document.querySelector(selector)
  }


//Define a function nestedTarget() that pulls a .target out of #nested. Note: #nested = div and .target = div

function nestedTarget(){
   return document.getElementById('nested').querySelector('div.target')
  }
  
  //Define a function increaseRankBy(n) that increases the ranks in all of the .ranked-lists by n