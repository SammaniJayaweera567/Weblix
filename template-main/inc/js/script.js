// // navbar close onclick
// $(document).ready(function () {
//   $(document).click(function () {
//     // if($(".navbar-collapse").hasClass("in")){
//     $(".navbar-collapse").collapse("hide");
//     // }
//   });
// });

/*Sign Up and Login*/
function password_show_hide() {
  var x = document.getElementById("password");
  var show_eye = document.getElementById("show_eye");
  var hide_eye = document.getElementById("hide_eye");
  hide_eye.classList.remove("d-none");
  if (x.type === "password") {
    x.type = "text";
    show_eye.style.display = "block";
    hide_eye.style.display = "none";
  } else {
    x.type = "password";
    show_eye.style.display = "none";
    hide_eye.style.display = "block";
  }
}

function password_show_hides() {
  var y = document.getElementById("confirmpassword");
  var show_eyes = document.getElementById("show_eyes");
  var hide_eyes = document.getElementById("hide_eyes");
  hide_eyes.classList.remove("d-none");
  if (y.type === "password") {
    y.type = "text";
    show_eyes.style.display = "block";
    hide_eyes.style.display = "none";
  } else {
    y.type = "password";
    show_eyes.style.display = "none";
    hide_eyes.style.display = "block";
  }
}



function validateForm() {
  // Reset error messages
  document.querySelectorAll('.error').forEach(function(element) {
      element.style.display = 'none';
  });

  var email = document.getElementById('inputEmail3').value;
  var password = document.getElementById('password').value;
  var isValid = true;

  // Email validation
  if (email.trim() === '') {
      document.querySelector('.email + .error').style.display = 'block';
      isValid = false;
  }

  // Password validation
  if (password.trim() === '') {
      document.querySelector('.password + .error').style.display = 'block';
      isValid = false;
  }

  // Additional validations can be added here if needed

  return isValid;
}


function validateForm1() {
  // Reset previous errors
  document.getElementById('emailError').style.display = 'none';
  document.getElementById('passwordError').style.display = 'none';

  var email = document.getElementById('inputEmail').value;
  var password = document.getElementById('passwordnew').value;
  var isValid = true;

  // Validate email
  if (!email || email.trim() === '') {
      document.getElementById('emailError').style.display = 'block';
      isValid = false;
  }

  // Validate password
  if (!password || password.trim() === '') {
      document.getElementById('passwordError').style.display = 'block';
      isValid = false;
  }

  return isValid;
}

function validateForm() {
  // Reset error messages
  document.querySelectorAll('.error').forEach(function(element) {
      element.style.display = 'none';
  });

  var title = document.getElementById('inputTitle').value;
  var firstName = document.getElementById('inputFirstName').value;
  var lastName = document.getElementById('inputLastName').value;
  var email = document.getElementById('inputEmail3').value;
  var mobileNo = document.getElementById('inputMobileNo').value;
  var password = document.getElementById('password').value;
  var confirmPassword = document.getElementById('confirmpassword').value;
  var isValid = true;

  // Title validation (if required)

  // First Name validation
  if (firstName.trim() === '') {
      document.querySelector('#inputFirstName + .error').style.display = 'block';
      isValid = false;
  }

  // Last Name validation
  if (lastName.trim() === '') {
      document.querySelector('#inputLastName + .error').style.display = 'block';
      isValid = false;
  }

  // Email validation
  if (email.trim() === '' || !isValidEmail(email)) {
      document.querySelector('#inputEmail3 + .error').style.display = 'block';
      isValid = false;
  }

  // Mobile No validation (you can add specific criteria for mobile number validation)

  // Password validation
  if (password.trim() === '') {
      document.querySelector('#password + .error').style.display = 'block';
      isValid = false;
  }

  // Confirm Password validation
  if (confirmPassword.trim() === '' || confirmPassword !== password) {
      document.querySelector('#confirmpassword + .error').style.display = 'block';
      isValid = false;
  }

  // Additional validations can be added here if needed

  return isValid;
}

function isValidEmail(email) {
  // Basic email validation regex
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

//toggle btn transform
let changeIcon = function (icon) {
  icon.classList.toggle("fa-times");
};

// copyright text year
var getYear = new Date().getFullYear();
document.getElementById("getYear").innerHTML = getYear;




