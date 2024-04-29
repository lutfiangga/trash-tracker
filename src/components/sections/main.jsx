import placeholder from '../../img/placeholder.png'
import Maps from '../maps'
function Main () {
  return (
    <>
      <section className='text-gray-600 body-font mt-4 sm:mt-6 md:mt-12 lg:mt-20'>
        <div className='grr max-w-7xl mx-auto text-center'>
          <h1 className='mb-8 lg:text-7xl text-4xl md:text-5xl Avenir font-semibold text-slate-500 dark:text-gray-300 text-center'>
            Monitor Your <span className='relative text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-800 to-cyan-500 dark:to-cyan-300'> Garbage Route Here.</span>
          </h1>
          <div className='container flex flex-col items-center justify-center mx-auto rounded-lg '>
           <Maps/>
          </div>
        </div>
      </section>
    </>
  )
}

export default Main
