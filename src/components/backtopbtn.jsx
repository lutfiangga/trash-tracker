import React, { useState, useEffect } from 'react'
import { IoIosArrowUp } from 'react-icons/io'

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  // Function to scroll back to top smoothly
  const scrollToTop = () => {
    // Scroll step value
    const scrollStep = -window.scrollY / (1200 / 15)
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep)
      } else {
        clearInterval(scrollInterval)
      }
    }, 15)
  }

  // Function to toggle visibility of button based on scroll position
  const toggleVisibility = () => {
    if (window.scrollY > 50) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  // Add scroll event listener to toggle button visibility
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return (
    <button
      onClick={scrollToTop}
      className={`${
        isVisible ? 'block' : 'hidden'
      } fixed bottom-14 right-12 bg-blue-500 text-white px-4 py-4 rounded-full shadow-md hover:bg-blue-600 transition duration-300 ease-in-out`}
    >
      <IoIosArrowUp size={20}/>
    </button>
  )
}

export default BackToTopButton
