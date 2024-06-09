import Navbar from '../components/sections/navbar'
import Footer from '../components/sections/footer'
import Privacy from '../components/sections/privacy'
import Layout from '../components/layout'

const Pnp = () => {
  return (
    <>
      <Navbar />
      <Layout>
        <Privacy />
        <Footer />
      </Layout>
    </>
  )
}

export default Pnp
