var display = document.getElementById("texto");

let operationData = [];
let realNumber = '';
var loadValues = [];

var parenthesisAdded = false;
var doingSubOperation = false;
var subOperation = [];
var subArray;

let actualArray = [];
var operationArray = [];
var operatorsArray = [];
let resultsArray = [];



var preOperationResult;
var operationResult = 0;
let doingOperation = false;

let activeOperator;
let subOperator;


function addNumber(number){
    
    if(realNumber == ''){
        realNumber = number;
    }else{
        realNumber += number;
    }
    
    if (doingOperation){
        display.textContent += number;
    }else{
        display.textContent = realNumber;
    }
    
}

function addOperator(operator){
    
    if(operator == "()"){
        if (!parenthesisAdded){
            parenthesisAdded = true;
            operator = '(';
        }else{
            parenthesisAdded = false;
            operator = ')';
        }
    }

    if(realNumber != ''){
        console.log("Pushing real number: " + realNumber);
        operationData.push(parseInt(realNumber));
        
        realNumber = '';
    }

    operationData.push(operator);
    display.textContent += ' ' + operator + ' ';
    doingOperation = true;
}


function newOperation(){
    if(realNumber != ''){
        operationData.push(parseInt(realNumber));
    }
    
    if (operationData.length >= 2){    
        
        operationData.forEach(value =>{

            if (value>=0 && actualArray.length < 2){                
                actualArray.push(value);
            }else{
                if(value == '('){
                    
                    operationArray.push(actualArray);
                    
                    actualArray = new Array();

                }else if (value == ')'){
                    console.log("SubOperation False");
                    
                    operationArray[0] = [...operationArray[0], ...actualArray];
                    
                    actualArray = operationArray.at(-1);
                    
                    operatorsArray.pop();

                    operationArray.pop();
                    
                }else{
                    operatorsArray.push(value);
                }
            }

            doOperation(actualArray, operatorsArray.at(-1));
            
        })
        
        operationResult = actualArray[0];
        actualArray.length = 0;
        operationArray.length = 0;
        operatorsArray.length = 0;
    }else{
        operationResult = operationData[0];
        
    }
    
    display.textContent = operationResult.toString();
    
    
    operationData.length = 0;
    realNumber = operationResult.toString();

    doingOperation = false;
    activeOperator = null;
    subOperator = null;
}

function doOperation(valueArray, operator){
    
    if(valueArray.length == 2){
        console.log("Doing calc");
        console.log(valueArray[0]);
        console.log(operator);
        console.log(valueArray[1]);
        switch (operator) {
            case '+':
                preOperationResult = valueArray[0] + valueArray[1];
                break;
            case '-':
                preOperationResult = valueArray[0] - valueArray[1];
                break;
            case 'x':
                preOperationResult = valueArray[0] * valueArray[1];
                break;
            case '/':
                preOperationResult = valueArray[0] / valueArray[1];
                break;
            default:
                break;
        }

        console.log("preOperationResult: " + preOperationResult);
                
        valueArray.length = 0;          
        valueArray[0] = preOperationResult;    
        
    }
    
}