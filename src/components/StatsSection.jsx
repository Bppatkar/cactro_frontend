import React from "react";

const StatsSection = () => {
  return (
    <section className="relative" style={{ backgroundColor: "#3a0b3a" }}>
      {/* Wave SVG Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
         <svg
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <path
            d="M0,160L48,149.3C96,139,192,117,288,128C384,139,480,181,576,192C672,203,768,181,864,160C960,139,1056,117,1152,117.3C1248,117,1344,139,1392,149.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            fill="#6A1B5A" 
            fillOpacity="1"
          ></path>
        </svg>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 py-20">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            We’re in the business of growing businesses.
          </h2>
        </div>

        {/* Stats */}
        <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-16">
          {/* Stat 1 */}
          <div className="text-center">
            <h3 className="text-6xl font-bold text-white mb-2">90%</h3>
            <p className="text-white text-lg">of users say that Stock helps them to stay more connected.</p>
          </div>

          {/* Stat 2 */}
          <div className="text-center">
            <h3 className="text-6xl font-bold text-white mb-2">43</h3>
            <p className="text-white text-lg">The average number of caps used by teams in Stock.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;