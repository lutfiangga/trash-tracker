import placeholder from '../../img/placeholder.png'
import Maps from '../maps'
function Main () {
  return (
    <>
      ;
      <section className='text-gray-600 body-font'>
        <div className='grr max-w-7xl mx-auto text-center'>
          <h1 className='mb-8 text-6xl Avenir font-semibold text-gray-900'>
            Less code, less effort.
          </h1>
          <h1 className='mb-8 text-4xl Avenir font-semibold text-slate-500 dark:text-gray-300 text-center'>
            Monitor Your Garbage Route <span className='relative text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300'> Here.</span>
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
