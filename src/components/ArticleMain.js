import React from 'react'

import ArticleBoxes from './ArticleBoxes'
import SectionTitle from './Generics/SectionTitle'

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
                <ArticleBoxes id={1} />
                <ArticleBoxes id={2} />
                <ArticleBoxes id={3} />
            </div>
            <div className="articles-main-second">
                <ArticleBoxes id={4} />
                <ArticleBoxes id={5} />
                <ArticleBoxes id={6} />
            </div>
            <div className="articles-main-second">
                <ArticleBoxes id={7} />
                <ArticleBoxes id={8} />
                <ArticleBoxes id={9} />
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