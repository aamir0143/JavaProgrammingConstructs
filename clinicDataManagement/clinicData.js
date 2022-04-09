// //Importing the neccessary module
// const prompt = require('prompt-sync')();

// //Created contact class(UC1)
// class Contact {
//     //Declaring the properties(UC1)
//     patientId;
//     firstName;
//     lastName;
//     patientAge;
//     patientWeight;
//     address;
//     city;
//     state;
//     zipCode;
//     phoneNumber;
//     emailId;
//     bloodGroup;
//     gender;

//     //Initializing the parameterized constructor of class using constructor keyword(UC1)
//     constructor(...parameters) {
//         this.patientId = parameters[0];
//         this.firstName = parameters[1];
//         this.lastName = parameters[2];
//         this.patientAge = parameters[3];
//         this.patientWeight = parameters[4];
//         this.address = parameters[5];
//         this.city = parameters[6];
//         this.state = parameters[7];
//         this.zipCode = parameters[8];
//         this.phoneNumber = parameters[9];
//         this.emailId = parameters[10];
//         this.bloodGroup = parameters[11];
//         this.gender = parameters[12];
//     }

//     //Method to return values in string format
//     toString() {
//         return `Patient Id: ${this.patientId}\nFirst Name: ${this.firstName}\tLast Name: ${this.lastName}\nPatient Age: ${this.patientAge}\tPatient Weight: ${this.patientWeight}\nAddress: ${this.address}\tCity: ${this.city}\tState: ${this.state}\nZipCode: ${this.zipCode}\tPhone Number: ${this.phoneNumber}\nEmail-Id: ${this.emailId}\nBlood Group: ${this.bloodGroup}\nGender: ${this.gender}\n`;
//     }
// }

// //Displaying the welcome message
// console.log("Welcome To The AddressBook Program Using Js")

// //Function to return object of added contacts(UC1)
// function returnAddedContact(patientId, firstName, lastName, patientAge, patientWeight, address, city, state, zipCode, phoneNumber, emailId, bloodGroup, gender) {
//     let contact
//     try {
//         //Object for class
//         contact = new Contact(patientId, firstName, lastName, patientAge, patientWeight, address, city, state, zipCode, phoneNumber, emailId, bloodGroup, gender);
//     } catch (e) {
//         console.error(e)
//     }
//     return contact;
// }

// //Function to get the details of the contact from the user(UC1 && UC2)
// function getContactDetails() {
//     try {
//         //Regex patterns for validating contact details(UC2)
//         let patientIdPattern = new RegExp('^[0-9]{1,}$');
//         let namePattern = new RegExp('^[A-Z]{1}[a-z]{2,}$');
//         let addressPattern = new RegExp('^[A-Za-z]{4,}$');
//         let zipCodePattern = new RegExp('^[1-9]{1}[0-9]{2}[ ]?[0-9]{3}$');
//         let phoneNumPattern = new RegExp('^\\+?91[ ]?[1-9][0-9]{9}$');
//         let emailIdPattern = new RegExp('^[a-zA-Z0-9]{3,}([._+-][0-9a-zA-Z]{2,})*@[0-9a-zA-Z]+[.]?([a-zA-Z]{2,4})+[.]?([a-zA-Z]{2,3})*$');
//         let bloodGroupPattern = new RegExp('^(A|B|AB|O)[+-]$');
//         let genderPattern = new RegExp('^(M|F|O)$');
//         //Validate Patient Id (UC2)
//         let patientId = prompt('Enter Patient Id: ');
//         if (!patientIdPattern.test(patientId))
//             throw 'Id';
//         //Validating first name(UC2)
//         let firstName = prompt('Enter Your FirstName Start With Capital : ');
//         if (!namePattern.test(firstName))
//             throw 'First name should have minimum 3 characters';
//         //Validating last name(UC2)
//         let lastName = prompt('Enter Your LastName Start With Capital : ');
//         if (!namePattern.test(lastName))
//             throw 'First name should have minimum 3 characters';
//         //Validating Age (UC2)
//         let patientAge = prompt('Enter Age: ');
//         if (!patientIdPattern.test(patientAge))
//             throw 'Age';
//         //Validating Weight (UC2)
//         let patientWeight = prompt('Enter Weight: ');
//         if (!patientIdPattern.test(patientWeight))
//             throw 'Weight';
//         //Validating address(UC2)
//         let address = prompt('Enter Your Address : ');
//         if (!addressPattern.test(address))
//             throw 'Address should have minimum 4 characters';
//         //Validating city name(UC2)
//         let city = prompt('Enter Your City Name: ');
//         if (!addressPattern.test(city))
//             throw 'City should have minimum 4 characters';
//         //Validating states name(UC2)
//         let state = prompt('Enter Your State Name : ');
//         if (!addressPattern.test(state))
//             throw 'State should have minimum 4 characters';
//         //Validating zip code(UC2)
//         let zipCode = prompt('Enter Your Zip Code : ');
//         if (!zipCodePattern.test(zipCode))
//             throw 'Zipcode is not valid';
//         //Validating phone number(UC2)
//         let phoneNumber = prompt('Enter Your Phone Number : ');
//         if (!phoneNumPattern.test(phoneNumber))
//             throw 'Phone number is not valid';
//         //Validating email id(UC2)
//         let emailId = prompt('Enter Your Email Id : ');
//         if (!emailIdPattern.test(emailId))
//             throw 'Email id is not valid';
//         //Validating blood group (UC2)
//         let bloodGroup = prompt('Enter Blood Group: ');
//         if (!bloodGroupPattern.test(bloodGroup))
//             throw 'Blood Group';
//         //Validating gender (UC2)
//         let gender = prompt('Enter The Gender: ');
//         if (!genderPattern.test(gender))
//             throw 'Gender';
//         let contactDetails = returnAddedContact(patientId ,firstName, lastName, patientAge, patientWeight, address, city, state, zipCode, phoneNumber, emailId, bloodGroup, gender);
//         console.log("\nDetails Of Contacts");
//         console.log(contactDetails.toString());
//     } catch (e) {
//         console.error(e);
//     }
// }

