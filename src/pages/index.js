import React from "react"
import { Link } from "gatsby"
import Header from "../components/header.js"

const headerImg = "../images/header.jpeg";

export default () => (
<div>
  <Header
      title={"Ryan & Kelsey Tate"}
      subtitle={"Wedding\nAugust 10th 2019"}
      img={headerImg}

  />
  
  <Link to="/rsvp/">Contact</Link> 
</div>
)
