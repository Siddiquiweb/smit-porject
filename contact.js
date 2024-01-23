document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Perform form validation
    var nameInput = document.getElementById("rehman");
    var emailInput = document.getElementById("rehman123@gmail.com");
    var messageInput = document.getElementById("hi");
    
    var isValid = true;
    
    if (nameInput.value.trim() === "") {
      isValid = false;
      nameInput.classList.add("error");
    } else {
      nameInput.classList.remove("error");
    }
    
    if (emailInput.value.trim() === "" || !isValidEmail(emailInput.value)) {
      isValid = false;
      emailInput.classList.add("error");
    } else {
      emailInput.classList.remove("error");
    }
    
    if (messageInput.value.trim() === "") {
      isValid = false;
      messageInput.classList.add("error");
    } else {
      messageInput.classList.remove("error");
    }
    
    if (isValid) {
      // Perform form submission (you can send the form data to a server using AJAX or any other method)
      console.log("Form submitted successfully!");
    }
  });
  
  function isValidEmail(email) {
    // Simple email validation regex
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  