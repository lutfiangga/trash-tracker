import { features } from '../../utils/link'

function Feature () {
  return (
    <>
      <div className='bg-white dark:bg-gray-900 py-12 mt-6'>
        <img
          className='absolute w-full items-center justify-center object-cover'
          src='https://i.ibb.co/8D7rcYv/download.webp'
          alt='gambar'
          decoding='async'
          loading='lazy'
          style={{ width: '100%', height: '100%'}}
        />

        <div className='relative mx-auto max-w-7xl px-6 lg:px-8'>
        {/* <div className='absolute scale-75 md:scale-150 inset-0 m-auto w-full h-full md:w-96 md:h-96 rounded-full rotate-45 bg-gradient-to-r from-blue-700 via-blue-600/30 to-cyan-300/20 blur-3xl'></div> */}
          <div className='mx-auto max-w-5xl lg:text-center flex flex-col justify-center items-center'>
            <h1 className='lg:text-7xl text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-300 text-center'>
              Enhanced
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900 dark:to-cyan-300'>
                Insurance Solutions
              </span>
            </h1>
            <p className='mt-6 text-md text-gray-600 max-w-lg text-center'>
              Discover the exceptional features of our insurance services
              designed to streamline processes and provide comprehensive
              coverage for your needs.
            </p>
          </div>
          <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl'>
            <dl className='grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16'>
              {features.map((item, index) => {
                return (
                  <div className='relative pl-16' key={item.id}>
                    <dt className='text-base font-semibold leading-7 text-gray-900 dark:text-gray-300'>
                      <div className='absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-700'>
                        {item.icon}
                      </div>
                      {item.title}
                    </dt>
                    <dd className='mt-2 text-base leading-7 text-gray-600'>
                      {item.desk}
                    </dd>
                  </div>
                )
              })}
            </dl>
          </div>
        </div>
      </div>
    </>
  )
}

export default Feature
