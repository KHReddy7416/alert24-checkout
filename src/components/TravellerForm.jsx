import { useState } from "react"

function TravellerForm({onConfirm}){
  const [travelDate,setTravelDate]=useState("")
  const [travellers,setTravellers]=useState([
    {
      id:1,
      name:"",
      phone:"",
      gender:"",
      verified:false,
      errors:{}
    }
  ])

  function addTraveller(){
    setTravellers([
      ...travellers,
      {
        id:travellers.length+1,
        name:"",
        phone:"",
        gender:"",
        verified:false,
        errors:{}
      }
    ])
  }

  function update(i,field,value){
    const list=[...travellers]

    if(field==="phone"){
      if(!/^\d*$/.test(value)) return
      if(value.length>10) return
    }

    list[i][field]=value
    list[i].errors[field]=""
    setTravellers(list)
  }

  function verify(i){
    const t=travellers[i]
    const errors={}

    if(!t.name.trim()){
      errors.name="Name is required"
    }else if(!/^[A-Za-z ]+$/.test(t.name)){
      errors.name="Only letters allowed"
    }

    if(!/^\d{10}$/.test(t.phone)){
      errors.phone="Enter valid 10-digit phone number"
    }

    if(Object.keys(errors).length>0){
      const list=[...travellers]
      list[i].errors=errors
      setTravellers(list)
      return
    }

    const list=[...travellers]
    list[i].verified=true
    list[i].errors={}
    setTravellers(list)
  }

  const allVerified=
    travelDate &&
    travellers.every(t=>t.verified)

  return(
    <div className="card">
      <h3>Travel Details</h3>

      <label>Travel Date</label>
      <input
        type="date"
        min={new Date().toISOString().split("T")[0]}
        value={travelDate}
        onChange={e=>setTravelDate(e.target.value)}
      />

      <h3 style={{marginTop:"16px"}}>Traveller Details</h3>

      {travellers.map((t,i)=>(
        <div key={t.id} className="ticket-card">
          <h4>Traveller {t.id}</h4>

          <input
            placeholder="Full Name"
            value={t.name}
            onChange={e=>update(i,"name",e.target.value)}
          />
          {t.errors.name && (
            <p className="error-text">{t.errors.name}</p>
          )}

          <input
            placeholder="Phone Number"
            value={t.phone}
            onChange={e=>update(i,"phone",e.target.value)}
          />
          {t.errors.phone && (
            <p className="error-text">{t.errors.phone}</p>
          )}

          <select
            value={t.gender}
            onChange={e=>update(i,"gender",e.target.value)}
          >
            <option value="">Select Gender (optional)</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>

          {!t.verified ? (
            <button onClick={()=>verify(i)}>
              Verify Thumbprint
            </button>
          ) : (
            <p className="success-text">
              ✔ Thumbprint Verified
            </p>
          )}
        </div>
      ))}

      <button
        type="button"
        onClick={addTraveller}
        style={{marginBottom:"12px"}}
      >
        + Add Traveller
      </button>

      {allVerified && (
        <button onClick={()=>onConfirm(travellers)}>
          Continue
        </button>
      )}
    </div>
  )
}

export default TravellerForm
