
        document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const rememberMe = document.getElementById('remember').checked;
            
            // Reset error messages
            document.getElementById('email-error').style.display = 'none';
            document.getElementById('password-error').style.display = 'none';
            
            // Validate email
            if (!validateEmail(email)) {
                document.getElementById('email-error').style.display = 'block';
                return;
            }
            
            // Validate password
            if (password.length < 6) {
                document.getElementById('password-error').style.display = 'block';
                return;
            }
            
            // If validation passes, proceed with login
            alert('Login successful!\nEmail: ' + email + '\nRemember me: ' + rememberMe);
            
            // Here you would typically send the data to your server
            // For demo purposes, we're just showing an alert
        });
        
        function validateEmail(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(email);
        }
