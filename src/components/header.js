import { Link } from "gatsby"
import React from "react"
import content from "../content/contentYAML.yaml"


const Header = () => (
  <header>
    <div className="container">
      <div className="inner-header">
        <div className="logo">
          <Link to={content.header.logo.link}>{content.header.logo.title}</Link>
        </div>
        <div className="navigation">
          <nav>
            {content.header.navigation.map((nav) => {
              return <Link to={nav.link}>{nav.title}</Link>
            })}
          </nav>
        </div>
      </div>
    </div>
  </header>
)

export default Header
