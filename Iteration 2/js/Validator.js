"use strict";

var Validator = {
    
    
    validateName: function (Name) {
        var labelName = document.getElementById("labelName");
        
        var regex = /^[a-zA-Z0-9åÅäÄöÖ ]{2,30}$/;
        
        if (regex.test(Name)) {
            labelName.style.color = "green";
            labelName.innerHTML = "* Namn av träff ";
            console.log("* Namn av träff Rätt");
            Create.countToValid += 1;
        }
        
        else {
             labelName.style.color = "red";
             labelName.innerHTML = "* Namn av träff (Måste innehålla 2-30 bokstäver!)";
            console.log("* Namn av träff Fel!");
            Create.countToValid = 0;
        }
    },
    
    validateDescription: function (Name) {
        var labelDescription = document.getElementById("labelDescription");
        
        var regex = /^[a-zA-Z0-9åÅäÄöÖ ]{10,500}$/;
        
        if (regex.test(Name)) {
            labelDescription.style.color = "green";
            labelDescription.innerHTML = "* Beskrivning ";
            console.log("* Beskrivning  Rätt");
            Create.countToValid += 1;
        }
        
        else {
             labelDescription.style.color = "red";
             labelDescription.innerHTML = "* Beskrivning (Måste innehålla minst 10 bokstäver eller siffror!)";
            console.log("* Beskrivning  Fel!");
            
            Create.countToValid = 0;
        }
    },
    
    validateDate: function (date) {
        var labeldate = document.getElementById("labeldate");
        
        var regex = /^\d{4}([./-])\d{2}\1\d{2}$/;
        
        
        if (regex.test(date)) {
            labeldate.style.color = "green";
            labeldate.innerHTML = "* Datum ";
            console.log("* Datum   Rätt");
            Create.countToValid += 1;
        }
        
        else {
             labeldate.style.color = "red";
             labeldate.innerHTML = "* Datum  (DATUM!)";
            console.log("* Datum   Fel!");
            
            Create.countToValid = 0;
        }
    },
    
    validatePlace: function (Name) {
        var labelPlace = document.getElementById("labelPlace");
        
        var regex = /^[a-zA-Z0-9åÅäÄöÖ ]{2,50}$/;
        
        if (regex.test(Name)) {
            labelPlace.style.color = "green";
            labelPlace.innerHTML = "* Plats ";
            console.log("* Plats  Rätt");
            Create.countToValid += 1;
        }
        
        else {
             labelPlace.style.color = "red";
             labelPlace.innerHTML = "* Plats (Måste innehålla 2-50 bokstäver eller siffror!)";
            console.log("* Plats  Fel!");
            Create.countToValid = 0;
        }
    },
};