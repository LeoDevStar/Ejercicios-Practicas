var display = document.getElementById("texto");
let values = [];
//var achievedOperation = false;
var activeOperation = false;
var operation = null;
var result;



function addValue(value){
    if (activeOperation == false){
        values[0] = value;
        display.textContent = value;

    }else{
        values.push(value)
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
    }else{
        result = values[0];
    }
    display.textContent = result;
    values.length = 0;
    values[0] = result;
    activeOperation = false;
    operation = null;
}