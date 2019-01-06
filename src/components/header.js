import React from "react";

export default ({ title, subtitle, img}) => (
  <div style={{ 
      backgroundImage: `url(${img})`,
      height: "900px",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
      margin: "0px",
      padding: "15px"
  }}>
    <h1>{title}</h1>
    <h3>{subtitle}</h3>
  </div>
)
