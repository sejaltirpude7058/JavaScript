//Generating color code
randomColor = function(){
    const hexCode = '0123456789ABCDEF';
    let color = '#';
  
    for(let i=0; i<6; i++){
      color += hexCode[Math.floor(Math.random() * 16)]
    }
    return color;
  }
  
  //console.log(randomColor());
  let intervalStop;
  function startChangingColor(){
   if(!intervalStop){
    intervalStop = setInterval(changeBgColor ,1000);
   }
     function changeBgColor(){
      document.body.style.backgroundColor = randomColor();
     }
  }
  
  function stopChangingColor(){
     clearInterval(intervalStop);
     intervalStop = null;
  }
                                                 
  document.querySelector('#start').addEventListener('click', startChangingColor);
  document.querySelector('#stop').addEventListener('click', stopChangingColor);