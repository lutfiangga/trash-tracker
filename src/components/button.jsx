const Button = ({ classes, color, size, title, href, imgSrc, imgAlt }) => {
  let buttonSizeClass = ''
  switch (size) {
    case 'big':
      buttonSizeClass = 'px-6 py-3 text-lg'
      break
    case 'medium':
      buttonSizeClass = 'px-4 py-2 text-md'
      break
    case 'small':
      buttonSizeClass = 'px-3 py-1 text-sm'
      break
    default:
      buttonSizeClass = 'px-4 py-2 text-md'
  }

  return (
    <div className={`flex justify-center ${classes}`}>
      <a
        href={href}
        className={`flex items-center font-medium border border-gray-200 dark:bg-gray-800 dark:border-gray-700 rounded-full duration-300 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-600/20 dark:hover:border-cyan-300/30 ${color} ${buttonSizeClass}`}
      >
        <img
          className='w-6 h-6 mr-2'
          src={imgSrc}
          alt={imgAlt}
          loading='lazy'
          width='128'
          height='128'
        />
        <span className='hidden font-medium md:block dark:text-white'>
          {title}
        </span>
      </a>
    </div>
  )
}

export default Button
