import Navbar from '../components/sections/navbar'
import Footer from '../components/sections/footer'
import TermsCondition from '../components/sections/tnc'
import Layout from '../components/layout'

const Tnc = () => {
  return (
    <>
      <Navbar />
      <Layout>
        <TermsCondition />
        <Footer />
      </Layout>
    </>
  )
}

export default Tnc
