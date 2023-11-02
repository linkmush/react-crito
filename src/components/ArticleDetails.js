import React from 'react'
import { Link } from 'react-router-dom'

import SectionTitle from './Generics/SectionTitle'
import Button from './Generics/Button'
import ArticleBoxes from './ArticleBoxes'

const ArticleDetails = () => {
  return (
    <section className="Article-details">
        <div className="container">
            <div className="article-details-header">
                <div className="article-details-header-text">
                    <SectionTitle title="Article & News" description="Get Every Single Articles & News" />
                </div>
                    <Button type="transparent" text="Browse Articles" url="/services/consulting" />
                </div>
            <div className="articles-details">
                <ArticleBoxes selectedArticle="digitalization" />
                <ArticleBoxes selectedArticle="Implement" />
                <ArticleBoxes selectedArticle="Support-Modern" />
            </div>
            <ul className="dots-menu-details">
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

export default ArticleDetails