"use strict";


var Test = {
    
    testingValidator: function () {
        Validator.validateName("En ny träff");
        Validator.validateName("E");
        
        Validator.validateDescription("Information om träffen");
        Validator.validateDescription("Info");
        
        Validator.validateDate("2015-10-15");
        Validator.validateDate("2015-45.45");
        
        Validator.validatePlace("Kalmar");
        Validator.validatePlace("K");
        
    }
    
};