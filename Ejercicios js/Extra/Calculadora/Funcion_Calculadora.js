

class Operacion{
    constructor(){
        this.numeros = [];
        this.operador = "";
        this.prioridad = 0;
    }

    agregarNumero(numero){
        this.numeros.push(numero);
    }

    agregarOperador(operador){
        this.operador = operador;
    }

    definirPrioridad(){
        if(this.operador != ""){
            switch (this.operador) {
                case "+":
                    this.prioridad = 0;
                    break;
                case "-":
                    this.prioridad = 0;
                    break;
                case 'x':
                    this.prioridad = 1;
                    break;
                case '/':
                    this.prioridad = 1;
                    break;
                default:
                    break;
            }
        }else{
            return "No hay operador definido";
        }
        
    }

    resultado(){
        if(this.numeros.length == 2){
            if (this.operador != ""){
                switch (this.operador) {
                    case "+":
                        return this.numeros[0] + this.numeros[1];
                        break;
                    case "-":
                        return this.numeros[0] - this.numeros[1];
                        break;
                    case "x":
                        return this.numeros[0] * this.numeros[1];
                        break;
                    case "/":
                        return this.numeros[0] / this.numeros[1];
                        break;
                    default:
                        break;
                }
            }else{
                return "no hay operador definido"
            }
        }else{
            return "no hay suficientes numeros para realizar la operacion";
        }
    }


}

var display = document.getElementById("texto");
var firstNumber = true;
var doingOperation = false;
var stringNumber = "";
var integerNumber;
var operationData = [];
var subOperationData = [];


var resultado = 0;



function addNumber(number){

    if (firstNumber){
        stringNumber = number;
        firstNumber = false;
    }else{
        stringNumber += number;
    }
    
    if(!doingOperation){
        display.textContent = stringNumber;
    }else{
        display.textContent += number;
    }
    
    
}

function addNumberToOperationData(numberToAdd){
    integerNumber = parseInt(numberToAdd);
    operationData.push(integerNumber);
    firstNumber = true;
}

function addOperator(operator){
    if(stringNumber != ""){
        addNumberToOperationData(stringNumber);

        operationData.push(operator);

        display.textContent += " " + operator + " ";
        doingOperation = true;
        stringNumber = "";
    }
}

function addParenthesis(value){
    if(stringNumber != ""){
        addNumberToOperationData(stringNumber);

        doingOperation = true;
        stringNumber = "";
    }

    if(value == 'p'){
        value = "(";
    }else if (value == '/p'){
        value = ")";
    }

    operationData.push(value);

    display.textContent += " " + value + " ";

    
}

function solveOperation(operationArray){
    let i = 0;
    var operacion;
    let prioridad = 1;

    let subOperationData;
    let subOperationResult;


    if (operationArray.findIndex(element => element == "(") != -1){
        subOperationData = operationArray.slice(
            operationArray.findIndex(element => element == "(")+1,
            operationArray.findLastIndex(element => element == ")")
        );
        subOperationResult = solveOperation(subOperationData);
        operationArray.splice(operationArray.findIndex(element => element == "("), operationArray.findLastIndex(element => element == ")"), subOperationResult);
    }
        
    do{
        if(!(operationArray[i] >= 0)){

            if(operationArray[i] != "(" && operationArray[i] != ")"){
                operacion = new Operacion();
                operacion.agregarNumero(operationArray[i-1]);
                operacion.agregarOperador(operationArray[i]);
                operacion.definirPrioridad();
                operacion.agregarNumero(operationArray[i+1]);
                console.log("operacion: " + operacion.numeros[0] + operacion.operador + operacion.numeros[1] + " prioridad: " + operacion.prioridad);
            }
            
            
            

            if(operacion.prioridad == prioridad){   
                operationArray.splice(i-1,3,operacion.resultado());  
                i = 0;
            }


        }
        
        i += 1;

        if(i > operationArray.length){
            prioridad -= 1;
            i = 0;
        }

    }while(operationArray.length > 1);

    return operationArray[0];
}

function doOperation(){
    if(stringNumber != ""){
        addNumberToOperationData(stringNumber);
    }

    resultado = solveOperation(operationData);
    display.textContent = resultado.toString();
    doingOperation = false;
}




