document.getElementById('EKOKARTForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // Get input values
  const name = document.getElementById('name').value;
  const mobile = document.getElementById('mobile').value;
  const address = document.getElementById('address').value;

  // Generate a random number between 100 and 1000
  const randomNum = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;

  // Proceed to confirmation
  confirmTransaction(randomNum);
});

function confirmTransaction(randomNum) {
  const confirmation = confirm(`Your expected amount is: ${randomNum}\nDo you wish to proceed?`);

  if (confirmation) {
    // If user clicks OK, process the transaction
    alert("Amount is Successfully Credited to your Bank Account!");
  } else {
    // If user clicks Cancel, show thank you message
    alert("Thank you for visiting. Come back again!");
  }
}
