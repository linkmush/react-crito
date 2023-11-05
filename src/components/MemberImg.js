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

  return (
    <div className={`team-member-${id}`}>
        {memberImg.map(article => (
            <div key={article.id}>
                {article.id === id ? (
                    <div className={`article team-member-${article.id}`}>
                      <img src={article.imgSrc} alt={article.title} />
                      <h3>{article.title}</h3>
                      <p>{article.description}</p>
                    </div>
                ) : null}
            </div>
        ))}
    </div>
  )
}

export default MemberImg
