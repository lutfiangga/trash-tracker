function Privacy () {
  return (
    <>
      <section className='container mx-auto px-4 text-justify mt-32 w-3/4 mb-8'>
        {/* <!-- Privacy Policy --> */}
        <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold mb-12 text-gray-700 dark:text-gray-300 text-center'>
          <span className='relative text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-800 to-cyan-500 dark:to-cyan-300'>
            Privacy Policy
          </span>
        </h1>
        <div className='text-gray-700 dark:text-gray-500 gap-4'>
          <div>
            <h3 className='text-3xl md:text-4xl lg:text-5xl font-bold dark:text-gray-300 text-gray-700 my-6'>
              Information
            </h3>
            <ul class='list-disc ml-6'>
              <li class='mb-2 text-base md:text-md lg:text-lg '>
                We may collect personal information such as your name, email address, and other contact information that you voluntarily provide to us.
              </li>
              <li class='mb-2 text-base md:text-md lg:text-lg '>
                We may also collect non-personal information such as usage data, demographic information, and technical information when you access or use our services.
              </li>
            </ul>
          </div>

          <div>
            <h3 className='text-3xl md:text-4xl lg:text-5xl font-bold dark:text-gray-300 text-gray-700 my-6'>
              Use of Information
            </h3>
            <ul class='list-disc ml-6'>
              <li class='mb-2 text-base md:text-md lg:text-lg '>
                We use the information we collect to provide, operate and improve our services.
              </li>
              <li class='mb-2 text-base md:text-md lg:text-lg '>
                Your personal information will not be sold, rented or shared with third parties without your consent, unless required by law.
              </li>
            </ul>
          </div>

          <div>
            <h3 className='text-3xl md:text-4xl lg:text-5xl font-bold dark:text-gray-300 text-gray-700 my-6'>
              Information Security
            </h3>
            <p className='text-base md:text-md lg:text-lg'>
              We take appropriate security measures to protect your personal information from unauthorized access or unauthorized use.
            </p>
          </div>

          <div>
            <h3 className='text-3xl md:text-4xl lg:text-5xl font-bold dark:text-gray-300 text-gray-700 my-6'>
              Changes to the Privacy Policy
            </h3>
            <p className='text-base md:text-md lg:text-lg'>
              This privacy policy may change from time to time. Such changes will be posted on this page and become effective immediately upon posting.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
export default Privacy
