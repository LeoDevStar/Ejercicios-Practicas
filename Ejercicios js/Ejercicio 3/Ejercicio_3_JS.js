const original = 'abcde'
const modified = 'abcde'

function findWrongNote(originalNotes, modifiedNotes){

    let wrongNote = '';
    let largeArray = '';

    if (originalNotes == modifiedNotes){
        return wrongNote;
    } else {
        if (originalNotes.length > modifiedNotes.length){
            largeArray = originalNotes;
        } else{
            largeArray = modifiedNotes;
        }
   
        for (let i = 0; i < largeArray.length; i++) {
            
            if (originalNotes[i] != modifiedNotes[i]){
                wrongNote = modifiedNotes[i];
                break
            }
            
        }

        return wrongNote;

    }

}