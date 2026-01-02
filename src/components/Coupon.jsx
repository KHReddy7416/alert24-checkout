import { useState } from "react"

function Coupon({onApply}){
  const [code,setCode]=useState("")
  const [status,setStatus]=useState("")

  function applyCoupon(){
    if(code==="NEW10" || code==="NEW20"){
      setStatus("success")
      onApply(code)
    }else if(code.length>0){
      setStatus("expired")
      onApply("")
    }
  }

  return(
    <div className={`card coupon ${status}`}>
      <h3>Coupon</h3>

      <input
        type="text"
        placeholder="Enter coupon code"
        value={code}
        onChange={(e)=>setCode(e.target.value.toUpperCase())}
      />

      <button onClick={applyCoupon}>Apply</button>

      {status==="success" && (
        <p className="success-text">🎉 Hurray! Coupon applied successfully</p>
      )}

      {status==="expired" && (
        <p className="error-text">Coupon expired or invalid</p>
      )}
    </div>
  )
}

export default Coupon
