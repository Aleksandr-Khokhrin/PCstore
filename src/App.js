import { Route, Routes } from "react-router-dom";
import './mainStyles/style.css'
import './mainStyles/colors.css'
import Header from "./Header/index";
import Footer from "./Footer/index";
import MainPage from "./MainPage";
import Log from "./UI/Auth/log";
import Reg from "./UI/Auth/reg";
function App() {
  return (
    <div>
      <Header />
      <div className="mainBody">
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/log' element={<Log />} />
          <Route path='/reg' element={<Reg />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
