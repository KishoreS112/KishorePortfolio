import React from 'react';


const cardVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      delay: i * 2, // 2 seconds delay between each card (on scroll)
    },
  }),
};

const Card = ({ children, index }) => (
  <motion.div
    custom={index}
    variants={cardVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }} // triggers when 50% in view
    className="border-2 border-slate-300 rounded-2xl p-6 shadow-md bg-white hover:shadow-xl transition-shadow duration-300"
  >
    {children}
  </motion.div>
);

const ScrollCards = () => {
  const cardData = [1, 2, 3, 4]; // You can replace this with real content

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-x-12 px-6 md:px-12 py-10 bg-gradient-to-br from-white to-slate-100 text-slate-800 font-sans">
      {cardData.map((_, i) => (
        <Card key={i} index={i}>
          <h2 className="text-xl font-bold mb-4 text-indigo-700">Front-End Development</h2>
          <p className="text-base leading-relaxed">
            • Proficient in <span className="font-semibold text-indigo-600">React</span>, <span className="font-semibold text-indigo-600">JavaScript</span>, <span className="font-semibold text-indigo-600">HTML</span>, and <span className="font-semibold text-indigo-600">CSS</span>.
          </p>
          <h2 className="text-xl font-bold mt-6 mb-2 text-indigo-700">Back-End Development</h2>
          <p className="text-base leading-relaxed">
            • Expertise in <span className="font-semibold text-indigo-600">.NET Core</span>, <span className="font-semibold text-indigo-600">C#</span>, and <span className="font-semibold text-indigo-600">WebAPI</span>.
          </p>
        </Card>
      ))}
    </div>
  );
};

export default ScrollCards;
