
// const button = document.querySelector("button");

// const p = document.querySelector("p");

// const Url = "https://catfact.ninja/fact";

// async function getFacts(){
//     try{
//         let response = await axios.get(Url);
//         console.log(response);
//         return response.data.fact;
//     }catch(error){
//         console.log(error);
//         return `Fact Not Found`
//     }
// }

// button.addEventListener("click", async function(e){
//     let fact = await getFacts();
//     console.log(fact);
//     p.innerText = fact;
// })


// let showImage = document.getElementById('btn');


// let Url2 = "https://dog.ceo/api/breeds/image/random"

// async function getImage(){
//     try{
//         let response = await axios.get(Url2);
//         console.log(response);
//         return response.data.message;
//     }catch(error){
//        console.log(error);
//     }
// }

// showImage.addEventListener("click", async ()=>{
//     let dogImg = await getImage();
//     console.log(dogImg);
//     let image = document.getElementById("img");
//     image.setAttribute("src", dogImg);
// });


//Axios Sending Headers

// let url3 = "https://icanhazdadjoke.com/"

// async function getJokes(){
//    try{
//     const config = {headers : {Accept : "application/json"}};
//      let response = await axios.get(url3, config);
//      console.log(response);
//      console.log(response.data.joke);
     
//    }catch(error){
//     console.log(error);
//    }
// }


//activity using query Strings

// The base URL for the API to fetch universities based on the country name
let url = "http://universities.hipolabs.com/search?name=";

// Getting the button element with the ID "btn2"
let showColleges = document.getElementById("btn2");



// Adding a click event listener to the button "showColleges"
showColleges.addEventListener("click", async () => {
  // Fetching the value entered in the input field (country name)
  let country = document.querySelector("input").value;
  console.log(country); // Logging the entered country to the console

  // Calling the function to fetch colleges for the given country
  let collegeArr = await getColleges(country);

  // Displaying the list of colleges in the DOM
  show(collegeArr);
  showStateColleges(collegeArr);
});



// Function to display the list of colleges on the page
function show(countryCollegesArr) {
  // Looping through the array of college objects received
  for (let col of countryCollegesArr) {
    // console.log(col.name); // Logging each college name to the console

    // Selecting the unordered list element with the ID "list"
    let list = document.querySelector("#list");

    // Creating a new list item element for each college
    let li = document.createElement("li");
    li.innerText = col.name; // Setting the text of the list item to the college name

    // Adding the list item to the unordered list
    list.appendChild(li);
  }
}




//Show Colleges for specific state in country
function showStateColleges(collegeArr){
    for (col of collegeArr){
         console.log(col["state-province"]);
    }
}




// Function to fetch the list of colleges for a specific country
async function getColleges(country) {
  try {
    // Making a GET request to the API with the country name appended to the base URL
    let response = await axios.get(url + country);
       console.log(response.data);
    // Returning the array of colleges from the API response
    return response.data;
  } catch (error) {
    // Logging any errors that occur during the API call
    console.log(`ERROR: ${error}`);
  }
}














