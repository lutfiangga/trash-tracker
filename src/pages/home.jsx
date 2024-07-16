import Header from '../components/sections/header'
import Footer from '../components/sections/footer'
import Main from '../components/sections/main'
import Faq from '../components/sections/faq'
import Layout from '../components/layout'
import Contact from '../components/sections/contact'

const Home = () => {
  return (
    <>
      <Layout>
        <Header />
        <Main />
        <Faq />
        <Contact/>
        <Footer />
      </Layout>
    </>
  )
}

export default Home
