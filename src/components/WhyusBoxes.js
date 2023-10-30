import React from 'react'

const articles = [
  {
    type: 'thumbs-up-outline',
    title: 'Process Excellence',
    description: 'Lorem, ipsum dolor sit amet consectetur.',
  },
  {
    type: 'nuclear-outline',
    title: 'Strategic Planning',
    description: 'Lorem, ipsum dolor sit amet consectetur.',
  },
  {
    type: 'construct-outline',
    title: 'Experience Design',
    description: 'Lorem, ipsum dolor sit amet consectetur.',
  },
  {
    type: 'person-add-outline',
    title: 'Artificial Intelligence',
    description: 'Lorem, ipsum dolor sit amet consectetur.',
  },
]

const WhyusBoxes = ({ type }) => {
  const selectedArticle = articles.find((article) => article.type === type);

  if (!selectedArticle) {
    return <div>No matching article found.</div>
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

export default WhyusBoxes;