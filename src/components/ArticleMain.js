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
                <ArticleBoxes selectedArticle="digitalization" />
                <ArticleBoxes selectedArticle="Implement" />
                <ArticleBoxes selectedArticle="Support-Modern" />
            </div>
            <div className="articles-main-second">
                <ArticleBoxes selectedArticle="To-Implement" />
                <ArticleBoxes selectedArticle="End-Users" />
                <ArticleBoxes selectedArticle="Head-Office" />
            </div>
            <div className="articles-main-second">
                <ArticleBoxes selectedArticle="Business-Intelligence" />
                <ArticleBoxes selectedArticle="New-Products" />
                <ArticleBoxes selectedArticle="Better-Result" />
            </div>
                <div class="menu">
                <div class="menu-item">
                    <span class="box">
                    &lt;
                    </span>
                </div>
                <div class="menu-item">
                    <span class="box black-box">
                    1
                    </span>
                </div>
                <div class="menu-item">
                    <span class="box">
                    2
                    </span>
                </div>
                <div class="menu-item">
                    <span class="box">
                    3
                    </span>
                </div>
                <div class="menu-item">
                    <span class="dots-menu-item">
                    ...
                    </span>
                </div>
                <div class="menu-item">
                    <span class="box">
                    9
                    </span>
                </div>
                <div class="menu-item">
                    <span class="box">
                    &gt;
                    </span>
                </div>
                </div>
        </div>
    </section>
  )
}

export default ArticleMain