// function initializeCamera() {
//   const cameraFeed = document.getElementById("cameraFeed");

//   if (cameraFeed) {
//     navigator.mediaDevices
//       .getUserMedia({ video: true })
//       .then((stream) => {
//         cameraFeed.srcObject = stream;
//       })
//       .catch((error) => {
//         console.error("Error accessing camera:", error);
//       });
//   } else {
//     console.error("cameraFeed element not found");
//   }
// }

// deal with javascript stuff
// document.addEventListener("DOMContentLoaded", () => {
//   const form = document.getElementById("form");
//   const username = document.getElementById("username");
//   const gmails = document.getElementById("gmails");
//   const pswd = document.getElementById("pswd");
//   const pswds = document.getElementById("pswds");
//   const button = document.getElementById("btn");

//   form.addEventListener("input", () => {
//     var isFormValid = validations();
//     button.disabled = !isFormValid;
//   });

//   form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     if (validations()) {
//       console.log("Form submitted successfully.");
//     } else {
//       console.log("Form validation failed.");
//     }
//   });

//   // Function to validate email
//   function isValidEmail(email) {
//     const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
//     return emailPattern.test(email);
//   }

//   // Function to validate password
//   function isValidPassword(password) {
//     return password.length >= 8;
//   }

//   function validations() {
//     const isValidName = username.value.trim() !== "";
//     const isValidEmail = isValidEmail(gmails.value.trim());
//     const isValidPwd = isValidPassword(pswd.value);
//     const isValidPwd2 = isValidPassword(pswds.value);
//     const isPwdMatching = pswd.value === pswds.value;

//     // Update error/success classes for fields
//     updateValidationClass(username, isValidName);
//     updateValidationClass(gmails, isValidEmail);
//     updateValidationClass(pswd, isValidPwd);
//     updateValidationClass(pswds, isValidPwd2);

//     // Check if passwords match
//     if (!isPwdMatching) {
//       updateValidationClass(pswd, false);
//       updateValidationClass(pswds, false);
//     }

//     return (
//       isValidName && isValidEmail && isValidPwd && isValidPwd2 && isPwdMatching
//     );
//   }

//   // Function to update validation classes
//   function updateValidationClass(inputElement, isValid) {
//     if (isValid) {
//       inputElement.classList.remove("error");
//       inputElement.classList.add("success");
//     } else {
//       inputElement.classList.remove("success");
//       inputElement.classList.add("error");
//     }
//   }
// });
document.addEventListener("DOMContentLoaded", function () {
  // Your code here

  // Get references to the form elements
  const form = document.querySelector("form");
  const pswd = document.getElementById("pswd");
  const pswds = document.getElementById("pswds");
  const gmails = document.getElementById("gmails");
  const btn = document.getElementById("btn");

  // Add an event listener to the form for input changes
  form.addEventListener("input", () => {
    validateForm();
  });

  // Function to validate the form
  function validateForm() {
    const isPasswordValid = validatePassword();
    const isEmailValid = validateEmail();

    // Check if passwords match and all fields are valid
    if (isPasswordValid && isEmailValid) {
      btn.disabled = false;
    } else {
      btn.disabled = true;
    }
  }

  // Function to validate the password and confirm password fields
  function validatePassword() {
    const password = pswd.value;
    const confirmPassword = pswds.value;

    if (password === confirmPassword && password.length >= 8) {
      // Passwords match and are at least 8 characters long
      pswd.classList.remove("error");
      pswds.classList.remove("error");
      return true;
    } else {
      // Passwords don't match or are too short
      pswd.classList.add("error");
      pswds.classList.add("error");
      return false;
    }
  }

  // Function to validate the email field
  function validateEmail() {
    const email = gmails.value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (emailPattern.test(email)) {
      // Email is valid
      gmails.classList.remove("error");
      return true;
    } else {
      // Email is invalid
      gmails.classList.add("error");
      return false;
    }
  }

  // End of your code
});
