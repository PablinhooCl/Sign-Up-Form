function passwordChecker(){
    let password= document.getElementById("user_password").value;
    let passwordConfirm= document.getElementById("user_password_confirmed").value;
    let message= document.getElementById("message");
    console.log(password, passwordConfirm);

    if(password.length != 0){
        if(password == passwordConfirm){
            message.textContent= "Passwords match";
            message.style.backgroundColor = "#3ae374";
        } else{
            message.textContent= "Password don't match";
            message.style.backgroundColor= "#ff4d4d";
        }
    }

}