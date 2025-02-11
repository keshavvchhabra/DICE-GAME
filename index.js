var randomNumber = Math.floor((Math.random()*6)+1)
document.querySelector('img').setAttribute('src',`images/dice${randomNumber}.png`)
var randomNumber2 = Math.floor((Math.random()*6)+1)
document.querySelectorAll('img')[1].setAttribute('src',`images/dice${randomNumber2}.png`)
if (randomNumber>randomNumber2){
    document.querySelector('h1').innerHTML = "player 1 winner"
}
else if (randomNumber<randomNumber2){
    document.querySelector('h1').innerHTML = "player 2 winner"
}
else{
    document.querySelector('h1').innerHTML = "Draw again"
}
