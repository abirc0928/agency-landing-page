import Companies from "./components/Companies"
import FAQ from "./components/FAQ"
import Footer from "./components/Footer"
import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import Pricing from "./components/Pricing"
import Service1 from "./components/Service1"
import Service2 from "./components/Service2"
import Testimonial from "./components/Testimonial"
import Trial from "./components/Trial"

function App() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Header></Header>
      <HeroSection></HeroSection>
      <Companies></Companies>
      <Service1></Service1>
      <Service2></Service2>
      <Testimonial></Testimonial>
      <Pricing></Pricing>
      <FAQ></FAQ>
      <Trial></Trial>
      <Footer></Footer>
    </div>
  )
}

export default App
