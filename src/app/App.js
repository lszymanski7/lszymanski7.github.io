import React from 'react'
import Home from '../sections/Home'
import About from '../sections/About'
import Skills from '../sections/Skills'
import Portfolio from '../sections/Portfolio'
import Contact from '../sections/Contact'

const App = () => {
    return (
        <div className="fullscreen">
            <Home />
            <About />
            <Skills />
            <Portfolio />
            <Contact />
        </div>
    )
}

export { App as default }