// //Calling the function(UC2)
// getContactDetails();


//***********************UC3************************************

//Importing the neccessary module
let prompt = require(`prompt-sync`)({ sigint: true });
const fs = require('fs')
function readfile() 
{
  
  let raw = fs.readFileSync('./add.json','utf8');
  let punishments= JSON.parse(raw);
  console.log(punishments);
  console.log("raw",raw);
  return punishments;
  
}
function write(punishments){
  let data = JSON.stringify(punishments);
  console.log("data",data);
 return fs.writeFileSync('./add.json', data);
  
}

//Created contact class(UC1)
class Contact {
    //Declaring the properties(UC1)
    patientId;
    firstName;
    lastName;
    patientAge;
    patientWeight;
    address;
    city;
    state;
    zipCode;
    phoneNumber;
    emailId;
    bloodGroup;
    gender;

    //Initializing the parameterized constructor of class using constructor keyword(UC1)
    constructor(...parameters) {
        //Regex patterns for validating contact details(UC2&&UC3)
        let patientIdPattern = new RegExp('^[0-9]{1,}$');
        let namePattern = new RegExp('^[A-Z]{1}[a-z]{2,}$');
        let addressPattern = new RegExp('^[A-Za-z0-9]{4,}$');
        let zipCodePattern = new RegExp('^[1-9]{1}[0-9]{2}[ ]?[0-9]{3}$');
        let phoneNumPattern = new RegExp('^\\+?91[ ]?[1-9][0-9]{9}$');
        let emailIdPattern = new RegExp('^[a-zA-Z0-9]{3,}([._+-][0-9a-zA-Z]{2,})*@[0-9a-zA-Z]+[.]?([a-zA-Z]{2,4})+[.]?([a-zA-Z]{2,3})*$');
        let bloodGroupPattern = new RegExp('^(A|B|AB|O)[+-]$');
        let genderPattern = new RegExp('^(M|F|O)$');
        if (!patientIdPattern.test(parameters[0]))
            throw 'Id not valid';
        this.patientId = parameters[0];
        if (!namePattern.test(parameters[1]) && !namePattern.test(parameters[2]))
            throw 'First or last name should have minimum 3 characters';
        this.firstName = parameters[1];
        this.lastName = parameters[2];
        if (!patientIdPattern.test(parameters[3]) && !patientIdPattern.test(parameters[4]))
            throw 'Age or Weight not valid';
        this.patientAge = parameters[3];
        this.patientWeight = parameters[4];
        if (!addressPattern.test(parameters[5]) && !addressPattern.test(parameters[6]) && !addressPattern.test(parameters[7]))
            throw 'It Should have minimum 4 characters';
        this.address = parameters[5];
        this.city = parameters[6];
        this.state = parameters[7];
        if (!zipCodePattern.test(parameters[8]))
            throw 'Zipcode is not valid';
        this.zipCode = parameters[8];
        if (!phoneNumPattern.test(parameters[9]))
            throw 'Phone number is not valid';
        this.phoneNumber = parameters[9];
        if (!emailIdPattern.test(parameters[10]))
            throw 'Email id is not valid';
        this.emailId = parameters[10];
        if (!bloodGroupPattern.test(parameters[11]))
            throw 'Blood Group not valid';
        this.bloodGroup = parameters[11];
        if (!genderPattern.test(parameters[12]))
            throw 'Gender is not valid';
        this.gender = parameters[12];
    }

