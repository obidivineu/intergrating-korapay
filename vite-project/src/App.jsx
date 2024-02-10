import React, { useState } from 'react';
import './App.css'

const App = () => {
  const [amount, setAmount] = useState(localStorage.getItem("amount"))

  const handleAmount = (e) => {
    const newAmount = e.target.value
    console.log(newAmount)
    setAmount(newAmount)
    localStorage.setItem("amount", (newAmount))
  }

  function payKorapay() {
    const refKey = `key${Math.random()}`
    window.Korapay.initialize({
      key: "pk_test_eR5xsWZRG1XfPVe8JvDJyHQWR1nieyBU2DaE5dBm",
      reference: refKey,
      amount: parseInt(amount),
      currency: "NGN",
      customer: {
        name: "John Doe",
        email: "john@doe.com"
      },
      onClose: function () {
        // Handle when modal is closed
      },
      onSuccess: function (data) {
        // Handle when payment is successful
      },
      onFailed: function (data) {
        // Handle when payment fails
      }

    });
  }


  return (
    <>
   <input placeholder='enter Amount' type='number' onChange={handleAmount}/>
      <button onClick={payKorapay}>Pay</button>
    </>
  )
}

export default App
