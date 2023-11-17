import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useArticles } from './Generics/ArticleContext'

const ArticleGet = () => {
    const { articles } = useArticles()

    const specificArticleIds = [
        "cb24396b-ae21-4c34-a267-d0cd0600aa6d",
        "228c829d-4f66-431f-bb20-1b3aed2869b6",
        "cc6c2b75-8ee7-4e4e-8a99-66fe89a4b789"
    ]

    const specificArticles = articles.filter(article => specificArticleIds.includes(article.id))

    return (
        <div className="Article-news">
            {specificArticles.map(article => (
                <div key={article.id} className="articles-main-news">
                    <Link to={`/newsdetails/${article.id}`}>
                        <div className="article-image-news">
                            <img src={article.imageUrl} alt={article.title} />
                            <div className="orange-boxs">
                                <div className="image-main-news-numbers">{new Date(article.published).getDate()}</div>
                                <div className="image-main-news-text">{new Date(article.published).toLocaleString('default', { month: 'short' })}</div>
                            </div>
                        </div>
                        <p>{article.author}</p>
                        <p>{article.category}</p>
                        <h2>{article.title}</h2>
                        <p>{article.content}</p>
                        <p>{article.published}</p>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default ArticleGet