import React from "react"
import { config } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faInstagram,
  faLinkedin,
  faGithub,
  faGitlab,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"
import { faBook, faKey } from "@fortawesome/free-solid-svg-icons"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import "@fortawesome/fontawesome-svg-core/styles.css"
import mojeId from "../images/mojeid.svg"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/styles.scss"

config.autoAddCss = false

const SocialIcon = ({ href, icon }: { href: string; icon: any }) => (
  <a href={href} className="icon" target="_blank">
    <FontAwesomeIcon icon={icon} />
  </a>
)

const Index = () => (
  <Layout>
    <SEO
      title="Ondřej Gajdušek"
      description="Ondřej Gajdušek dev personal website"
      meta={["Ondřej Gajdušek dev personal website", "QE", "web", "dev"]}
    />
    <p>I am</p>
    <h1>Ondřej Gajdušek</h1>
    <div>
      <h2>
        <span className="red">QE</span> <span className="slash">/</span>{" "}
        <span className="green">System administrator</span>{" "}
        <span className="slash">/</span>{" "}
        <span className="yellow">Network enthusiast</span>
      </h2>
    </div>
    <div className="social-icons-wrapper">
      <SocialIcon href="mailto:ondrej@gajdusek.dev" icon={faEnvelope} />
      <SocialIcon href="https://github.com/ogajduse" icon={faGithub} />
      <SocialIcon href="https://gitlab.com/ogajduse" icon={faGitlab} />
      <SocialIcon href="https://docs.gajdusek.dev" icon={faBook} />
      <SocialIcon href="https://linkedin.com/in/ogajduse" icon={faLinkedin} />
      <SocialIcon href="https://twitter.com/ogajdusek" icon={faTwitter} />
      <SocialIcon href="https://instagram.com/gajond" icon={faInstagram} />
      <a href="https://ogajdusek.mojeid.cz" target="_blank">
        <img src={mojeId} className="social-icons__img" alt="moje ID" />
      </a>
      <SocialIcon href="./ogajduse.asc" icon={faKey} />
    </div>
  </Layout>
)

export default Index
