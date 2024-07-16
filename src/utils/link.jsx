import { FaRoute } from 'react-icons/fa'
import { RiMapPinRangeLine, RiMapPinTimeLine } from 'react-icons/ri'
import { TbMapStar } from 'react-icons/tb'

export const dataMitra = [
  {
    id: 1,
    href: 'https://bantulkab.go.id',
    imgAlt: 'bantul Harmony',
    title: '',
    color: 'h-8 sm:h-10 w-auto lg:h-12 cursor-pointer',
    size: 'big'
  },
  {
    id: 2,
    href: 'https://almaata.ac.id/',
    imgAlt: 'Universitas Alma Ata',
    title: '',
    color: 'h-8 sm:h-10 w-auto lg:h-16 cursor-pointer',
    size: 'big'
  },
  {
    id: 3,
    href: 'https://si.almaata.ac.id/',
    imgAlt: 'Sistem Informasi Universitas Alma Ata',
    title: '',
    color: 'h-8 sm:h-10 w-auto lg:h-16 cursor-pointer',
    size: 'big'
  }
]
export const features = [
  {
    id: 1,
    title: 'Interactive map',
    desk: 'Displays the route the waste collection truck will take.',
    icon: <TbMapStar size={24} />
  },
  {
    id: 2,
    title: 'Route Markers',
    desk: 'Benefit from our cutting-edge risk assessment model, providing accurate insights into potential risks and ensuring your coverage aligns with your risk profile.',
    icon: <FaRoute size={24} />
  },
  {
    id: 3,
    title: 'Location Markers',
    desk: 'Experience cost-effective insurance solutions. We keep our premiums competitive, ensuring you receive optimal coverage without breaking the bank.',
    icon: <RiMapPinRangeLine size={24} />
  },
  {
    id: 4,
    title: 'Collection Time',
    desk: `Our dedicated support team is available around the clock toassist you. Whether it's day or night, we're here to address your insurance-related queries promptly.`,
    icon: <RiMapPinTimeLine size={24} />
  }
]

export const faq = [
  {
    id: 1,
    title: 'What is the purpose of this website?',
    desk: 'This website was created to provide information regarding waste collection routes in our service area. Users can see an interactive map showing the path and times for waste pickup.',
    iconDeactive: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        class='absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0'
        fill='none'
        viewBox='0 0 24 24'
        stroke='#1679AB'
        stroke-width='2'
      >
        <path
          stroke-linecap='round'
          stroke-linejoin='round'
          d='M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
        />
      </svg>
    ),
    iconActive: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        class='absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100'
        fill='none'
        viewBox='0 0 24 24'
        stroke='#1679AB'
        stroke-width='2'
      >
        <path
          stroke-linecap='round'
          stroke-linejoin='round'
          d='M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
        />
      </svg>
    )
  },
  {
    id: 2,
    title: 'How to use interactive maps?',
    desk: 'You can use the map by panning to see different areas, as well as zooming in/out using the controls on the map or using your mouse scroll. Click on a marker or route line for more information.',
    iconDeactive: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        class='absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0'
        fill='none'
        viewBox='0 0 24 24'
        stroke='#1679AB'
        stroke-width='2'
      >
        <path
          stroke-linecap='round'
          stroke-linejoin='round'
          d='M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
        />
      </svg>
    ),
    iconActive: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        class='absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100'
        fill='none'
        viewBox='0 0 24 24'
        stroke='#1679AB'
        stroke-width='2'
      >
        <path
          stroke-linecap='round'
          stroke-linejoin='round'
          d='M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
        />
      </svg>
    )
  },
  {
    id: 3,
    title: 'How do I know when my trash will be picked up?',
    desk: 'Click on a marker or route line on the map to see trash pickup times in your area. This information includes the day and time of collection.',
    iconDeactive: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        class='absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0'
        fill='none'
        viewBox='0 0 24 24'
        stroke='#1679AB'
        stroke-width='2'
      >
        <path
          stroke-linecap='round'
          stroke-linejoin='round'
          d='M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
        />
      </svg>
    ),
    iconActive: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        class='absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100'
        fill='none'
        viewBox='0 0 24 24'
        stroke='#1679AB'
        stroke-width='2'
      >
        <path
          stroke-linecap='round'
          stroke-linejoin='round'
          d='M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
        />
      </svg>
    )
  },
  {
    id: 4,
    title: 'How do I contact the waste hauling service if I have questions?',
    desk: 'Contact information is available at the bottom of the page. You can contact us by phone, email or social media.',
    iconDeactive: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        class='absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0'
        fill='none'
        viewBox='0 0 24 24'
        stroke='#1679AB'
        stroke-width='2'
      >
        <path
          stroke-linecap='round'
          stroke-linejoin='round'
          d='M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
        />
      </svg>
    ),
    iconActive: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        class='absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100'
        fill='none'
        viewBox='0 0 24 24'
        stroke='#1679AB'
        stroke-width='2'
      >
        <path
          stroke-linecap='round'
          stroke-linejoin='round'
          d='M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
        />
      </svg>
    )
  },
  {
    id: 5,
    title: 'How can I provide feedback about this service?',
    desk: 'We really appreciate your input. Please send your suggestions or feedback via the contact form available on the website or contact us via email.',
    iconDeactive: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        class='absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0'
        fill='none'
        viewBox='0 0 24 24'
        stroke='#1679AB'
        stroke-width='2'
      >
        <path
          stroke-linecap='round'
          stroke-linejoin='round'
          d='M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
        />
      </svg>
    ),
    iconActive: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        class='absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100'
        fill='none'
        viewBox='0 0 24 24'
        stroke='#1679AB'
        stroke-width='2'
      >
        <path
          stroke-linecap='round'
          stroke-linejoin='round'
          d='M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
        />
      </svg>
    )
  }
]

