import { faq } from '../../utils/link'

function Faq () {
  return (
    <>
      <section class='py-10 bg-white dark:bg-gray-900 sm:py-16 lg:py-24'>
        <div class='px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl'>
          <div class='max-w-2xl mx-auto text-center'>
            <h2 class='text-5xl font-bold leading-tight text-gray-900 dark:text-gray-300 sm:text-5xl lg:text-7xl'>
              Frequently Asked{' '}
              <span className='relative text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-800 to-cyan-500 dark:to-cyan-300'>
                Questions
              </span>
            </h2>
            <p class='max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600'>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
            </p>
          </div>

          <div class='bg-white dark:bg-gray-900 border border-blue-800 divide-y divide-blue-800 rounded-xl m-12'>
            {faq.map(item => {
              return (
                <details class='p-6 group' key={item.id}>
                  <summary class='flex items-center justify-between cursor-pointer'>
                    <h5 class='text-lg font-medium text-gray-900 dark:text-gray-300'>
                      {item.title}
                    </h5>

                    <span class='relative flex-shrink-0 ml-1.5 w-5 h-5'>
                      {item.iconActive}

                      {item.iconDeactive}
                    </span>
                  </summary>

                  <p class='mt-4 leading-relaxed text-gray-700'>{item.desk}</p>
                </details>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Faq
