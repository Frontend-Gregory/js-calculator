

// так нельзя делаять переменые
//let 1num = 12
//let 1-num = 1
//нельзя назывыть переменые зарезирвироваными словами
//желательно не писать вот так: let num_1 а писать вот так: let num1

//console.log('Name:' + firstname)

//num1 = (1 + 23)
//num2 = (12 + 34) * 10 - 2
//console.log(num2 + num1, num1,num2, firstname + age, 233232 * 2, 2.22323/323223 )


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


