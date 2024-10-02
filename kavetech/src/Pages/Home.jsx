import Hero from '../Components/Hero'
import FeaturesSection from '../Components/FeaturesSection'
import Testimonials from '../Components/Testimonials'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import FAQSection from '../Components/FAQSection'
import PortfolioShowcase from '../Components/PortfolioShowcase'
import Contact from '../Components/Contact'



const Home = () => {
  return (
    <>
    
<Navbar/>
<Hero />
<FeaturesSection />
<PortfolioShowcase />
<Testimonials />
<Contact />
<FAQSection />
<Footer />

    </>
  )
}

export default Home