// use any type, return any data type, short circuiting

console.log(`-------------OR-------------`);
console.log(3 || "jonas"); //3
console.log( undefined || null); //null
console.log("" || true) //true
console.log(0 || "");
console.log(undefined || 0 || '' || "hello" || 23 || null); //hello
// print whichever value is true 


console.log(`-------------AND-------------`);

console.log(3 && "jonas"); //jonas
console.log( undefined && null); //undefined
console.log("" && true) 
console.log(0 && ""); //0
console.log(undefined && 0 && '' && "hello" && 23 && null); //undefined





//for nullish coescling operator refer javascript_important_notes "https://1drv.ms/w/c/5906818cb00f5f65/ESnysDAKIXNJna2kvjYTl20B1VohYUag5vovwxd35YyD-A?e=xLvQel"
