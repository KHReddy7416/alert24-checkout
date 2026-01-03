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
  const [thumbVerified,setThumbVerified]=useState(false)
  const [formValid,setFormValid]=useState(false)

  useEffect(()=>{
    if(thumbVerified && formValid){
      let result=calculatePrice(travellers,coupon)
      setPriceData(result)
    }else{
      setPriceData(null)
    }
  },[travellers,coupon,thumbVerified,formValid])

  function applyCoupon(code){
    setCoupon(code)
  }

  return(
    <div className="container">
      <div className="header">
        <img src={logo} alt="logo" />
        <h2></h2>
      </div>

      <TravellerForm
        onChange={setTravellers}
        onThumbVerified={setThumbVerified}
        onFormValid={setFormValid}
      />

      {thumbVerified && (
        <Coupon
          onApply={applyCoupon}
          travellers={travellers}
        />
      )}

      {thumbVerified && priceData && (
        <PriceSummary data={priceData} />
      )}
    </div>
  )
}

export default App
