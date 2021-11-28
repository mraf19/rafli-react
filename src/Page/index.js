import React, { Component } from 'react'
import AboutMe from './AboutMe'
import Hero from './Hero'
import Navigation from './Navigation'
import Skill from './Skill'
import Footer from './Footer'

export default class Page extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <Hero />
                <AboutMe />
                <Skill />
                <Footer />
            </div>
        )
    }
}
