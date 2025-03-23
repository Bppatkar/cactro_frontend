import React from "react";

const Features = () => {
  return (
    <section className="bg-orange-50 py-12">
      <div className="container mx-auto px-4">
        {/* Title and Subtitle */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Features</h2>
          <p className="text-gray-600">Everything you need to get stuff done</p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-orange-50 p-6 rounded-lg shadow-md text-center">
            <i className="ri-team-line text-4xl text-purple-700 mb-4"></i>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Collaboriate
            </h3>
            <p className="text-gray-600">Work together in real-time.</p>
          </div>

          {/* Feature 2 */}
          <div className="bg-orange-50 p-6 rounded-lg shadow-md text-center">
            <i className="ri-folder-2-line text-4xl text-purple-700 mb-4"></i>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Organize
            </h3>
            <p className="text-gray-600">Keep everything organized.</p>
          </div>

          {/* Feature 3 */}
          <div className="bg-orange-50 p-6 rounded-lg shadow-md text-center">
            <i className="ri-settings-5-line text-4xl text-purple-700 mb-4"></i>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Automate
            </h3>
            <p className="text-gray-600">Automate repetitive tasks.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
