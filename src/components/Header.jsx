import React from "react";

const Header = () => {
  return (
    <header className="bg-orange-50 shadow-md">
      <nav className="container mx-auto flex items-center justify-between p-5">
        <div className="logo">
          <img
            src="https://a.slack-edge.com/3d92b39/marketing/img/nav/slack-salesforce-logo-nav-black.png"
            alt="logo"
            className="h-8"
          />
        </div>
        <ul className="hidden md:flex space-x-8">
          <li className="text-black-700 hover:font-bold ">Product</li>
          <li className="text-black-700 hover:font-bold ">Enterprise</li>
          <li className="text-black-700 hover:font-bold ">Resource</li>
          <li className="text-black-700 hover:font-bold ">Pricing</li>
        </ul>
        <div className="flex items-center space-x-6">
          <div className="search-icon flex items-center">
          <i className="ri-search-line h-5 w-5"></i>
            <h3 className="ml-2 text-black-700 hover:font-bold">Sign in</h3>
          </div>
          <button className="border-2 text-purple-700 px-4 py-2 rounded hover:bg-purple-200">
            TALK TO SALES
          </button>
          <button className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800">
            TRY IT FOR FREE
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
