import React, { useState } from 'react'

const WhyusBoxes = ({ id }) => {
  const [articles] = useState([
    {
      id: 1,
      title: 'Process Excellence',
      description: 'Lorem, ipsum dolor sit amet consectetur.',
      type: 'thumbs-up-outline',
    },
    {
      id: 2,
      title: 'Strategic Planning',
      description: 'Lorem, ipsum dolor sit amet consectetur.',
      type: 'nuclear-outline',
    },
    {
      id: 3,
      title: 'Experience Design',
      description: 'Lorem, ipsum dolor sit amet consectetur.',
      type: 'construct-outline',
    },
    {
      id: 4,
      title: 'Artificial Intelligence',
      description: 'Lorem, ipsum dolor sit amet consectetur.',
      type: 'person-add-outline',
    },
  ])

  const selectedArticle = articles.find((article) => article.id === id);

  if (!selectedArticle) {
    return null
  }

  return (
    <article className="article-list">
      <div className="article-content">
        <ion-icon className="article-icon" name={selectedArticle.type}></ion-icon>
        <div className="text-content">
          <h3>{selectedArticle.title}</h3>
          <p>{selectedArticle.description}</p>
        </div>
      </div>
    </article>
  )
}

export default WhyusBoxes