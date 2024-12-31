/*
21.	Create bank object, bank, with methods:
a.	debit(id, amount) , adds negative amount to customer transaction list, 
but only if the amount is greater than the current balance.
b.	credit(id, amount), adds positive amount to customer transaction list
c.	getBalance(id) returns current balance of that customer.  
The balance should be computed as the sum of all recorded transaction amounts.
d.  saveTransaction(id, amount) saves this transaction amount to the customerTransactions list for this customer
e.	getBankBalance:  returns sum of all customer balances
The bank object should have a transactionsDB property, 
which will be an array of objects containing all of the customer objects.
  Customer objects will have properties customerId and customerTransactions, e.g., 
{customerId: 1234, customerTransactions: [10, 50, -40] } would be one element of the array.
Add any necessary types to the above bank object.
*/

type CustomerRecord = {
  //interface for the transaction object
  customerId: number;
  customerTransactions: number[];
};

type Bank = {
  //interface for the bank object
  transactionsDB: CustomerRecord[];
  saveTransaction: (customerId: number, amount: number) => void;
  debit: (customerId: number, amount: number) => void;
  credit: (customerId: number, amount: number) => void;
  getBalance: (customerId: number) => number;
  bankBalance: () => number;
};

export const bank = {} as Bank; //define bank object as type Bank

bank.transactionsDB = [
  { customerId: 1, customerTransactions: [10, 50, -40] },
  { customerId: 2, customerTransactions: [10, 10, -10] },
  { customerId: 3, customerTransactions: [5, -5, 55] },
];

/* this is complete, no need to modify.
Saves this amount to the customerTransactions array for customerId id. */
bank.saveTransaction = function (customerId: number, amount: number) {
  const customer = bank.transactionsDB.find(
    (customer) => customer.customerId === customerId
  );
  if (customer) {
    customer.customerTransactions.push(amount);
  }
};

bank.debit = function (customerId: number, amount: number): void {
  const customer = bank.transactionsDB.find(
    (customer) => customer.customerId === customerId
  );
  const custBalance = this.getBalance(customerId);
  if (custBalance > amount) {
    customer?.customerTransactions.push(-amount);
  }
};

// d.  saveTransaction(id, amount) saves this transaction amount to the customerTransactions list for this customer
bank.credit = function (customerId: number, amount: number): void {
  this.saveTransaction(customerId, amount);
};

// c.	getBalance(id) returns current balance of that customer.
// The balance should be computed as the sum of all recorded transaction amounts.
bank.getBalance = function (customerId: number): number {
  //  this line will return the first element of transacionsDB that satisfies the test in the function
  const customer = bank.transactionsDB.find(
    (customer) => customer.customerId === customerId
  );
  let totalAmt = 0;
  if (customer) {
    for (const amt of customer.customerTransactions) {
      totalAmt += amt;
    }
  }
  return totalAmt;
};

bank.bankBalance = function (): number {
  let totalBalance = 0;
  for (const customer of this.transactionsDB) {
    totalBalance += this.getBalance(customer.customerId);
  }
  return totalBalance;
};
