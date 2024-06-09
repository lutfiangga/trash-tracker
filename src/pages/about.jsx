import Layout from '../components/layout'
import Map from '../components/maps'
import AboutUs from '../components/sections/about'
import Footer from '../components/sections/footer'
import Navbar from '../components/sections/navbar'

const About = () => {
  return (
    <>
      <Navbar />
      <Layout>
        <Map />
        <AboutUs />
        <Footer />
      </Layout>
    </>
  )
}

export default About
