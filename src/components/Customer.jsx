
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
const Customer = () => {
  const loges =[
"/public/micrsoft.png",
"/public/amzon.png",
"/public/go.png",
"/public/meta.png",

  ];
  const duplicatesImages = [];
  while (duplicatesImages.length < 10){
    duplicatesImages.push(...loges);
  }
  return (
    <div className="text-center py-24 container mx-auto px-6">
      <h2 className="lg:text-5xl text-2xl font-semibold">Why customers Love Us</h2>
      <p className="text-2xl mt-4 font-light">What our customers say about us</p>
      <div className="flex items-center justify-center mt-16 pb-12 gap-x-2 lg:w-1/2 mx-auto">
      <FaChevronLeft size={30}/>
        <p className="text-2xl leading-10">
        Each Day I am inspired by my colleagues to drive innovation that 
        accomplishes this.Jobline an environment of trust and support where I can frive customer success.
        </p>
        <FaChevronRight size={30}/>
      </div>
<p className="text-3xl font-semibold">Lubosek Hnilo</p>
<p className="text-xl pt-4">Syspresoft</p>
<div className="flex items-center lg:gap-16 gap-3 overflow-hidden my-24">
{duplicatesImages.slice(0,10).map((image, index) =>(
<img src={image} key={index} alt="" className="w-40 h-14 object-contain"/>
)
)}</div>
    </div>
  )
}

export default Customer
