"use strict";


var Registration = {
    
    submit: document.getElementById("Submit"),
    
    init:function () {
        
        Registration.submit.addEventListener("click", function (e) {
            e.preventDefault();
            Registration.validateInput();
        });
    },
    
    validateInput:function () {
        
        var firstName = document.getElementById("fName");
        Validator.validateFirstName(firstName.value);
        
        var lastName = document.getElementById("lName");
        Validator.validateLastName(lastName.value);
        
        var adress = document.getElementById("adress");
        Validator.validateAdress(adress.value);
        
        var city = document.getElementById("city");
        Validator.validateCity(city.value);
        
        var zipcode = document.getElementById("zipcode");
        Validator.validateZipcode(zipcode.value);
        
        var phone = document.getElementById("phone");
        Validator.validatePhone(phone.value);
        
        var email = document.getElementById("email");
        Validator.validateEmail(email.value);
        
    }
    
    
};
