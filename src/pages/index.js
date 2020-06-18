import React from "react"

import SEO from "../components/seo"
import "../components/index.css"

const IndexPage = () => (
  <React.Fragment>
    <SEO title="Oluwaseun Omoyajowo" />
    <div className="container">
      <h1>Hi I'm Oluwaseun Omoyajowo</h1>
      <h3>Software Engineer</h3>
      <div className="linksContainer">
        <a href="https://github.com/flickz" target="_blank" rel="noreferrer">Github</a>
        <a href="mailto:omoyajowojowo2015@gmail.com?subject=Hello">Email</a>
        <a href="https://www.instagram.com/flickz_oluwaseun" target="_blank" rel="noreferrer">Instagram</a>
        <a href="https://medium.com/@oluwaseunOmoya" target="_blank" rel="noreferrer">Blog</a>
        <a href="https://twitter.com/oluwaseunOmoya" target="_blank" rel="noreferrer">Twitter</a>
      </div>
    </div>
  </React.Fragment>
)

export default IndexPage
