import React, { useState } from 'react'

import handshake from '../assets/images/handshake.png'
import idea from '../assets/images/idea.png'
import bars from '../assets/images/bars.png'
import box from '../assets/images/box.png'

const FeaturesBoxes = ({ id }) => {
    const [features] = useState([
        { id: 1, title: "Business Advice", description: "Lorem ipsum, dolor sit amet<br /> consectetur adipisicing elit.", imgSrc: handshake, className: "child-1" },
        { id: 2, title: "Startup Business", description: "Lorem ipsum, dolor sit amet<br /> consectetur adipisicing elit.", imgSrc: idea, className: "child-1" },
        { id: 3, title: "Financial Advice", description: "Lorem ipsum, dolor sit amet<br /> consectetur adipisicing elit.", imgSrc: bars, className: "child-2" },
        { id: 4, title: "Risk Management", description: "Lorem ipsum, dolor sit amet<br /> consectetur adipisicing elit.", imgSrc: box, className: "child-2" }
    ])

    return (
        <div>
            {features.map(article => (
                <div key={article.id}>
                    {article.id === id ? (
                        <article className={article.className}>
                            <img src={article.imgSrc} alt={article.title} />
                            <h3>{article.title}</h3>
                            <p dangerouslySetInnerHTML={{ __html: article.description }} />
                        </article>
                    ) : null}
                </div>
            ))}
        </div>
    )
}

export default FeaturesBoxes