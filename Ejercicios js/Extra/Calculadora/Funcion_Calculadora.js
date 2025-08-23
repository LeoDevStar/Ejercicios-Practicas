var display = document.getElementById("texto");
let values = [];
//var achievedOperation = false;
var activeOperation = false;
var operation;
var result;



function addValue(value){
    values.push(value)
    if (activeOperation == false){
        display.textContent = value;    
    }else{
        display.textContent += ' ' + value;
    }
    
}

function addOperation(operator){
    display.textContent += ' ' + operator;
    activeOperation = true;
    operation = operator;
}

function doOperation(){
    if (operation != null){
        switch(operation){
            case '+':
                result = values[0] + values[1]
                break;
            case '-':
                result = values[0] - values[1]
                break;
            case 'x':
                result = values[0] * values[1]
                break;
            case '/':
                result = values[0] / values[1]
                break;
        }
    }
    display.textContent = result;
    values.length = 0;
    activeOperation = false;
}