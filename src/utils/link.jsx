import { icon } from 'leaflet'

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
    title: 'Customized Coverage Plans',
    desk: 'Tailor your insurance coverage to match your unique needs. Our customizable plans ensure you only pay for the coverage that matters most to you.',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        stroke-width='1.5'
        stroke='currentColor'
        aria-hidden='true'
        className='h-6 w-6 text-white'
      >
        <path
          stroke-linecap='round'
          stroke-linejoin='round'
          d='M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z'
        ></path>
      </svg>
    )
  },
  {
    id: 2,
    title: 'Risk Assessment Expertise',
    desk: 'Benefit from our cutting-edge risk assessment model, providing accurate insights into potential risks and ensuring your coverage aligns with your risk profile.',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        stroke-width='1.5'
        stroke='currentColor'
        aria-hidden='true'
        className='h-6 w-6 text-white'
      >
        <path
          stroke-linecap='round'
          stroke-linejoin='round'
          d='M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5'
        ></path>
      </svg>
    )
  },
  {
    id: 3,
    title: 'Cost-Efficient Premiums',
    desk: 'Experience cost-effective insurance solutions. We keep our premiums competitive, ensuring you receive optimal coverage without breaking the bank.',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        stroke-width='1.5'
        stroke='currentColor'
        aria-hidden='true'
        className='h-6 w-6 text-white'
      >
        <path
          stroke-linecap='round'
          stroke-linejoin='round'
          d='M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
        ></path>
      </svg>
    )
  },
  {
    id: 4,
    title: '24/7 Customer Support',
    desk: `Our dedicated support team is available around the clock toassist you. Whether it's day or night, we're here to address your insurance-related queries promptly.`,
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        stroke-width='1.5'
        stroke='currentColor'
        aria-hidden='true'
        className='h-6 w-6 text-white'
      >
        <path
          stroke-linecap='round'
          stroke-linejoin='round'
          d='M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z'
        ></path>
      </svg>
    )
  }
]

export const faq = [
  {
    id: 1,
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing?',
    desk: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio corporis earum similique!',
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
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing?',
    desk: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio corporis earum similique!',
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
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing?',
    desk: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio corporis earum similique!',
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
    desk: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eum quae. Harum officiis reprehenderit ex quia ducimus minima id provident molestias optio nam vel, quidem iure voluptatem, repellat et ipsa.',
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
    title: 'Why must be Runyam?',
    desk: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eum quae. Harum officiis reprehenderit ex quia ducimus minima id provident molestias optio nam vel, quidem iure voluptatem, repellat et ipsa.',
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
    title: 'What are the benefits of this website?',
    desk: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eum quae. Harum officiis reprehenderit ex quia ducimus minima id provident molestias optio nam vel, quidem iure voluptatem, repellat et ipsa.',
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
    desk: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eum quae. Harum officiis reprehenderit ex quia ducimus minima id provident molestias optio nam vel, quidem iure voluptatem, repellat et ipsa.',
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
    desk: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eum quae. Harum officiis reprehenderit ex quia ducimus minima id provident molestias optio nam vel, quidem iure voluptatem, repellat et ipsa.',
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
    desk: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eum quae. Harum officiis reprehenderit ex quia ducimus minima id provident molestias optio nam vel, quidem iure voluptatem, repellat et ipsa.',
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