    //Method to return values in string format
    toString() {
        return `Id: ${this.patientId}\nFirst Name: ${this.firstName}\tLast Name: ${this.lastName}\nAge: ${this.patientAge}\nWeight: ${this.patientWeight}\nAddress: ${this.address}\tCity: ${this.city}\tState: ${this.state}\nZipCode: ${this.zipCode}\tPhone Number: ${this.phoneNumber}\nEmail-Id: ${this.emailId}\nBlood Group: ${this.bloodGroup}\nGender: ${this.gender}\n`;
    }
}

//Initializing an addressbook contact array(UC3)
var addressBookContactArr = new Array();

//Displaying the welcome message
console.log("*********Welcome To The Clinic Data Management Program Using Js*********");

//Function to return object of added contacts(UC1)
function addContact(patientId,firstName, lastName, patientAge, patientWeight, address, city, state, zipCode, phoneNumber, emailId, bloodGroup, gender) {
    let contact
    try {
        //Object for class
        contact = new Contact(patientId, firstName, lastName, patientAge, patientWeight, address, city, state, zipCode, phoneNumber, emailId, bloodGroup, gender);
        let myjson = readfile();
                console.log(" before push", myjson);
                myjson.push(contact);
                console.log("addContact",contact);
                console.log("after push",myjson);
                write(myjson);
                console.log(myjson);
    } catch (e) {
        console.error(e)
    }
    addressBookContactArr.push(contact);
}

//Fucntion to add default contact into an array(C3)
function addDefaultContactDetails() {
    try {
        addContact("25", "Aamir", "Reza", "23", "56", "Dagarua", "Purnia", "Bihar", "854330", "91 7975633784", "aamirreza156@gmail.com", "O+", "M");
        addContact("123", "Wasim", "Anwar", "26", "65", "Amour", "Purnia", "Bihar", "854330", "91 7412589631", "wasim456@gmail.com", "O+", "M");
        addContact("68", "Ajay", "Matkar", "36", "70", "Sec-45", "Noida", "delhi", "871777", "91 8523697412", "ajay789@gmail.com", "A+", "M");
        addContact("365", "Sonam", "Kumari", "19", "52", "Shampura", "Bangalore", "Karnataka", "560045", "91 8562497412", "sonam789@gmail.com", "B+", "F");
        if (addressBookContactArr.length != 0)
            console.log("Added The Default Contacts Succesfully");
    } catch (e) {
        console.error(e);
    }
}

//Function to get the details of the contact from the user(UC1 && UC2)
function getContactDetails() {
    try {
        let patientId = prompt('Enter Id : ');
        let firstName = prompt('Enter Your FirstName Start With Capital : ');
        let lastName = prompt('Enter Your LastName Start With Capital : ');
        let patientAge = prompt('Enter Age : ');
        let patientWeight = prompt('Enter Weight : ');
        let address = prompt('Enter Your Address : ');
        let city = prompt('Enter Your City Name: ');
        let state = prompt('Enter Your State Name : ');
        let zipCode = prompt('Enter Your Zip Code : ');
        let phoneNumber = prompt('Enter Your Phone Number : ');
        let emailId = prompt('Enter Your Email Id : ');
        let bloodGroup = prompt('Enter Blood Group : ');
        let gender = prompt('Enter Gender : ');
        addContact(patientId, firstName, lastName, patientAge, patientWeight, address, city, state, zipCode, phoneNumber, emailId, bloodGroup, gender);
        console.log("Added The Contact Succesfully");
    } catch (e) {
        console.error(e);
    }
}

//Function to display contacts(UC3)
function displayContact() {
    try {
        console.log("\n**************Details Of Patient Contacts*********************\n");
        addressBookContactArr.forEach(contact => console.log(contact.toString()));
    } catch (e) {
        console.error(e);
    }
}

