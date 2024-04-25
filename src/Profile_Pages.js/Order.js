import React from 'react'
import OrderComponents from '../Small_Components/Order_Components'

export default function Order() {
    const order = [
        {
          reviews:200,
          dileverd_Date: "25/07/2023",
          expected_dilevery_date: "25/07/2023",
          title: "Geeta",
          status: "Dispatched",
          Address: "Vivekanand global university jaipur",
          Contact_Number: 8789382739,
          price: "999.99",
          discountPercentage: "67",
          rating: "4",
          paymentMethod: "Cash On Dilevery",
          thumbnail:
            "https://rukminim2.flixcart.com/image/612/612/kltryq80/book/a/p/y/bhagavad-gita-original-imagyv7aemzkt2rf.jpeg?q=70",
        },
        {
          reviews:200,
          dileverd_Date: "25/07/2023",
          expected_dilevery_date: "25/07/2023",
          title: "Books",
          status: "Dispatched",
          Address: "Vivekanand global university jaipur",
          Contact_Number: 8789382739,
          price: "999.99",
          discountPercentage: "67",
          rating: "2",
          paymentMethod: "Cash On Dilevery",
          thumbnail:
            "https://rukminim2.flixcart.com/image/612/612/xif0q/regionalbooks/e/7/s/concepts-of-organic-chemistry-for-jee-main-advanced-a-master-original-imagkfyzvvhhy7fr.jpeg?q=70",
        },
        {
          reviews:200,
          dileverd_Date: "25/07/2023",
          expected_dilevery_date: "25/07/2023",
          title: "Books2",
          status: "Dispatched",
          Address: "Vivekanand global university jaipur",
          Contact_Number: 8789382739,
          price: "999.99",
          discountPercentage: "67",
          rating: "5",
          paymentMethod: "Cash On Dilevery",
          thumbnail:
            "https://rukminim2.flixcart.com/image/612/612/kltryq80/book/a/p/y/bhagavad-gita-original-imagyv7aemzkt2rf.jpeg?q=70",
        }
    
      ]
  return (
    
    <div className='bg-green-50 px-20 py-20 flex justify-center items-center flex-col w-full'>
      {
        order.map((data)=>{
            return <OrderComponents data={data}/>
        })
      }
    </div>
  )
}
