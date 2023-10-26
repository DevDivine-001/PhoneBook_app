
// // const ViewContact = () => {
// //   return (
// //     <div>
// //       ViewContact
// //     </div>
// //   )
// // }

import { Getalltask } from "../../global/hooks"

// // export default ViewContact


// import Typewriter from 'typewriter-effect';

// const Onclose =()=>{
//   return(

// //     <Typewriter
// //     onInit={(typewriter) => {
// //       typewriter.typeString('Wlecome to PhoneBook!')
// //       .callFunction(() => {
// //         console.log('String typed out!');
// //       })
// //       .pauseFor(50)
// //       .deleteAll()
// //       .callFunction(() => {
// //         console.log('All strings were deleted');
// //       })
// //       .start(4);
// //     }}
// // />

// // import Typewriter from 'typewriter-effect';

// <Typewriter 
//   options={{
//     strings: ['welcome to PhoneBook', 
//     // 'World'
//   ],
//     autoStart: true,
//     loop: true,
//   }}
// />
//     )
//   }

// export default Onclose





const ViewContact = () => {

  const {data}=Getalltask()

  return (
    <div>
       <div className="w-[100%] h-[100vh] flex justify-center items-center bg-[#000]">
 <div className="w-[96%] h-[80vh]  flex-wrap flex justify-center items-center flex-col">
     <div className="w-[88%] h-[75vh]  flex-wrap flex justify-center items-center 
     ">
<div className="min-h-[75vh] w-[90%] flex justify-center flex-wrap gap-[30px] max-sm:w-80
max-md:w-screen max-lg:w-screen max-xl:w-90 max-2xl:w-78
items-center  rounded-[10px] bg-[]">
{
  data?.map((el:any)=>(
<div className=" flex-wrap w-[30%] h-[20vh] justify-center items-center max-sm:w-60 max-md:w-60 max-lg:w-60 max-xl:60 max-2xl:60
flex bg-[#000] rounded-[10px]">

    <div className="w-[80%] flex justify-center items-center gap-3
 bg-[] h-[13vh]">
<div className="w-[70px] h-[70px] rounded-[50%] bg-[#f4f4f4] flex justify-center items-center">
DO
</div>
<div className="w-[55%] h-[10vh] bg-[#f4f4f4] flex  flex-wrap">
<div className="flex items-center flex-wrap w-[100%]"><span className="flex items-center flex-wrap">{el.name}</span></div>
<div className="flex items-center flex-wrap"><span className="flex items-center flex-wrap">
  {el.PhoneNo}</span></div>
{/* <small className="flex items-center">{el.PhoneNo}</small> */}
</div>
</div>

</div>
  ))
}


</div>
</div>
</div>
</div>
      </div>
  )
}

export default ViewContact