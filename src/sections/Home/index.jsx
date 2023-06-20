import React from 'react'
import Section from '../../components/Section'
import TypeWriter from '../../components/TypeWriter'

const Home = () => {
  return (
    <Section>
      <TypeWriter
        loop={true}
        text={['Front-end Developer', 'Web Developer', 'Tech Enthusiast']}
      />
    </Section>
  )
}

export default Home
