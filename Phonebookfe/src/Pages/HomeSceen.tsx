import image from "../assets/1mqps.10786d51.jpeg"
// import Swal from "sweetalert2";
import Typewriter from 'typewriter-effect';
import {Link, useNavigate} from "react-router-dom"
const HomeSceen = () => {
  const navigate = useNavigate();

  navigate("/card") 
//   const show = ()=>{
// Swal.fire(
//   'The Internet',
//   'That thing is still around',
//   'question'

// )
//   }
  return (
    <div>
   <div className="w-[100%] h-[100vh] flex justify-center items-center object-cover" 
   style={{backgroundImage: `url(${image})`,
backgroundSize: "cover",
backgroundPosition: "center",
backgroundRepeat: "no-repeat"
}}>

    <div className=" w-[90%] h-[75vh] bg-[none] flex-wrap flex justify-center items-center">
<div className="w-[80%] h-[70vh]  flex-wrap flex justify-center items-center flex-col">
<h1 className="flex justify-center items-center h-[20vh] text-[60px] text-[#fff]
 max-sm:text-[18px] font-semibold 
max-md:text-[33px]
max-lg:text-[44px] max-xl:text-[53px]">
  <Typewriter 
  options={{
    strings: ['WelCome To PhoneBook', 
    'World'
  ],
    autoStart: true,
    loop: true,
  }}
/>
</h1>
<Link to="/card">
<button className="px-[20px] py-[15px] bg-[#000] rounded-[7px] text-[#fff]" 
// onClick={show} 
typeof="submit">GetStarted now</button>
</Link>
</div>
    </div>
   </div>
    </div>
  )
}

export default HomeSceen
