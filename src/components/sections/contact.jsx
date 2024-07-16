import React, { useState } from 'react'

const Contact = () => {
  const [name, setName] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()

    // Simpan kode untuk mengirim pesan ke WhatsApp di sini
    const whatsappMessage = `Nama: ${name} \n Subjek: ${subject} \n Pesan: ${message}`
    const whatsappLink = `https://wa.me/6288xxxxxxxx?text=${encodeURIComponent(
      whatsappMessage
    )}`

    window.open(whatsappLink, '_blank')

    // Reset form setelah mengirim
    setName('')
    setSubject('')
    setMessage('')
  }

  return (
    <section className='pyb-10 md:pb-8'>
      <div className='container max-w-screen-xl mx-auto px-4 xl:relative'>
        <div className='border border-blue-800 flex flex-col lg:flex-row items-center justify-evenly px-8 lg:px-auto py-14 rounded-3xl mx-12 relative'>
          <div className='lg:text-left mb-10 lg:mb-0 lg:w-1/2 text-justify'>
            <h1 className='text-5xl font-bold leading-tight text-gray-300 sm:text-5xl lg:text-7xl'>
              <span className='relative text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-800 to-cyan-300'>
                Contact
              </span>
            </h1>
            <p className='max-w-xl mx-auto mt-4 sm:mr-24 text-base leading-relaxed text-gray-600'>
              Have criticism and suggestions? <br /> Your criticism and
              suggestions really help us in making developments.
            </p>
          </div>

          <div className='hidden xl:block xl:absolute right-0'>
              <svg
              width='700'
              height='700'
              viewBox='-50 0 500 500'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <circle
                cx='250'
                cy='250'
                r='40'
                stroke='#1e40af'
                stroke-width='2'
              />
              <circle
                cx='250'
                cy='250'
                r='80'
                stroke='#1e40af'
                stroke-width='2'
              />
              <circle
                cx='250'
                cy='250'
                r='120'
                stroke='#1e40af'
                stroke-width='2'
              />
              <circle
                cx='250'
                cy='250'
                r='160'
                stroke='#1e40af'
                stroke-width='2'
              />
              <circle
                cx='250'
                cy='250'
                r='200'
                stroke='#1e40af'
                stroke-width='2'
              />
              <circle
                cx='250'
                cy='250'
                r='240'
                stroke='#1e40af'
                stroke-width='2'
              />
            </svg>
          </div>

          <div className='md:block border border-blue-800 bg-gray-900 xl:relative px-4 py-3 rounded-3xl'>
            <form onSubmit={handleSubmit}>
              <div className='py-2'>
                <input
                  type='text'
                  placeholder='Name'
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className='px-4 py-4 w-full md:w-96 border border-blue-800 bg-gray-900 placeholder-gray-600 text-gray-300 rounded-xl outline-none'
                  autocomplete='off'
                  required
                />
              </div>
              <div className='py-2'>
                <input
                  type='text'
                  placeholder='Subject'
                  value={subject}
                  onChange={e => setSubject(e.target.value)}
                  className='px-4 py-4 w-full md:w-96 border border-blue-800 bg-gray-900 placeholder-gray-600 text-gray-300 rounded-xl outline-none'
                  autocomplete='off'
                  required
                />
              </div>
              <div className='py-2'>
                <textarea
                  type='text'
                  placeholder='Message'
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  className='px-4 py-4 w-full md:w-96 border border-blue-800 bg-gray-900 placeholder-gray-600 text-gray-300 rounded-xl outline-none'
                  rows='3'
                  autocomplete='off'
                  required
                ></textarea>
              </div>
              <div className='py-2'>
                <button type='submit' className='w-full py-4 font-semibold text-lg text-white bg-sky-600 rounded-xl hover:bg-blue-800 transition ease-in-out duration-500'>
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
