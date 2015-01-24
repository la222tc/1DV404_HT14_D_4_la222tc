"use strict";


var Validator = {
    
    
    validateFirstName: function (Name) {
        var labelfName = document.getElementById("labelfName");
        
        var regex = /^[a-zA-Z ]{2,30}$/;
        
        if (regex.test(Name)) {
            labelfName.style.color = "green";
            labelfName.innerHTML = "* Förnamn ";
            console.log("Förnamn Rätt");
        }
        
        else {
             labelfName.style.color = "red" 
             labelfName.innerHTML = "* Förnamn (Måste innehålla 2-30 bokstäver!)"
            console.log("Förnamn Fel!");
        }
    },
    
    validateLastName: function (Name) {
        var labellName = document.getElementById("labellName");
        
        var regex = /^[a-zA-Z ]{2,30}$/;
        
        if (regex.test(Name)) {
            labellName.style.color = "green";
            labellName.innerHTML = "* Efternamn ";
            console.log("Efternamn Rätt");
        }
        
        else {
             labellName.style.color = "red";
             labellName.innerHTML = "* Efternamn (Måste innehålla 2-30 bokstäver!)";
             console.log("Efternamn Fel!");
        }
    },
    
    validateAdress: function (Adress) {
        var labeladress = document.getElementById("labeladress");
        
        var regex = /^[a-zA-Z0-9 ]{2,50}$/;
        
        if (regex.test(Adress)) {
            labeladress.style.color = "green";
            labeladress.innerHTML = "* Adress ";
            console.log("Adress Rätt");
        }
        
        else {
             labeladress.style.color = "red";
             labeladress.innerHTML = "* Adress (Måste innehålla 2-50 bokstäver eller siffror!)";
             console.log("Adress Fel!");
        }
    },
    
    validateCity: function (City) {
        var labelcity = document.getElementById("labelcity");
        
        var regex = /^[a-zA-Z ]{2,30}$/;
        
        if (regex.test(City)) {
            labelcity.style.color = "green";
            labelcity.innerHTML = "* Stad ";
            console.log("Stad Rätt");
        }
        
        else {
             labelcity.style.color = "red";
             labelcity.innerHTML = "* Stad (Måste innehålla 2-30 bokstäver!)";
             console.log("Stad Fel!");
        }
    },
    
    validateZipcode: function (Zipcode) {
        var labelzipcode = document.getElementById("labelzipcode");
        
        var regex = /^[0-9 ]{5}$/;
        
        if (regex.test(Zipcode)) {
            labelzipcode.style.color = "green";
            labelzipcode.innerHTML = "* Postnummer ";
            console.log("Postnummer Rätt");
        }
        
        else {
             labelzipcode.style.color = "red";
             labelzipcode.innerHTML = "* Postnummer (Måste innehålla 5 siffror!)";
             console.log("Postnummer Fel!");
        }
    },
    
    validatePhone: function (Phone) {
        var labelphone = document.getElementById("labelphone");
        
        var regex = /^[0-9 ]{9,20}$/;
        
        if (regex.test(Phone)) {
            labelphone.style.color = "green";
            labelphone.innerHTML = "* Telefon ";
            console.log("Telefon Rätt");
        }
        
        else {
             labelphone.style.color = "red";
             labelphone.innerHTML = "* Telefon (Måste innehålla minst 9 siffror!)";
             console.log("Telefon Fel!");
        }
    },
    
    validateEmail: function (Email) {
        var labelemail = document.getElementById("labelemail");
        
        var regex = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
        
        if (regex.test(Email)) {
            labelemail.style.color = "green";
            labelemail.innerHTML = "* Email ";
            console.log("Email Rätt");
        }
        
        else {
             labelemail.style.color = "red";
             labelemail.innerHTML = "* Email (Skriv in en korrekt email-adress!)";
             console.log("Email Fel!");
        }
    }
};