import React from "react";
// import { Link } from "gatsby";
import Layout from "../components/Layout";
import RegistryComponent from "../components/RegistryComponent";

import "../styles/bootstrap.min.css";

const headerImg = "../images/header.jpeg";

export default () => (
    <div
        style={{
            backgroundColor: "#1e2d44",
            backgroundImage: `url(${headerImg})`,
            backgroundSize: "auto",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "50% 200px",
            backgroundOrigin: "content-box"
        }}
    >
        <Layout
            title={"Ryan & Kelsey Tate"}
            subtitle={"Wedding\nAugust 10th 2019"}
            img={headerImg}
            Component={RegistryComponent}
        />
    </div>
);
