
var formData = {
    username: "",
    password: "",
    age: "",
    gender: null,
    phoneNumber: "",
};

function validateForm() {
    formData.username = document.getElementById('username').value;
    formData.password = document.getElementById('password').value;
    formData.age = document.getElementById('age').value;
    formData.gender = document.querySelector('input[name="gender"]:checked');
    formData.phoneNumber = document.getElementById('phoneNumber').value;

    var validationRules = {
        username: {
            condition: value => value.length >= 5 && value.length <= 10,
            message: "Username must be between 5 and 10 characters.",
        },
        password: {
            condition: value => value.length > 8 && /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/.test(value),
            message: "Password must be strong and greater than 8 characters.",
        },
        age: {
            condition: value => value >= 18 && value <= 60,
            message: "Age must be between 18 and 60.",
        },
        gender: {
            condition: value => value !== null,
            message: "Please select a gender.",
        },
        phoneNumber: {
            condition: value => value.length === 11,
            message: "Phone number must be 11 digits.",
        },
    };

    var errorMessage = "";

    for (var field in formData) {
        var rule = validationRules[field];
        if (!rule.condition(formData[field])) {
            errorMessage += rule.message + " ";
        }
    }

    var errorMessageElement = document.getElementById("errorMessage");
    errorMessageElement.innerHTML = errorMessage;

    if (errorMessage === "") {
        alert('Data Saved');
        console.log(formData);
    }
}

function CheckLogin() {
    var username_login = document.getElementById('usernamee').value;
    var password_login = document.getElementById('passwordd').value;

    if (username_login === formData.username && password_login === formData.password) {
        alert('Login completed');
        window.location.href='Review.html';
    } else {
        alert('Login failed');
    }
}

function update() {
    var username_forgotPassword = document.getElementById('usernameeeee').value;
    var password_forgotPassword = document.getElementById('forgitpassword').value;

    if (username_forgotPassword === formData.username) {
        alert('Password updated successfully');
        formData.password = password_forgotPassword;
        console.log(formData);
    } else {
        alert('Username not found. Password not updated.');
    }
}

  