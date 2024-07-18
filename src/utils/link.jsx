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
    title: 'Peta Interaktif',
    desk: 'Menampilkan rute yang akan diambil truk pengumpul sampah.',
    icon: <TbMapStar size={24} />
  },
  {
    id: 2,
    title: 'Penanda Rute',
    desk: 'Benefit from our cutting-edge risk assessment model, providing accurate insights into potential risks and ensuring your coverage aligns with your risk profile.',
    icon: <FaRoute size={24} />
  },
  {
    id: 3,
    title: 'Penanda Lokasi',
    desk: 'Experience cost-effective insurance solutions. We keep our premiums competitive, ensuring you receive optimal coverage without breaking the bank.',
    icon: <RiMapPinRangeLine size={24} />
  },
  {
    id: 4,
    title: 'Waktu Pengambilan',
    desk: `Our dedicated support team is available around the clock toassist you. Whether it's day or night, we're here to address your insurance-related queries promptly.`,
    icon: <RiMapPinTimeLine size={24} />
  }
]

export const faq = [
  {
    id: 1,
    title: 'Apa tujuan dari situs web ini?',
    desk: 'Website ini dibuat untuk memberikan informasi mengenai jalur pengumpulan sampah di wilayah layanan kami. Pengguna dapat melihat peta interaktif yang menunjukkan jalur dan waktu pengambilan sampah.',
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
    title: 'Bagaimana cara menggunakan peta interaktif?',
    desk: 'Anda dapat menggunakan peta dengan menggeser untuk melihat area yang berbeda, serta memperbesar/memperkecil menggunakan kontrol pada peta atau menggunakan gulir mouse Anda. Klik pada penanda atau garis rute untuk informasi lebih lanjut.',
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
    title: 'Bagaimana saya tahu kapan sampah saya akan diambil?',
    desk: 'Klik penanda atau garis rute di peta untuk melihat waktu pengambilan sampah di wilayah Anda. Informasi ini mencakup waktu pengumpulan.',
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
    title: 'Bagaimana cara menghubungi layanan pengangkutan sampah jika saya memiliki pertanyaan?',
    desk: 'Informasi kontak tersedia di bagian bawah halaman. Anda dapat menghubungi kami melalui telepon, email atau media sosial.',
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
    title: 'Bagaimana saya bisa memberikan masukan tentang layanan ini?',
    desk: 'Kami sangat menghargai masukan Anda. Silakan kirimkan saran atau masukan Anda melalui formulir kontak yang tersedia di website atau hubungi kami melalui email.',
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
    title: 'Apa itu Runyam?',
    desk: 'Sebuah website untuk memberikan informasi mengenai rute pengumpulan sampah di area layanan kami. Pengguna dapat melihat peta interaktif yang menunjukkan jalur dan waktu pengambilan sampah.',
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
    title: 'Apa Visi Runyam?',
    desk: 'Visi kami adalah menjadi yang terdepan dalam pengelolaan sampah cerdas dengan memanfaatkan teknologi untuk menciptakan sistem pengumpulan sampah yang berkelanjutan dan efisien.',
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
    title: 'Apa Misi Runyam?',
    desk: 'Misi kami adalah memberikan solusi inovatif kepada pemerintah kota, perusahaan pengelola limbah, dan komunitas untuk menyederhanakan rute pengumpulan limbah.',
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
    title: 'Kenapa harus Runyam?',
    desk: 'Karena Runyam membantu Anda memantau jalur pengumpulan sampah di Dusun Karangber, Pajangan, Bantul',
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
    title: 'Apa manfaat dari Runyam?',
    desk: 'Jadwal pengumpulan sampah menjadi lebih teratur dan konsisten sehingga mengurangi keluhan masyarakat. Transparansi dan akuntabilitas ditingkatkan dengan memantau posisi truk sampah dan memastikan semua rute dilalui sesuai jadwal. Pelayanan kepada masyarakat ditingkatkan dengan informasi jadwal dan rute pengumpulan sampah yang dapat diakses oleh masyarakat, sehingga memudahkan penyiapan sampah, dan memungkinkan respon cepat terhadap permasalahan seperti truk macet atau rute yang tidak dilewati.',
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
    title: 'Dimana Dusun Karangber berada?',
    desk: 'Dusun Karangber Pajangan terletak di Kabupaten Bantul, Provinsi Daerah Istimewa Yogyakarta (DIY), Indonesia. Lebih tepatnya dusun ini berada di Kecamatan Pajangan yang merupakan salah satu dari beberapa kecamatan di Kabupaten Bantul.',
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
    title: 'Siapa Kepala Dusun Karangber?',
    desk: `Kepala Dusun Karangber saat ini adalah WHEWEN LAIL SHAPUTRA, S.Pd.`,
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
    title: 'Potensi apa saja yang ada di Dusun Karangber?',
    desk: 'Dusun Karangber mempunyai potensi yang beragam, mulai dari sektor pertanian, peternakan, agroindustri, hingga wisata alam dan budaya. Keindahan alam, kekayaan budaya dan sumber daya manusia yang kreatif menjadi modal dasar pembangunan desa.',
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