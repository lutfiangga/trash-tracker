function TermsCondition () {
  return (
    <>
      <section className='container mx-auto px-4 text-justify mt-24 w-3/4 mb-8'>
        {/* <!-- Terms & Conditions --> */};
        <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold mb-12 text-gray-300 text-center'>
          <span className='relative text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-800 to-cyan-300'>
            Terms & Conditions
          </span>
        </h1>
        <div className='text-gray-500 gap-4'>
          <div>
            <h3 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-300 my-6'>
              Use of Services
            </h3>
            <ul class='list-disc ml-6'>
              <li class='mb-2 text-base md:text-md lg:text-lg '>
                You must use our services in accordance with all applicable laws
                and regulations.
              </li>
              <li class='mb-2 text-base md:text-md lg:text-lg '>
                You agree not to use our services for illegal purposes or to
                violate the privacy or intellectual property rights of others.
              </li>
              <li class='mb-2 text-base md:text-md lg:text-lg '>
                We reserve the right to change or discontinue our services with
                or without prior notice.
              </li>
              <li class='mb-2 text-base md:text-md lg:text-lg '>
                We are not responsible for any loss or damage arising from
                changes or discontinuance of services.
              </li>
            </ul>
          </div>

          <div>
            <h3 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-300 my-6'>
              Privacy
            </h3>
            <p className='text-base md:text-md lg:text-lg'>
              We respect your privacy and are committed to protecting your
              personal information. Further information about how we collect,
              use and protect your personal data can be found in our Privacy
              Policy.
            </p>
          </div>

          <div>
            <h3 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-300 my-6'>
              Changes to Terms and Conditions
            </h3>
            <p className='text-base md:text-md lg:text-lg'>
              We reserve the right to change or update these terms and
              conditions at our discretion. Such changes will come into effect
              on the date the changes are announced. Users are expected to check
              this terms and conditions page periodically.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default TermsCondition
