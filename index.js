function getFirstSelector(selector){
    return document.querySelector(selector)
}

function nestedTarget(){
  return document.getElementById('nested')
}

function increaseRankBy(n){
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')

  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = (parseInt(lis[i].innerHTML) + n).toString()
  }
}

function deepestChild(){
  const lis = document.querySelectorAll('div#grand-node')
  console.log(lis)
   return lis[0]
  //for (let i = 0; i < lis.length; i++) {
    //lis[i].innerHTML = (parseInt(lis[i].innerHTML) + n).toString()
//  }
}
