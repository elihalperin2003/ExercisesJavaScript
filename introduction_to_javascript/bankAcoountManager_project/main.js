import input from "analiza-sync";

import { createCostumer } from "./costumerManager.js";
import {
  showCostumers,
  searchCostumer,
  showStatistics,
} from "./storageManager.js";

const menu = `
1. Create Customer
2. Show Customers
3. Deposit
4. Withdraw
5. Search Customer
6. Close Account
7. Show Statistics
8. Bank transfer
0. Exit
`;

let running = true;
const accountsList = [];
const newCostumer = createCostumer();

const cos1 = newCostumer("Loopy");
accountsList.push(cos1);
const cos2 = newCostumer("abu");
accountsList.push(cos2);

while (running) {
  console.log(menu);
  let num = +input("enter option: ");
  switch (num) {
    case 1: {
      const name = input("Enter name: ");
      const accountType = input("Enter account type: ");
      const balance = +input("Enter balance: ");
      const cos = newCostumer(name, accountType, balance);
      accountsList.push(cos);
      console.log("Customer created successfully");
      break;
    }
    case 2: {
      showCostumers(accountsList);
      break;
    }

    case 3: {
      const id = +input("Enter ID: ");
      const amount = +input("Enter amount: ");
      const costumer = searchCostumer(accountsList, id);
      costumer.desposit(amount);
      console.log("Deposit completed successfully");
      break;
    }

    case 4: {
      const id = +input("Enter ID: ");
      const amount = +input("Enter amount: ");
      const costumer = searchCostumer(accountsList, id);
      costumer.withdraw(amount);
      console.log("Withdraw completed successfully");
      break;
    }

    case 5: {
      const type = input("Enter name / id: ");
      const identipier = input("Enter identipier: ");
      console.table(searchCostumer(accountsList, identipier, type));
      break;
    }

    case 6: {
      const id = +input("Enter ID: ");
      const costumer = searchCostumer(accountsList, id);
      costumer.closeAccount(id);
      console.log("Account closed successfully");
      break;
    }

    case 7: {
      showStatistics(accountsList);
      break;
    }
    case 8: {
      const idSender = +input("Enter ID of sender: ");
      const idReceiver = +input("Enter ID of receiver: ");
      const amount = +input("Enter amount: ");
      const sender = searchCostumer(accountsList, idSender);
      const receiver = searchCostumer(accountsList, idReceiver);
      receiver.desposit(amount);
      sender.withdraw(amount);
      console.log("Bank transfer completed successfully");
      break;
    }
    case 0: {
      running = false;
    }
    default: {
      break;
    }
  }
}
