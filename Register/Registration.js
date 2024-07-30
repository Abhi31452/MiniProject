
const firstnamenode = document.getElementById("firstname");
const lastnamenode = document.getElementById("lastname");
const agenode = document.getElementById("age");
const phonenode = document.getElementById("phonenumber");
const mailidnode = document.getElementById("email");
const passwordnode = document.getElementById("password");
const cpasswordnode = document.getElementById("cpassword");

const errornode1 = document.getElementById("error1");
const errornode2 = document.getElementById("error2");
const errornode3 = document.getElementById("error3");
const errornode4 = document.getElementById("error4");
const errornode5 = document.getElementById("error5");
const errornode6 = document.getElementById("error6");
const errornode7 = document.getElementById("error7");

firstnamenode.addEventListener("blur", () => validate1())
const validate1 = function () {
    errornode1.textContent = "";
    const firstname = firstnamenode.value;
    console.log(firstname);
    if (firstname == "") {
        errornode1.textContent = "Name must required";
        return false;
    }
    else if (firstname.length < 2) {
        errornode1.textContent = "Enter Valid Name";
        return false;
    }
    // else if(!regExp1.test(firstname))
    else if (!firstname.match("^[A-Za-z]$*")) {
        errornode1.textContent = "please enter valid first";
    }
    else {
        return true;
    }
}

lastnamenode.addEventListener("blur", () => validate2())
const validate2 = function () {
    errornode2.textContent = "";
    const lastname = lastnamenode.value;
    console.log(lastname);
    if (lastname == "") {
        errornode2.textContent = " lastname must required";
        return false;
    }
    else if (lastname.length > 10) {
        errornode2.textContent = "Enter Valid Name";
        return false;
    }
    else {
        return true;
    }
}

agenode.addEventListener("blur", () => validate3())
const validate3 = function () {
    errornode3.textContent = "";
    const age = agenode.value;
    console.log(age);
    if (age == "") {
        errornode3.textContent = " age must required";
        return false;
    }
    else if (age < 15) {
        errornode3.textContent = " age must required";
        return false;
    } else {
        return true;
    }
}


phonenode.addEventListener("blur", () => validate4())
const validate4 = function () {
    const phonepattern = "^\+?(\d[\d\-\+\(\) ]{5,}\d)$";
    const regExp = new RegExp(phonepattern);
    errornode4.textContent = "";
    const phonenumber = phonenode.value;
    if (phonenumber == "") {
        errornode4.textContent = " mailid must required";
        return false;
    } else if (!regExp.test(phonenumber)) {
        errornode4.textContent = "please enter valid phonenumber";
        return false;
    } else {
        return true;
    }
}

mailidnode.addEventListener("blur", () => validate5())
const validate5 = function () {
    errornode5.textContent = "";
    const mailid = mailidnode.value;
    console.log(mailid);
    if (mailid == "") {
        errornode5.textContent = " mailid must required";
        return false;
    }
    else if (!mailid.includes("@") || mailid.startsWith("@") || mailid.endsWith("@") || mailid.endsWith(".") || mailid.startsWith(".")) {
        errornode5.textContent = "Please enter valid email id";
        return false;
    } else {
        return true;
    }
}


passwordnode.addEventListener("blur", () => validate6())
const passPattern = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{6,12}$";
const regExp = new RegExp(passPattern);
const validate6 = function () {
    errornode6.textContent = "";
    const password = passwordnode.value;
    console.log(password);
    if (password == "") {
        errornode6.textContent = " password must required";
        return false;
    }
    else if (!regExp.test(password)) {
        errornode6.textContent = "please enter valid password";
        return false;
    }
    else {
        return true;
    }
}

cpasswordnode.addEventListener("blur", () => validate7())
const validate7 = function () {
    errornode7.textContent = ""
    const cpassword = cpasswordnode.value;
    if (passwordnode.value != cpassword) {
        errornode7.textContent = " password doesnt match";
        return false;
    } else {
        return true;
    }
}

function validateAll() {
    const r1 = validate1();
    const r2 = validate2();
    const r3 = validate3();
    const r4 = validate4();
    const r5 = validate5();
    const r6 = validate6();
    const r7 = validate7();


    return r1 && r2 && r3 && r4 && r5 && r6 && r7;
}

function formSubmit(){
if (validateAll()) {
    submitPopup();
}else{
    alert("error");
}
}

function submitPopup() {
    window.alert('Sign up button clicked!');
}
$(document).ready(function() {
    $('#showPassword').on('change', function() {
        const passwordField = $('#password');
        const isChecked = $(this).is(':checked');
        passwordField.attr('type', isChecked ? 'text' : 'password');
    });
});
