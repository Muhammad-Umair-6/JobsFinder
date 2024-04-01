
import Customer from "../components/Customer"
import Featured_jobs from "../components/Featured_jobs"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Recommended_Job from "../components/Recommended_Job"
import Top_Company from "../components/Top_Company"


const Home = () => {
  return (
    <div>
    <Navbar/>
    <Hero/>
    <Recommended_Job/>
    <Top_Company/>
   <Featured_jobs/>
   <Customer/>
   <Footer/>
   
    </div>
  )
}

export default Home
