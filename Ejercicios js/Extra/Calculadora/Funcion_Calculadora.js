var display = document.getElementById("texto");

function addValue(value){    
    display.textContent = value;
}

function addOperation(operation){
    display.textContent += ' ' + operation;
}