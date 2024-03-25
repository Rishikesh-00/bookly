import React from 'react'
import Navbar from '../Navigation/Navbar'
import ProfileNavigation from '../Navigation/ProfileNavigation'

export default function Profile() {
  return (
    <div>
      <div className='fixed w-full'>
      <Navbar></Navbar>
      <div className='grid grid-cols-4 pt-20'>
         <div className='fixed w-1/4'>
         <ProfileNavigation/>
         </div>
      </div>
      </div>
    </div>
  )
}
