import { features } from '../../utils/link'

function Feature () {
  return (
    <>
      <section className='lg:col-span-2'>
        <div className='md:pr-6 lg:pr-0 '>
          <h2 className='lg:text-7xl text-5xl  text-gray-950 dark:text-white font-semibold mx-auto text-center md:text-left'>
            Our{' '}
            <span className='relative text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-800 to-cyan-500 dark:to-cyan-300'>
              Features
            </span>
          </h2>
          <p className='mt-6 text-gray-700 dark:text-gray-500'>
            Harum quae dolore inventore repudiandae? orrupti aut temporibus
            assumenda atque ab, accusamus sit, molestiae veniam laboriosam
            pariatur.
          </p>
        </div>
        <div className='mx-auto mt-4 max-w-2xl sm:mt-6 lg:mt-8 lg:max-w-4xl'>
          <dl className='grid max-w-xl grid-cols-1 gap-x-2 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-8'>
            {features.map((item) => {
              return (
                <div className='relative pl-16' key={item.id}>
                  <dt className='text-base flex items-center my-auto md:text-xs font-semibold leading-7 text-gray-900 dark:text-gray-300'>
                    <div className='absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-700'>
                      {item.icon}
                    </div>
                    {item.title}
                  </dt>
                  {/* <dd className='mt-2 text-base leading-7 text-gray-600'>
                            {item.desk}
                          </dd> */}
                </div>
              )
            })}
          </dl>
        </div>
      </section>
    </>
  )
}

export default Feature
