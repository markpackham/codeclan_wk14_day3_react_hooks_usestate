import React, { useState } from "react";

export default function PiggyBank() {
  const [total, setTotal] = useState(0);

  const deposit = (value) => {
    setTotal(total + value);
  };

  return <p>Total: £{total}</p>;
}
