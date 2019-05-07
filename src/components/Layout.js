import React from "react";

export default ({ title, subtitle, img, Component }) => (
    <div
        style={{
            display: "grid",
            margin: "0px",
            padding: "15px"
        }}
    >
        <div
            style={{
                gridRowStart: "1",
                gridRowEnd: "3",
                gridColumnStart: "1",
                gridColumnEnd: "12",
                textAlign: "center",
                marginTop: 25,
                marginBottom: 15
            }}
        >
            <h1 style={{ color: "#b4cacd", fontSize: "72px" }}>{title}</h1>
            <h3 style={{ color: "#b4cacd", fontSize: "32px" }}>{subtitle}</h3>
        </div>
        <div
            style={{
                gridRowStart: "3",
                gridRowEnd: "10",
                gridColumnStart: "1",
                gridColumnEnd: "1"
            }}
        >
            <Component />
        </div>
    </div>
);

// <div style={{ gridRow: "2", gridColumn: 11 }} />
