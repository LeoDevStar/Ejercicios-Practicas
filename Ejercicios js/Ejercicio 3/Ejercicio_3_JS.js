const original = 'abcde'
const modified = 'abcde'

function findWrongNote(originalNotes, modifiedNotes){

    let wrongNote = '';

    if (originalNotes == modifiedNotes){
        return wrongNote;
    } else {

        if (modifiedNotes.length > originalNotes.length){
            wrongNote = modifiedNotes[originalNotes.length];
            return wrongNote
        }

        for (let i = 0; i < originalNotes.length; i++) {
    
            if (originalNotes[i] != modifiedNotes[i]){
                wrongNote = originalNotes[i];
                break
            }
            
        }

        return wrongNote;

    }

}