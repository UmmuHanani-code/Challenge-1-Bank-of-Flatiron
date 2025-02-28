import React, { useState } from "react";

function AddTransactionForm(addTransaction) {
  const [formData, setFormData] = useState({
    date: '',
    description: '',
    category: '',
    amount: '',
  });
  function handleChange(event) {
    const { name, value} = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="ui segment">
      <form className="ui form">
        <div className="inline fields">
          <input type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          />
          <input type="text"
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          />
          <input type="text" name="category" placeholder="Category" />
          <input type="number" name="amount" placeholder="Amount" step="0.01" />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
