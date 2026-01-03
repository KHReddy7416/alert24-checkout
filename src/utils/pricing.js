export const COUPONS=[
  {
    code:"NEW10",
    minTravellers:2,
    discount:100,
    description:"₹100 off on minimum 2 travellers"
  },
  {
    code:"NEW20",
    minTravellers:4,
    discount:200,
    description:"₹200 off on minimum 4 travellers"
  }
]

export function calculatePrice(count,couponCode){
  const ticket=count*1000
  const lifeJacket=count*100
  const gst=Math.round(ticket*0.18)

  let discount=0
  if(couponCode){
    const c=COUPONS.find(
      x=>x.code===couponCode && count>=x.minTravellers
    )
    if(c) discount=c.discount
  }

  return{
    travellers:count,
    ticket,
    gst,
    lifeJacket,
    discount,
    total:ticket+gst+lifeJacket-discount
  }
}
