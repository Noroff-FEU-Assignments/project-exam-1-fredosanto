function inputLengthValidation(value, requiredLength) {
    if (value.trim().length > requiredLength) {
        return true;
    } else {
        return false
    }
}


function emailValidate(email) {
    const emailRegEx = /\S+@\S+\.\S+/;;
    const emailFormat = emailRegEx.test(email);
    return emailFormat;
}


function messageLengthValidation(value, requiredLength) {
    if ((value.trim().length < requiredLength) && (value.trim().length) > 24) {
        return true;
    } else {
        return false;
    }
}


export { inputLengthValidation, emailValidate, messageLengthValidation };

