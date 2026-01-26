import { FaGithub } from "react-icons/fa";
export default function Projects()
{
    return(
         <>
    <div className="mt-16 px-4 sm:px-6 md:px-20 bg-gradient-to-br from-orange-500 via-pink-500 to-red-600 py-16 rounded-xl text-white">
  <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-12 tracking-wide drop-shadow-lg">
    Projects
  </h1>

  <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
    {/* Project 1 */}
    <div className="bg-black text-white-900 rounded-2xl shadow-xl p-6 hover:scale-[1.02] transition-transform duration-300">
      <h2 className="text-xl font-bold mb-2 text-pink-600">Employee Training Portal</h2>
      <p className="mb-4">
        Developed a web app for managing employee training. Admins can assign tasks, track progress, and evaluate performance. Includes Excel export for final evaluations.
      </p>
      <div className="flex flex-wrap gap-2 mt-2">
        {['React', 'CSS', 'Bootstrap', 'ASP.NET Core ', 'SQL'].map((tech) => (
          <span key={tech} className="bg-black border-2 text-amber-500 text-xs font-semibold px-3 py-1 rounded-full">
            {tech}
          </span>
        ))}
      </div>
      <div className="flex justify-end">
  <a
    href="https://github.com/KishoreS112/Training_portal"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 p-2 font-semibold text-white hover:bg-purple-500 hover:text-black border-2 border-purple-700 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
  >
    <FaGithub size={20} />
    Git Live
  </a>
</div>
    </div>

    {/* Project 2 */}
    <div className="bg-black text-white-900 rounded-2xl shadow-xl p-6 hover:scale-[1.02] transition-transform duration-300">
      <h2 className="text-xl font-bold mb-2 text-pink-600">Personal Portfolio</h2>
      <p className="mb-4">
        Built a responsive portfolio using React to showcase skills, projects, and experience. Includes interactive UI optimized for all devices.
      </p>
      <div className="flex flex-wrap gap-2 mt-2">
        {['React', 'CSS', 'Tailwind css', 'Email.js', 'GitHub'].map((tech) => (
          <span key={tech} className="bg-black border-2 text-amber-500 text-xs font-semibold px-3 py-1 rounded-full">
            {tech}
          </span>
        ))}
      </div>
      <div className="flex justify-end mt-8">
  <a
    href="https://github.com/KishoreS112/Training_portal"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 p-2 font-semibold text-white hover:bg-purple-500 hover:text-black border-2 border-purple-700 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
  >
    <FaGithub size={20} />
    Git Live
  </a>
</div>
    </div>

    {/* Project 3 */}
    <div className="bg-black text-white-900 max-w-3xl  rounded-2xl shadow-xl p-6 hover:scale-[1.02] transition-transform duration-300">
      <h2 className="text-xl font-bold mb-2 text-pink-600">CocoMart Selling Platform</h2>
      <p className="mb-4">
        Created an e-commerce app for coconut sales. Users can browse, order, track shipments, and complete offline payments. Built with a strong backend and intuitive frontend.
      </p>
      <div className="flex flex-wrap gap-2 mt-2">
        {['React', 'CSS', 'Bootstrap', 'ASP.NET Core Web API','Entity framework', 'SQL'].map((tech) => (
          <span key={tech} className="bg-black border-2 text-amber-500 text-xs font-semibold px-3 py-1 rounded-full">
            {tech}
          </span>
        ))}
      </div>
      <div className="flex justify-end">
  <a
    href="https://github.com/KishoreS112/COCOSellingMart"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 p-2 font-semibold text-white hover:bg-purple-500 hover:text-black border-2 border-purple-700 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
  >
    <FaGithub size={20} />
    Git Live
  </a>
</div>
    </div>


     <div className="bg-black text-white-900 max-w-3xl  rounded-2xl shadow-xl p-6 hover:scale-[1.02] transition-transform duration-300">
      <h2 className="text-xl font-bold mb-2 text-pink-600">Hotel Room Booking System</h2>
      <p className="mb-4">
       The Hotel Room Booking System is an online platform designed to simplify the process of reserving hotel rooms.
        Users can register, search for available rooms based on preferences, make reservations, and manage bookings. 
        
      </p>
      <div className="flex flex-wrap gap-2 mt-2">
        {['React', 'CSS', 'Bootstrap', 'ASP.NET Core ', 'SQL'].map((tech) => (
          <span key={tech} className="bg-black border-2 text-amber-500 text-xs font-semibold px-3 py-1 rounded-full">
            {tech}
          </span>
        ))}
      </div>
      <div className="flex justify-end mt-5">
  <a
    href="https://github.com/KishoreS112/HotelRoombooking"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 p-2 font-semibold text-white hover:bg-purple-500 hover:text-black border-2 border-purple-700 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
  >
    <FaGithub size={20} />
    Git Live
  </a>
</div>
    </div>
  </div>
</div>


         
             
       
         </>
    )
}