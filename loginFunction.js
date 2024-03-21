<script>
    // Get the modal
    var modal = document.getElementById('loginModal');
    // Get the login button
    var loginButton = document.getElementById('loginButton');

    // Add event listener to the login button
    loginButton.addEventListener('click', openLoginModal);

    // Function to open the modal
    function openLoginModal() {
        modal.style.display = "block";
    }

    // Function to close the modal
    function closeLoginModal() {
        modal.style.display = "none";
    }

    // Function to toggle between login and sign up forms
    function toggleForms() {
        var loginForm = document.getElementById('loginForm');
        var signupForm = document.getElementById('signupForm');

        if (loginForm.style.display === "none") {
            loginForm.style.display = "block";
            signupForm.style.display = "none";
        } else {
            loginForm.style.display = "none";
            signupForm.style.display = "block";
        }
    }
</script>
