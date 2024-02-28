function loginForm(){
    var userName = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var confirm = document.getElementById("confirm").value;
    var contact = document.getElementById("contact").value;
    var description = document.getElementById("description").value;
    var email = document.getElementById("email").value;

    if(userName == "" || userName == null){
        document.getElementById("username-error").innerHTML = "username is mendatory";
        return false;
      }
    if(userName.length < 7) {
        document.getElementById("username-error").innerHTML = "character atleast more than 7 ";
        return false;
    }

if(password == "" || password == null){
  document.getElementById("password-error").innerHTML = "password is mendatory";
  return false;
}

if(confirm == "" || password == null){
  document.getElementById("confirm-error").innerHTML ="confirm password is required";
  return false;
}

if(confirm != password){
  document.getElementById("confirm-error").innerHTML ="password and conirm password is not match";
  return false;
}

if(isNaN(contact)){
  document.getElementById("contact-error").innerHTML ="only takes number";
  return false;
}

if(!isNaN(description)){
  document.getElementById("description-error").innerHTML ="write description here";
  return false; 
}

if(email == "" || email == null){
  document.getElementById("email-error").innerHTML ="write an email";
  return false;
}


}