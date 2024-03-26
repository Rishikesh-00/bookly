import React from 'react'
import Order_Components from '../Small_Components/Order_Components'

export default function Order() {
    const order = [
        {
          reviews:200,
          dileverd_Date: "25/07/2023",
          expected_dilevery_date: "25/07/2023",
          title: "Diamond Stud Earrings",
          status: "Dispatched",
          Address: "P.C College Buxar Itarhi Road",
          Contact_Number: 9334218721,
          price: "999.99",
          discountPercentage: "67",
          rating: "4",
          paymentMethod: "Cash On Dilevery",
          thumbnail:
            "https://manubhai.in/SocialMedia/post_artworks/TT-05-24Feb2023.jpg",
        },
        {
          reviews:200,
          dileverd_Date: "25/07/2023",
          expected_dilevery_date: "25/07/2023",
          title: "Diamond Stud Earrings",
          status: "Dispatched",
          Address: "P.C College Buxar Itarhi Road",
          Contact_Number: 9334218721,
          price: "999.99",
          discountPercentage: "67",
          rating: "2",
          paymentMethod: "Cash On Dilevery",
          thumbnail:
            "https://manubhai.in/SocialMedia/post_artworks/TT-05-24Feb2023.jpg",
        },
        {
          reviews:200,
          dileverd_Date: "25/07/2023",
          expected_dilevery_date: "25/07/2023",
          title: "Diamond Stud Earrings",
          status: "Dispatched",
          Address: "P.C College Buxar Itarhi Road",
          Contact_Number: 9334218721,
          price: "999.99",
          discountPercentage: "67",
          rating: "5",
          paymentMethod: "Cash On Dilevery",
          thumbnail:
            "https://manubhai.in/SocialMedia/post_artworks/TT-05-24Feb2023.jpg",
        }
    
      ]
  return (
    
    <div className='bg-green-50 px-20 py-20 flex justify-center items-center flex-col w-full'>
      {
        order.map((data)=>{
            return <Order_Components data={data}/>
        })
      }
    </div>
  )
}
