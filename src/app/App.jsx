import React from 'react'
import styled from 'styled-components'
import Header from '../layouts/Header'
import Home from '../sections/Home'
import About from '../sections/About'
import Skills from '../sections/Skills'
import Projects from '../sections/Projects'
import Contact from '../sections/Contact'
import FontStyle from '../styles/fontStyle'
import GlobalStyle from '../styles/globalStyle'

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
      <FontStyle />
      <GlobalStyle />
      <Header />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </Container>
  )
}

export default App
