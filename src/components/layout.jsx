import BackToTopButton from './backtopbtn'

function Layout ({ children }) {
  return (
    <>
      <div>{children}</div>
      <BackToTopButton />
    </>
  )
}

export default Layout
