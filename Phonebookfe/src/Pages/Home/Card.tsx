// // import {FcCheckmark} from "react-icons/fc"
// import { useForm } from "react-hook-form";
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from "yup";
// import useUser from "../../global/jotai";
// import { createUser } from "../../api/createUser";

// const Card = () => {
//     const [state, setState] = useUser()
//     console.log(state);
    
//     const schema = yup.object({
//         SunName:yup.string().required(),
//         PhoneNo:yup.string().required(),
//         name:yup.string().required(),
//         anyname:yup.string().required(),
//     })

//     const {register, handleSubmit} = useForm ({
// resolver: yupResolver(schema),
//     })

//     const onHandleSbumit = handleSubmit(async(data:any)=>{
//         console.log("handle submit", data);
//         createUser(data).then(()=>{
//             setState("/")
//         })
//     });
//   return (
//     <div>
// <div className="w-[100%] h-[100vh] flex justify-center items-center">
// <div className="w-[96%] h-[80vh]  flex-wrap flex justify-center items-center flex-col">
//     <div className="w-[88%] h-[75vh]  flex-wrap flex justify-center items-center 
//     ">

// <form action=" 
// " className="min-h-[80vh] w-[60%] flex justify-center gap-[40px] max-sm:w-80
//  max-md:w-screen max-lg:w-screen max-xl:w-90 max-2xl:w-78
// items-center flex-col rounded-[10px] bg-[orange]">
// <div className="flex" onSubmit={onHandleSbumit}>
// <button type="submit">
//     Submit
// {/* <FcCheckmark/> */}
// </button>
// </div>
// <input type="text" className="w-[87%] h-[40px] rounded-[10px] px-3  text-[#000] outline-none text-[15px]" 
// placeholder="Name" {...register("name")}/>
// <input type="text" className="w-[87%] h-[40px] text-[#000] outline-none text-[15px]
// rounded-[10px] px-3" placeholder="SunName"
// {...register("SunName")}/>
// <input type="text" className="w-[87%] h-[40px] text-[#000] outline-none text-[15px]
// rounded-[10px] px-3" placeholder="Phone:No" {...register("PhoneNo")}/>
// <input type="text" className="w-[87%] h-[40px] text-[#000] outline-none text-[15px]
//  rounded-[10px] px-3" placeholder="AnyName" {...register("anyname")}/>
// </form>
//     </div>
// </div>
// </div>
//     </div>
//   )
// }

// export default Card

import {FcCheckmark} from "react-icons/fc"
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
import {useForm} from "react-hook-form"
import { Link, useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
import useUser from "../../global/jotai";
import { createuser } from "../../api/createUser";
import Swal from "sweetalert2";



const Card = () => {
  // const show = ()=>{
    // Swal.fire(
    //   'The Internet',
    //   'That thing is still around',
    //   'question'
                  
    // )
    
      // }
      const Show = ()=>{

        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
          }
        })
       
          }

  const   [state, setState] = useUser();
  console.log(state)
  const navigate= useNavigate();
  const schema = yup.object({
    name: yup.string().required(),
    PhoneNo: yup.string().required(),
    LastName: yup.string().required(),
    anyname: yup.string().required(),
  })
  const {register, reset, handleSubmit} = useForm({
    resolver: yupResolver(schema),
  })
  const onHandleSubmit = handleSubmit(async (data:any) => {
    const {name, PhoneNo, SunName,anyname  } = data

    createuser({name, PhoneNo, SunName,anyname  }).then(()=>{
      console.log("handle sumbit",data)
      setState("/")
      navigate("/viewcontact")})
    reset()
})
  return (
    <div>
       <div className="w-[100%] h-[100vh] flex justify-center items-center">
 <div className="w-[96%] h-[80vh]  flex-wrap flex justify-center items-center flex-col">
     <div className="w-[88%] h-[75vh]  flex-wrap flex justify-center items-center 
     ">
<form action=""  className="min-h-[75vh] w-[60%] flex justify-center gap-[30px] max-sm:w-80
max-md:w-screen max-lg:w-screen max-xl:w-90 max-2xl:w-78
items-center flex-col rounded-[10px] bg-[orange]"
  onSubmit={onHandleSubmit}
  >
<Link to="/viewcontact">
</Link>
<button type="submit" onClick={Show}>
<FcCheckmark/>
</button>
  <input type="text"  placeholder="Name" className="w-[80%] h-[40px] rounded-[10px] px-3  text-[#000] outline-none text-[15px]"
   {...register("name")}
   />
  <input type="text"  placeholder="LastName"className="w-[80%] h-[40px] rounded-[10px] px-3  text-[#000] outline-none text-[15px]"
   {...register("LastName")}
   />
  <input type="text" className="w-[80%] h-[40px] rounded-[10px] px-3  text-[#000] outline-none text-[15px]" placeholder="Phone:No"
   {...register("PhoneNo")}
   />
  <input  className="w-[80%] h-[40px] rounded-[10px] px-3  text-[#000] outline-none text-[15px]" placeholder="AnyName"
   {...register("anyname")}
   />
</form>
</div>
</div>
</div>
      </div>
  )
}

export default Card