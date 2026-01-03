import { useState,useEffect } from "react"
import TravellerForm from "./components/TravellerForm"
import Coupon from "./components/Coupon"
import PriceSummary from "./components/PriceSummary"
import { calculatePrice } from "./utils/pricing"
import "./styles.css"
import logo from "./logo.png"

function App(){
  const [travellers,setTravellers]=useState(1)
  const [coupon,setCoupon]=useState("")
  const [priceData,setPriceData]=useState(null)

  useEffect(()=>{
    let result=calculatePrice(travellers,coupon)
    setPriceData(result)
  },[travellers,coupon])

  function applyCoupon(code){
    setCoupon(code)
  }

  return(
    <div className="container">
      <div className="header">
        <img src={logo} alt="logo" />
        <h2>Alert24 Checkout</h2>
      </div>

      <TravellerForm onChange={setTravellers} />
      <Coupon onApply={applyCoupon} travellers={travellers} />
      <PriceSummary data={priceData} />
    </div>
  )
}

export default App
