import React, { useState } from "react";

export default function PiggyBank({ title }) {
  const [total, setTotal] = useState(0);

  const deposit = (value) => {
    setTotal(total + value);
  };

  return (
    <>
      <h1>{title}</h1> //NEW
      <p>Total: £{total}</p>
      <button onClick={() => deposit(5)}>Deposit</button>
    </>
  );
}
