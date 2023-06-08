
const getRandomPastelColor = () => { 
    return "hsl(" + 360 * Math.random() + ',' +
               (20 + 75 * Math.random()) + '%,' + 
               (80 + 15 * Math.random()) + '%)'
  }

colorButton = document.getElementById("colorButton");
colorButton.addEventListener("click",  () => {
    console.log("Button clicked");
    var randomPastelColor = getRandomPastelColor()
    console.log(randomPastelColor);
    document.body.style.backgroundColor = randomPastelColor;
})
