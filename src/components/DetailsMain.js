import React from 'react'

import SectionTitle from './Generics/SectionTitle'
import women from '../assets/images/detailswomen.png'
import shape from '../assets/images/Shape.png'
import GreyButton from './Generics/GreyButton'
import DetailsText from './DetailsText'
import DetailsCategories from './DetailsCategories'
import DetailSquare from './DetailSquare'

const DetailsMain = () => {
  return (
    <section className="details-main">
        <div className="container">
            <div className="container-wrapper">
            <div className="details-wrapper">
                    <div className="details-header">
                        <SectionTitle description={"How To Use Digitalization\nIn The Classroom"} />
                    </div>
                    <div className="details-description">
                        <p>Mar 25, 2023</p>
                        <span className="dots-menu"></span>
                        <p>Business</p>
                        <span className="dots-menu"></span>
                        <p>Kimberly Hansen</p>
                    </div>
                        <div className="details-img">
                            <img src={women} alt="image of women" />
                        </div>
                        <DetailsText />
                        <div className="details-buttons">
                            <GreyButton text="Digitalization" url="/newsdetails" />
                            <GreyButton text="School" url="/newsdetails" />
                            <GreyButton text="IT" url="/newsdetails" />
                            <GreyButton text="Design" url="/newsdetails" />
                            <GreyButton text="Work" url="/newsdetails" />
                            <GreyButton text="Tech" url="/newsdetails" />
                        </div>
                </div>
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