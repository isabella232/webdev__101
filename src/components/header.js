import { Link } from "gatsby"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div className="container">
      <div className="inner-header">
        <div className="logo">
            <Link to="/">Tyler Santos</Link>
        </div>
        <div class="navigation">
          <nav>
            <Link to="/about">About Me</Link>
            <Link to="/work">Work</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
        </div>  
    </div>
  </header>
)

export default Header
