import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { HiStar, HiOutlineHeart } from "react-icons/hi"


const responsive = {
  superLargeDesktop:{
breakpoint:{max:4000,min:3000},
items:3,
  },
  desktop:{
    breakpoint:{max:3000,min:1024},
    items:2,
  },
  tablet:{
    breakpoint:{max:1024,min:464},
    items:2,
  },
  mobile:{
    breakpoint:{max:464,min:0},
    items:1,
  },

};

const Top_Company = () => {
  // eslint-disable-next-line react/prop-types
  const Ali = ({ type, img, title, color, bg_color}) =>{
return (
  <div className="shadow lg:w-[95%] mt-12">
    <div className="bg-white rounded-t-md px-6 py-8 flex flex-col items-center">
      <span className="flex items-center justify-between w-full">
        <button className="rounded-full bg-transparent text-lg text-black px-8 py-2 outline-none border-none hoverBtn" style={{ border:`3px solid ${color}`}}>{type}</button>
        <HiOutlineHeart className="text-3xl"/>
      </span>
      <img src={img} alt='' className="w-28 h-28 rounded-full my-8"/>
    </div>
    <div className="rounded-b-md px-6 py-8" style={{backgroundColor:`${bg_color}`}}>
      <p className="text-2xl font-semibold">{title}</p>
      <p className="py-2 text-lg">404 Lahore,Pakistan</p>
      <div className="pb-4 flex ">{[...Array(5)].map((_, index) =>{
        return <HiStar key={index} className="text-[#FFCC02] text-2xl"/>
        
      })}
      </div>
      <div className="p-2 border border-solid border-[#e2e4e7] rounded-md flex justify-between text-sm">
      <p>Salary</p>
      <p style={{color:`${color}`}}>Rs. 4,452.00</p>
      </div>
    </div>
  </div>
);

  };
  return (
    <div className="bg-[#fafbfc]">
      <div className="container mx-auto px-6 py-24">
        <div className="md:flex items-center justify-between">
          <h2 className="xl:text-5xl lg:text-3xl text-2xl font-semibold">Top Company Registered</h2>
          <span className="md:flex gap-x-4">
            <button className="rounded-full md:my-0 my-4 bg-primary text-lg text-white font-bold px-8 py-3 outline-none border-none hoverBtn">Browse Jobs</button>
            <button className="rounded-full bg-transparent border border-solid border-[#e2e4e7] text-lg text-black font-bold px-8 py-3 outline-none shadow hoverBtn">See all companies</button>
          </span>
        </div>
        <p className="text-2xl mt-4 font-light">Know your worth and find the job that qualify your life</p>
<div>
<Carousel 
swipeable={true}
  draggable={false}
  showDots={true}
  responsive={responsive}
  ssr={true} 
  infinite={true}
  autoPlay={true}
  arrows={true}
  keyBoardControl={true}
  customTransition = "all .5"
  transitionDuration={500}


>
<Ali bg_color="#f4f4ff" color="#1A9140" img="/public/go.png" title="product Design" type="Internship"/>
<Ali bg_color="#f4f4ff" color="#0865FF" img="/public/fac.png" title="Web Design" type="Remote"/>
<Ali bg_color="#f4f4ff" color="#FC7E00" img="/public/inst.jpg" title="Digital Marketing" type="Office"/>
<Ali bg_color="#f4f4ff" color="#1DA0F1" img="/public/twitter.png" title="IOS Developer" type="Remote"/>
</Carousel>


</div>
      </div>
    </div>
  )
}

export default Top_Company
