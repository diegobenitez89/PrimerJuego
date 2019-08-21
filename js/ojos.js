var bolas = document.getElementsByClassName("ball");
document.onmousemove = function(){
  var x = event.clientX * 100 / window.innerWidth + "%";
  var y = event.clientY * 100 / window.innerHeight + "%";


  for(var i=0;i<2;i++){
    bolas[i].style.left = x;
    bolas[i].style.top = y;
    bolas[i].style.transform = "translate(-"+ x +",-"+ y +")";
  }
}