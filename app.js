
const resultElement = document.getElementById("result")
const input1 = document.getElementById("input1")
const input2 = document.getElementById("input2")
const plus = document.getElementById("plus")
const minus = document.getElementById("minus")
const submit = document.getElementById("submit")
const multiply = document.getElementById('multiply')
const share = document.getElementById('share')
let act = '+'

plus.onclick = function () {
    act = '+'
}

minus.onclick = function () {
    act = '-'
}

multiply.onclick = function () {
    act = '*'
}

share.onclick = function () {
    act = '/'
}

function cal (inp1, inp2, acti) {
    const num1 = Number(inp1.value)
    const num2 = Number(inp2.value)
    if (acti == '+') {
        return num1 + num2
    }
    else if (acti == '-') {
        return num1 - num2  
    }

    else if (acti == '*') {
        return num1 * num2
    }

    else if (acti == '/')
        return num1 / num2

}


submit.onclick = function () {
    const result = cal (input1, input2, act)
    return resultElement.textContent = result
}


