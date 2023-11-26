var FirstName = document.getElementById("FirstName");
  var LastName = document.getElementById("LastName");
  var Email = document.getElementById("Email");
  var Password = document.getElementById("Password");

  function showError() {
   

    var validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(FirstName.value == "" || LastName.value == "" || Password.value == "")
    {       
      if(FirstName.value == "") {
        document.getElementById("fname_error").innerHTML = "First Name cannot be empty";  
        FirstName.style.border = "2px solid hsl(0, 100%, 74%)";
        FirstName.placeholder = "";
        FirstName.style.backgroundImage = "url('images/icon-error.svg')";
        FirstName.style.backgroundRepeat = "no-repeat";
        FirstName.style.backgroundPosition = "22rem 0.7rem";
      } 
      else {
        document.getElementById("fname_error").innerHTML = "";
        FirstName.style.border = "1px solid hsl(246, 25%, 77%)";
        FirstName.style.backgroundImage = "none";
      }

      if(LastName.value == "") {
        document.getElementById("lname_error").innerHTML = "Last Name cannot be empty"; 
        LastName.style.border = "2px solid hsl(0, 100%, 74%)";
        LastName.placeholder = "";   
        LastName.style.backgroundImage = "url('images/icon-error.svg')";
        LastName.style.backgroundRepeat = "no-repeat";
        LastName.style.backgroundPosition = "22rem 0.7rem";
      } 
      else {
        document.getElementById("lname_error").innerHTML = "";   
        LastName.style.border = "1px solid hsl(246, 25%, 77%)"; 
        LastName.style.backgroundImage = "none";
      }

      if(Password.value == "") {
        document.getElementById("password_error").innerHTML = "Password cannot be empty";
        Password.style.border = "2px solid hsl(0, 100%, 74%)";
        Password.placeholder = "";
        Password.style.backgroundImage = "url('images/icon-error.svg')";
        Password.style.backgroundRepeat = "no-repeat";
        Password.style.backgroundPosition = "22rem 0.7rem";
      } 
      else {
        document.getElementById("password_error").innerHTML = "";
        Password.style.border = "1px solid hsl(246, 25%, 77%)";
        Password.style.backgroundImage = "none";
      }

      // if(Email.value != validRegex) {
      //   document.getElementById("email_error").innerHTML = "Looks like this is not an email"; 
      //   Email.style.border = "2px solid hsl(0, 100%, 74%)";
      //   Email.placeholder = "";
      //   Email.style.backgroundImage = "url('images/icon-error.svg')";
      //   Email.style.backgroundRepeat = "no-repeat";
      //   Email.style.backgroundPosition = "22rem 0.7rem";
      // } 
      // else {
      //   document.getElementById("email_error").innerHTML = ""; 
      //   Email.style.border = "1px solid hsl(246, 25%, 77%)";
      //   Email.style.backgroundImage = "none";
      // }
      
      return false;
    }  
    else {
      return true;
    }
  }