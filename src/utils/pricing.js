export function calculatePrice(travellerCount,coupon){
  let ticketPrice=travellerCount*1000
  let gst=(ticketPrice*18)/100
  let lifeJacket=travellerCount*100
  let discount=0

  if(coupon==="NEW10" && travellerCount>=2){
    discount=100
  }

  if(coupon==="NEW20" && travellerCount>=4){
    discount=200
  }

  let total=ticketPrice+gst+lifeJacket-discount

  return{
    travellers:travellerCount,
    ticketTotal:ticketPrice,
    gst:gst,
    lifeJacket:lifeJacket,
    discount:discount,
    finalAmount:total
  }
}
