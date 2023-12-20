import { Route, Routes } from "react-router-dom";
import './mainStyles/style.css'
import './mainStyles/colors.css'
import Header from "./Header/index";
import Footer from "./Footer/index";
import MainPage from "./MainPage";

function App() {
  return (
    <div>
      <Header />
      <div className="mainBody">
        <Routes>
          <Route path='/' element={<MainPage />} />
        </Routes>
      </div>
        <Footer />
    </div>
  );
}

export default App;
