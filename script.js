document.addEventListener('DOMContentLoaded', () => {
    const fullNameInput = document.getElementById('full-name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');
    const dobInput = document.getElementById('dob');
    const submitButton = document.getElementById('submit-button');
    
    fullNameInput.addEventListener('input', () => {
        validateFullName();
        updateSubmitButtonState();
    });
    
    emailInput.addEventListener('input', () => {
        validateEmail();
        updateSubmitButtonState();
    });
    
    passwordInput.addEventListener('input', () => {
        validatePassword();
        validatePasswordMatch();
        updateSubmitButtonState();
    });
    
    confirmPasswordInput.addEventListener('input', () => {
        validatePasswordMatch();
        updateSubmitButtonState();
    });
    
    dobInput.addEventListener('input', () => {
        validateDateOfBirth();
        updateSubmitButtonState();
    });


    document.getElementById('registration-form').addEventListener('submit', (e) => {
        if (!isFormValid()) {
            e.preventDefault();
        }
    });
    
    function validateFullName() {
        const fullNameError = document.getElementById('full-name-error');
        if (fullNameInput.value.length < 3 || !/^[a-zA-Z\s]*$/.test(fullNameInput.value)) {
            fullNameError.textContent = '❌ Full name must be at least 3 characters long and contain only letters and spaces.';
            fullNameInput.style.border = '2px solid red'; // Change border color and width

        } else {
            fullNameError.textContent = '✅';
            fullNameInput.style.border = '2px solid rgb(87, 212, 87)'; // Change border color and width

        }
    }
    
    function validateEmail() {
        const emailError = document.getElementById('email-error');
        if (!/\S+@\S+\.\S+/.test(emailInput.value)) {
            emailError.textContent = '❌ Enter a valid email address.';
            emailInput.style.border = '2px solid red';
        } else {
            emailError.textContent = '✅';
            emailInput.style.border = '2px solid rgb(87, 212, 87)'; // Change border color and width
        }
    }
    
    function validatePassword() {
        const passwordError = document.getElementById('password-error');
        if (passwordInput.value.length < 8 || !/[a-zA-Z]/.test(passwordInput.value) || !/\d/.test(passwordInput.value)) {
            passwordError.textContent = '❌ Password must be at least 8 characters long and contain both letters and numbers.';
            passwordInput.style.border = '2px solid red';
        } else {
            passwordError.textContent = '✅';
            passwordInput.style.border = '2px solid rgb(87, 212, 87)'; // Change border color and width
        }
    }
    
    function validatePasswordMatch() {
        const confirmPasswordError = document.getElementById('confirm-password-error');
        if (passwordInput.value !== confirmPasswordInput.value) {
            confirmPasswordError.textContent = '❌ Passwords do not match.';
            confirmPasswordInput.style.border = '2px solid red';
        } else {
            confirmPasswordError.textContent = '✅';
            confirmPasswordInput.style.border = '2px solid rgb(87, 212, 87)'; // Change border color and width
        }
    }
    
    function validateDateOfBirth() {
        const dobError = document.getElementById('dob-error');
        const dobValue = dobInput.value;
        const dobDate = new Date(dobValue);
        const now = new Date();
        const age = now.getFullYear() - dobDate.getFullYear() - (now.getMonth() < dobDate.getMonth() || (now.getMonth() === dobDate.getMonth() && now.getDate() < dobDate.getDate()));
        
        if (!dobValue) {
            dobError.textContent = '❌ Please select a valid date of birth.';
            dobInput.style.border = '2px solid red';
            return;
        }

       if (age < 18) {
            dobError.textContent = '❌ You must be at least 18 years old.';
            dobInput.style.border = '2px solid red';
            console.log(age);
            submitButton.disabled=true;
        } 
        else if (age>18) {
            dobError.textContent = '✅';
            dobInput.style.border = '2px solid rgb(87, 212, 87)';
            submitButton.disabled = false;
            console.log(age);
        }
        
        updateSubmitButtonState();
    }
    

    function isFormValid() {
        return (
            fullNameInput.validity.valid &&
            emailInput.validity.valid &&
            passwordInput.validity.valid &&
            confirmPasswordInput.validity.valid &&
            dobInput.validity.valid
        );
    }
    
});
function success() {
        alert("Successfully registered.");
}