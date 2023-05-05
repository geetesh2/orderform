import React, { useState } from "react";
import axios from "axios";

function OrderForm() {
  const [orderId, setOrderId] = useState("");
  const [orderName, setOrderName] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("/api/orders", { orderId, orderName });
      alert("Order saved successfully!");
    } catch (error) {
      console.log(error);
      alert("Error saving order.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="orderId">Order ID:</label>
      <input
        type="text"
        id="orderId"
        value={orderId}
        onChange={(event) => setOrderId(event.target.value)}
      />
      <br />
      <label htmlFor="orderName">Order Name:</label>
      <input
        type="text"
        id="orderName"
        value={orderName}
        onChange={(event) => setOrderName(event.target.value)}
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default OrderForm;
