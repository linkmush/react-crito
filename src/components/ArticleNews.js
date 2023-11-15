import React from 'react'
import { Link } from 'react-router-dom'

import SectionTitle from './Generics/SectionTitle'
import Button from './Generics/Button'
import ArticleGet from './ArticleGet'

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
                <ArticleGet />
            </div>
            <div className="center-content">
                  <Link to='/'><i className="fa-solid fa-circle"></i></Link>
                  <Link to='/' className="active"><i className="fa-solid fa-circle"></i></Link>
                  <Link to='/'><i className="fa-solid fa-circle"></i></Link>
                  <Link to='/'><i className="fa-solid fa-circle"></i></Link>
                  <Link to='/'><i className="fa-solid fa-circle"></i></Link>
            </div>
        </div>
    </section>
  )
}

export default ArticleNews