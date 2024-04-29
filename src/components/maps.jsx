import { Map } from '../utils/link'

function Maps () {
  return (
    <>
    <section className='mt-24'>
      <div className='aspect-w-16 aspect-h-9'>
        <iframe
          className='w-3/4 h-54 justify-center mx-auto'
          title={Map.title}
          src={Map.src}
          width={Map.width}
          height={Map.height}
          style={{ border: '0', borderRadius: '20px' }}
          allowFullScreen={true}
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
        ></iframe>
      </div>
    </section>
    </>
  )
}

export default Maps
