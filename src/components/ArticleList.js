import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useArticles } from './Generics/ArticleContext'

const ArticleList = () => {
    const { articles, getArticles } = useArticles();

    return (
        <div className="Articles">
            <div className="article-grid">
                {
                    articles.map(article => (
                        <div key={article.id} className="articles-main-second">
                            <Link to={`/newsdetails/${article.id}`}>
                                <div className="article-image">
                                    <img src={article.imageUrl} alt={article.title} />
                                        <div className="orange-box">
                                            <div className="image-main-square-numbers">{new Date(article.published).getDate()}</div>
                                            <div className="image-main-square-text">{new Date(article.published).toLocaleString('default', { month: 'short' })}</div>
                                        </div>
                                </div>
                                <p>{article.author}</p>
                                <h2>{article.title}</h2>
                                <p>{article.content}</p>
                                <p>{article.published}</p>
                                <p>{article.category}</p>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ArticleList