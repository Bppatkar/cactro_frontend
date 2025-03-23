import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-orange-50 ">
      <div className="bg-blue-600 py-5 rounded-3xl w-full mx-auto">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <p className="text-white text-sm md:text-base">
              Slack is your digital HQ. Meet the new features keeping teams
              connected in a work-from-anywhere world.
            </p>
            <a href="#" className="text-white font-semibold hover:underline">
              Let's go →
            </a>
          </div>
        </div>
      </div>
      <div className="py-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 max-w-lg">
              Slack is where the <br />
              future works
            </h1>

            <p className="text-gray-600 text-lg mb-8 max-w-md">
              Transform the way you work with one place for <br />
              everyone and everything you need to get stuff done.
            </p>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <button
                className="text-white px-6 py-3 rounded-lg transition duration-300"
                style={{ backgroundColor: "#4A144B" }}
              >
                TRY IT FOR FREE
              </button>
              <button className="border-2 border-gray-300 bg-blue-500 text-zinc-200 px-6 py-3 rounded-lg hover:bg-gray-50 transition duration-300 flex items-center justify-center space-x-2">
                <img
                  src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                  alt="Google Logo"
                  className="h-5 w-5 bg-white rounded-full"
                />
                <span>SIGN UP WITH GOOGLE</span>
              </button>
            </div>
          </div>

          <div className="md:w-1/2">
            <img
              src="heroImg.png"
              alt="Hero Illustration"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
