import React, { useState } from 'react';

import { Link } from 'react-router-dom'
import newspaper from '../assets/images/Image.png'
import watch from '../assets/images/Image (3).png'
import pen from '../assets/images/Image (1).png'
import notebook from '../assets/images/Image (2).png'

const ProjectBoxes = ({ id }) => {
  const [projects] = useState ([
    { id: 1, title: "Grow your business", imgSrc: newspaper },
    { id: 2, title: "Why your client needs a responsive website", imgSrc: watch },
    { id: 3, title: "Educate your employees to get better results", imgSrc: pen },
    { id: 4, title: "Business Insights is an important piece of your business", imgSrc: notebook },

  ])

  return (
    <div>
        {projects.map(article => (
            <div key={article.id}>
                {article.id === id ? (
                    <article className={article}>
                      <img src={article.imgSrc} alt={article.title} />
                      <h3>{article.title}</h3>
                      <Link to={`/services/${article.id}`}>Read More <ion-icon id="arrow" name="arrow-forward-outline"></ion-icon></Link>
                    </article>
                ) : null}
            </div>
        ))}
    </div>
  )
}

export default ProjectBoxes