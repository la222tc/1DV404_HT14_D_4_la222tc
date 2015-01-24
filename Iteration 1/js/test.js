"use strict";

var test = {
    
    testingValidator: function () {
        Validator.validateFirstName("Linus");
        Validator.validateFirstName("L");
        
        Validator.validateLastName("Anderson");
        Validator.validateLastName("A");
        
        Validator.validateAdress("Hejhoppvagen 22");
        Validator.validateAdress("a");
        
        Validator.validateCity("Kalmar");
        Validator.validateCity("K");
        
        Validator.validateZipcode("12345");
        Validator.validateZipcode("123");
        
        Validator.validatePhone("0725555555");
        Validator.validatePhone("07255");
        
        Validator.validateEmail("la222tc@student.se");
        Validator.validateEmail("la222tc.student.se");
        
    }
};