import React from 'react'
import { Link } from 'gatsby'
import email from '../../content/thumbnails/email.svg'
import github from '../../content/thumbnails/github.svg'
import stackoverflow from '../../content/thumbnails/stackoverflow.svg'
import linkedin from '../../content/thumbnails/linkedin.svg'

export default function Footer() {
  return (
    <footer className="footer flex">
      <section className="container">
        <nav className="footer-links">
          <Link to="/blog">Articles</Link>
          <a
            href="https://yousof.substack.com/subscribe"
            target="_blank"
            rel="noopener noreferrer"
          >
            Newsletter
          </a>
          <Link to="/rss.xml">RSS</Link>
        </nav>
        <nav className="flex justify-center">
          <a
            href="mailto:yousofsharief@protonmail.com"
            title="yousofsharief@protonmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="img"
          >
            <img src={email} className="footer-img" alt="email" />
          </a>
          <a
            href="https://github.com/youssefsharief"
            title="GitHub"
            target="_blank"
            rel="noopener noreferrer"
            className="img"
          >
            <img src={github} className="footer-img" alt="email" />
          </a>
          <a
            href="https://www.linkedin.com/in/youssefsharief"
            title="Linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="img"
          >
            <img src={linkedin} className="footer-img" alt="email" />
          </a>
          <a
            href="http://stackoverflow.com/users/8065736/youssef-sherif"
            title="Stackoverflow"
            target="_blank"
            rel="noopener noreferrer"
            className="img"
          >
            <img src={stackoverflow} className="footer-img" alt="email" />
          </a>
        </nav>
      </section>
    </footer>
  )
}
