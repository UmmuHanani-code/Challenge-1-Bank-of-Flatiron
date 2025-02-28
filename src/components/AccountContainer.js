import React, { useState, useEffect } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
const [transactions, setTransactions] = useState([]);
const [searchItem, setSearchItem] = useState('');

useEffect(() => {
  fetch('http://localhost:8001/transactions')
  .then((response) => response.json())
  .then((data) => setTransactions(data));
}, []);

const handleAddTransaction = (newTransaction) => {
  fetch('http://localhost:8001/transactions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newTransaction),
  })
    .then((response) => response.json())
    .then((addedTransaction) => {
      setTransactions((prevTransactions) => [
        ...prevTransactions,
        addedTransaction,
      ]);
    });
};


const handleSearch =(event) => {
setSearchItem(event.target.value);
};

const filteredTransactions = transactions.filter((transaction) =>
  transaction.description.toLowerCase().includes(searchItem.toLowerCase())
);

  return (
    <div>
      <Search onChange={handleSearch}/>
      <AddTransactionForm addTransaction={handleAddTransaction} />
      <TransactionsList transactions={filteredTransactions} />
    </div>
  );
}

export default AccountContainer;
