function plus(thevalue) {
    var number = document.getElementById('number').value;
    var ext = document.getElementById('ext').value;
    number = +number + +thevalue;
    if (number > 999999) {
        number = 0;
        ext = incrementExt(ext);
    }
    document.getElementById('number').value = pad(number, 6);
    document.getElementById('ext').value = ext;
}

function incrementExt(ext) {
    var charOne = ext.charAt(2);
    var charTwo = ext.charAt(1);
    var charThree = ext.charAt(0);

    var state = 0;
    if (charOne === 'Z') 
    {
        state++;
    }
    if (charTwo === 'Z' && state === 1) 
    {
        state++;
    }

    if (state === 1) {
        charTwo = String.fromCharCode(charTwo.charCodeAt() + 1);
        charOne = 'A';
    } else if (state === 2) {
        charThree = String.fromCharCode(charThree.charCodeAt() + 1);
        charOne = 'A';
        charTwo = 'A';
    } else {
        charOne = String.fromCharCode(charOne.charCodeAt() + 1);
    }

    return charThree+charTwo+charOne;
}

function pad(num, size){ return ('000000000' + num).substr(-size); }