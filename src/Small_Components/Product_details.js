import React, { useState } from "react";
// import { FaStar } from "react-icons/fa6";
// import { FaStarHalf } from "react-icons/fa";
import Navbar from '../Navigation/Navbar'
import '../css/main.css'
import Footer from "../HomeComponents.js/Footer";
export default function Product_details() {
  const [selectedimage, setSelectedImage] = useState(1);
  const selectedProduct = {
    _id: "64b76d3b47e0f640d4f70651",
    title: "Harry Potter",
    description: "Harry had always been small and skinny for his age… Harry had a thin face, knobbly knees, black hair and bright green eyes. He wore round glasses held together with a lot of cellotape because of all the times Dudley had punched him in the nose",
    price: 999.99,
    discountPercentage: 67,
    rating: 3,
    stock: 94,
    brand: "Apple",
    category: "Kundan",
    thumbnail:
      "https://manubhai.in/Social Media/post_artworks/TT-05-24Feb2023.jpg",
    images: [
      "https://manubhai.in/SocialMedia/post_artworks/TT-05-24Feb2023.jpg",
      "https://images.unsplash.com/photo-1626618012641-bfbca5a31239?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmljdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
      "https://rukminim2.flixcart.com/image/612/612/xif0q/regionalbooks/k/t/h/bhagavad-gita-original-imagjxh8tctmvgef.jpeg?q=70",
      "https://manubhai.in/SocialMedia/post_artworks/TT-05-24Feb2023.jpg",
    ],
    deleted: false,
  };
  const products = [
    {
      image: "https://images.unsplash.com/photo-1626618012641-bfbca5a31239?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmljdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
      title: "The Great Gatsby",
      reviews: 120,
      rating: 4.5,
      price: 15.99,
      discountPercentage: 10,
      description: "The Great Gatsby is a novel by American author F. Scott Fitzgerald. Set in the Jazz Age on Long Island, the novel depicts narrator Nick Carraway's interactions with mysterious millionaire Jay Gatsby."
    },
    {
      image: "https://images.unsplash.com/photo-1626618012641-bfbca5a31239?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmljdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
      title: "To Kill a Mockingbird",
      reviews: 95,
      rating: 4.8,
      price: 12.50,
      discountPercentage: 15,
      description: "To Kill a Mockingbird is a novel by Harper Lee published in 1960. It was immediately successful, winning the Pulitzer Prize, and has become a classic of modern American literature."
    },
    {
      image: "https://images.unsplash.com/photo-1626618012641-bfbca5a31239?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmljdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
      title: "Harry Potter and the Philosopher's Stone",
      reviews: 200,
      rating: 5.0,
      price: 19.99,
      discountPercentage: 20,
      description: "Harry Potter and the Philosopher's Stone is a fantasy novel written by British author J.K. Rowling. The first novel in the Harry Potter series, it follows Harry Potter, a young wizard who discovers his magical heritage."
    },
    {
      image: "https://images.unsplash.com/photo-1626618012641-bfbca5a31239?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmljdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
      title: "Harry Potter and the Philosopher's Stone",
      reviews: 200,
      rating: 5.0,
      price: 19.99,
      discountPercentage: 20,
      description: "Harry Potter and the Philosopher's Stone is a fantasy novel written by British author J.K. Rowling. The first novel in the Harry Potter series, it follows Harry Potter, a young wizard who discovers his magical heritage."
    },
    {
      image: "https://images.unsplash.com/photo-1626618012641-bfbca5a31239?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmljdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
      title: "Harry Potter and the Philosopher's Stone",
      reviews: 200,
      rating: 5.0,
      price: 19.99,
      discountPercentage: 20,
      description: "Harry Potter and the Philosopher's Stone is a fantasy novel written by British author J.K. Rowling. The first novel in the Harry Potter series, it follows Harry Potter, a young wizard who discovers his magical heritage."
    },
    {
      image: "https://images.unsplash.com/photo-1626618012641-bfbca5a31239?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmljdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
      title: "Harry Potter and the Philosopher's Stone",
      reviews: 200,
      rating: 5.0,
      price: 19.99,
      discountPercentage: 20,
      description: "Harry Potter and the Philosopher's Stone is a fantasy novel written by British author J.K. Rowling. The first novel in the Harry Potter series, it follows Harry Potter, a young wizard who discovers his magical heritage."
    },
    {
      image: "https://images.unsplash.com/photo-1626618012641-bfbca5a31239?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmljdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
      title: "Harry Potter and the Philosopher's Stone",
      reviews: 200,
      rating: 5.0,
      price: 19.99,
      discountPercentage: 20,
      description: "Harry Potter and the Philosopher's Stone is a fantasy novel written by British author J.K. Rowling. The first novel in the Harry Potter series, it follows Harry Potter, a young wizard who discovers his magical heritage."
    },
    {
      image: "https://images.unsplash.com/photo-1626618012641-bfbca5a31239?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmljdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
      title: "Harry Potter and the Philosopher's Stone",
      reviews: 200,
      rating: 5.0,
      price: 19.99,
      discountPercentage: 20,
      description: "Harry Potter and the Philosopher's Stone is a fantasy novel written by British author J.K. Rowling. The first novel in the Harry Potter series, it follows Harry Potter, a young wizard who discovers his magical heritage."
    },
    {
      image: "https://images.unsplash.com/photo-1626618012641-bfbca5a31239?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmljdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
      title: "Harry Potter and the Philosopher's Stone",
      reviews: 200,
      rating: 5.0,
      price: 19.99,
      discountPercentage: 20,
      description: "Harry Potter and the Philosopher's Stone is a fantasy novel written by British author J.K. Rowling. The first novel in the Harry Potter series, it follows Harry Potter, a young wizard who discovers his magical heritage."
    },
  ];
  const arr = [1, 1, 1]
  return (
    <div >
      {/* navbar */}
      <Navbar />
      {/* Product details page */}
      <div className="font-poppins bg-gray-100 h-screen pt-16">
        <div className="container mx-auto ">
          <div className="cart bg-white rounded-lg  p-8 md:p-12">
            <div className="md:flex md:items-center md:justify-between">
              <div className=" md:w-1/2 md:pr-12">
                <img
                  src={selectedProduct.images[selectedimage]}
                  alt="Product"
                  className="border p-12 rounded-lg mb-8 w-[33rem] h-[25rem]  object-contain "
                />


                <div className="flex gap-[1.5rem]  ">
                  {selectedProduct.images.map((img, index) => {
                    return (
                      <img src={img} alt="product" className="w-[7rem] h-[7rem] rounded-lg small-img border p-1 cursor-pointer" onClick={() => { setSelectedImage(index) }} />
                    )
                  })}



                </div>
              </div>


              <div className="md:w-1/2 ">
                <h1 className="text-3xl font-semibold mb-4">{selectedProduct.title}</h1>
                {/* reviews */}
                <div className="flex items-center mb-4">
                  {arr.map(() =>
                    <span className='text text-dark-orange-1000 text-xl'>&#9733; </span>
                  )}
                  <p className="text-gray-500 ml-2">240 reviews</p>
                </div>
                <div className="flex items-center mb-4">
                  <span className="text-xl font-semibold ">&#8377;{Math.round(selectedProduct.price - (selectedProduct.price * selectedProduct.discountPercentage / 100))}</span>
                  <span className="text-gray-500 ml-2 line-through">&#8377; {selectedProduct.price}</span>
                </div>
                <div className="flex mb-4">
                  <div>
                    <h5 className="font-semibold mb-2">Quantity</h5>
                    <select className="quantity custom-select w-full border border-gray-400 py-2 px-4 rounded-lg">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                    </select>
                  </div>
                </div>
                <div className="product-inf mb-8">
                  <ul className="flex">
                    <li
                      className="active mr-6 cursor-pointer transition-all bg-slate-200 text-black font-bold px-6 py-2 rounded-lg border-black border-b-[4px]   shadow-green-300 active:shadow-none hover:rounded-md"
                    >
                      <a href="#Description">Product Description</a>
                    </li>
                    {/* <li><a href="#Details">Product Details</a></li> */}
                  </ul>
                  <div className="tabs-content mt-4">
                    <div id="Description">
                      <p className="text-gray-600 overflow-hidden line-clamp-4">
                        {selectedProduct.description}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="buttons">
                  <div className="flex justify-between">
                    <button className="custom-btn bg-black text-white py-3 px-8 rounded-lg mr-4">
                      Add To Cart <i className="fas fa-angle-right"></i>
                    </button>
                    {/* <button className="custom-btn bg-black text-white py-3 px-8 rounded-lg">Buy Now <i className="fas fa-angle-right"></i></button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product card for books you may like */}
      <div>
        <h1 className=" text-center text-3xl sansita-regular-italic underline">Books &nbsp;You &nbsp;May &nbsp;Like</h1>
        <div className="pt-10 w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14  mb-5">
          {/* <!--   ✅ Product card 1 - Starts Here 👇 --> */}
          {products.map((data) => {
            return (
              <div className="w-64 h-[27rem] bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl  ">
                <a href="/">
                  <img
                    src={data.image}
                    alt="Product"
                    className="h-60 w-72  object-cover   rounded-t-xl"
                  />
                  <div className="px-4 py-3 w-64 ">
                    <span className="  text-lg font-bold text-black truncate block capitalize">{data.title}</span>
                    <p className="text-gray-400 mr-3 uppercase text-xs overflow-hidden line-clamp-2">
                      {data.description}
                    </p>
                    <div className=" flex items-center justify-between ">
                      <div className="flex items-center ">
                        <p className="text-lg font-semibold text-black cursor-auto my-3">
                          {Math.round(data.price - (data.price * data.discountPercentage / 100))}
                        </p>
                        <del>
                          <p className="text-sm text-gray-600 cursor-auto ml-2">{data.price}</p>
                        </del>
                      </div>
                      <div className='bg-green-200 p-2 rounded-full'>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          class="bi bi-bag-plus"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                          />
                          <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                        </svg>
                      </div>


                    </div>

                  </div>
                  <div className=" flex justify-center items-center">
                    <button className="flex items-center justify-center h-10 w-32 bg-opacity-75 bg-gray-300 rounded-lg text-gray-800 font-medium tracking-wide transition-all duration-200 cursor-pointer border-none bg-green-200 hover:shadow-xl transform hover:-translate-y-2">
                      Buy Now
                    </button>
                  </div>
                </a>
              </div>
            )
          })}

          {/* cart 1 ends here */}

        </div>
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
}
