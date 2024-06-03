import Mapbox from '../../utils/_maps'
import MapboxGLMap from '../../utils/_maps'
import MapComponent from '../../utils/_maps'
import RoutingMaps from '../routingMap'
import Feature from './feature'

function Main () {
  return (
    <>
      <section>
        <div className='pt-24'>
          <div className='relative mx-auto px-6 max-w-6xl text-gray-500'>
            <img
              className='absolute w-full right-0 top-0 object-cover'
              src='https://i.ibb.co/8D7rcYv/download.webp'
              alt='gambar'
              decoding='async'
              loading='lazy'
              style={{ width: '100%', height: '100%' }}
            />
            <div className='relative grid gap-12 md:gap-0 md:grid-cols-2 lg:grid-cols-5 items-center lg:gap-24'>
              <Feature />
              <div className='overflow-hidden lg:col-span-3 bg-white dark:bg-gray-900'>
                <div>
                  <div>
                    <MapboxGLMap />
                    {/* <pre className='px-[--card-padding]'>
                      <code className='text-sm font-mono'>
                      </code>
                    </pre> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Main