export const routingMap = {
  title: 'Garbage Collect Map Routes',
  src: 'https://www.google.com/maps/d/embed?mid=1EU5QLa_zqiikm1EC9wsbnqQU0sTjvwc&output=embed&dg=feature',
  width: '620',
  height: '480'
}

export const Map = {
  title: 'Peta Wilayah Dusun Karangber Pajangan',
  src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.0209667830522!2d110.30666035!3d-7.892874899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7aff380c8399bf%3A0x9274169c4b0f3ae!2sKarangber%2C%20Guwosari%2C%20Kec.%20Pajangan%2C%20Kabupaten%20Bantul%2C%20Daerah%20Istimewa%20Yogyakarta!5e0!3m2!1sid!2sid!4v1714363911940!5m2!1sid!2sid',
  width: '620',
  height: '480'
}

export const aboutWebsite = [
  {
    id: 1,
    title: 'What is Runyam?',
    desk: 'A website to provide information regarding waste collection routes in our service area. Users can see an interactive map showing the path and times for waste pickup.',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='flex-shrink-0 w-6 h-6 text-blue-500'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M12 4v16m8-8H4'
        />
      </svg>
    )
  },
  {
    id: 2,
    title: 'Our Vision?',
    desk: 'Our vision is to lead the way in smart waste management by harnessing technology to create sustainable and efficient waste collection systems.',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='flex-shrink-0 w-6 h-6 text-blue-500'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M12 4v16m8-8H4'
        />
      </svg>
    )
  },
  {
    id: 3,
    title: 'Our Mission?',
    desk: 'Our mission is to provide municipalities, waste management companies, and communities with an innovative solution to streamline waste collection routes.',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='flex-shrink-0 w-6 h-6 text-blue-500'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M12 4v16m8-8H4'
        />
      </svg>
    )
  },
  {
    id: 4,
    title: 'Why must be Runyam?',
    desk: 'Runyam helps you monitor waste collection routes in Karangber Hamlet, Pajangan, Bantul',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='flex-shrink-0 w-6 h-6 text-blue-500'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M12 4v16m8-8H4'
        />
      </svg>
    )
  },
  {
    id: 5,
    title: 'What are the benefits of this website?',
    desk: 'The waste collection schedule becomes more regular and consistent, thereby reducing public complaints. Transparency and accountability are enhanced by monitoring dump truck positions in real-time, ensuring all routes are traveled according to schedule, and providing track records for reporting and analysis. Community services are improved with information on waste collection schedules and routes that can be accessed by the public, making it easier to prepare waste, and enabling quick responses to problems such as stuck trucks or incomplete routes.',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='flex-shrink-0 w-6 h-6 text-blue-500'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M12 4v16m8-8H4'
        />
      </svg>
    )
  }
]

export const aboutDusun = [
  {
    id: 1,
    title: 'Where is Karangber Hamlet?',
    desk: 'Karangber Pajangan Hamlet is located in Bantul Regency, Yogyakarta Special Region Province (DIY), Indonesia. More precisely, this hamlet is in Pajangan District, which is one of several sub-districts in Bantul Regency.',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='flex-shrink-0 w-6 h-6 text-blue-500'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M12 4v16m8-8H4'
        />
      </svg>
    )
  },
  {
    id: 2,
    title: 'Who is the head of village?',
    desk: `The current head of Karangber hamlet is WHEWEN LAIL SHAPUTRA, S.Pd.`,
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='flex-shrink-0 w-6 h-6 text-blue-500'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M12 4v16m8-8H4'
        />
      </svg>
    )
  },
  {
    id: 3,
    title: 'What potential is there in Krangber hamlet?',
    desk: 'Karangber Hamlet has diverse potential, ranging from the agricultural, livestock, agro-industry, to natural and cultural tourism sectors. Natural beauty, cultural richness and creative human resources are the basic capital for village development',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='flex-shrink-0 w-6 h-6 text-blue-500'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M12 4v16m8-8H4'
        />
      </svg>
    )
  }
]