import { FaGlobeAsia } from "react-icons/fa"
import { TiSocialFacebookCircular, TiSocialInstagramCircular, TiSocialYoutubeCircular } from "react-icons/ti"
import { Link } from "react-router-dom"

function Footer () {
  return (
    <>
      <footer className='bg-gray-900 md:flex md:items-center md:justify-between shadow rounded-lg p-4 md:p-6 xl:p-8 mx-4'>
        <ul className='flex items-center flex-wrap mb-6 md:mb-0'>
           <li>
            <Link to='/'
              className='text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6'
            >
              Home
            </Link>
          </li>
          <li>
            <Link to='/about'
              className='text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6'
            >
              About Us
            </Link>
          </li>
          <li>
            <Link to='/tnc'
              className='text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6'
            >
              Terms and conditions
            </Link>
          </li>
          <li>
            <Link to='/pnp'
              className='text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6'
            >
              Privacy Policy
            </Link>
          </li>
         
        </ul>
        <div className='flex sm:justify-center space-x-2'>
          <a href='#' target="_blank" className='text-gray-500 hover:text-sky-500'>
           <TiSocialFacebookCircular size={28}/>
          </a>
          <a href='#' target="_blank" className='text-gray-500 hover:text-sky-500'>
            <TiSocialInstagramCircular size={28}/>
          </a>
          <a href='#' target="_blank" className='text-gray-500 hover:text-sky-500'>
           <TiSocialYoutubeCircular size={28}/>
          </a>
          <a href='https://dusunkarangber.my.id/' target="_blank" className='text-gray-500 hover:text-sky-500'>
           <FaGlobeAsia size={24}/>
          </a>
        </div>
      </footer>
    </>
  )
}

export default Footer
