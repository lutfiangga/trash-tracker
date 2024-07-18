function Privacy () {
  return (
    <>
      <section className='container mx-auto px-4 text-justify mt-32 w-3/4 mb-8'>
        {/* <!-- Privacy Policy --> */}
        <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold mb-12 text-gray-300 text-center'>
          <span className='relative text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-800 to-cyan-300'>
            Kebijakan Privasi
          </span>
        </h1>
        <div className='text-gray-500 gap-4'>
          <div>
            <h3 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-300 my-6'>
              Informasi
            </h3>
            <ul class='list-disc ml-6'>
              <li class='mb-2 text-base md:text-md lg:text-lg '>
                Kami dapat mengumpulkan informasi pribadi seperti nama, alamat email, dan informasi kontak lainnya yang Anda berikan secara sukarela kepada kami.
              </li>
              <li class='mb-2 text-base md:text-md lg:text-lg '>
                Kami juga dapat mengumpulkan informasi non-pribadi seperti data penggunaan, informasi demografis, dan informasi teknis saat Anda mengakses atau menggunakan layanan kami.
              </li>
            </ul>
          </div>

          <div>
            <h3 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-300 my-6'>
             Penggunaan informasi
            </h3>
            <ul class='list-disc ml-6'>
              <li class='mb-2 text-base md:text-md lg:text-lg '>
                Kami menggunakan informasi yang kami kumpulkan untuk menyediakan, mengoperasikan, dan meningkatkan layanan kami.
              </li>
              <li class='mb-2 text-base md:text-md lg:text-lg '>
                Informasi pribadi Anda tidak akan dijual, disewa atau dibagikan dengan pihak ketiga tanpa persetujuan Anda, kecuali jika diharuskan oleh hukum.
              </li>
            </ul>
          </div>

          <div>
            <h3 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-300 my-6'>
              Informasi keamanan
            </h3>
            <p className='text-base md:text-md lg:text-lg'>
              Kami mengambil langkah -langkah keamanan yang tepat untuk melindungi informasi pribadi Anda dari akses yang tidak sah atau penggunaan yang tidak sah.
            </p>
          </div>

          <div>
            <h3 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-300 my-6'>
             Perubahan Kebijakan Privasi
            </h3>
            <p className='text-base md:text-md lg:text-lg'>
              Kebijakan privasi ini dapat berubah dari waktu ke waktu. Perubahan seperti itu akan diposting di halaman ini dan menjadi efektif segera setelah posting.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
export default Privacy
