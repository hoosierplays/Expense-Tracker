import React, { useState } from "react"
import './Form.css'

export default function Form({ items, setItems }) {
  const [item, setItem] = useState({ title: "", date: "", expense: "" });

  const handleChange = (e) => {
    let value = e.target.value;
    let name = e.target.name;

    setItem({ ...item, [name]: value })
  }

  const addItem = (e) => {
    e.preventDefault();
    const newItem = { ...item, id: new Date().getTime().toString() };
    setItems([...items, newItem])
    setItem({ title: "", date: "", expense: "" });
  }

  return (
    <div className="form-container" onSubmit={addItem}>
      <h2 className="form-title">Add Item Form</h2>
      <form className="main-form">
        <div className="form-element">
          <label for="title" className="form-label">Title: </label>
          <input type="string" name="title" id="form-title" value={item.title} onChange={handleChange} />
        </div>
        <div className="form-element">
          <label for="date" className="form-label">Date: </label>
          <input type="string" name="date" id="form-date" value={item.date} onChange={handleChange} />
        </div>
        <div className="form-element">
          <label for="expense" className="form-label">Expense: </label>
          <input type="string" name="expense" id="form-expense" value={item.expense} onChange={handleChange} />
        </div>
        <div className="form-element">
          <button className="submit" type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}