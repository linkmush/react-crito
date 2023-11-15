import React, { useEffect } from 'react'
import { useArticles } from '../components/Generics/ArticleContext'
import { useParams } from 'react-router-dom'

import SectionTitle from './Generics/SectionTitle'
import GreyButton from './Generics/GreyButton'
import DetailsText from './DetailsText'
import DetailsCategories from './DetailsCategories'
import DetailSquare from './DetailSquare'

const DetailsMain = () => {
  const { article, getArticle, clearArticle } = useArticles();
  const { id } = useParams();

  useEffect(() => {
    console.log('useEffect körs!')
    getArticle(id);

    return () => clearArticle();
  }, []);

  console.log(article)

  return (
    <section className="details-main">
        <div className="container">
            <div className="container-wrapper">
                {article ? (
                    <div className="details-wrapper">
                        <div className="details-header">
                            <SectionTitle description={article.title} />
                        </div>
                            <div className="details-description">
                                <p>{article.published}</p>
                                <span class="dot"></span>
                                <p>{article.category}</p>
                                <span class="dot"></span>
                                <p>{article.author}</p>
                            </div>
                            <div className="details-img">
                                <img src={article.imageUrl} alt={article.title} />
                            </div>
                            <p>{article.content}</p>
                            <DetailsText />
                            <div className="details-buttons">
                            <GreyButton type="grey" text="Digitalization" />
                            <GreyButton type="grey" text="School" />
                            <GreyButton type="grey" text="IT" />
                            <GreyButton type="grey" text="Design" />
                            <GreyButton type="grey" text="Work" />
                            <GreyButton type="grey" text="Tech" />
                            </div>
                    </div>
                ) : (
                    <div>Loading...</div>
                )}
                <div className="details-wrapper-2">
                        <form>
                        <div className="details-search">
                            <ion-icon name="search-outline"></ion-icon>
                            <input type="text" placeholder="Type to search..." />
                        </div>
                        </form>
                        <div className="detail-box">
                        <DetailSquare />
                        </div>
                    <div className="details-categories">
                        <DetailsCategories />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default DetailsMain