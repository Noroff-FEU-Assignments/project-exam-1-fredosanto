function inputLengthValidation (value, requiredLength) {
    if (value.trim() > requiredLength) {
        return true;
    } else {
        return false
    }
}


function emailValidate (email) {
    const emailRegEx = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;
    const emailFormat = emailRegEx.test(email);
    return emailFormat;
}


function messageLengthValidation (value, requiredLength) {
    if ((value.trim().length < requiredLength) && (value.trim().length > 24)) {
        return true;
    } else {
        return false;
    }
}


export { inputLengthValidation, emailValidate, messageLengthValidation };

