import { routingMap } from '../utils/link'

function RoutingMaps () {
  return (
    <>
      <section className='aspect-w-16 aspect-h-9'>
        <iframe
          className='w-full h-54'
          title={routingMap.title}
          src={routingMap.src}
          width={routingMap.width}
          height={routingMap.height}
          style={{ border: '0', borderRadius: '20px' }}
          allowFullScreen={true}
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
        ></iframe>
      </section>
    </>
  )
}

export default RoutingMaps
