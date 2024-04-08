
// import React from 'react'
import Navbar from '../Navigation/Navbar'

import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import {  ChevronDownIcon} from "@heroicons/react/24/outline";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

// const items = [
//   { id: 1, title: 'Back End Developer', department: 'Engineering', type: 'Full-time', location: 'Remote' },
//   { id: 2, title: 'Front End Developer', department: 'Engineering', type: 'Full-time', location: 'Remote' },
//   { id: 3, title: 'User Interface Designer', department: 'Design', type: 'Full-time', location: 'Remote' },
// ]
const sortOptions = [
  { name: 'Most Popular', href: '/', current: true },
  { name: 'Best Rating', href: '/', current: false },
  { name: 'Newest', href: '/', current: false },
  { name: 'Price: Low to High', href: '/', current: false },
  { name: 'Price: High to Low', href: '/', current: false },
]
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function Books() {
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
  // const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  return (
    <div>
      <Navbar></Navbar>
      {/* filter components */}
      {/* <div className="bg-white"> */}


      {/* Main Content */}
      <main className=" absolute right-0  mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-baseline justify-between  pb-6 pt-24 ">

          <div className="flex items-center">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                  Sort
                  <ChevronDownIcon className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    {sortOptions.map((option) => (
                      <Menu.Item key={option.name}>
                        {({ active }) => (
                          <a
                            href={option.href}
                            className={classNames(
                              option.current ? "font-medium text-gray-900" : "text-gray-500",
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            {option.name}
                          </a>
                        )}
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>

          </div>
        </div>


      </main>

      {/* product Cards */}

      <div className="pt-32 w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14  mb-5">
        {/* <!--   ✅ Product card 1 - Starts Here 👇 --> */}
        {products.map((data)=>{
          return (
            <div className="w-64 h-[27rem] bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl  ">
          <a href="/">
            <img
              src={data.image}
              alt="Product"
              className="h-60 w-72 object-cover rounded-t-xl"
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

      {/* pagination */}
      <div className="flex items-center justify-between  bg-white px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <a
          href="/"
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Previous
        </a>
        <a
          href="/"
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Next
        </a>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        {/* <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
            <span className="font-medium">97</span> results
          </p>
        </div> */}
        <div className='flex justify-end w-full'>
        <div className=''>
          <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
            <a
              href="/"
              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </a>
            {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
            <a
              href="/"
              aria-current="page"
              className="relative z-10 inline-flex items-center bg-green-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            >
              1
            </a>
            <a
              href="/"
              className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              2
            </a>
            <a
              href="/"
              className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
            >
              3
            </a>
            <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
              ...
            </span>
            <a
              href="/"
              className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
            >
              8
            </a>
            <a
              href="/"
              className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              9
            </a>
            <a
              href="/"
              className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              10
            </a>
            <a
              href="/"
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </a>
          </nav>
        </div>
        </div>
      </div>
    </div>
    </div>
  )
}
