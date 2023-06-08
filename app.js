let myPet = "Dog";

let myPetsAge = 7;

let petDetails =
  "My pet is " + myPet + " and it is " + myPetsAge + " years old";

console.log(petDetails);

let myNum = 5;
let thisNum = ++myNum;
console.log(thisNum);

// let userInput = prompt("Whats your favorite color?");
let userInput = null

console.log(userInput);

document.body.style.backgroundColor = userInput;

colorButton = document.getElementById("colorButton");
colorButton.addEventListener("click",  () => {
    console.log("Button clicked");
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    console.log(randomColor);
    document.body.style.backgroundColor = "#" + randomColor;
})

