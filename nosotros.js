 function validarFormulario() {
            const emailInput = document.getElementById('email');
            const errorEmail = document.getElementById('errorEmail');
            const emailValue = emailInput.value;
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailRegex.test(emailValue)) {
                errorEmail.style.display = 'block';
                return false; 
            } else {
                errorEmail.style.display = 'none';
                return true; 
            }
        }