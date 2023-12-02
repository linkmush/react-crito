import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useArticles } from './Generics/ArticleContext'

const ArticleGet = () => {
    const { articles } = useArticles()

    const specificArticleIds = [

        "45dd52ce-27e3-441f-b948-c65b2e233509",
        "e07be2a4-f0a2-4f76-a196-db6aed1a2bdc",
        "0fd8762a-0cce-4f33-8c70-37f0b2300478"
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