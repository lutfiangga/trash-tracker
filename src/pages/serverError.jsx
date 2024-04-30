import trash from '../assets/img/trash.svg'


import React from 'react'

function ServerError () {
  return (
    <>
      <div className='grid h-screen place-content-center bg-white dark:bg-gray-800 px-4 relative'>
        <div className='text-center'>
          <p className='absolute -top-44 sm:-top-52 md:-top-56 lg:-top-60 left-0 w-full h-full flex items-center justify-center text-5xl lg:text-7xl text-wrap text-gray-800 dark:text-gray-300 font-extrabold'>
            500 Internal Server Error
          </p>
          <div className='relative'>
            <img className='w-[450px]' src={trash} alt='404 Not Found' />
          </div>
          <h1 className='mt-6 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-300 sm:text-4xl'>
            Uh-oh!
          </h1>

          <p className='mt-4 text-gray-500 dark:text-slate-500'>
            We can't find that page. Back to{' '}
            <a href='/'>
              <span className='font-semibold dark:text-gray-300 text-gray-900/80 underline'>
                Homepage
              </span>
            </a>
          </p>
        </div>
      </div>
    </>
  )
}

export default ServerError
