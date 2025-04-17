import React from 'react'

const NewAds = () => {
  return (
    <div className='flex justify-center items-center h-full'>

      <div className='lg:h-50 h-35  w-[410px] lg:w-[600px]  md:bg-green-600 bg-red-600 flex justify-center items-center px-1.5 border-2 border-amber-50 lg:bg-purple-700 sm:bg-pink-600'>
        <div className='h-50 w-[200px]  border-l-2 border-amber-50 flex justify-center items-center'>
          <h1 className='text-3xl'>
            A Code <br />
            Fanatic,
          </h1>
        </div>

        <img
          src="images/keyboard.jpg"
          alt="keyboard"
          className='lg:h-50 h-35 block lg:w-[200px] w-[90px] mx-2'
        />

        <div className='h-50 w-[200px] border-r-2 border-amber-50 flex flex-col justify-center items-center'>
          <div className='max-w-36'>
            <p className='text-xs'>
              Crafting logic into elegant solutions,
              Building digital worlds with keystrokes,
              The thrill of a program flawlessly running.
            </p>
          </div>

          <button
            className='text-[#FFFFFF] bg-[#333333] text-xs mt-3  lg:mt-5 py-2  px-7  rounded-full'>
            LEARN MORE
          </button>
          
        </div>
      </div>

    </div>
  )
}

export default NewAds