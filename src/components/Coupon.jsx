import { useState } from "react"
import { COUPONS } from "../utils/pricing"

function Coupon({travellers,onApply}){
  const [code,setCode]=useState("")
  const [msg,setMsg]=useState("")
  const [type,setType]=useState("")

  function apply(){
    const c=COUPONS.find(x=>x.code===code)
    if(!c){
      setType("error")
      setMsg("Invalid coupon")
      onApply("")
      return
    }
    if(travellers<c.minTravellers){
      setType("error")
      setMsg(`Requires ${c.minTravellers} travellers`)
      onApply("")
      return
    }
    setType("success")
    setMsg("Coupon applied")
    onApply(c.code)
  }

  return(
    <div className="card">
      <h3>Coupon</h3>

      <input
        placeholder="Enter coupon code"
        value={code}
        onChange={e=>setCode(e.target.value.toUpperCase())}
      />

      <button onClick={apply}>Apply</button>

      {msg && (
        <p className={type==="error"?"error-text":"success-text"}>
          {msg}
        </p>
      )}

      <div className="coupon-section">
        <p className="coupon-title">Available Coupons</p>
        <ul className="coupon-list">
          {COUPONS.map(c=>(
            <li key={c.code}>
              <strong>{c.code}</strong> – {c.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Coupon
