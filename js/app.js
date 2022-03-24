var msg = require('./Message');
console.log(msg);
let result = msg.firstName.test("Aamir");
console.log("First Name ===> ", result);
let result1 = msg.password.test("Aamir@12");
console.log("Password ===>", result1);
let result2 = msg.emailId.test("aamirreza156@gmail.com");
console.log("Email Id ===> ", result2);
let result3 = msg.mobileNumber.test("7975633784");
console.log("Mobile Num ===> ", result3);
//Other Methods:
var {firstName, password, emailId, mobileNumber} = require('./Message.js');
console.log("FirstNameValidation: ", firstName + "\nPasswordValidation: ", password + "\nEmailValidation: ", emailId + "\nMobileNumValidation: ", mobileNumber);