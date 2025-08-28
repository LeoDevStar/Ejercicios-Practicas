var largeName = "";

function defineLargeName(stringArray){
    for(var i=0; i < stringArray.length; i++){
        if (stringArray[i].length > largeName.length){
            largeName = stringArray[i];
        }
        //console.log(largeName);
    }
}
function createFrame(nameArray){
    defineLargeName(nameArray);

    createBorder();
    for(var i=0; i < nameArray.length; i++){
        console.log("* " + nameArray[i] + " *");
    }
    createBorder();

}

function createBorder(){
    for(var j = 0; j <= largeName.length; j++){
        console.log('*');
    }
}