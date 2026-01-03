import { useState,useEffect } from "react"
import TravellerForm from "./components/TravellerForm"
import Coupon from "./components/Coupon"
import PriceSummary from "./components/PriceSummary"
import Payment from "./components/Payment"
import { calculatePrice } from "./utils/pricing"
import "./styles.css"

function App(){
  const [travellers,setTravellers]=useState([])
  const [allVerified,setAllVerified]=useState(false)
  const [coupon,setCoupon]=useState("")
  const [price,setPrice]=useState(null)
  const [paid,setPaid]=useState(false)

  // Calculate price ONLY when travellers are verified
  useEffect(()=>{
    if(allVerified){
      setPrice(calculatePrice(travellers.length,coupon))
    }
  },[allVerified,travellers,coupon])

  return(
    <div className="container">
      <h2>Alert24 Checkout</h2>

      {/* Traveller Details (always visible) */}
      <TravellerForm
        onConfirm={(list)=>{
          setTravellers(list)
          setAllVerified(true)
        }}
      />

      {/* Verified message */}
      {allVerified && (
        <div className="card">
          <p className="success-text">
            ✔ All travellers verified successfully
          </p>
        </div>
      )}

      {/* Coupon + Price Summary */}
      {allVerified && price && (
        <>
          <Coupon
            travellers={travellers.length}
            onApply={setCoupon}
          />

          <PriceSummary data={price} />
        </>
      )}

      {/* Payment */}
      {allVerified && price && !paid && (
        <Payment
          onPay={()=>{
            setPaid(true)
          }}
        />
      )}

      {/* Payment success */}
      {paid && (
        <div className="card">
          <p className="success-text">
            ✔ Payment successful
          </p>
        </div>
      )}
    </div>
  )
}

export default App
