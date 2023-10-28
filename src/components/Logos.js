import React from 'react'

import LogosBoxes from './LogosBoxes'

const Logos = () => {

  return (
    <section className="logos">
       <div className="container">
        <LogosBoxes image="paperz" />
        <LogosBoxes image="dorfus" />
        <LogosBoxes image="martino" />
        <LogosBoxes image="square" />
        <LogosBoxes image="gobona" />
       </div>
    </section>
  )
}

export default Logos