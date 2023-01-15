import React, { useState } from "react"
import './App.css'
import { FaTrash } from 'react-icons/fa';


export default function Cards({ items, setItems }) {
  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id))
  }

  return (
    <div className="card-grid">
      {items.map((item) => {
        return (
          <div className="card" key={item.id}>
            <div className="remove_container">
              <button className="remove_card" onClick={() => { deleteItem(item.id) }}><FaTrash size={30} color={"red"} /></button>
            </div>
            <div className="left_container">
              <h1 className="title">{item.title}</h1>
              <p className="date">{item.date}</p>
            </div>
            <div className="right_container">
              <h1 className="expense" style={{ color: item.expense.charAt(0) === "-" ? "red" : item.expense.charAt(0) !== "0" ? "green" : "white" }}>${item.expense}</h1>
            </div>
          </div>
        )
      })}
    </div>
  )
}