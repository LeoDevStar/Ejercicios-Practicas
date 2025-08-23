var display = document.getElementById("texto");
let values = [];
let realValue = null;
//var achievedOperation = false;
var activeOperation = false;
var operation = null;
var result;



function addValue(value){
    if (realValue == null){
        realValue = value;
    }else{
        realValue += '' + value;
    }

    if (activeOperation == false){
        values[0] = parseInt(realValue);
        display.textContent = realValue;
    }else{
        values.push(parseInt(realValue))
        display.textContent += ' ' + realValue;
    }
    
}

function addOperation(operator){
    display.textContent += ' ' + operator;
    activeOperation = true;
    operation = operator;
    realValue = null;
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
    }else{
        result = values[0];
    }
    display.textContent = result;
    values.length = 0;
    values[0] = result;
    realValue = values[0];
    activeOperation = false;
    operation = null;
}