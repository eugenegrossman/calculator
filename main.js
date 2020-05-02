const buttons = document.querySelector('.buttons');

function add (a,b) {
	return (a)+(b)
};

function subtract (a,b) {
	return (a)-(b)
};

function multiply(a,b){
    return(a)*(b)
}

function divide(a,b){
    return(a)/(b)
}

function operate(operator,a,b){
    if (operator = '+'){
        add(a,b)
    }
    if (operator = '-'){
        subtract(a,b)
    }
    if (operator = '*'){
        multiply(a,b)
    }
    if (operator = '/'){
        divide(a,b)   
    }
}

function setNumbers(){
    let a = document.getElementsByName
    let b = document.getElementByName
};

buttons.forEach((button)=>{
    button.addEventListener('click', (e)=>{
        for(i=0;i<2;i++){
            let a = (button.id)
        }
    

    })
})

buttons.addEventListener('click', (e) => {
    let a = document.querySelector(currentTarget)
    console.log(a)
});