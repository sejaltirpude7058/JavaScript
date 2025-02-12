let form = document.querySelector("form");

form.addEventListener("submit", function(event){
    console.log(event.target);
    event.preventDefault();
    
})


//run to now the diffrence
 
let fname = document.querySelector("#fname");


fname.addEventListener("input", function(event){
//    console.log(event.target)
   console.log(`Now the firtName is changed to ${fname.value}`);
})
fname.addEventListener("change", function(event){
//    console.log(event.target)
   console.log(`Now the firtName is changed to ${fname.value}`);
})

let lname = document.querySelector("#lname");

lname.addEventListener("focus", function(e){
    console.log("Input gained Focus");
})
lname.addEventListener("blur", function(e){
    console.log("Input lost Focus");
})