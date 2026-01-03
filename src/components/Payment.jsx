import { useState } from "react"

function Payment({onPay}){
  const [method,setMethod]=useState("")
  const [error,setError]=useState("")

  function proceed(){
    if(!method){
      setError("Please select a payment method")
      return
    }
    onPay(method)
  }

  function Option({value,icon,label}){
    return(
      <div
        className={`pay-option ${method===value?"active":""}`}
        onClick={()=>setMethod(value)}
      >
        <span className="check">
          {method===value && "✓"}
        </span>
        <span className="icon">{icon}</span>
        <span className="label">{label}</span>
      </div>
    )
  }

  return(
    <div className="card">
      <h3>Payment Method</h3>

      <Option value="UPI" icon="📱" label="UPI" />
      <Option value="CARD" icon="💳" label="Debit / Credit Card" />
      <Option value="NET" icon="🏦" label="Net Banking" />

      {error && <p className="error-text">{error}</p>}

      <button onClick={proceed}>
        Proceed to Pay
      </button>
    </div>
  )
}

export default Payment
