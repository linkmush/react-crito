import React from 'react'

import ArticleBoxes from './ArticleBoxes'
import SectionTitle from './Generics/SectionTitle'
import ArticleList from './ArticleList'

const ArticleMain = () => {
  return (
    <section className="Article-news-second">
        <div className="container">
            <div className="article-news-header-second">
                <div className="article-news-header-text-second">
                    <SectionTitle description="Our News & Articles" />
                </div>
                </div>
                    <div className="articles-main-second">
                    <ArticleList />
                    </div>
                <div className="menu">
                <div className="menu-item">
                    <span className="box">
                    &lt;
                    </span>
                </div>
                <div className="menu-item">
                    <span className="box black-box">
                    1
                    </span>
                </div>
                <div className="menu-item">
                    <span className="box">
                    2
                    </span>
                </div>
                <div className="menu-item">
                    <span className="box">
                    3
                    </span>
                </div>
                <div className="menu-item">
                    <span className="dots-menu-item">
                    ...
                    </span>
                </div>
                <div className="menu-item">
                    <span className="box">
                    9
                    </span>
                </div>
                <div className="menu-item">
                    <span className="box">
                    &gt;
                    </span>
                </div>
                </div>
        </div>
    </section>
  )
}

export default ArticleMain