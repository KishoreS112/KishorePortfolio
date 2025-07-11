import HtmlLogo from '../assets/html.png'
import CssLogo from '../assets/css.png'
import Bootstrap from'../assets/bootstrap.png'
import Tailwind from '../assets/Tailwind.png'
import JS from '../assets/js.png'
import React from '../assets/react.png'
import Aspc from  '../assets/net.png'
import Csharp from '../assets/csharp.png'
import Api from '../assets/api.png'
import sql from '../assets/sql.png'
export default function Skills()
{
    return(
        <>
            <div className="text-center mt-15 mb-5">
                 <h1 className="text-4xl font-extrabold">Skills</h1>
            </div>

           <div className="whole-container md:grid grid-cols-2 text-white gap-3 p-5   md:p-10">
            <div className="bg-black border-2 border-orange-500 p-5 md:mb-5 rounded-3xl mb-15 ">
                 <div className='text-white text-center font-extrabold md:text-5xl text-3xl '>
                      <h1 className='inline-block border-b-4 border-amber-500 pb-2 mb-10'>Front-End</h1>
                  </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-10 justify-items-center">
                    <div className='border-2 border-purple-700 rounded-2xl p-2'>
                        <img src={HtmlLogo} className="md:w-28 md:h-28 w-20 h-20 " />
                         <h4 className='text-center font-extrabold bg-orange-600 text-black'>HTML</h4>
                    </div>
                    <div className='border-2 border-purple-700 rounded-2xl p-2'>
                         <img src={CssLogo} className="md:w-28 md:h-28 w-20 h-20 " />
                           <h4 className='text-center font-extrabold bg-blue-300 text-black'>CSS</h4>
                    </div>
                    <div className='border-2 border-purple-700 rounded-2xl p-2'>
                      <img src={Bootstrap} className="md:w-28 md:h-28 w-20 h-20" />
                        <h4 className='text-center font-extrabold bg-violet-500 text-black'>Bootstrap</h4>
                    </div>
                   <div className='border-2 border-purple-700 rounded-2xl p-2'>
                     <img src={Tailwind} className="md:w-28 md:h-28 w-20 h-20 " />
                       <h4 className=' text-center font-extrabold bg-blue-400 text-black'>Tailwind</h4>
                    </div>
                    <div className='border-2 border-purple-700 rounded-2xl p-2'>
                     <img src={JS} className="md:w-28 md:h-28 w-20 h-20 " />
                       <h4 className='text-center font-extrabold  bg-amber-300 text-black'>Java Script</h4>
                    </div>
                     <div className='border-2 border-purple-700 rounded-2xl p-2'>
                     <img src={React} className="md:w-28 md:h-28 w-20 h-20 " />
                       <h4 className='text-center font-extrabold bg-blue-700 text-black'>React</h4>
                    </div>

                 </div>
            </div>

             <div className="bg-black border-2 border-orange-500 p-5 mb-5 rounded-3xl">
                <div className='text-white text-center font-extrabold md:text-5xl text-3xl '>
                      <h1 className='inline-block border-b-4 border-amber-500 pb-2 mb-10'>Back-End</h1>
                  </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-10 justify-items-center">
                    <div className='border-2 border-purple-700 rounded-2xl p-2'>
                        <img src={Aspc} className="md:w-28 md:h-28 w-20 h-20 " />
                         <h4 className='text-center font-extrabold bg-orange-600 text-black'>Web API</h4>
                    </div>
                    <div className='border-2 border-purple-700 rounded-2xl p-2'>
                         <img src={Csharp} className="md:w-28 md:h-28 w-20 h-20 " />
                           <h4 className='text-center font-extrabold bg-blue-300 text-black'>C#</h4>
                    </div>
                    <div className='border-2 border-purple-700 rounded-2xl p-2'>
                      <img src={Api} className="md:w-28 md:h-28 w-20 h-20" />
                        <h4 className='text-center font-extrabold bg-violet-500 text-black'> REST API</h4>
                    </div>
                   <div className='border-2 border-purple-700 rounded-2xl p-2'>
                     <img src={sql} className="md:w-28 md:h-28 w-20 h-20 " />
                       <h4 className=' text-center font-extrabold bg-amber-400 text-black'>SQL</h4>
                    </div>
                   

                 </div>
            </div>

            

        
        
    </div>
          
        </>
    )
}