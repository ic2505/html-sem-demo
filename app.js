
const getRandomPastelColor = () => { 
    return "hsl(" + 360 * Math.random() + ',' +
               (15 + 80 * Math.random()) + '%,' + 
               (75 + 20 * Math.random()) + '%)'
  }

colorButton = document.getElementById("colorButton");
colorButton.addEventListener("click",  () => {
    console.log("Button clicked");
    var randomPastelColor = getRandomPastelColor()
    console.log(randomPastelColor);
    document.body.style.backgroundColor = randomPastelColor;
})
