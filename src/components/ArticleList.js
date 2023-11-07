import React, { useEffect } from 'react';
import { useArticles } from './Generics/ArticleContext';

const ArticleList = () => {
    const { Articles, getArticles } = useArticles();

    useEffect(() => {
        console.log('useEffect körs!')
        getArticles();
    }, []);

    return (
        <div className="Articles">
            <div className="article-grid">
                {
                    Articles.map(article => (
                        <div key={article.id} className="articles-main-second">
                            <div className="article-image">
                                <img src={article.imageUrl} alt={article.title} />
                                    <div className="orange-box">
                                        <div className="image-main-square-numbers">{new Date(article.published).getDate()}</div>
                                        <div className="image-main-square-text">{new Date(article.published).toLocaleString('default', { month: 'short' })}</div>
                                    </div>
                            </div>
                            <p>Author: {article.author}</p>
                            <h2>{article.title}</h2>
                            <p>{article.content}</p>
                            <p>Published: {article.published}</p>
                            <p>Category: {article.category}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ArticleList;