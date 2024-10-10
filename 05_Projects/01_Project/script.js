const buttons = document.querySelectorAll('.button')
console.log(buttons);
const mybody = document.querySelector('body');

buttons.forEach( (button) => {
  //console.log(button);
   
  button.addEventListener('click', function(e){
    console.log(e);
    console.log(e.target);
    if(e.target.id === 'grey'){
      mybody.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'green'){
      mybody.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'blue'){
      mybody.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'yellow'){
      mybody.style.backgroundColor = e.target.id;
    }
  })

} )