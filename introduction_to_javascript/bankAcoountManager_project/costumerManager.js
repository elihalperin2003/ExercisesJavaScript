export const createCostumer = () => {
  let id = 0;
  const newCostumer = (fullname, accountType = "Regular", balance = 0) => {
    if (!fullname) {
      throw Error("You need full name");
    }
    if (!["Regular", "Premium", "Student"].includes(accountType)) {
      throw Error("accountType is not legal");
    }
    if (!Number.isInteger(balance)) {
      throw Error("balabce is not number");
    }
    if (balance < 0) {
      throw Error("balance must be positive");
    }
    id++;
    const user = {
      id,
      fullname,
      accountType,
      balance,
      isActive: true,
    };
    const proto = {
      desposit: function (amount) {
        if (!this.isActive) {
          throw Error("Accoiunt isn't active");
        }
        if (!Number.isInteger(amount)) {
          throw Error("Amount is not number");
        }
        if (amount <= 0) {
          throw Error("Amount must be positive");
        }
        this.balance += amount;
      },
      withdraw: function (amount) {
        if (!this.isActive) {
          throw Error("Accoiunt isn't active");
        }
        if (!Number.isInteger(amount)) {
          throw Error("Amount is not number");
        }
        if (amount <= 0) {
          throw Error("Amount must be positive");
        }
        if (this.balance - amount < 0) {
          throw Error("Withdraw failed: insufficient balance");
        }
        this.balance -= amount;
      },
      closeAccount: function () {
        this.isActive = false;
      },
    };
    Object.setPrototypeOf(user, proto);
    return user;
  };
  return newCostumer;
};

const newCostumer = createCostumer();
