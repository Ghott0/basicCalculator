let num1 = 8
let num2 = 2
document.getElementById("num1__el").textContent = num1
document.getElementById("num2__el").textContent = num2

let sumEl = document.getElementById("sum__el")

function add() {
    let result = num1 + num2
    sumEl.textContent = "Sum: " + result
}

function sub() {
    let result = num1 - num2
    sumEl.textContent = "Sum: " + result
}

function div() {
    let result = num1 / num2
    sumEl.textContent = "Sum: " + result
}

function mul() {
    let result = num1 * num2
    sumEl.textContent = "Sum: " + result
}
