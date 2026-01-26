import Kishore from '../assets/Kishore.jpg'
import { Briefcase } from 'lucide-react'; 
import { FaDownload } from "react-icons/fa";


export default function HomePage()
{
  const handleDownload = async () => {
  const response = await fetch('/Kishore.pdf');
  const blob = await response.blob();
  const url = window.URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = 'Kishore.pdf';
  a.click();
  window.URL.revokeObjectURL(url);
};
    return(
        <>
      <div className="bg-gradient-to-br from-purple-800 via-purple-700 to-indigo-800 px-6 py-12 md:px-20 md:py-20">
        <div  className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
          {/* Text Section */}
          <div className="text-white space-y-6 leading-relaxed md:pr-10 text-justify md:col-span-3">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Hi, I'm Kishore <span role="img" aria-label="wave">👋</span>
            </h1>

          <p className="text-lg md:text-xl text-gray-100">
            I'm a dedicated <span className="font-semibold text-purple-200">Software Engineer</span> with over 3 years of experience in designing and developing high-quality web applications. I focus on writing clean, efficient, and maintainable code that solves real-world problems.
          </p>

          <p className="text-base md:text-lg text-gray-200">
            Throughout this journey, I’ve contributed to projects requiring collaboration, creativity, and analytical thinking. I enjoy building products that are not only functional but also intuitive and user-friendly.
          </p>

          <p className="text-base md:text-lg text-gray-300">
            I'm passionate about continuous learning, professional growth, and meaningful work. I actively seek new challenges and opportunities to evolve as both a developer and a person.
          </p>
       <div className="flex justify-center md:justify-end">

        <a  onClick={handleDownload}  target="_blank"
  rel="noopener noreferrer"> <button className="hover:cursor-pointer flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 via-black to-red-500  text-white font-semibold rounded-xl shadow-lg transition duration-300">
    <FaDownload className="text-black" />
    Download Resume
  </button></a>
 
</div>
    </div>

            {/* Image Section */}
            <div className="flex justify-center md:justify-center md:col-span-2">
           <div className="relative w-fit p-2 rounded-2xl z[-1]">
                  <div className="relative overflow-hidden rounded-2xl transition-all duration-500">
                    <img
                      src={Kishore}
                      alt="Kishore Profile"
                   
                      className="w-64 h-auto rounded-xl border-4 border-white shadow-[0_4px_25px_2px_rgba(16,185,129,0.6)] hover:scale-105 transition-transform duration-300 relative"
                    />
                  </div>
                </div>
            </div>
        </div>
      </div>

  </>
    )
} 