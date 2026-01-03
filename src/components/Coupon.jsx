import { useState } from "react"

function Coupon({onApply,travellers}){
  const [code,setCode]=useState("")
  const [status,setStatus]=useState("")

  function applyCoupon(){
    if(code==="NEW10" && travellers>=2){
      setStatus("success")
      onApply(code)
    }else if(code==="NEW20" && travellers>=4){
      setStatus("success")
      onApply(code)
    }else{
      setStatus("error")
      onApply("")   // ❗ IMPORTANT: clear coupon
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
        <p className="success-text">🎉 Hurray! Coupon applied</p>
      )}

      {status==="error" && (
        <p className="error-text">
          Coupon not applicable for selected travellers
        </p>
      )}
    </div>
  )
}

export default Coupon
