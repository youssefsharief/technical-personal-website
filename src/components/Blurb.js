import React from 'react'

import personalImage from '../../content/images/yousof.png'

export default function Blurb({ title, children }) {
  return (
    <section className="blurb">
      <div className="container">
        <div>
          <img src={personalImage} alt="personalImage" className="avatar" />
        </div>
        <div>
          <h3>{title}</h3>
          {children}
        </div>
      </div>
    </section>
  )
}
