let input = [0]
let output = document.getElementById('pOutput')
let expression = document.getElementById('pExpression')
let numbers = new RegExp('[0-9]')
let operators = new RegExp('[/*\\-+]|\\*\\*')
let outputed = true
let advancedInp = document.getElementById('inputAdvanced')
let btnCalculatorChange = document.getElementById('btnCalculatorChange')
let calculator = document.getElementById('calculator')
let themeSelector = document.getElementById('themeSelector')
let html = document.getElementById('html')
let btnEquality = document.getElementById('btnEquality')
let outputAndExpression = document.getElementById('outputAndExpression')
let inputJoined = () => input.join('').replace(/\*\*/g, '^').replace(/\/100/g,'%')
let input0 = () => {
    if (input.length == 0) {
        input = [0]
        output.innerText = '0'
    }
}
let numClick = (button) => {
    let btnInput = button.innerText
    if (outputed) {
        expression.innerText = inputJoined()
        input = []
        outputed = false
    }
    input.push(btnInput)
    output.innerText = inputJoined()
}
let operatorClick = (button) => {
    let btnInput = button.innerText
    if (operators.test(input[input.length - 1][input[input.length-1].length - 1])) {
        input.pop()
        input.push(btnInput)
        output.innerText = inputJoined()
    } else {
        input.push(btnInput)
        output.innerText = inputJoined()
    }
    outputed = false
}
let exponentClick = () => {
    if (operators.test(input[input.length - 1][input[input.length-1].length - 1])) {
        input.pop()
        input.push('**')
        output.innerText = inputJoined()
    } else {
        input.push('**')
        output.innerText = inputJoined()
    }
    outputed = false
}
let squareClick = () => {
    input.push('**2')
    output.innerText = inputJoined()
}
let outputClick = () => {
    try {
        expression.innerText = inputJoined()
        output.innerText = eval(input.join('')) // dont replace this one
        input = []
        input.push(output.innerText)
        outputed = true
    } catch (error) {
        output.innerText = 'error'
    }
}
let CClick = () => {
    input = [0]
    output.innerText = '0'
    outputed = true
}
let delClick = () => {
    input.pop()
    output.innerText = output.innerText.slice(0,output.innerText.length - 1)
    input0()
    console.log(input)
    if (input.length == 1 && input[0] == 0) {
        outputed = true
    }
}
let decimalClick = () => {
    input.push('.')
    output.innerText = inputJoined()
    outputed = false
}
let piClick = () => {
    if (outputed) {
        expression.innerText = inputJoined()
        input = []
        outputed = false
    }
    input.push(`${Math.PI}`)
    output.innerText = inputJoined()
}
let percentageClick = () => {
    input.push('/100')
    output.innerText = inputJoined()
}
let EulersNumberClick = () => {
    if (outputed) {
        expression.innerText = inputJoined()
        input = []
        outputed = false
    }
    input.push(`${Math.E}`)
    output.innerText = inputJoined()
}
let parenthesisClick = (button) => {
    let btnInput = button.innerText
    if (outputed) {
        expression.innerText = inputJoined()
        input = []
        outputed = false
    }
    input.push(btnInput)
    output.innerText = inputJoined()
}
// let sqrtClick = () => {
//     if (outputed) {
//         expression.innerText = inputJoined()
//         input = []
//         outputed = false
//     }
//     let userInput;
//     input.push(Math.sqrt(userInput))
//     output.innerText = inputJoined()
// }
// the name you give to the event listener matters,
// in this case it has to be 'change'
let animations = () => {
    console.log('xaxvi')
}
let calculatorChangeClick = () => {
    if (window.getComputedStyle(advancedInp).display == 'none') {
        advancedInp.style.display = 'grid'
        btnCalculatorChange.innerText = 'basic'
        outputAndExpression.style.maxWidth = '88rem'
        calculator.style.width = '88rem'
        calculator.style.height = '600px'
        calculator.style.borderRadius = '0px'
    } else if (window.getComputedStyle(advancedInp).display == 'grid') {
        advancedInp.style.display = 'none'
        btnCalculatorChange.innerText = 'advanced'
        outputAndExpression.style.maxWidth = '44rem'
        calculator.style.width = '44rem'
        calculator.style.height = '480px'
        calculator.style.borderRadius = '15px'
    }
}