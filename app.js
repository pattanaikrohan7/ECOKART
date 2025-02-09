document.getElementById('EKOKARTForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // Get input values
  const name = document.getElementById('name').value;
  const mobile = document.getElementById('mobile').value;
  const aadhar_number = document.getElementById('aadhar_number').value;
  const address = document.getElementById('address').value;

  // Validate the mobile number (should be 10 digits)
  const mobilePattern = /^[0-9]{10}$/;
  if (!mobilePattern.test(mobile)) {
    alert("Please enter a valid 10-digit mobile number.");
    return;
  }

  // If Aadhar number is entered, validate it (should be 12 digits)
  const aadharPattern = /^\d{12}$/;
  if (aadhar_number && !aadharPattern.test(aadhar_number)) {
    alert("Please enter a valid 12-digit Aadhar number.");
    return;
  }

  // Generate a random number between 100 and 1000 (representing the expected amount)
  const randomNum = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;

  // Proceed to confirmation
  confirmTransaction(randomNum);
});

function confirmTransaction(randomNum) {
  const confirmation = confirm(`Your expected amount is: ₹${randomNum}\nDo you wish to proceed?`);

  if (confirmation) {
    // If user clicks OK, process the transaction
    alert("Amount is Successfully Credited to your Bank Account!");
  } else {
    // If user clicks Cancel, show thank you message
    alert("Thank you for visiting. Come back again!");
  }
}
