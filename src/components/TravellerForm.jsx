import { useState } from "react"

function TravellerForm({onChange}){
  const [name,setName]=useState("")
  const [phone,setPhone]=useState("")
  const [date,setDate]=useState("")
  const [travellers,setTravellers]=useState(1)
  const [thumb,setThumb]=useState(false)

  function addTraveller(){
    let count=travellers+1
    setTravellers(count)
    onChange(count)
  }

  function removeTraveller(){
    if(travellers>1){
      let count=travellers-1
      setTravellers(count)
      onChange(count)
    }
  }

  function handleTravellerInput(value){
    let count=parseInt(value)
    if(!count || count<1) count=1
    setTravellers(count)
    onChange(count)
  }

  function captureThumb(){
    setThumb(true)
  }

  return(
    <div className="card">
      <h3>Traveller Details</h3>

      <input
        type="text"
        placeholder="Customer Name"
        value={name}
        onChange={(e)=>setName(e.target.value)}
      />

      <input
        type="tel"
        placeholder="Contact Number"
        maxLength="10"
        value={phone}
        onChange={(e)=>setPhone(e.target.value)}
      />

      <input
        type="date"
        value={date}
        min={new Date().toISOString().split("T")[0]}
        onChange={(e)=>setDate(e.target.value)}
      />

      <p className="label">Number of Travellers</p>

      <div className="traveller-counter">
        <button onClick={removeTraveller}>−</button>

        <input
          type="number"
          className="traveller-input"
          value={travellers}
          min="1"
          onChange={(e)=>handleTravellerInput(e.target.value)}
        />

        <button onClick={addTraveller}>+</button>
      </div>

      <button onClick={captureThumb}>
        {thumb?"Thumbprint Captured":"Capture Thumbprint"}
      </button>
    </div>
  )
}

export default TravellerForm
