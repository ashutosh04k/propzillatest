import React, { useState } from "react";

const AboutCompany = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div 
      className="mx-auto px-4 md:px-8 py-8 text-gray-700"
      style={{ fontFamily: "Cormorant Garamond", width: "100%", maxWidth: "80vw" }}
    >
      <p className="text-base md:text-lg">
        With a rich legacy spanning decades, <strong>The Wadhwa Group</strong> has emerged as one of the top builders in Mumbai. 
        Our commitment to excellence, coupled with a passion for innovation, has led us to create luxurious projects that redefine urban living.
      </p>
      <p className="text-base md:text-lg mt-4">
        As prominent builders in Mumbai, we take pride in our journey of developing residential, commercial, and township projects that 
        reflect our unwavering dedication to quality and customer satisfaction.
      </p>
      <p className="text-base md:text-lg mt-4">
        At <strong>The Wadhwa Group</strong>, our name is synonymous with trust, quality, and luxury. We understand that a home is not just 
        a structure; it’s where dreams take shape and memories are made. This belief drives us to create spaces that resonate with 
        your lifestyle and aspirations.
      </p>

      {isExpanded && (
        <>
          <p className="text-base md:text-lg mt-4">
            As top builders in Mumbai, we believe in delivering more than just buildings; we provide lifestyles. Our ongoing projects, such as 
            <strong> Wadhwa Wise City, Atmosphere O2, TW Gardens, Magnolia</strong> and <strong>Venue52</strong> are testaments to our vision. 
            Each project bears the hallmark of our commitment to excellence and dedication to crafting spaces that offer the perfect blend of 
            comfort and sophistication.
          </p>
          <p className="text-base md:text-lg mt-4">
            Wadhwa Wise City, <strong>Atmosphere O2, TW Gardens, Magnolia</strong> and <strong>Venue52</strong> are not just names; they are 
            promises of a better tomorrow. These projects exemplify our dedication to creating communities that thrive and prosper.
          </p>
          <p className="text-base md:text-lg mt-4">
            When you choose <strong>The Wadhwa Group</strong>, you choose more than just a home; you choose a legacy of trust, innovation, and luxury. 
            With us, you’re not just buying a property; you’re investing in a lifestyle.
          </p>
          <p className="text-base md:text-lg mt-4">
            Explore our ongoing projects, and let us help you find the perfect space that resonates with your dreams and aspirations. Discover 
            why <strong>The Wadhwa Group</strong> stands out as one of the top builders in Mumbai, where luxury meets excellence.
          </p>
          <p className="text-base md:text-lg mt-4">
            Experience the difference with <strong>The Wadhwa Group</strong> – where every project is a masterpiece and every home is a dream fulfilled.
          </p>
        </>
      )}
          <div className="w-12" style={{ background: '#c28562',padding:'5px',width:'6.7rem'}}>

      <button
        onClick={toggleReadMore}
        className="btn btn-submit w-10 bg-[#c28562]" style={{ background: '#c28562',border:'1px solid white',borderRadius:'0px',color:'white' }}      >
        {isExpanded ? "Read Less" : "Read More"}
      </button>
      </div>
    </div>
  );
};

export default AboutCompany;
