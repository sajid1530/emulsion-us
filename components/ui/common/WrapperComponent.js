import React from 'react'

export default function WrapperComponent({ children }) {
  return (
    <div className='xl:container xl:mx-auto xl:px-10 mt-24'>
      {children}
    </div>
  )
}