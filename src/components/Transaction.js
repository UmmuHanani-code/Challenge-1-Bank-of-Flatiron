import React from "react";

function Transaction({ transaction, onDelete }) {
  const handleDelete = () => {
    onDelete(transaction.id); 
  };

  return (
    <tr key={transaction.id}>
      <td>{transaction.date}</td>
      <td>{transaction.description}</td>
      <td>{transaction.category}</td>
      <td>{transaction.amount}</td>
      <td>
        <button onClick={handleDelete} className="ui red button">
          Delete
        </button>
      </td>
    </tr>
  );
}

export default Transaction;