//Function to view edit contacts based on the given name(UC4)
function viewAndEditContact() {
    try {
        let name = prompt('Enter Your Name To View And Modify Contact : ');
        addressBookContactArr.forEach((contact) => {
            if (contact.firstName == name) {
                console.log(contact.toString());
                while (true) {
                    console.log("1: Patient Id \n2: First Name \n3: Last Name \n4: Patient Age \n5: Patient Weight \n6: Address \n7: City \n8: State \n9: Zipcode \n10: Phone Number \n11: Email Address \n12: Blood Group \n13: Gender \n14: Go Back")
                    let choice = parseInt(prompt("Enter The Choice From Above That You Want Modified : "));
                    switch (choice) {
                        case 1:
                            let newPatientId = prompt('Enter The Id : ');
                            contact.patientId = newPatientId;
                            break;
                        case 2:
                            let newFirstName = prompt("Enter The New First Name : ");
                            contact.firstName = newFirstName;
                            break;
                        case 3:
                            let newLastName = prompt("Enter The New First Name : ");
                            contact.lastName = newLastName;
                            break;
                        case 4:
                            let newPatientAge = prompt('Enter The Age : ');
                            contact.patientAge = newPatientAge;
                            break;
                        case 5:
                            let newPatientWeight = prompt('Enter The Weight : ');
                            contact.patientWeight = newPatientWeight;
                            break; 
                        case 6:
                            let newAddress = prompt("Enter The New Address : ");
                            contact.address = newAddress;
                            break;
                        case 7:
                            let newCity = prompt("Enter The New City Name : ");
                            contact.city = newCity;
                            break;
                        case 8:
                            let newState = prompt("Enter The New State Name : ");
                            contact.state = newState;
                            break;
                        case 9:
                            let newZipCode = prompt("Enter The New Zip Code : ");
                            contact.zipCode = newZipCode;
                            break;
                        case 10:
                            let newPhoneNum = prompt("Enter The New Phone Number : ");
                            contact.phoneNumber = newPhoneNum;
                            break;
                        case 11:
                            let newEmailId = prompt("Enter The New Email Id : ");
                            contact.email = newEmailId;
                            break;
                        case 12:
                            let newBloodGroup = prompt('Enter The Blood Group : ');
                            contact.bloodGroup = newBloodGroup;
                            break;
                        case 13:
                            let newGender = prompt('Enter The Gender : ');
                            contact.gender = newGender;
                            break;
                        case 14:
                            return;
                        default:
                            console.log("Invalid Option");
                            break;
                    }
                }
            }
        });
        console.log("No Contact Found")
    } catch (e) {
        console.error(e);
    }
}

//Function to delete contact based on name(UC5)
function deleteContact() {
    try {
        let name = prompt('Enter The Name Of The Contact To View And Modify Contact : ');
        const index = addressBookContactArr.findIndex((contact) => contact.firstName == name);;
        //using splice remove the element
        if (index != -1)
            addressBookContactArr.splice(index, 1);
    } catch (e) {
        console.error(e);
    }
}

//Function to seach person in a particular city or state(UC6)
function seachPerson(firstName, lastName) {
    let firstNameOrlastName = prompt("Enter A First Name Or Last Name To Find Person : ");
    let contact = addressBookContactArr.filter((contact) => contact.firstName == firstNameOrlastName || contact.lastName == firstNameOrlastName);
    console.log(contact.join("\n"));
}

//Function to perform addressbook operations(UC3)
function addressBookOperations() {
    try {
        while (true) {
            console.log("1: Enter Patient Contact \n2: Add Default Contacts \n3: Display \n4: Edit Contact \n5: Delete Contact \n6: Search Person \n7: Exit");
            switch (parseInt(prompt('Enter the choice : '))) {
                case 1:
                    getContactDetails();
                    break;
                case 2:
                    addDefaultContactDetails();
                    break;
                case 3:
                    displayContact();
                    break;
                case 4:
                    viewAndEditContact();
                    break;
                case 5:
                    deleteContact();
                    break;
                case 6:
                    seachPerson();
                    break;
                case 7:
                    console.log("Exited");
                    process.exit(1)
                    break;
                default:
                    console.log("Wrong Choice");
                    break;
            }
        }
    } catch (e) {
        console.error(e);
    }
}
//Calling the addressbook operation functions(UC3)
addressBookOperations();