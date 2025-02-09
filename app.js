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

  // Redirect to the ewaste.html page after form submission
  window.location.href = "ewaste.html";  // Redirect to Page 2 (Please wait page)
});
