import React from "react";
import { About, Header, Work, Skills, Contact, Testimonial } from "./container";
import { Navbar } from "./components";
import "./App.scss";
import { ToastContainer } from 'react-toastify';

function App() {
   return (
      <div className="app">    
         <Navbar />
         <Header />
         <About />        
         <Work />
         <Skills />         
         <Contact />
         <ToastContainer position='top-center' autoClose={3000}/>
      </div> 
   );
}

export default App;
