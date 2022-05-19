let num1 = 8
let num2 = 2
document.getElementById("num1__el").textContent = num1
document.getElementById("num2__el").textContent = num2

let sumEl = document.getElementById("sum__el")

function add() {
    sumEl.textContent = num1 + num2
}

function sub() {
    num1 -= num2
}

function div() {

}