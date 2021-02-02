import React, { useMemo } from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Layout from '../components/Layout'
import Posts from '../components/Posts'
import Guides from '../components/Guides'
import Projects from '../components/Projects'
import SEO from '../components/SEO'
import Blurb from '../components/Blurb'

import { getSimplifiedPosts } from '../utils/helpers'
import config from '../utils/config'

import projects from '../data/projects'
import speaking from '../data/speaking'
import outsideArticles from '../data/outside-articles'

export default function BlogIndex({ data }) {
  const latest = data.latest.edges
  // const popular = data.popular.edges
  const simplifiedLatest = useMemo(() => getSimplifiedPosts(latest), [latest])
  // const simplifiedPopular = useMemo(() => getSimplifiedPosts(popular), [
  //   popular,
  // ])

  const Section = ({ title, children, button, ...props }) => (
    <section {...props}>
      <h2>
        {title}
        {button && (
          <Link className="section-button" to="/blog">
            View all
          </Link>
        )}
      </h2>
      {children}
    </section>
  )

  return (
    <Layout>
      <Helmet title={config.siteTitle} />
      <SEO />
      <Blurb title="I'm Yousof Sharief.">
        <p>
          I'm a software engineer who loves to write performant, readable, minimalist, straightforward code
        </p>
        <p className="stack-mobile">
          <Link className="button" to="/me">
            About me
          </Link>
          <a
            className="button"
            href="https://yousof.substack.com"
            target="_blank"
            rel="noreferrer"
          >
            Join newsletter
          </a>
          <a
            className="button"
            href="https://github.com/youssefsharief"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </p>
      </Blurb>
      <div className="container index">
        <Section title="Latest Articles" button>
          <Posts data={simplifiedLatest} />
        </Section>
        <Section title="External Articles">
          <Guides data={outsideArticles} frontPage />
        </Section>
        <Section title="Courses">
        <Guides data={speaking} frontPage />
        </Section>
        <Section title="Open Source Projects">
          <Projects data={projects} />
        </Section>
        <Section title="Newsletter">
          <p>I send out an email when I create something new.</p>
          <a
            href="https://yousof.substack.com/subscribe"
            target="_blank"
            rel="noreferrer"
            className="button large"
          >
            <span className="emoji">💌</span> Get the Newsletter
          </a>
        </Section>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    latest: allMarkdownRemark(
      limit: 5
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { template: { eq: "post" } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            tags
          }
        }
      }
    }
  }
`
