let addTask = document.querySelector(".mybtn");
let addNewTask = document.querySelector("#addTask")
let list = document.querySelector("ul");




addTask.addEventListener("click", function(){
     if(addNewTask.value === ""){
        alert("Task Cannot be empty");
     }else{
         let newLi = document.createElement("li");
         newLi.innerText = addNewTask.value ;

         let dltbtn = document.createElement("button");
         dltbtn.innerText = "❌";
         dltbtn.classList.add("delete");


         newLi.appendChild(dltbtn);
         list.appendChild(newLi);

         addNewTask.value = "";
     }
});

let deleteTask = document.querySelectorAll(".delete");

deleteTask.forEach((lidltbtn) => {
  lidltbtn.addEventListener("click", function () {
    let listItem = lidltbtn.parentElement;
    listItem.remove();
  });
});

list.addEventListener("click", function (event) {
    console.log(event.target.nodeName);
    
  if (event.target.classList.contains("delete")) {
    // Find the parent <li> and remove it
    let listItem = event.target.parentElement;
    listItem.remove();
  }
});

// let ar = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// for (outel of ar) {
//   for (inel of outel) {
//     console.log(inel);
//   }
// }



