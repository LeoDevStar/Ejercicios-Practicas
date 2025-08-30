var displayFrame = document.getElementById("frame");
var largeName = "";
var frameString;
let namesArray = new Array();

function defineLargeName(stringArray){
    
    namesArray = stringArray.slice();
    namesArray = namesArray.sort((a,b) => a.length-b.length);

    largeName = namesArray.at(-1);

    //console.log(namesArray);
}

function createFrame(nameArray){
    var nameDifference;

    defineLargeName(nameArray);
    
    frameString = "";

    createBorder();

    nameArray.forEach(element => {
        frameString += '* ' + element;

        nameDifference  = (largeName.length - element.length);

        frameString += " ".repeat(nameDifference);

        frameString += ' *' + '\n';
    });

    createBorder();
    
    displayFrame.textContent = frameString;
    console.log(frameString);

}

function createBorder(){

    frameString += "*".repeat(largeName.length + 4);
    
    frameString += '\n';
}