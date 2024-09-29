import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AIChatBot from "./Components/AIChatBot";
import PrivacyPolicy from "./Pages/PrivacyPolicy";

const App = () => {

  return (
    <>
      


      <div className="relative  w-full bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-50">

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacy_policy" element={<PrivacyPolicy />} />
          </Routes>
          <AIChatBot />
        
      </div>
    </>
  );
};

export default App;
