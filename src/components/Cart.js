import React from 'react'
import Navbar from '../Navigation/Navbar'
import '../css/main.css'
import Footer from '../HomeComponents.js/Footer';
export default function Cart() {
  const products = [
    {
      image: "https://images.unsplash.com/photo-1626618012641-bfbca5a31239?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmljdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
      title: "The Great Gatsby",
      reviews: 120,
      rating: 4.5,
      price: 15.99,
      discountPercentage: 10,
      item: 1,
      description: "The Great Gatsby is a novel by American author F. Scott Fitzgerald. Set in the Jazz Age on Long Island, the novel depicts narrator Nick Carraway's interactions with mysterious millionaire Jay Gatsby."
    },
    {
      image: "https://images.unsplash.com/photo-1626618012641-bfbca5a31239?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmljdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
      title: "To Kill a Mockingbird",
      reviews: 95,
      rating: 4.8,
      price: 12.50,
      discountPercentage: 15,
      item: 1,
      description: "To Kill a Mockingbird is a novel by Harper Lee published in 1960. It was immediately successful, winning the Pulitzer Prize, and has become a classic of modern American literature."
    },
    {
      image: "https://images.unsplash.com/photo-1626618012641-bfbca5a31239?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmljdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
      title: "Harry Potter and the Philosopher's Stone",
      reviews: 200,
      rating: 5.0,
      price: 19.99,
      discountPercentage: 20,
      item: 1,
      description: "Harry Potter and the Philosopher's Stone is a fantasy novel written by British author J.K. Rowling. The first novel in the Harry Potter series, it follows Harry Potter, a young wizard who discovers his magical heritage."
    },
    {
      image: "https://images.unsplash.com/photo-1626618012641-bfbca5a31239?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmljdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
      title: "Harry Potter and the Philosopher's Stone",
      reviews: 200,
      rating: 5.0,
      price: 19.99,
      discountPercentage: 20,
      item: 1,
      description: "Harry Potter and the Philosopher's Stone is a fantasy novel written by British author J.K. Rowling. The first novel in the Harry Potter series, it follows Harry Potter, a young wizard who discovers his magical heritage."
    },
    {
      image: "https://images.unsplash.com/photo-1626618012641-bfbca5a31239?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmljdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
      title: "Harry Potter and the Philosopher's Stone",
      reviews: 200,
      rating: 5.0,
      price: 19.99,
      discountPercentage: 20,
      item: 1,
      description: "Harry Potter and the Philosopher's Stone is a fantasy novel written by British author J.K. Rowling. The first novel in the Harry Potter series, it follows Harry Potter, a young wizard who discovers his magical heritage."
    },
    {
      image: "https://images.unsplash.com/photo-1626618012641-bfbca5a31239?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmljdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
      title: "Harry Potter and the Philosopher's Stone",
      reviews: 200,
      rating: 5.0,
      price: 19.99,
      discountPercentage: 20,
      item: 1,
      description: "Harry Potter and the Philosopher's Stone is a fantasy novel written by British author J.K. Rowling. The first novel in the Harry Potter series, it follows Harry Potter, a young wizard who discovers his magical heritage."
    },
    {
      image: "https://images.unsplash.com/photo-1626618012641-bfbca5a31239?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmljdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
      title: "Harry Potter and the Philosopher's Stone",
      reviews: 200,
      rating: 5.0,
      price: 19.99,
      discountPercentage: 20,
      item: 1,
      description: "Harry Potter and the Philosopher's Stone is a fantasy novel written by British author J.K. Rowling. The first novel in the Harry Potter series, it follows Harry Potter, a young wizard who discovers his magical heritage."
    },
    {
      image: "https://images.unsplash.com/photo-1626618012641-bfbca5a31239?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmljdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
      title: "Harry Potter and the Philosopher's Stone",
      reviews: 200,
      rating: 5.0,
      price: 19.99,
      discountPercentage: 20,
      item: 1,
      description: "Harry Potter and the Philosopher's Stone is a fantasy novel written by British author J.K. Rowling. The first novel in the Harry Potter series, it follows Harry Potter, a young wizard who discovers his magical heritage."
    },
    {
      image: "https://images.unsplash.com/photo-1626618012641-bfbca5a31239?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmljdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
      title: "Harry Potter and the Philosopher's Stone",
      reviews: 200,
      rating: 5.0,
      price: 19.99,
      discountPercentage: 20,
      item: 1,
      description: "Harry Potter and the Philosopher's Stone is a fantasy novel written by British author J.K. Rowling. The first novel in the Harry Potter series, it follows Harry Potter, a young wizard who discovers his magical heritage."
    },
  ];
  let totalItems = 0;
  let totalPrice = 0;
  for (let i = 0; i < products.length; i++) {
    totalItems += products[i].item;
    totalPrice += Math.round(products[i].price * 100 / products[i].discountPercentage)
  }
  return (
    <div>
      <Navbar />

      <div className="pt-20">
        <div className="min min-h-[70vh] px-6 md:px-12 lg:px-24 py-20 grid gap-6">
          {products.map((data, index) => {
            const arr = [];
            for (let i = 0; i < data.rating; i++) {
              arr.push(1);
            }
            return (
              <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-6  border border-red-500 p-4">
                <img src={data.image} alt="product" className="w-full md:w-52 py-4 object-cover" />
                <div className="py-4">
                  <p className="text-2xl md:text-4xl chathura-regular">{data.title}</p>
                  <div className="pl-4">
                    {arr.map((_, index) => (
                      <span key={index} className="text text-dark-orange-1000 text-xl">&#9733; </span>
                    ))}
                    <span className="charmonman-regular text-sm text-dark-orange-1000">{data.reviews} reviews</span>
                  </div>
                  <div className="pl-4 text-lg">
                    <span className="pr-2 text-gray-green sansita-regular line-through">&#x20B9;{data.price}</span>
                    <span className="pr-2 text-gray-green sansita-regular">&#x20B9;{Math.round(data.price - (data.price * data.discountPercentage / 100))}</span>
                    <span className="text-dark-orange-1000 charmonman-regular text-sm">{data.discountPercentage}% Save</span>
                    <p className="rufina-regular text-sm overflow-hidden line-clamp-2">{data.description}</p>
                    <div className="flex gap-10 pt-3">
                      <div className="flex rounded-md bg-button-color px-2 py-1">
                        <p className="bg-white pb-1 px-2 rounded cursor-pointer">+</p>
                        <p>&nbsp; {data.item} &nbsp;</p>
                        <p className="bg-white pb-1 px-2 rounded cursor-pointer">-</p>
                      </div>
                      <button className="px-6 py-1 bg-button-color text-gray-green rounded-full shadow-2xl">Remove</button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex h-40 justify-around items-center border-t">
          <div className="athiti-bold text-lg text-slate-700">
            <p><span>Total items: &nbsp;</span><span>&#8377; {totalItems}</span></p>
            <p><span>Total price: &nbsp;</span><span>&#8377; {totalPrice}</span></p>
          </div>
          <button className="bg-black text-white py-3 px-8 h-12 rounded-lg mr-4">Checkout</button>
        </div>
      </div>

      <Footer />
    </div>
  )
}
