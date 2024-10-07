import { Routes, Route } from "react-router-dom";
import GTM from 'react-gtm-module';
import Home from "./Pages/Home";
import AIChatBot from "./Components/AIChatBot";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";
import WebBuilder from "./Pages/WebBuilder";
const GTM_ID = 'G-292S0LQ8ZR';
const App = () => {

  return (
    <>
      <GTM.Initializer gtmId={GTM_ID} />


      <div className="relative  w-full bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-50">

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy_policy" element={<PrivacyPolicy />} />
            <Route path="/web_builder" element={<WebBuilder />} />
          </Routes>
          <AIChatBot />
        
      </div>

    </>
  );
};

export default App;
