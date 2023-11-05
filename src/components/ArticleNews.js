import React from 'react'
import { Link } from 'react-router-dom'

import SectionTitle from './Generics/SectionTitle'
import Button from './Generics/Button'
import ArticleBoxes from './ArticleBoxes'

const ArticleNews = () => {
  return (
    <section className="Article-News">
        <div className="container">
            <div className="article-news-header">
                <div className="article-news-header-text">
                    <SectionTitle title="Article & News" description="Get Every Single Articles & News" />
                </div>
                    <Button type="transparent" text="Browse Articles" url="/services/consulting" />
                </div>
            <div className="articles-main">
                <ArticleBoxes id={1} />
                <ArticleBoxes id={2} />
                <ArticleBoxes id={3} />
            </div>
            <ul className="dots-menu">
                <li className="dots-menu-2"><Link to="/"></Link></li>
                <li className="dots-menu-li"><Link to="/"></Link></li>
                <li className="dots-menu-li"><Link to="/"></Link></li>
                <li className="dots-menu-li"><Link to="/"></Link></li>
                <li className="dots-menu-li"><Link to="/"></Link></li>
            </ul>
        </div>
    </section>
  )
}

export default ArticleNews