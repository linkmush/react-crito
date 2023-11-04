import React, { useState } from 'react'

import officer from '../assets/images/member-1 (1).png'
import consultant from '../assets/images/member-1 (2).png'
import kimberly from '../assets/images/member-1 (3).png'
import justin from '../assets/images/member-1 (4).png'

const MemberImg = ({ id }) => {
  const [memberImg] = useState([
    { id: 1, title: "Kristine Palmer", description: "Chef Operation Office", imgSrc: officer },
    { id: 2, title: "Mark Aubri", description: "Senior Consultant", imgSrc: consultant },
    { id: 3, title: "Kristine Palmer", description: "Senior Consultant", imgSrc: kimberly },
    { id: 4, title: "Kristine Palmer", description: "Senior Tech Consultant", imgSrc: justin },
  ])

  const className = `team-member-${id}`;

  return (
    <div className={className}>
        {memberImg.map(article => (
            <div key={article.id}>
                {article.id === id ? (
                    <article className={article}>
                      <img src={article.imgSrc} alt={article.title} />
                      <h3>{article.title}</h3>
                      <p>{article.description}</p>
                    </article>
                ) : null}
            </div>
        ))}
    </div>
  )
}

export default MemberImg
