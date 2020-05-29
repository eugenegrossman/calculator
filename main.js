const decimal = document.querySelector('#decimal');
const buttons = document.querySelectorAll('.btnnum');
const operators = document.querySelectorAll('.operator');
const display = document.querySelector('#displayBOT');
const displayPreviousElement = document.querySelector('#displayTOP');
const clear = document.querySelector('#clear');
const cancel = document.querySelector('#cancel');
const equals = document.querySelector('#equals');
const divcontainer = document.querySelector('.container');
const bigcontainer = document.querySelector('#bigcontainer');

let displayValue = '0'
let displayPrevious = ''
let currentOperator = ''
let result = undefined
let decimalbutton = true;

decimal.addEventListener('click', pressedDecimal)
buttons.forEach((button) => {
    button.addEventListener('click',pressedButton)
})
operators.forEach((button) => {
    button.addEventListener('click',pressedOperator)
})
clear.addEventListener('click',clearDisplay)
cancel.addEventListener('click', cancelDisplay)
equals.addEventListener('click',operate)
window.addEventListener('keydown',keyboardpressing)

function keyboardpressing () {
    if (event.key.match(/[0-9]/)) {
        switch(event.key){
            case '0':
                pressedButton.call(document.getElementById('0'))
            break;

            case '1':
                pressedButton.call(document.getElementById('1'))
            break;

            case '2':
                pressedButton.call(document.getElementById('2'))
            break;

            case '3':
                pressedButton.call(document.getElementById('3'))
            break;

            case '4':
                pressedButton.call(document.getElementById('4'))
            break;

            case '5':
                pressedButton.call(document.getElementById('5'))
            break;

            case '6':
                pressedButton.call(document.getElementById('6'))
            break;

            case '7':
                pressedButton.call(document.getElementById('7'))
            break;

            case '8':
                pressedButton.call(document.getElementById('8'))
            break;

            case '9':
                pressedButton.call(document.getElementById('9'))
            break;
        }
    } else if(event.key.match(/\,|\./) ) {
        pressedDecimal.call(decimal)
    } else if(event.key.match('Backspace')){
        cancelDisplay()
    } else if(event.key.match(/[+-\/*:x]/)) {
        switch (event.key) {
            case '+':
                pressedOperator.call(document.getElementById('+'))
            break;
            
            case '*':
            case 'x':
            case 'X':
                pressedOperator.call(document.getElementById('x'))
            break;
            
            case '/':
            case ':':
                pressedOperator.call(document.getElementById('/'))
            break;

            case '-':
                pressedOperator.call(document.getElementById('-'))
            break;
        }
            
    } else if(event.key.match('Enter')) {
        operate()
    } else if (event.key.match('Delete')) {
        clearDisplay()
    }
}
    
    function pressedButton() { 
        if (displayValue === '0') {
            displayValue = ''
        }
        if (displayValue === result) {
            displayValue = ''
        }
        displayValue +=  this.innerText   
        updateDisplay()    
    }

    function pressedOperator () {    
        if (/[+-x:] $/.test(displayValue)) {
            return;
        } else {
            decimalbutton = true;
            operator = this.innerText
            displayValue += ' ' + operator + ' '  
            updateDisplay()
        }  
    }

    function pressedDecimal() { 
        if (decimalbutton) {
            pressedButton.call(this)
            decimalbutton = false;
        } else {
            return;
        }         
    }

    function clearDisplay() {
        displayPrevious = ''
        displayValue = '0'
        operator = ''
        result = undefined
        decimalbutton = true;
        updateDisplay()   
    }


function cancelDisplay() {
    let displayLength = displayValue.length
    if( displayValue.match(/ $/) ) {
        displayLength = displayLength -2     
    }
    if(displayValue.charAt(displayLength-1).match('.')){
        decimalbutton = true;
    }    
    displayValue = displayValue.slice(0,displayLength-1)
    updateDisplay()
}


function updateDisplay() {
    
    if((/ \./).test(displayValue)) {
        displayValue = displayValue.replace(/ \./, ' 0.')
    } else if ((/^\./).test(displayValue)) {
        displayValue = displayValue.replace(/^\./ , '0.')
    }    
    display.innerText = displayValue
    if (result) {
        displayPreviousElement.innerText = displayPrevious + ' = ' + result
    } else {
        displayPreviousElement.innerText = displayPrevious
    }
}

function operate () {
    if (displayValue === result) {
        return
    }
    if (displayValue.match(': 0')){
        alert('ERROR')
        return
    }
    
    displayValue = displayValue.replace(/:/g,'/')
    displayValue = displayValue.replace(/x/g,'*')
    
   
    if ((/[+-\/*] $/.test(displayValue))) {
        return;
    } else {
        displayPrevious = displayValue 
        displayPrevious = displayPrevious.replace(/\//g,':')
        displayPrevious = displayPrevious.replace(/\*/g,'x')

    }
       
    result = getMathematicalValue(displayValue)
    result =  Math.floor(result * 100) / 100
    displayValue = result    
    updateDisplay()   
}

function getMathematicalValue(str) {
    return new Function('return ' + str)();    
}
