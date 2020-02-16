import React, {Component} from "react";
import {GoogleReCaptcha, GoogleReCaptchaProvider} from "react-google-recaptcha-v3";
import {useStoreState, useStoreActions} from "easy-peasy";
import Navbar from "./partials/Navbar";
import Logo from "./partials/Logo";
import SignUp from "./partials/SignUp";
import Login from "./partials/Login";
import Footer from "./partials/Footer";

function LoginPage() {

    const setGoogleToken = useStoreActions(actions => actions.google.setToken);

    const setToken = token => {
        setGoogleToken(token);
    };

    return (
        <>
            <Navbar/>
            <Logo/>

            <section className="section-contents container mx-auto">
                <div className="row mx-0 px-0 ">
                    <GoogleReCaptchaProvider reCaptchaKey="6LcltNQUAAAAALPMWwtFpvTr4zV46E-pn2k9QzNG" language="fa">
                        <GoogleReCaptcha onVerify={
                            token => setToken(token)
                        }/>
                        <SignUp/>
                        <Login/>
                    </GoogleReCaptchaProvider>
                </div>
            </section>

            <Footer/>
        </>
    );
}

export default LoginPage;
