import { useState } from "react"

function TravellerForm({onChange}){
  const [name,setName]=useState("")
  const [phone,setPhone]=useState("")
  const [date,setDate]=useState("")
  const [travellers,setTravellers]=useState(1)
  const [thumb,setThumb]=useState(false)
  const [errors,setErrors]=useState({})

  function validateName(value){
    if(!/^[a-zA-Z\s]*$/.test(value)){
      setErrors(prev=>({...prev,name:"Name should contain only letters"}))
    }else{
      setErrors(prev=>({...prev,name:""}))
    }
    setName(value)
  }

  function validatePhone(value){
    if(!/^\d*$/.test(value)){
      return
    }

    setPhone(value)

    if(value.length!==10){
      setErrors(prev=>({...prev,phone:"Phone number must be 10 digits"}))
    }else{
      setErrors(prev=>({...prev,phone:""}))
    }
  }

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
        onChange={(e)=>validateName(e.target.value)}
      />
      {errors.name && <p className="error-text">{errors.name}</p>}

      <input
        type="tel"
        placeholder="Contact Number"
        value={phone}
        maxLength="10"
        onChange={(e)=>validatePhone(e.target.value)}
      />
      {errors.phone && <p className="error-text">{errors.phone}</p>}

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
