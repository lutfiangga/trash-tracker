import Header from '../components/sections/header'
import Footer from '../components/sections/footer'
import Main from '../components/sections/main'
import Faq from '../components/sections/faq'
import Layout from '../components/layout'

const Home = () => {
  return (
    <>
      <Layout>
        <Header />
        <Main />
        <Faq />
        <Footer />
      </Layout>
    </>
  )
}

export default Home
