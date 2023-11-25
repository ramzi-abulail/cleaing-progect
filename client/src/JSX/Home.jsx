import React from 'react'
import HeroSlider from './HeroSlider'
import AboutUsSection from './AboutUsSection'
import OurServices from './OurServices'
import Card from './Card'

function Home() {
  return (

    <div>
      <HeroSlider />
      <AboutUsSection />
      <OurServices />
      <Card />
    </div>
  )
}

export default Home