import React from 'react'
import Navbar from './partials/Navbar'
import Logo from './partials/Logo'
import Footer from './partials/Footer'
import RahnamaContents from './partials/RahnamaContents'
import SectionTitle from './partials/SectionTitle'

function Rahnama() {
    return (
        <>
            <Navbar/>
            <Logo/>
            <SectionTitle title='راهنما'/>
            <RahnamaContents/>

            <Footer/>
        </>
    )
}

export default Rahnama
