import React from "react"
import { Link } from "gatsby"
import Header from "../components/header.js"
import "../styles/bootstrap.min.css";

const headerImg = "../images/header.jpeg";

export default () => (
  <div style={{ backgroundColor: "#1e2d44" }}>
    <Header
      title={"Ryan & Kelsey Tate"}
      subtitle={"Wedding\nAugust 10th 2019"}
      img={headerImg}
    />
  </div>
)
