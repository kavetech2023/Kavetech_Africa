import { Routes, Route } from "react-router-dom";
import GTM from 'react-gtm-module';
import Home from "./Pages/Home";
import AIChatBot from "./Components/AIChatBot";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";


const App = () => {

  return (
    <>
      


      <div className="relative  w-full bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-50">

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy_policy" element={<PrivacyPolicy />} />
            
          </Routes>
          <AIChatBot />
        
      </div>

    </>
  );
};

export default App;
