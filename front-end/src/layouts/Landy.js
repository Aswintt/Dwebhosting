import React from 'react'
import { Link, useNavigate } from "react-router-dom"
import Main from './home/Main'
import Header from './outline/Header';
import Landing from './outline/Landing';
import Footer from './outline/Footer';
function Landy() {
    const navigate = useNavigate()

    const handler=()=>{
        navigate("/main")
    }    
    return (
        <>
        <Header/>
        <Landing/>
        <Main/>
        <Footer/>
        </>
    )
};

export default Landy