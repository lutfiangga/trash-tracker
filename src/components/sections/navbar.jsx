import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navbar () {
  const [isChecked, setIsChecked] = useState(false)
  const [activeLink, setActiveLink] = useState('')
  const location = useLocation()

  useEffect(() => {
    setActiveLink(location.pathname)
  }, [location])

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
  }

  const handleLinkClick = link => {
    setActiveLink(link)
    setIsChecked(false)
  }

  return (
    <>
      <input
        type='checkbox'
        name='hbr'
        id='hbr'
        className='hbr peer'
        hidden
        aria-hidden='true'
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <nav className='fixed z-20 w-full bg-gray-900/80 backdrop-blur navbar border-b border-gray-800 peer-checked:navbar-active shadow-none'>
        <div className='xl:container m-auto px-6 md:px-12 lg:px-6'>
          <div className='flex flex-wrap items-center justify-between gap-6 md:py-3 md:gap-0 lg:py-5'>
            <div className='w-full items-center flex justify-between lg:w-auto'>
              <Link
                to='/'
                className='relative z-10 flex items-center'
                aria-label='logo'
              >
                <svg
                  className='h-9 text-[#00B1FD]'
                  viewBox='0 0 942 272'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <circle
                    cx='126.5'
                    cy='135.5'
                    r='49'
                    stroke='none'
                    strokeWidth='11'
                    fill='currentColor'
                  />
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M157.616 38.7183C137.547 27.9866 113.297 28.3356 93.5 39.7654L60.0914 59.0538C39.6709 70.8436 27.0914 92.632 27.0914 116.212V154.788C27.0914 178.368 39.6709 200.156 60.0914 211.946L93.5 231.235C113.92 243.024 139.08 243.024 159.5 231.235L192.909 211.946C213.329 200.156 225.909 178.368 225.909 154.788V116.212C225.909 99.106 219.289 82.9431 207.857 70.8562C214.603 65.9281 219.348 58.424 220.644 49.7914C239.072 66.6422 249.909 90.6554 249.909 116.212V154.788C249.909 186.942 232.755 216.654 204.909 232.731L171.5 252.019C143.654 268.096 109.346 268.096 81.5 252.019L48.0914 232.731C20.2453 216.654 3.09137 186.942 3.09137 154.788V116.212C3.09137 84.0576 20.2453 54.3462 48.0914 38.2692L81.5 18.9808C109.138 3.02371 143.143 2.90471 170.876 18.6237C164.141 23.2603 159.27 30.4096 157.616 38.7183Z'
                    fill='currentColor'
                  />
                  <circle cx='189' cy='45' r='21' fill='currentColor' />
                </svg>
                <p className='text-2xl font-bold text-gray-300 absolute top-1 left-11'>
                  Runyam
                </p>
              </Link>
              <label
                htmlFor='hbr'
                className='peer-checked:hamburger block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden'
              >
                <div
                  aria-hidden='true'
                  className='m-auto h-0.5 w-5 rounded bg-gray-300 transition duration-300'
                ></div>
                <div
                  aria-hidden='true'
                  className='m-auto mt-2 h-0.5 w-5 rounded bg-gray-300 transition duration-300'
                ></div>
              </label>
            </div>
            <div
              className={`navmenu w-full flex-wrap justify-end items-center mb-16 space-y-8 p-6 border border-gray-400/80 rounded-3xl  shadow-gray-300/20 lg:space-y-0 lg:p-0 lg:m-0 lg:flex md:flex-nowrap lg:bg-transparent lg:w-7/12 lg:shadow-none shadow-none lg:border-0 ${
                isChecked ? 'block' : 'hidden'
              }`}
            >
              <div className='text-gray-300 lg:pr-4'>
                <ul className='space-y-6 tracking-wide font-medium text-base lg:text-sm lg:flex lg:space-y-0'>
                  <li>
                    <Link
                      to='/'
                      className={`block md:px-4 transition hover:hover:text-sky-400 ${
                        activeLink === '/' &&
                        'text-sky-400'
                      }`}
                      onClick={() => handleLinkClick('/')}
                    >
                      <span>Home</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='/about'
                      className={`block md:px-4 transition hover:hover:text-sky-400 ${
                        activeLink === '/about' &&
                        'text-sky-400'
                      }`}
                      onClick={() => handleLinkClick('/about')}
                    >
                      <span>About Us</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='/tnc'
                      className={`block md:px-4 transition hover:hover:text-sky-400 ${
                        activeLink === '/tnc' &&
                        'text-sky-400'
                      }`}
                      onClick={() => handleLinkClick('/tnc')}
                    >
                      <span>Terms & Conditions</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='/pnp'
                      className={`block md:px-4 transition hover:hover:text-sky-400 ${
                        activeLink === '/pnp' &&
                        'text-sky-400'
                      }`}
                      onClick={() => handleLinkClick('/pnp')}
                    >
                      <span>Privacy Policy</span>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className='w-full space-y-2 border-gray-700 -ml-1 sm:flex-row lg:space-y-0 md:w-max'>
                <Link
                  to='https://dusunkarangber.my.id/'
                  target='_blank'
                  rel='noreferrer'
                  className='relative flex h-9 ml-auto items-center justify-center sm:px-6 before:absolute before:inset-0 before:rounded-full before:bg-sky-400 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95'
                >
                  <span className='relative text-sm font-semibold text-white'>
                    Our Official Website
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
