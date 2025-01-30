let userAccount = null;
let balance = 1000; // Starting balance for user (mock balance)
let totalSupply = 10000; // Total supply of AI Coin (mock total supply)

// Connect Wallet
document.getElementById('connectWallet').addEventListener('click', () => {
  // Simulate wallet connection
  userAccount = "0xAbCdEf1234567890"; // Mock wallet address
  document.getElementById('walletAddress').textContent = userAccount;
  document.getElementById('walletBalance').textContent = balance;
  document.getElementById('walletInfo').style.display = 'block';
  document.getElementById('transactionMessage').style.display = 'none'; // Clear any messages
});

// Mint Coins (Admin function)
document.getElementById('mintCoins').addEventListener('click', () => {
  const mintAmount = parseInt(document.getElementById('mintAmount').value);
  
  if (mintAmount <= 0) {
    alert("Please enter a valid amount to mint.");
    return;
  }

  // Admin minting logic (simplified)
  totalSupply += mintAmount;
  balance += mintAmount; // Minted coins go to admin's account (this example just adds to the user account)
  
  document.getElementById('walletBalance').textContent = balance;
  document.getElementById('transactionMessage').style.display = 'none'; // Clear any previous messages
  alert(`${mintAmount} AI Coins minted successfully!`);
});

// Send Transaction
document.getElementById('sendTransaction').addEventListener('click', () => {
  const recipient = document.getElementById('recipient').value;
  const amount = parseFloat(document.getElementById('amount').value);
  
  if (!userAccount) {
    alert("Please connect your wallet first.");
    return;
  }

  if (!recipient || amount <= 0) {
    alert("Please enter a valid recipient and amount.");
    return;
  }

  if (amount > balance) {
    displayTransactionMessage("Insufficient balance!", "error");
    return;
  }

  // Simulate sending the transaction
  balance -= amount; // Deduct the balance
  document.getElementById('walletBalance').textContent = balance;

  // Display success message
  displayTransactionMessage(`Transaction of ${amount} AI Coins to ${recipient} successful!`, "success");
});

// Display transaction message
function displayTransactionMessage(message, type) {
  const messageElement = document.getElementById('transactionMessage');
  messageElement.textContent = message;
  messageElement.className = type; // Add success or error class
  messageElement.style.display = 'block';
}