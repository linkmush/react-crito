import React from 'react'

import SectionTitle from './Generics/SectionTitle'
import ArticleList from './ArticleList'
import Pagination from './Generics/Pagnation'

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
                    <Pagination />
            </div>
        </div>
    </section>
  )
}

export default ArticleMain