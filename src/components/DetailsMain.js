import React from 'react'

import SectionTitle from './Generics/SectionTitle'
import women from '../assets/images/image-women.png'
import shape from '../assets/images/Shape.png'
import Button from './Generics/Button'

const DetailsMain = () => {
  return (
    <section className="details-main">
        <div className="container">
            <div className="details-wrapper">
                    <div className="details-header">
                        <SectionTitle description={"How To Use Digitalization\nIn The Classroom"} />
                    </div>
                        <div className="details-description">
                            <p>Mar 25, 2023</p>
                            <span className="dot"></span>
                            <p>Business</p>
                            <span className="dot"></span>
                            <p>Kimberly Hansen</p>
                        </div>
                        <div className="details-img">
                            <img src={women} alt="image of women" />
                        </div>
                        <div className="details-text-1">
                            <p className="details-p">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce<br/>posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros<br/>quis urna.</p>
                        </div>
                        <div className="details-text-1">
                            <p className="details-p">Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.<br/>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin<br/>pharetra nonummy pede. Mauris et orci. Aenean nec lorem. In porttitor. Donec laoreet nonummy<br/>augue. uspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque<br/>at sem venenatis eleifend. Ut nonummy.</p>
                        </div>
                        <div className="details-text-1">
                            <p className="details-p">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce<br/>posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros<br/>quis urna.</p>
                        </div>
                        <div className="details-text-1">
                            <p className="details-p">Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.<br/>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin<br/>pharetra nonummy pede. Mauris et orci. Aenean nec lorem. In porttitor. Donec laoreet nonummy<br/>augue. uspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque<br/>at sem venenatis eleifend. Ut nonummy.</p>
                        </div>
                        <div className="bold-text">
                            <img src={shape} alt="" />
                            <p className="bold-text-p">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas<br/>porttitor congue massa. Fusce posuere, magna sed pulvinar<br/>ultricies, purus lectus malesuada libero, sit amet commodo magna<br/>eros quis urna.</p>
                        </div>
                        <div className="details-text-2">
                            <p className="details-p"></p>
                        </div>
                        <div className="details-buttons">
                        <Button type="grey" text="Digitalization" url="/newsdetails" />
                        <Button type="grey" text="School" url="/newsdetails" />
                        <Button type="grey" text="IT" url="/newsdetails" />
                        <Button type="grey" text="Design" url="/newsdetails" />
                        <Button type="grey" text="Work" url="/newsdetails" />
                        <Button type="grey" text="Tech" url="/newsdetails" />
                        </div>
            </div>
                <div className="details-wrapper-2">
                    <form>
                        <input type="text" placeholder="Type to search..." />
                    </form>
                </div>
        </div>
    </section>
  )
}

export default DetailsMain