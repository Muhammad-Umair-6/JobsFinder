/* eslint-disable react/prop-types */
import { HiGlobe } from "react-icons/hi";
import { BiChart } from "react-icons/bi";

import { GiHamburger } from "react-icons/gi";
import { GrAnnounce } from "react-icons/gr";
import { MdImportContacts, MdOutlineDeveloperMode  } from "react-icons/md";
import { FaApple, FaCode } from "react-icons/fa";

import { TbWhirl} from "react-icons/tb";

const Featured_jobs = () => {
    const Offers =({
        icon1,
        title,
        position,
        location,
        company,
        type,
        icon2,
        color,
        bg1,
        bg2,
       
        
    }) =>{
return (
<div className="bg-white rounded-[10px] px-6 py-8 flex flex-col justify-center gap-12 shadow transition-shadow hover:bg-light">
    <div className="flex items-center gap-x-4">
        <button className="p-2 rounded-full bg-[#f4fefe] border-none outline-none text-4xl" style={{ backgroundColor: `${bg1}`, color:`${color}`}}>{icon1}</button>
        <span>
        <p className="text-2xl font-semibold">{title}</p>
        <p className="text-lg">20 Opening</p>
        </span>
    </div>
    <div>
    <p className="text-3xl font-semibold">{position}</p>
    <span className="flex flex-wrap gap-x-4 items-center justify-between text-xl pt-4">
        <p className="flex items-center gap-x-2">
            <HiGlobe className="text-2xl"/> {location}
        </p>
        <p className="text-[#93979d]">{type}</p>
    </span>
    </div>
    <div className="flex items-center justify-between">
        <span>
            <p className="text-[#93979d] text-lg">June 8, 2024 by</p>
            <p className="text-xl font-medium">{company}</p>
        </span>
        <button className="rounded-[10px] p-2 text-white border-none outline-none" style={{backgroundColor:`${bg2}`}}>{icon2}</button>
    </div>
</div>
    );};
  return (
    <div className="bg-[#fcfaf6]">
    <div className="container mx-auto px-6 py-24">
<div className="md:flex items-center justify-between">
    <h2 className="xl:text-5xl lg:text-3xl text-2xl font-semibold">Featured Job Offers</h2>
    <button className="rounded-full md:my-0 my-4 bg-primary text-lg text-white font-bold px-8 py-3 outline-none border-none hoverBtn">All Job Offers</button>
</div>
  <p className="text-2xl mt-4 font-light">Know your worth and find the that qualify your life</p>
  <div className="mt-12 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
    <Offers bg1="#f4fefe" bg2="black" color="#1A9140" company="Lahore" icon1={<BiChart size={40}/>} icon2={<TbWhirl size={30}/>} location="202,Lahore" position="Financial Analyst" title="Finance" type="Office"/>
    <Offers bg1="#f4fefe" bg2="black" color="#1A9140" company="Lahore" icon1={<FaCode  size={40}/>} icon2={<GiHamburger size={30}/>} location="602,Lahore" position="Web Developer" title="Developer" type="Remote"/>
    <Offers bg1="#f4fefe" bg2="black" color="#1A9140" company="Lahore" icon1={<GrAnnounce  size={40}/>} icon2={<MdImportContacts  size={30}/>} location="902,Lahore" position="Team Lead" title="Marketing" type="Full Time"/>
    <Offers bg1="#f4fefe" bg2="black" color="#1A9140" company="Lahore" icon1={<FaApple size={40}/>} icon2={<MdOutlineDeveloperMode  size={30}/>} location="102,Lahore" position="Development" title="IOS Developer" type="Internship"/>
  </div>
    </div>
      </div>
  )
}

export default Featured_jobs
