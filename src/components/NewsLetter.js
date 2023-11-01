import React from 'react'

import SectionTitle from './Generics/SectionTitle'
import Button from './Generics/Button'
import wavylines from '../assets/images/background-wavy-lines.svg'

const NewsLetter = () => {
  return (
    <section class="newsletter">
        <img class="background-wavy-lines" src={wavylines} alt="" />
        <div class="container">
        <SectionTitle description="Get News Updates By Signup" />
            <form>
                <input type="text" placeholder="username@domain.com" />
                <Button type="yellow" text="Subscribe" url="/services" />
            </form>
        </div>
    </section>
  )
}

export default NewsLetter