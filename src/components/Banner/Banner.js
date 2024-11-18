import React from "react";
// import "./Banner.css";

const Banner = ({ title, subheading, data, backgroundColor }) => {
  const bannerStyle = {
    backgroundColor: backgroundColor || "indigo", // Default background color
    padding: "20px",
    textAlign: "center",
    borderRadius: "8px",
    color: "#333",
  };

  return (
    <div style={bannerStyle} className="">
      <h1 className="text-left mt-3 text-white font-bold">{title}</h1>
      {subheading && <h3 className="text-left text-white font-semibold">{subheading}</h3>}
          {data && <div className="banner-data">{data}</div>
          }
          <h2 className="font-bold text-left  text-white  mt-4">OverView</h2>
    </div>
  );
};



export default Banner;
