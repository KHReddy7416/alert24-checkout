function PriceSummary({data}){
  if(!data) return null

  return(
    <div className="card price-summary">
      <h3>Price Summary</h3>

      <div className="summary-row">
        <span>Travellers</span>
        <span>{data.travellers}</span>
      </div>

      <div className="summary-row muted">
        <span>Ticket</span>
        <span>₹{data.ticketTotal}</span>
      </div>

      <div className="summary-row muted">
        <span>GST</span>
        <span>₹{data.gst}</span>
      </div>

      <div className="summary-row muted">
        <span>Life Jacket</span>
        <span>₹{data.lifeJacket}</span>
      </div>

      <div className="summary-row discount">
        <span>Discount</span>
        <span>-₹{data.discount}</span>
      </div>

      <hr />

      <div className="summary-row total">
        <span>Total Payable</span>
        <span>₹{data.finalAmount}</span>
      </div>

      <button className="pay-btn">Proceed to Pay</button>
    </div>
  )
}

export default PriceSummary
