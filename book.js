document.getElementById("paymentForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form values
    var name = document.getElementById("name").value;
    var cardNumber = document.getElementById("cardNumber").value;
    var expiryDate = document.getElementById("expiryDate").value;
    var cvv = document.getElementById("cvv").value;
  
    // Perform form validation
    if (name === "" || cardNumber === "" || expiryDate === "" || cvv === "") {
      alert("Please fill in all fields");
      return;
    }
  
    // Perform additional validation if needed
  
    // Process the payment (you can customize this part with your own logic)
    alert("Payment processed successfully!");
  
    // Clear the form
    document.getElementById("paymentForm").reset();
  });
  