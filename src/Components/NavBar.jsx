// import { useState } from 'react'
// import Logo from '../assets/logo.png'
// import Menu from '../assets/menu.png'
// import MenuClose from '../assets/close.png'
// import '../Style/style.css'
// import { FaHome, FaRoad, FaBriefcase, FaTools, FaEnvelope,FaProjectDiagram } from 'react-icons/fa';

// export default function NavBar()
// {
//      const[visible,setVisible]=useState(false);
     
//       function handleMenu()
//       {
//        if (visible) {
//     setTimeout(() => setVisible(false), 500); // match animation duration
//   } else {
//     setVisible(true);
//   }
       
//       }

//  return(
//         <>
//         <div className='bg-purple-700'>
//            <div className='bg-purple-800 h-20'>
//                 <nav className='flex justify-between '>
//                     <div className='logo'>
//                         <img src={Logo} alt='logo' className='w-20 h-auto'/>
//                     </div>
//                      {visible?(<img src={MenuClose} alt='menu' onClick={handleMenu} className='w-14 h-14 p-2 mt-4 mr-4  md:hidden lg:hidden'/>)
//                      :(<img src={Menu} alt='menu' onClick={handleMenu} className='w-16 h-16 mt-2 mr-4 md:hidden lg:hidden'/>)}
//                        <ul className='hidden md:flex mt-4 text-white space-x-10 mr-10 text-xl font-medium z-50 '>
//                             <li className='hover:bg-black hover:border-3 border-orange-400 p-3 rounded-2xl  mb-4'><a href='/'>Home</a></li>
//                             <li className='hover:bg-black hover:border-3 border-orange-400 p-3 rounded-2xl mb-4'><a href='#'>Journey</a></li>
//                             <li className='hover:bg-black hover:border-3 border-orange-400 p-3 rounded-2xl mb-4'><a href='#'>Experience</a></li>
//                             <li className='hover:bg-black hover:border-3 border-orange-400 p-3 rounded-2xl mb-4'><a href='#'>Skills</a></li>
//                             <li className='hover:bg-black hover:border-3 border-orange-400 p-3 rounded-2xl mb-4'><a href='#'>Projects</a></li>
//                             <li className='hover:bg-black hover:border-3 border-orange-400 p-3 rounded-2xl mb-4'><a href='#'>Contact us</a></li>
//                         </ul>
  
//                 </nav>
//                <div className='flex justify-end h-lvh '>
//                   <ul
//                   className={`bg-black  border-l-4 border-purple-800 text-purple-400  
//                   flex flex-col space-y-6 px-4 py-6 w-full font-medium md:hidden  text-left
//                   ${visible ? 'slide-in nav-aside' : 'slide-out hidden'}`}
//                   >
//                   <li className='flex items-center gap-3 mt-16 rounded-full text-xl 
//                               hover:border-orange-400 hover:border-3 hover:translate-x-2 transform transition-transform duration-300 p-3'>
//                     <FaHome />
//                     <a href='#'>Home</a>
//                   </li>
//                   <li className='flex items-center gap-3 rounded-full text-xl border border-transparent 
//                               hover:border-orange-400 hover:border-3 hover:translate-x-2 transform transition-transform duration-300 p-3'>
//                   <FaRoad />
//                   <a href='#'>Journey</a>
//                   </li>

//                   <li className='flex items-center gap-3 rounded-full text-xl border border-transparent 
//                               hover:border-orange-400 hover:border-3 hover:translate-x-2 transform transition-transform duration-300 p-3'>
//                     <FaBriefcase />
//                     <a href='#'>Experience</a>
//                   </li>
//                   <li className='flex items-center gap-3 rounded-full text-xl border border-transparent 
//                               hover:border-orange-400 hover:border-3 hover:translate-x-2 transform transition-transform duration-300 p-3'>
//                     <FaTools />
//                     <a href='#'>Skill</a>
//                   </li>
//                   <li className='flex items-center gap-3 rounded-full text-xl border border-transparent 
//                               hover:border-orange-400 hover:border-3 hover:translate-x-2 transform transition-transform duration-300 p-3'>
//                  <FaProjectDiagram />
//                     <a href='#'>Projects</a>
//                   </li>
//                    <li className='flex items-center gap-3 rounded-full text-xl border border-transparent 
//                               hover:border-orange-400 hover:border-3 hover:translate-x-2 transform transition-transform duration-300 p-3'>
//                     <FaEnvelope />
//                     <a href='#'>Contact us</a>
//                   </li>
//                 </ul>
//               </div>
//            </div>
//          </div>
//       </>
//     )
// }

import { useState } from 'react';
import { Link } from 'react-scroll';
//import Logo from '../assets/logo.png';
import Logo from '../assets/software-development.png'
import Menu from '../assets/menu.png';
import MenuClose from '../assets/close.png';
import '../Style/style.css';
import {
  FaHome,
  FaRoad,
  FaBriefcase,
  FaTools,
  FaEnvelope,
  FaProjectDiagram,
} from 'react-icons/fa';

export default function NavBar() {
  const [visible, setVisible] = useState(false);

  function handleMenu() {
    if (visible) {
      setTimeout(() => setVisible(false), 500);
    } else {
      setVisible(true);
    }
  }

  const links = [
    { to: 'hero', label: 'Home', icon: <FaHome /> },
    { to: 'journey', label: 'Journey', icon: <FaRoad /> },
    { to: 'experience', label: 'Experience', icon: <FaBriefcase /> },
    { to: 'skills', label: 'Skills', icon: <FaTools /> },
    { to: 'projects', label: 'Projects', icon: <FaProjectDiagram /> },
    { to: 'contact', label: 'Contact us', icon: <FaEnvelope /> },
  ];

  return (
    <>
      <div className='bg-purple-700'>
        <div className='bg-purple-800 h-20'>
          <nav className='flex justify-between'>
            <div className='logo'>
              <img src={Logo} alt='logo' className='w-20 h-auto ml-2' />
            </div>

            {visible ? (
              <img
                src={MenuClose}
                alt='menu'
                onClick={handleMenu}
                className='w-14 h-14 p-2 mt-4 mr-4 md:hidden lg:hidden cursor-pointer'
              />
            ) : (
              <img
                src={Menu}
                alt='menu'
                onClick={handleMenu}
                className='w-16 h-16 mt-2 mr-4 md:hidden lg:hidden cursor-pointer'
              />
            )}

            <ul className='hidden md:flex mt-4 text-white space-x-10 mr-10 text-xl font-medium z-50'>
              {links.map((item) => (
                <li
                  key={item.to}
                  className='hover:bg-black hover:border-3 border-orange-400 p-3 rounded-2xl mb-4 cursor-pointer'
                >
                  <Link to={item.to} smooth={true} duration={500} offset={-80}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Sidebar */}
          <div className='flex justify-end h-lvh'>
            <ul
              className={`bg-black border-l-4 border-purple-800 text-purple-400  
              flex flex-col space-y-6 px-4 py-6 w-full font-medium md:hidden text-left
              ${visible ? 'slide-in nav-aside' : 'slide-out hidden'}`}
            >
              {links.map((item) => (
                <li
                  key={item.to}
                  className='flex items-center gap-3 mt-2 rounded-full text-xl border border-transparent 
                  hover:border-orange-400 hover:border-3 hover:translate-x-2 transform transition-transform duration-300 p-3 cursor-pointer'
                >
                  {item.icon}
                  <Link
                    to={item.to}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    onClick={() => setVisible(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
