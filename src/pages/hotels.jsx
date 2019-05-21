import React from "react";
// import { Link } from "gatsby";
import Layout from "../components/Layout";
import HotelsComponent from "../components/HotelsComponent";

import "../styles/bootstrap.min.css";

const headerImg = "../images/header.jpeg";

const MobileView = () => (
    <div
        style={{
            backgroundColor: "#1e2d44",
            backgroundImage: `url(${headerImg})`,
            backgroundSize: "auto",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "50% 400px",
            backgroundOrigin: "content-box",
            backgroundPositionX: -700
        }}
    >
        <Layout
            title={"Ryan & Kelsey Tate"}
            subtitle={"Wedding\nAugust 10th 2019"}
            img={headerImg}
            Component={HotelsComponent}
        />
    </div>
)

const DesktopView = () => (
    <div
        style={{
            backgroundColor: "#1e2d44",
            backgroundImage: `url(${headerImg})`,
            backgroundSize: "auto",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "50% 200px",
            backgroundOrigin: "content-box",
            // backgroundPositionX: -700
        }}
    >
        <Layout
            title={"Ryan & Kelsey Tate"}
            subtitle={"Wedding\nAugust 10th 2019"}
            img={headerImg}
            Component={HotelsComponent}
        />
    </div>
)

export default () => {
    return screen.width < 400 ?
        (<MobileView />) : (<DesktopView />)
};
