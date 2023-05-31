import React from 'react'
import Home from '../sections/Home'
import About from '../sections/About'
import Skills from '../sections/Skills'
import Projects from '../sections/Projects'
import Contact from '../sections/Contact'
import GlobalStyle from '../styles/globalStyle'

const App = () => {
    return (
        <div className="fullscreen">
            <GlobalStyle />
            <Home />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </div>
    )
}

export default App
