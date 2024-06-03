
const randomBtn = document.getElementById("randomBtn");
const redColor = document.getElementById("redColor");
const greenColor = document.getElementById("greenColor");
const blueColor = document.getElementById("blueColor");

let colors = [
    "crimson", "lawngreen", "darkblue"
];
let random = () => {
    let randomNumber = Math.floor(Math.random() * colors.length);
    document.querySelector("body").style.backgroundColor = colors[randomNumber]
    // console.log(colors[randomNumber]);
}
let red = () => {
    document.querySelector("body").style.backgroundColor = colors[0]
}
let green = () => {
    document.querySelector("body").style.backgroundColor = colors[1]
}
let blue = () => {
    document.querySelector("body").style.backgroundColor = colors[2]
}

randomBtn.addEventListener("click", random);
redColor.addEventListener("click", red);
greenColor.addEventListener("click", green);
blueColor.addEventListener("click", blue);