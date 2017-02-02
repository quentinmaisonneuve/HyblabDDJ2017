function replaceDigit(digit, array, annee) {
    if(array[digit] == 0) {
        $('#'+annee+'chiffre'+digit).attr('src', 'img/zero.svg');
    } 
    else if(array[digit] == 1) {
        $('#'+annee+'chiffre'+digit).attr('src', 'img/un.svg');
    } 
    else if(array[digit] == 2) {
        $('#'+annee+'chiffre'+digit).attr('src', 'img/deux.svg');
    }
    else if(array[digit] == 3) {
        $('#'+annee+'chiffre'+digit).attr('src', 'img/trois.svg');
    }
    else if(array[digit] == 4) {
        $('#'+annee+'chiffre'+digit).attr('src', 'img/quatre.svg');
    }
    else if(array[digit] == 5) {
        $('#'+annee+'chiffre'+digit).attr('src', 'img/cinq.svg');
    }
    else if(array[digit] == 6) {
        $('#'+annee+'chiffre'+digit).attr('src', 'img/six.svg');
    }
    else if(array[digit] == 7) {
        $('#'+annee+'chiffre'+digit).attr('src', 'img/sept.svg');
    }
    else if(array[digit] == 8) {
        $('#'+annee+'chiffre'+digit).attr('src', 'img/huit.svg');
    }
    else if(array[digit] == 9) {
        $('#'+annee+'chiffre'+digit).attr('src', 'img/neuf.svg');
    } 
}

function replaceAllDigits(array, annee) {
    for(var i = 0; i <= 9; i++) {
        replaceDigit(i, array, annee);
    }
}
