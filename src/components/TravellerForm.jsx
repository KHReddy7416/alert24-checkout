import { useState,useEffect } from "react"

function TravellerForm({onChange,onThumbVerified,onFormValid}){
  const [name,setName]=useState("")
  const [phone,setPhone]=useState("")
  const [date,setDate]=useState("")
  const [travellers,setTravellers]=useState(1)
  const [thumb,setThumb]=useState(false)
  const [errors,setErrors]=useState({})

  useEffect(()=>{
    const valid =
      name.trim()!=="" &&
      phone.length===10 &&
      date!=="" &&
      travellers>0

    onFormValid(valid)
  },[name,phone,date,travellers])

  function validateName(value){
    if(!/^[a-zA-Z\s]*$/.test(value)){
      setErrors(prev=>({...prev,name:"Name should contain only letters"}))
    }else if(value.trim()===""){
      setErrors(prev=>({...prev,name:"Name is required"}))
    }else{
      setErrors(prev=>({...prev,name:""}))
    }
    setName(value)
  }

  function validatePhone(value){
    if(!/^\d*$/.test(value)) return

    setPhone(value)

    if(value.length!==10){
      setErrors(prev=>({...prev,phone:"Phone number must be 10 digits"}))
    }else{
      setErrors(prev=>({...prev,phone:""}))
    }
  }

  function handleTraveller(value){
    let count=parseInt(value)
    if(!count || count<1) count=1
    setTravellers(count)
    onChange(count)
  }

  function captureThumb(){
    setThumb(true)
    onThumbVerified(true)
  }

  const canVerify =
    name.trim()!=="" &&
    phone.length===10 &&
    date!=="" &&
    travellers>0

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
        maxLength="10"
        value={phone}
        onChange={(e)=>validatePhone(e.target.value)}
      />
      {errors.phone && <p className="error-text">{errors.phone}</p>}

      <p className="label">Travel Date</p>
      <input
        type="date"
        value={date}
        min={new Date().toISOString().split("T")[0]}
        onChange={(e)=>setDate(e.target.value)}
      />
      {!date && <p className="error-text">Please enter travel date</p>}

      <p className="label">Number of Travellers</p>
      <input
        type="number"
        min="1"
        value={travellers}
        onChange={(e)=>handleTraveller(e.target.value)}
      />

      <button onClick={captureThumb} disabled={!canVerify}>
        {thumb?"Thumbprint Verified":"Capture Thumbprint"}
      </button>

      {!canVerify && (
        <p className="error-text">
          Please fill all details before verification
        </p>
      )}
    </div>
  )
}

export default TravellerForm
