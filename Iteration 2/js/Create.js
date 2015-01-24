"use strict";


var Create = {
    
    submit: document.getElementById("Submit"),
    countToValid: 0,
    Name: document.getElementById("Name"),
    Description: document.getElementById("Description"),
    date: document.getElementById("date"),
    Place: document.getElementById("Place"),
    
    init:function () {
        
        Create.submit.addEventListener("click", function (e) {
            e.preventDefault();
            Create.validateInput();
            
            if (Create.countToValid >= 4) {
                Create.sendMailToAthletes();
            }
            
            console.log(Create.countToValid);
        });
    },
    
    validateInput:function () {
        
        Validator.validateName(Create.Name.value);
        
        Validator.validateDescription(Create.Description.value);
        
        Validator.validateDate(Create.date.value);
        
        Validator.validatePlace(Create.Place.value);
        
    },
    
    sendMailToAthletes:function () {
        console.log("Mail skickade");
        window.location.href = "https://1dv404-ht14-d-4-la222tc-la222tc.c9.io/Iteration 2/index2.html";
        
     
    }
};