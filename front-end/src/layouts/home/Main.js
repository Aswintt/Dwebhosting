import React from "react";
import About from "./About"
/* import Clients from "./Clients"; */
import Features from "./Features";
import Services from "./Services";
import Cta from "./Cta";
/* import Portfolio from "./Portfolio"; */
import Counts from "./Counts";
import Testimonials from "./Testimonials";
import Team from "./Team";
import Contact from "./Contact";



const Main = () => {
    return (
        <main id="main">                
                <About/>
               {/*  <Clients/> */}
                {/* <Features/> */}
                <Services/>
                <Cta/>
                {/* <Portfolio/> */}
                {/* <Counts/> */}
                {/* <Testimonials/> */}
                {/* <Team/> */}
                <Contact/>   
        </main>
    )
}

export default Main;