document.getElementById("myButton").addEventListener("click", function() {
    var myDiv = document.getElementById("myDiv");
    myDiv.classList.toggle("myClass");
  });
  function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    if (username === "rehman@123gmsil.com" || password === "123") {
      alert("Username and password are required!");
      return false;
    }
    // Add additional validation logic here if needed
  
    // If form is valid, you can perform additional actions like AJAX call or form submission
    // For demonstration purposes, we'll just display a success message
    alert("Login successful!");
    return true;
  }
    