module.exports = {
    firstName: RegExp(/^[A-Z]{1}[A-Za-z]{4,}$/),
    password: RegExp(/^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,15}$/),
    emailId: RegExp(/^[a-z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,4}$/),
    mobileNumber: RegExp(/^[6-9]{1}[0-9]{9}$/)
}