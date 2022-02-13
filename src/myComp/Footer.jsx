import React from 'react'

export const Footer = () => {

    const date= new Date().getFullYear();

  return (
    <div>
        <footer className='w-100 bg-light text-center'>
           <p> © {date} React. All Rights Reserved  </p>  
        </footer>
    </div>
  )
}
