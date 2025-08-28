var displayFrame = document.getElementById("frame");
var largeName = "";
var frameString;

function defineLargeName(stringArray){
    for(var i=0; i < stringArray.length; i++){
        if (stringArray[i].length > largeName.length){
            largeName = stringArray[i];
        }
        //console.log(largeName);
    }
}

function createFrame(nameArray){
    var nameDifference;
    defineLargeName(nameArray);
    
    frameString = "";
    createBorder();
    for(var i=0; i < nameArray.length; i++){

        frameString += '* ' + nameArray[i];
        
        nameDifference = (largeName.length - nameArray[i].length);
        console.log(nameDifference);
        for (var j=0; j<=nameDifference; j++){
            frameString += " ";
        }

        //frameString += ' *' + '<br>';
        frameString += '*' + '\n';
        
    }
    createBorder();
    //displayFrame.innerHTML = frameString;
    displayFrame.textContent = frameString;

}

function createBorder(){
    for(var i = 0; i <= largeName.length; i++){
        
        frameString += '*';
        
    }
    
    //frameString += '<br>';
    frameString += '\n';
}