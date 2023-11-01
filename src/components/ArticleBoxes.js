import React from 'react';

import women from '../assets/images/image-women.png'
import text from '../assets/images/Image-text.png'
import book from '../assets/images/image-book.png'

const ArticleBoxes = ({ selectedArticle }) => {
  return (
    <div>
        {selectedArticle === "digitalization" && (
        <div className="digitalization">
            <div className="digitalization">
                <div className="image-women-main" >
                    <img src={women} alt="image of women" />
                    <div className="image-main-square">
                        <p className="image-main-square-numbers">25</p>
                        <p className="image-main-square-text">Mar</p>
                    </div>
                </div>
                <p id="header">Business</p>
                <h3>How To Use Digitalization<br/>In The Classroom</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br/>Architecto sed hic libero.</p>
            </div> 
        </div>
        )}

        {selectedArticle === "Implement" && (
        <div className="Implement">
            <div className="image-text">
                <img src={text} alt="image of text" />
                <div className="image-main-square">
                    <p className="image-main-square-numbers">17</p>
                    <p className="image-main-square-text">Mar</p>
                    </div>
                </div>
            <p id="header">Business</p>
            <h3>How To Implement Chat GPT<br/>In Your Projects</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br/>Architecto sed hic libero.</p>
        </div> 
        )}

        {selectedArticle === "Support-Modern" && (
        <div className="Support-Modern">
                <div className="image-book">
                    <img src={book} alt="image of book and iphone" />
                    <div className="image-main-square">
                        <p className="image-main-square-numbers">13</p>
                        <p className="image-main-square-text">Mar</p>
                    </div>
                </div>
            <p id="header">Business</p>
                <h3>The Guide To Support<br/>Modern CSS Design</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br />Architecto sed hic libero.</p>
        </div> 
            )}
    </div>
  )
}

export default ArticleBoxes