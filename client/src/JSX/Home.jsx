import React from 'react'
import HeroSlider from './HeroSlider'
import AboutUsSection from './AboutUsSection'
import OurServices from './OurServices'
import Card from './Card'
import RecentWork from './RecentWork '
import ServicesCardHome from './ServicesCardHome'
import ServiceDetailsHome from './ServiceDetailsHome'

function Home() {
  return (

    <div>
      <HeroSlider />
      <AboutUsSection />
      <ServicesCardHome />
      <ServiceDetailsHome/>
     <RecentWork/>
      <Card />
    </div>
  )
}

export default Home