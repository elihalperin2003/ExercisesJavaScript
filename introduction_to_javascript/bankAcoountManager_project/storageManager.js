export const showCostumers = (list) => {
  console.table(list);
};

export const searchCostumer = (list, identifier, type = "id") => {
  if (type === "id") {
    const account = list.find((account) => account.id === +identifier);
    if (!account) {
      throw Error(`account not found - ${+identifier}`);
    }
    return account;
  } else if (type === "name") {
    const account = list.find(
      (account) => account.fullname.toLowerCase() === identifier.toLowerCase(),
    );
    if (!account) {
      throw Error(`account not found - ${identifier}`);
    }
    return account;
  } else {
    throw Error(`${type} is not name or id`);
  }
};

export const showStatistics = (list) => {
  const totalCcostumers = list.length;
  const activeAccounts = list.filter(
    (account) => account.isActive === true,
  ).length;
  const totalMoney = list
    .map((account) => account.balance)
    .reduce((total, money) => total + money);
  const averageBalance = totalMoney / totalCcostumers;
  const highestBalance = Math.max(...list.map((account) => account.balance));
  console.log(`
    ===== Statistics =====
    Total costumers: ${totalCcostumers}
    Active Accounts: ${activeAccounts}
    Total Money: ${totalMoney}
    Average Balance: ${averageBalance}
    Highest Balance: ${highestBalance}
        `);
};
