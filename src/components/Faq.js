import React from 'react'
import Navbar from './partials/Navbar'
import Logo from './partials/Logo'
import Footer from './partials/Footer'
import FaqContents from './partials/FaqContents'
import SectionTitle from './partials/SectionTitle'

function Faq() {
    return (
        <>
            <Navbar/>
            <Logo/>
            <SectionTitle title='سوالات متداول'/>
            <FaqContents/>
            <Footer/>
        </>
    )
}

export default Faq
