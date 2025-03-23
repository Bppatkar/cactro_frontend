import React from "react";

const LogosSection = () => {
  const companies = [
    {
      name: "FOX",
      logo: "https://www.logo.wine/a/logo/Fox_Corporation/Fox_Corporation-Logo.wine.svg",
    },
    {
      name: "Lonely Planet",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcTmTLeYJiuL7M3pSshRLYVltKE9PjEZlBPQ&s",
    },
    {
      name: "Influit",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Intuit_Logo.svg/1200px-Intuit_Logo.svg.png",
    },
    {
      name: "CARVANA",
      logo: "https://mms.businesswire.com/media/20230509005451/en/1566243/5/Carvana-LOGO.jpg?download=1",
    },
    {
      name: "Ikiva",
      logo: "https://www.kiva.org/cps/logos/kiva_logo_filled.png",
    },
    {
      name: "Ikiva",
      logo: "https://dslntlv9vhjr4.cloudfront.net/posts_images/DOJBojqYamEfS.png",
    },
    { name: "Deva", logo: "https://media.designrush.com/agencies/787865/conversions/logo-logo-profile.jpg" },
  ];

  return (
    <section className="bg-orange-50 py-10">
      <div className="container mx-auto px-4">
        {/* Logos Grid */}
        <div className="grid grid-cols-4 md:grid-cols-7 gap-2">
          {companies.map((company, index) => (
            <div key={index} className="flex items-center justify-center">
              <img
                src={company.logo}
                alt={company.name}
                className="h-12 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogosSection;