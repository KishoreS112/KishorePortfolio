export default function Experience()
{
    return(
        <>
       
        <div className="mt-16 px-4 sm:px-6 md:px-20 bg-gradient-to-br from-gray-900 via-black to-gray-800 py-16 rounded-xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-amber-400 mb-12 tracking-wide drop-shadow-lg">
            Experience
          </h1>

  <div className="relative border-l-4 border-amber-500 pl-5 sm:pl-6 space-y-10 sm:space-y-12">
    {[
        {
        title: "Front-End Development",
        points: [
          "Proficient in React, JavaScript, HTML, CSS , Bootstrap and Tailwind for building responsive and user-friendly interfaces.",
        ],
      },
      {
        title: "Backend-End Development",
        points: [
          "Expertise in ASP.NET Core Web API, .NET 8, C# for robust server-side solutions.",
        ],
      },
      {
        title: "API Development",
        points: [
          "Designed, implemented and maintained secure and scalable RESTful APIs for banking operations using ASP.NET Core Web API and Entity Framework.",
          "Worked on migrating APIs from ADO.NET to Entity Framework, ensuring seamless data access and improved maintainability.", 
        ],
      },
      
      {
        title: "Banking Web Applications",
        points: [
          "Developed and maintained a Symitar-based web application for the banking operations, enhancing functionality and user experience.",
          "Worked on fetching, processing, and transforming data from third-party APIs using ASP.NET Core Web API, including filtering and manipulation as per business requirements.",
        ],
      },
      
    ].map((section, i) => (
      <div
        key={i}
        className="relative bg-white/5 border border-amber-500/30 backdrop-blur-md rounded-xl px-4 py-5 sm:px-6 sm:py-6 shadow-xl transition-transform duration-300 hover:scale-[1.02] animate-fade-in-up"
      >
        <div className="absolute -left-3 top-4 w-5 h-5 sm:w-6 sm:h-6 bg-amber-400 rounded-full border-4 border-gray-900 shadow-md"></div>
        <h3 className="text-lg sm:text-2xl font-bold text-amber-300 mb-3 tracking-wide">
          {section.title}
        </h3>
        <ul className="list-disc list-inside space-y-2 text-gray-100 text-sm sm:text-base leading-relaxed text-justify">
          {section.points.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
</div>

        </>
    )
}