function createAccount(initialPin, initialAmount = 0) {
  let pin = initialPin;
  let balance = initialAmount;

  return {
    checkBalance: function (inputPin) {
      if (inputPin !== pin) {
        return `Invalid PIN.`;
      } else {
        return `$${balance}`;
      }
    },

    deposit: function (inputPin, depositAmount) {
      if (inputPin !== pin) {
        return `Invalid PIN.`;
      } else {
        balance += depositAmount;
        return `Succesfully deposited $${depositAmount}. Current balance: $${balance}.`;
      }
    },

    withdraw: function (inputPin, withdrawAmount) {
      if (inputPin !== pin) {
        return `Invalid PIN.`;
      } else if (withdrawAmount > balance) {
        return `Withdrawal amount exceeds account balance. Transaction cancelled.`;
      } else {
        balance -= withdrawAmount;
        return `Succesfully withdrew $${withdrawAmount}. Current balance: $${balance}.`;
      }
    },

    changePin: function (inputPin, newPin) {
      if (inputPin !== pin) {
        return `Invalid PIN.`;
      } else {
        pin = newPin;
        return `PIN successfully changed!`;
      }
    },
  };
}

module.exports = { createAccount };
