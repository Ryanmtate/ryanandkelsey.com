import React from "react";
import RSVPForm from "./rsvp.js";

export default ({ title, subtitle, img}) => (
  <div style={{
      display: "grid",
      backgroundImage: `url(${img})`,
      height: "auto",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
      margin: "0px",
      padding: "15px"
  }}>
    <div style={{
        gridRowStart: "1",
        gridRowEnd: "3",
        gridColumnStart: "1",
        gridColumnEnd: "12",
        textAlign: "center",
        marginTop: 25,
        marginBottom: 15
    }}>
        <h1 style={{ fontSize: "72px" }}>{title}</h1>
        <h3 style={{ fontSize: "32px" }}>{subtitle}</h3>
    </div>
    <div style={{
        gridRowStart: "3",
        gridRowEnd: "10",
        gridColumnStart: "1",
        gridColumnEnd: "1"
    }}>
        <RSVPForm />
    </div>


  </div>
)



// <div style={{ gridRow: "2", gridColumn: 11 }} />
