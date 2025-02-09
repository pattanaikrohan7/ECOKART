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
  // Show modal with custom message
  const modal = document.getElementById('modal');
  const modalMessage = document.getElementById('modalMessage');
  const modalConfirmButton = document.getElementById('modalConfirmButton');

  modal.style.display = "block";
  modalMessage.textContent = message;

  // Handle OK button click
  modalConfirmButton.onclick = function () {
    const confirmation = confirm(`Your expected amount is: ₹${randomNum}\nDo you wish to proceed?`);
    if (confirmation) {
      alert("Amount is Successfully Credited to your Bank Account!");
    } else {
      alert("Thank you for visiting. Come back again!");
    }
    modal.style.display = "none";
  };

  // Handle close button click (X)
  document.getElementById('closeModal').onclick = function () {
    modal.style.display = "none";
  };

  // Close modal when clicking outside of it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}
