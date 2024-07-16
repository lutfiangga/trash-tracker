import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { aboutDusun, aboutWebsite } from '../../utils/link'

function AboutUs () {
  const [activeLink, setActiveLink] = useState('')
  const location = useLocation()

  useEffect(() => {
    setActiveLink(location.pathname)
  }, [location])

  useEffect(() => {
    if (activeLink === '/about') {
      setActiveLink('/website')
    }
  }, [activeLink])

  const handleLinkClick = link => {
    setActiveLink(link)
  }

  return (
    <>
      <section className='py-10 bg-gray-900 sm:py-16 lg:py-20'>
        <div className='px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl'>
          <div className='max-w-2xl mx-auto text-center'>
            <h2 className='text-5xl font-bold leading-tight text-gray-900 dark:text-gray-300 sm:text-5xl lg:text-7xl'>
              {activeLink === '/website' ? (
                <>
                  About{' '}
                  <span className='relative text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-800 to-cyan-500 dark:to-cyan-300'>
                    Website
                  </span>
                </>
              ) : (
                <>
                  About the{' '}
                  <span className='relative text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-800 to-cyan-500 dark:to-cyan-300'>
                    Hamlet
                  </span>
                </>
              )}
            </h2>
          </div>
        </div>
      </section>
      <section className='bg-gray-900 flex justify-center w-3/4 mx-auto'>
        <div className='container px-6 mx-auto'>
          <div className='lg:flex lg:-mx-12'>
            <div className='lg:mx-12'>
              <h1 className='text-xl font-semibold text-white'>
                Table of Content
              </h1>

              <div className='mt-4 space-y-4 lg:mt-8 text-gray-300'>
                <a
                  href='#website'
                  className={`block md:px-4 transition hover:hover:text-sky-400 hover:hover:text-sky-400Light ${
                    activeLink === '/website' &&
                    'text-sky-400 text-sky-400Light'
                  }`}
                  onClick={() => handleLinkClick('/website')}
                >
                  About Website
                </a>
                <a
                  href='#dusun'
                  className={`block md:px-4 transition hover:hover:text-sky-400 hover:hover:text-sky-400Light ${
                    activeLink === '/dusun' &&
                    'text-sky-400 text-sky-400Light'
                  }`}
                  onClick={() => handleLinkClick('/dusun')}
                >
                  About the Hamlet
                </a>
              </div>
            </div>
            <div className='flex-1 mt-8 lg:mx-12 lg:mt-0'>
              {/* inti konten website */}
              {activeLink === '/website' && (
                <>
                  {aboutWebsite.map(item => {
                    return (
                      <div key={item.id}>
                        <details open={false} className='cursor-pointer'>
                          <summary className='flex items-center focus:outline-none list-none'>
                            {item.icon}
                            <h1 className='mx-4 text-xl text-white'>
                              {item.title}
                            </h1>
                          </summary>

                          <div className='flex mt-8 md:mx-10'>
                            <span className='border border-blue-500'></span>
                            <p className='max-w-3xl px-4 text-gray-300'>
                              {item.desk}
                            </p>
                          </div>
                        </details>

                        <hr className='my-8 border-gray-700' />
                      </div>
                    )
                  })}
                </>
              )}

              {/* inti konten dusun */}
              {activeLink === '/dusun' && (
                <>
                  {aboutDusun.map(item => {
                    return (
                      <div key={item.id}>
                        <details open={false} className='cursor-pointer'>
                          <summary className='flex items-center focus:outline-none list-none'>
                            {item.icon}
                            <h1 className='mx-4 text-xl text-gray-700 dark:text-white'>
                              {item.title}
                            </h1>
                          </summary>

                          <div className='flex mt-8 md:mx-10'>
                            <span className='border border-blue-500'></span>
                            <p className='max-w-3xl px-4 text-gray-500 dark:text-gray-300'>
                              {item.desk}
                            </p>
                          </div>
                        </details>

                        <hr className='my-8 border-gray-200 dark:border-gray-700' />
                      </div>
                    )
                  })}
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutUs
