import {FaLinkedinIn, FaFacebook, FaTwitter, FaInstagram} from "react-icons/fa"

const Footer = () => {
  return (
    <footer>
      <div className="bg-[#1b1f23] py-20">
        <div className="container mx-auto px-6">
            <h2 className="lg:text-4xl text-white text-center full-semibold">Ready For your Next Hire with Us?</h2>
            <p className="lg:w-1/2 mx-auto text-white text-center text-xl py-8">Along with conventional advertising & below the line activities & organizations have come to realize that they need in invest </p>
            <div className="flex justify-center my-8">
                <button className="rounded-full bg-primary text-lg text-white font-bold px-8 py-3 outline-none border-none hoverBtn">Login to Community </button>
            </div>
            <section className="flex flex-wrap pt-16 justify-between gap-8">
                <div className="flex flex-col justify-between">
                    <span className="flex items-center lg:text-5xl text-3xl">

                        <button className="rounded-full py-1 text-white bg-primary lg:text-5xl text-3xl outline-none border-none">Jo</button>
                        <p className="font-semibold leading-tight text-white">bline</p>
                    </span>
                    <p className="text-white text-lg">Call Us</p>
                    <p className="text-white text-lg">{92} 0310548299</p>
                    <p className="text-white text-lg">590 DHA, 2nd Floor <br/>
                    Lahore,Pakistan
                    </p>
                </div>
                <div>
                    <h6 className="text-white text-2xl pb-6">Community</h6>
                    <ul className="flex flex-col gap-6 text-lg">

                    <a href="#" className="text-white no-underline hover:text-primary">Against Discrimination</a>

                    <a href="#" className="text-white no-underline hover:text-primary">Invite Friends</a>
                    <a href="#" className="text-white no-underline hover:text-primary">Gift Cards</a>
                    </ul>
                </div>
                <div>
                <h6 className="text-white text-2xl pb-6">Bookings Support</h6>
                    <ul className="flex flex-col gap-6 text-lg">
                    <a href="#" className="text-white no-underline hover:text-primary">COVID 19</a>
<a href="#" className="text-white no-underline hover:text-primary">Help Center</a>
<a href="#" className="text-white no-underline hover:text-primary">Support</a>
<a href="#" className="text-white no-underline hover:text-primary">Safety</a>
                    </ul>
                </div>
                <div>
                    <h6 className="text-white text-2xl pb-6">About</h6>
                    <ul className="flex flex-col gap-6 text-lg">

                    <a href="#" className="text-white no-underline hover:text-primary">How it works</a>

                    <a href="#" className="text-white no-underline hover:text-primary">Careers</a>
                    <a href="#" className="text-white no-underline hover:text-primary">About Us</a>
                    <a href="#" className="text-white no-underline hover:text-primary">Media</a>
                    </ul>
                </div>
                <div>
                    <h6 className="text-white text-2xl pb-6" >Become an employer</h6>
                    <ul className="flex flex-col gap-6 text-lg">

                    <a href="#" className="text-white no-underline hover:text-primary">Post your job</a>

                    <a href="#" className="text-white no-underline hover:text-primary">Business account</a>
                    <a href="#" className="text-white no-underline hover:text-primary">Resource Center</a>
                    <a href="#" className="text-white no-underline hover:text-primary">Community</a>
                    </ul>
                </div>
            </section>
        </div>
      </div>
      <div  className="sm:flex sm:items-center sm:justify-between bg-primary  p-3  text-white">
        <p className="text-sm  sm:text-center font-bold">© 2024 Copyright: Meero</p>
     <div className="flex mt-4 sm:justify-center sm:mt-0 gap-3 cursor-pointer"> 
        <FaFacebook size={30}  className="hoverBtn" />
        <FaInstagram size={30}  className="hoverBtn"/>
        <FaTwitter size={30}   className="hoverBtn"/>

        <FaLinkedinIn size={30}  className="hoverBtn" />
        </div>
        </div>
    
    </footer>
  )
}

export default Footer
