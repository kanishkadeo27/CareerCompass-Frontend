const signInBtnLink = document.querySelector('.signInBtn-link');
const signUpBtnLink = document.querySelector('.signUpBtn-link');
const wrapper = document.querySelector('.wrapper');
signUpBtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});
signInBtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});

console.log("here");
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    console.log("submit");
    event.preventDefault();

    var users = JSON.parse(localStorage.getItem('users')) || [];

    // Get values from form inputs
    var username = document.getElementById('username1').value;
    var email = document.getElementById('emailid').value;
    var password = document.getElementById('password1').value;

    // Create an object to hold the user information
    var userInfo = {
        username: username,
        email: email,
        password: password
    };

      users.push(userInfo);

            // Update the users array in local storage
            localStorage.setItem('users', JSON.stringify(users));
    // Display a success message
    alert('Registration successful!');

    // Reset the form
    document.getElementById('registrationForm').reset();
})

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    console.log("here");
    var users = JSON.parse(localStorage.getItem('users')) || [];

    var loginUsername = document.getElementById('username').value;
    var loginPassword = document.getElementById('password').value;

    var userFound = false;

    for (var i = 0; i < users.length; i++) {
        var userInfo = users[i];
        console.log(userInfo);
        if (loginUsername === userInfo.username && loginPassword === userInfo.password) {
            userFound = true;
            break;
        }
    }
    if (userFound) {
        alert('Login successful!');
        location.href = '/';
        localStorage.setItem('loggedIn','true');
    } else {
        alert('Wrong credentials. Please try again.');
    }
    document.getElementById('loginForm').reset();
})