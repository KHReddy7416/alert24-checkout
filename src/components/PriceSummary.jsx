function PriceSummary({data}){
  return(
    <div className="card price-summary">
      <h3>Price Summary</h3>

      <div className="summary-row">
        <span>Travellers</span>
        <span>{data.travellers}</span>
      </div>

      <div className="summary-row">
        <span>Ticket</span>
        <span>₹{data.ticket}</span>
      </div>

      <div className="summary-row">
        <span>GST</span>
        <span>₹{data.gst}</span>
      </div>

      <div className="summary-row">
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
        <span>₹{data.total}</span>
      </div>
    </div>
  )
}

export default PriceSummary
