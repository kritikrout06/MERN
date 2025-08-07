document.getElementById('registrationForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Reset all error messages
            document.querySelectorAll('.error').forEach(el => {
                el.style.display = 'none';
            });

            let isValid = true;

            // Validate Full Name
            const fullName = document.getElementById('fullName').value;
            if (!fullName) {
                document.getElementById('fullName-error').style.display = 'block';
                isValid = false;
            }

            // Validate Email
            const email = document.getElementById('email').value;
            if (!email || !validateEmail(email)) {
                document.getElementById('email-error').style.display = 'block';
                isValid = false;
            }

            // Validate Password
            const password = document.getElementById('password').value;
            if (password.length < 8) {
                document.getElementById('password-error').style.display = 'block';
                isValid = false;
            }

            // Validate Confirm Password
            const confirmPassword = document.getElementById('confirmPassword').value;
            if (password !== confirmPassword) {
                document.getElementById('confirmPassword-error').style.display = 'block';
                isValid = false;
            }

            // Validate Phone (if provided)
            const phone = document.getElementById('phone').value;
            if (phone && !validatePhone(phone)) {
                document.getElementById('phone-error').style.display = 'block';
                isValid = false;
            }

            // Validate Terms
            if (!document.getElementById('terms').checked) {
                document.getElementById('terms-error').style.display = 'block';
                isValid = false;
            }

            // If form is valid
            if (isValid) {
                alert('Form submitted successfully!');
                // Here you would typically send the form data to your server
                // this.submit();
            }
        });

        function validateEmail(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(email);
        }

        function validatePhone(phone) {
            const re = /^\d{3}-\d{3}-\d{4}$/;
            return re.test(phone);
        }