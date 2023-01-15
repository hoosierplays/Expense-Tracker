import React, { useState } from "react"
import './App.css'
import Cards from './Cards'
import Form from "./Form";

export default function App() {
  const [total, setTotal] = useState(0);
  const [items, setItems] = useState([]);

  return (
    <div>
      <div className="main">
        <div className="cards">
          <Cards items={items} setItems={setItems} />
        </div>
      </div>
      <div>
        <Form items={items} setItems={setItems} />
      </div>
    </div>
  )
}
