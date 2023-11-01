import React from 'react'

import women from '../assets/images/image-women.png'
import text from '../assets/images/Image-text.png'
import book from '../assets/images/image-book.png'
import legs from '../assets/images/legs.png'
import lamps from '../assets/images/lamps.png'
import pcs from '../assets/images/pcs.png'
import notebook from '../assets/images/notebook.png'
import apple from '../assets/images/applewatch.png'
import penpaper from '../assets/images/penpaper.png'

const ArticlesSection = () => {
return (
        <>
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

            {selectedArticle === "To-Implement" && (
            <div className="Support-Modern">
                    <div className="image-book">
                        <img src={legs} alt="image of someone typing on notebook" />
                        <div className="image-main-square">
                            <p className="image-main-square-numbers">12</p>
                            <p className="image-main-square-text">Mar</p>
                        </div>
                    </div>
                <p id="header">Business</p>
                    <h3>Why You Need To Implement<br/>The Five S's</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br />Architecto sed hic libero.</p>
            </div> 
            )}

            {selectedArticle === "End-Users" && (
            <div className="Support-Modern">
                    <div className="image-book">
                        <img src={lamps} alt="image of lamps" />
                        <div className="image-main-square">
                            <p className="image-main-square-numbers">7</p>
                            <p className="image-main-square-text">Mar</p>
                        </div>
                    </div>
                <p id="header">Business</p>
                    <h3>Get More Involved With Your<br/>End Users</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br />Architecto sed hic libero.</p>
            </div> 
            )}

            {selectedArticle === "Head-Office" && (
            <div className="Support-Modern">
                    <div className="image-book">
                        <img src={pcs} alt="image of office" />
                        <div className="image-main-square">
                            <p className="image-main-square-numbers">2</p>
                            <p className="image-main-square-text">Mar</p>
                        </div>
                    </div>
                <p id="header">Business</p>
                    <h3>Guided Tour Of Our New Head Office<br/>In Stockholm</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br />Architecto sed hic libero.</p>
            </div> 
            )}

            {selectedArticle === "Business-Intelligence" && (
            <div className="Support-Modern">
                    <div className="image-book">
                        <img src={notebook} alt="image of notebook" />
                        <div className="image-main-square">
                            <p className="image-main-square-numbers">28</p>
                            <p className="image-main-square-text">Feb</p>
                        </div>
                    </div>
                <p id="header">Business</p>
                    <h3>Using Business Intelligence To Get<br/>Insights Into Our Businesses</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br />Architecto sed hic libero.</p>
            </div> 
            )}

            {selectedArticle === "New-Products" && (
            <div className="Support-Modern">
                    <div className="image-book">
                        <img src={apple} alt="image of applewatch" />
                        <div className="image-main-square">
                            <p className="image-main-square-numbers">18</p>
                            <p className="image-main-square-text">Feb</p>
                        </div>
                    </div>
                <p id="header">Business</p>
                    <h3>Apple Has Released New Products. Are<br/>They Any Good?</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br />Architecto sed hic libero.</p>
            </div> 
            )}

            {selectedArticle === "Better-Result" && (
            <div className="Support-Modern">
                    <div className="image-book">
                        <img src={penpaper} alt="image of pen and paper" />
                        <div className="image-main-square">
                            <p className="image-main-square-numbers">18</p>
                            <p className="image-main-square-text">Feb</p>
                        </div>
                    </div>
                <p id="header">Business</p>
                    <h3>How To Improve Your Teams And Get A<br/>Better Result</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br />Architecto sed hic libero.</p>
            </div> 
            )}    
        </>
    )
}

export default ArticlesSection
