function changeColor(curNumber){
  curNumber++;

  if(curNumber > 3){
    curNumber =1;
  }
  document.getElementById("mainContent").setAttribute('class', 'color' + curNumber)
  console.log(curNumber);
  setTimeout(function(){changeColor(curNumber0} 5000);}
}

changeColor90);
