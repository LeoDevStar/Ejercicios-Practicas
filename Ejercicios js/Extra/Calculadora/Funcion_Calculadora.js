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
    showValues(realValue, value);
    /*if (activeOperation == false){
        values[0] = parseInt(realValue);
        display.textContent = realValue;
    }else{
        values.push(parseInt(realValue))
        display.textContent += ' ' + realValue;
    }*/
}

function valueZero(){
    if (display.textContent == '0'){
        realValue = 0;
    }
}

function pushValue(pushingValue){
    if (activeOperation == false){
        values[0] = parseInt(pushingValue);
    }else{
        values.push(parseInt(pushingValue))
    }
    //showValues(pushingValue);
}

function showValues(fullValue, value){
    if (activeOperation == false){
        display.textContent = fullValue;
    }else{
        display.textContent += value;
    }
}

function addOperation(operator){
    valueZero();
    pushValue(realValue);
    display.textContent += ' ' + operator + ' ';
    activeOperation = true;
    operation = operator;
    realValue = null;
}

function doOperation(){
    pushValue(realValue);
    if (values.length != 0 && operation != null){
        switch(operation){
            case '+':
                result = values[0] + values[1];
                break;
            case '-':
                result = values[0] - values[1];
                break;
            case 'x':
                result = values[0] * values[1];
                break;
            case '/':
                result = values[0] / values[1];
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

function resetValue(){
    values.length = 0;
    realValue = null;
    activeOperation = false;
    operation = null;

    display.textContent = 0;
}