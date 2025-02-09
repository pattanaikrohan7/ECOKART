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

  // Proceed to confirmation and show modal
  showModal(`Your expected amount is: ₹${randomNum}\nDo you wish to proceed?`, randomNum);
});

function showModal(message, randomNum) {
  const modal = document.getElementById('modal');
  const modalMessage = document.getElementById('modalMessage');
  const modalConfirmButton = document.getElementById('modalConfirmButton');

  // Show the modal and update the message
  modal.style.display = "block";
  modalMessage.textContent = message;

  // Handle the OK button click
  modalConfirmButton.onclick = function () {
    // Process the transaction after confirmation
    processTransaction(randomNum);

    // Close the modal
    modal.style.display = "none";
  };

  // Close the modal when the user clicks the close button (×)
  document.getElementById('closeModal').onclick = function () {
    modal.style.display = "none";
  };

  // Close the modal if the user clicks outside the modal content
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}

function processTransaction(amount) {
  // Simulating a successful transaction (you can add your backend logic here)
  alert(`Amount ₹${amount} is successfully credited to your bank account!`);
}
