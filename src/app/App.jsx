import React from 'react'
import Home from '../sections/Home'
import About from '../sections/About'
import Skills from '../sections/Skills'
import Projects from '../sections/Projects'
import Contact from '../sections/Contact'
import GlobalStyle from '../styles/globalStyle'
import styled from 'styled-components'

const Container = styled.div`
  height: 100vh;
  overflow-y: auto;
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;
  scrollbar-width: none;
  &::-webkit-scrollbar{
    display: none;
  }
`

const App = () => {
  return (
    <Container>
      <GlobalStyle />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </Container>
  )
}

export default App
