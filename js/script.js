let signUpName = document.getElementById("signUpName");
let signUpEmail = document.getElementById("signUpEmail");
let signUpPassword = document.getElementById("signUpPassword");
let signUpNameAlert= document.getElementById("signUpNameAlert");
let signUpEmailAlert= document.getElementById("signUpEmailAlert");
let signUpPasswordAlert= document.getElementById("signUpPasswordAlert");
let SignUpBtn =document.getElementById("SignUpBtn");
let emailLogInInput = document.getElementById("emailLogInInput");
let loginPasswordInput = document.getElementById("loginPasswordInput");
let logInEmailAlert =document.getElementById("logInEmailAlert");
let logInPasswordAlert =document.getElementById("logInPasswordAlert");
let logInBtn = document.getElementById("loginBtn") 

let logInContanier;

if(localStorage.getItem("Login-Data")== null)
{
  logInContanier=[];
}
else
{
    logInContanier=JSON.parse(localStorage.getItem("Login-Data"));
}


function signUpData() 
{
 if (regexSignUpNameTst()==true && regexSignUpEmailTst()==true && regexSignUpPasswordTst()==true) 
 {
    var data=
  {
      name:signUpName.value,
      email:signUpEmail.value,
      password:signUpPassword.value,
  }
  logInContanier.push(data);
  localStorage.setItem("Login-Data",JSON.stringify(logInContanier)); 
  ClearForms();
  window.location.replace("log-in.html")  
 } 
}



function regexSignUpNameTst() {
    var signUpNameRegex = /^[A-Z][a-z]{4,15}$/

    if (signUpNameRegex.test(signUpName.value) == true && signUpName.value != "") {
        signUpName.classList.add("is-valid");
        signUpName.classList.remove("is-invalid");
        signUpNameAlert.classList.replace("d-block", "d-none");


        return true;
    }
    else {
        signUpName.classList.remove("is-valid");
        signUpName.classList.add("is-invalid");
        signUpNameAlert.classList.replace("d-none", "d-block");

        return false;
    }
}

function regexSignUpEmailTst() {
    var signUpEmailRegex = /^[a-z0-9]{7,14}@(gmail|yahoo).com$/

    if (signUpEmailRegex.test(signUpEmail.value) == true && signUpEmail.value != "") {
        signUpEmail.classList.add("is-valid");
        signUpEmail.classList.remove("is-invalid");
        signUpEmailAlert.classList.replace("d-block", "d-none");

        return true;
    }
    else {
        signUpEmail.classList.remove("is-valid");
        signUpEmail.classList.add("is-invalid");
        signUpEmailAlert.classList.replace("d-none", "d-block");
        return false;
    }


}

function regexSignUpPasswordTst() {
    var signUpPasswordRegex = /^[0-9a-zA-z]{5,20}$/
    if (signUpPasswordRegex.test(signUpPassword.value) == true && signUpPassword.value != "") {
        signUpPassword.classList.add("is-valid");
        signUpPassword.classList.remove("is-invalid");
        signUpPasswordAlert.classList.replace("d-block", "d-none")

        return true;
    }
    else {
        signUpPassword.classList.add("is-invalid");
        signUpPassword.classList.remove("is-valid");
        signUpPasswordAlert.classList.replace("d-none", "d-block")
        return false;
    }
}



function ClearForms() {
    signUpName.value = "";
    signUpEmail.value = "";
    signUpPassword.value = "";
}


function regexLogInEmailTst() {
    var logInEmailRegex = /^[a-z0-9]{7,14}@(gmail|yahoo).com$/

    if (logInEmailRegex.test(emailLogInInput.value) == true && emailLogInInput.value != "") {
        emailLogInInput.classList.add("is-valid");
        emailLogInInput.classList.remove("is-invalid");
        logInEmailAlert.classList.replace("d-block", "d-none");

        return true;
    }
    else {
        emailLogInInput.classList.remove("is-valid");
        emailLogInInput.classList.add("is-invalid");
        logInEmailAlert.classList.replace("d-none", "d-block");
        return false;
    }


}

function regexLogInPasswordTst() {
    var logInPasswordRegex = /^[0-9a-zA-z]{5,20}$/
    if (logInPasswordRegex.test(loginPasswordInput.value) == true && loginPasswordInput.value != "") {
        loginPasswordInput.classList.add("is-valid");
        loginPasswordInput.classList.remove("is-invalid");
        logInPasswordAlert.classList.replace("d-block", "d-none")

        return true;
    }
    else {
        loginPasswordInput.classList.add("is-invalid");
        loginPasswordInput.classList.remove("is-valid");
        logInPasswordAlert.classList.replace("d-none", "d-block")
        return false;
    }
}
if (logInBtn !=null) 
{
    loginPasswordInput.addEventListener("keyup",regexLogInPasswordTst);
    emailLogInInput.addEventListener("keyup",regexLogInEmailTst);
   logInBtn.addEventListener("click",logIn)
}
if (SignUpBtn !=null) 
{
    signUpName.addEventListener("keyup",regexSignUpNameTst);
    signUpEmail.addEventListener("keyup",regexSignUpEmailTst);
    signUpPassword.addEventListener("keyup",regexSignUpPasswordTst);
    SignUpBtn.addEventListener("click",signUpData);
}
function logIn() 
{
   for(let i =0 ; i < logInContanier.length;i++)
   {
       if (logInContanier[i].email== emailLogInInput.value && logInContanier[i].password== loginPasswordInput.value)

       {
         localStorage.setItem("UserName",JSON.stringify(logInContanier[i]));
         window.location.replace("home.html");  
       }
   } 
}