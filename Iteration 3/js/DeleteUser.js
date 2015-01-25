"use strict";


var DeleteUser = {
    
    
    showDisplayUsers:function () {
        
        document.getElementById("content").innerHTML = "";
            
        for (var i = 0; i < Users.length; i++) {
            DeleteUser.displayUsers(i);
            
        }
        
    },
    
    displayUsers:function (UserID) {
        
        var content = document.getElementById("content");
        var newDiv = document.createElement("div");
        var newP = document.createElement("p");
        var line = document.createElement("p");
        var aDelete = document.createElement("a");
        aDelete.setAttribute("href", "#");
        aDelete.innerHTML = " Delete";
        line.innerHTML = "-----------------------------------------";
        
        content.appendChild(newDiv);
        newDiv.appendChild(newP);
        newDiv.appendChild(aDelete);
        newDiv.appendChild(line);
        
        newP.innerHTML = Users[UserID].FirstName + "  " + Users[UserID].LastName + " || " + Users[UserID].Adress;
       
       aDelete.onclick = function () {
           DeleteUser.removeUser(UserID);
       };
    },
    
    removeUser:function (UserID){
            
            var confirm = window.confirm("Vill du verkligen radera användaren?");
            
            if (confirm) {
                Users.splice(UserID, 1);
                DeleteUser.showDisplayUsers();
            }
            
        }
};