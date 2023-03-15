function register(event) {

    event.preventDefault();
    // alert("working");

    var userName = document.getElementById("userName").value;
    var userEmail = document.getElementById("userEmail").value;
    var userNumber = document.getElementById("userNumber").value;
    var userPassword = document.getElementById("userPassword").value;

    var userList = { Name: userName, Email: userEmail, Number: userNumber, Password: userPassword }
    console.log(userList, "userList")

    var dataFromLS = JSON.parse(localStorage.getItem("userInfo")) || [];
    console.log(dataFromLS, "dataFromLS");


    var flag = false

    for (var i = 0; i < dataFromLS.length; i++) {
        if (dataFromLS[i].Email === userEmail) {
            flag = true;
        }
    }
    // console.log("got it");
    if (flag === true) {
        alert("Email is already present please try another email");
    }
    else if (userNumber.length < 1 && userEmail.length < 1 && userName.length < 1 && userPassword < 1) {
        alert("must fill all field")
    }
    else if (userPassword.length < 10) {
        alert("password must have 10 digit")
    }
    else {
        dataFromLS.push(userList);
        localStorage.setItem("userInfo", JSON.stringify(dataFromLS));
        window.location.href = "/login.html";
        document.getElementById("userName").value = "";
        document.getElementById("userEmail").value = "";
        document.getElementById("userNumber").value = "";
        document.getElementById("userPassword").value = "";
        alert("registration Done")
    }

}

function login(event) {

    event.preventDefault();
    // alert("working");

    var userEmail = document.getElementById("userEmail").value;
    var userPassword = document.getElementById("userPassword").value;

    var dataFromLS = JSON.parse(localStorage.getItem("userInfo"));
    console.log(dataFromLS, "dataFromLS")

    flag = false

    for (var i = 0; i < dataFromLS.length; i++) {
        if (dataFromLS[i].Email === userEmail && dataFromLS[i].Password === userPassword) {
            flag = true
        }
    }
    // console.log("got it")
    if (flag === true) {
        document.getElementById("userEmail").value = '';
        document.getElementById("userPassword").value = '';

        var user = {}
        user["current-user-email"] = userEmail;
        console.log(user, "user");
        localStorage.setItem("cuser", JSON.stringify(user));
        window.location.href = "/index.html";
        alert("login successfully")
   
    }
    else {
        alert("please check credentials or please register first")
    }

}

var GettingEmail;

function forgetPassword(event) {

    event.preventDefault();
    // alert("working");

    var userEmail = document.getElementById("userEmail").value;
    var GettingEmail = userEmail;
    console.log(GettingEmail, "GettingEmail");

    var dataFromLS = JSON.parse(localStorage.getItem("userInfo"));
    console.log(dataFromLS, "dataFromLS");

    flag = false

    for (var i = 0; i < dataFromLS.length; i++) {
        if (dataFromLS[i].Email === userEmail) {
            flag = true
        }
    }

    if (flag === true) {
        var newPassword = `<div> <label>Enter your Password</label>
        <br>
        <input type="email" id="userPassword" placeholder="Enter your new password">
        <br>
        <button onclick = "NewPassword()">Submit</button></div>`

        var DivFromHTML = document.getElementById("change");
        DivFromHTML.innerHTML = newPassword;
        alert("set a new Password")
    }
    else {
        alert("please check your email");
    }

}

function NewPassword() {
    // alert("working");

    var userPassword = document.getElementById("userPassword").value;
    console.log(userPassword, "userPassword");

    var dataFromLS = JSON.parse(localStorage.getItem("userInfo"));
    console.log(dataFromLS, "dataFromLS");


    for (var i = 0; i < dataFromLS.length; i++) {
        if (dataFromLS[i].Email === GettingEmail) {
            dataFromLS[i].Password === userPassword;
        }
    }
    console.log(dataFromLS, "dataFromLS");
    localStorage.setItem("userInfo", JSON.stringify(dataFromLS));
    GettingEmail = '';
    document.getElementById("userPassword").value = '';
    alert("password change successfully")
}