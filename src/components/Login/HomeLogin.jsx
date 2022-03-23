import React from 'react'

const HomeLogin = () => {
  return (
    <div> <div className=' my-12'>
    <div className='container mx-auto  flex flex-col items-center py-12 sm:py-24'>
      <div className='w-11/12 sm:w-2/3 lg:flex justify-center  items-center flex-col  mb-5 sm:mb-10'>
        <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-gray-800 font-black  leading-7  tracking-wider  md:leading-10'>
          Everything you need to keep your
          <span className='text-blue-600 tracking-normal px-2'>
            Inventory
          </span>
          organized
        </h1>
        <p className='mt-5 sm:mt-10 lg:w-10/12 text-gray-400 font-normal text-center text-sm sm:text-lg'>
          Storek’s Inventory Management System  helps in keeping you on
          top of your inventory, especially in multiple locations. With
          various tools
        </p>
      </div>
      <div className='flex justify-center items-center'>
        <button className='focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-800 bg-blue-600 transition duration-150 ease-in-out hover:bg-blue-500 lg:text-xl lg:font-bold  rounded text-white px-4 sm:px-10 border border-blue-600 py-2 sm:py-4 text-sm'>
          Get started
        </button>
        <button className='ml-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 bg-transparent transition duration-150 ease-in-out hover:border-sky-700 lg:text-xl lg:font-bold  hover:text-sky-500 rounded border border-sky-500 text-sky-700 px-4 sm:px-10 py-2 sm:py-4 text-sm'>
          Contact us
        </button>
      </div>
    </div>
  </div>
</div>
  )
}

export default HomeLogin