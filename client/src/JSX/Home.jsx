import React from 'react'
import HeroSlider from './HeroSlider'
import AboutUsSection from './AboutUsSection'
import OurServices from './OurServices'
import Card from './Card'
import RecentWork from './RecentWork '

function Home() {
  return (

    <div>
      <HeroSlider />
      <AboutUsSection />
      <OurServices />
     <RecentWork/>
      <Card />
    </div>
  )
}

export default Home