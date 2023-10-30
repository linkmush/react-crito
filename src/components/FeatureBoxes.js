import React from 'react';

import handshake from '../assets/images/handshake.png'
import idea from '../assets/images/idea.png'
import bars from '../assets/images/bars.png'
import box from '../assets/images/box.png'

const FeatureBoxes = ({ featureType }) => {
    const renderFeatureArticles = () => {
      switch (featureType) {
        case 'business':
          return (
            <>
              <article className="child-1">
                <img src={handshake} />
                <h3>Business Advice</h3>
                <p>Lorem ipsum, dolor sit amet<br /> consectetur adipisicing elit.</p>
              </article>
            </>
          )
        case 'startup':
          return (
            <>
              <article className="child-1">
                <img src={idea} />
                <h3>Startup Business</h3>
                <p>Lorem ipsum, dolor sit amet<br /> consectetur adipisicing elit.</p>
              </article>
            </>
          )
        case 'finance':
          return (
            <>
              <article className="child-2">
                <img src={bars} />
                <h3>Financial Advice</h3>
                <p>Lorem ipsum, dolor sit amet<br /> consectetur adipisicing elit.</p>
              </article>
            </>
          )
        default:
          return (
            <>
              <article className="child-2">
                <img src={box} />
                <h3>Risk Management</h3>
                <p>Lorem ipsum, dolor sit amet<br /> consectetur adipisicing elit.</p>
              </article>
            </>
          )
      }
    }
  
    return (
      <div className="feature-boxes">
        {renderFeatureArticles()}
      </div>
    )
  }
  
  export default FeatureBoxes;