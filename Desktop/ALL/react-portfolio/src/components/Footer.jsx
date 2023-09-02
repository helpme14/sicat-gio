import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
    <div className="container mx-auto flex flex-col md:flex-row justify-between ">

    <div className="md:w-1/4 mb-4 md:mb-0 flex  justify-center ">
        <img src="logo.png" alt="Company Logo" className="w-20 h-20 md:w-24 md:h-24 " />
    </div>
    <div className="container mx-auto flex flex-col md:flex-row justify-between px-4">
      <div className="md:w-2/3 mb-4 md:mb-0">
        <h2 className="text-2xl font-semibold">GIO</h2>
        <p className="mt-4">Computer Engineer</p>
      </div>
   
      <div className="md:w-2/3 mb-4 md:mb-0">
        <h3 className="text-xl font-semibold">Contact</h3>
        <address className="mt-4">
          <p>Email: <a href="mailto:cpe.sicatgio14@gmail.com">cpe.sicatgio14@gmail.com</a></p>
          <p>Phone: <a href="tel:+639973715004">09973715004</a></p>
          <p>Address: Bacolor, Pampanga</p>
        </address>
      </div>
     
    </div>
    </div>
  </footer>
  
  )
}

export default Footer