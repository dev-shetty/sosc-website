import React from 'react'
import Link from 'gatsby-link'
import { GatsbyImage } from 'gatsby-plugin-image'

const BlogCard = ({ data }) => (
  <Link className="blog-card elevate white-bg" to={data.slug}>
    <div className="cover">
      <GatsbyImage
        image={data.cover.childImageSharp.gatsbyImageData}
        style={{ height: '100%' }}
      />
    </div>
    <div className="card-content">
      <div className="tags">{data.tags}</div>
      <Link className="title" to={data.slug}>
        <h2>{data.title}</h2>
      </Link>
      <div className="description">{data.description}</div>
      <div className="author-box">
        <img
          className="author-img"
          alt=""
          src={`https://avatars1.githubusercontent.com/${data.author}?size=100`}
        />
        <div className="author-details">
          <p className="author-name">{data.author}</p>
          <p className="date">{data.date}</p>
        </div>
      </div>
    </div>
  </Link>
)

export default BlogCard
