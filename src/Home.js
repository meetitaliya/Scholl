import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";
import Facilities from "./Facilities";
import About from "./About";
import Class from "./Class";
import Team from "./Team";

export default function Home() {
    return (
        <>
            <div>
                
                {/* Header Start */}
              <Header />    
                {/* Header End */}
                {/* Facilities Start */}
                <Facilities />
                {/* Facilities Start */}
                {/* About Start */}
                <About />
                {/* About End */}
                {/* Class Start */}
              <Class />
                {/* Class End */}
               
                {/* Team Start */}
               <Team />
                {/* Team End */}
                {/* Testimonial Start */}
               
                {/* Testimonial End */}
                {/* Blog Start */}
               
                {/* Blog End */}
                
                {/* Back to Top */}
             
            </div>

        </>
    )
}