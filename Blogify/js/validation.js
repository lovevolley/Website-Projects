// //  Validating the form

// var fullname = document.forms['form']['fullname'];
// var email = document.forms['form']['email'];

// var name_error = document.getElementById('name_error');
// var email_error = document.getElementById('email_error');

// fullname.addEventListener ('textInput', fullname_Verify);
// email.addEventListener ('textInput', email_Verify);

// function validated(){
//     if (fullname.value.lenght <3){
//         fullname.style.border = "1px solid red";
//         fullname.style.display = "block";
//         fullname.focus();
//         return false;
//     }
//     if (email.value.lenght <6){
//         email.style.border = "1px solid red";
//         email.style.display = "block";
//         email.focus();
//         return false;
//     }
// }

// function fullname_Verify(){
//     if (fullname.value.lenght >3){
//         fullname.style.border = "1px solid green";
//         fullname.style.display = "none";
//         return true;
// }
// }

// function email_Verify(){
//     if (email.value.lenght >6)
//     {
//     email.style.border = "1px solid green";
//     email.style.display = "none";
//     return true;
// }
// }


function validateform(){

    var name = document.form.name.value;
    var email = document.form.email.value;

    if (name == null || name=="" || name <3 ){
        alert("Name can't be blank nor less than 3 alphabets");
        return false;
    }
    else if (email.length<6){
        alert("Please enter valid email");
        return false;
    }
}