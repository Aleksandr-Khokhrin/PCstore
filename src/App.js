import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import './mainStyles/style.css'
import './mainStyles/colors.css'
import Header from "./Header/index";
import Footer from "./Footer/index";
import MainPage from "./MainPage";
import CategoryPage from "./FilterPage";
import BestPage from "./BestProductsPage";
import Log from "./UI/Auth/log";
import Reg from "./UI/Auth/reg";
function App() {
  const [isAuth, setIsAuth] = useState(false)
  const [category, setCategory] = useState('')
  const [bestProduct, setBestProduct] = useState('')
  const isAuthHandler = (elem) => {
    console.log(elem)
    setIsAuth(elem)
  }
  return (
    <div>
      <Header isAuth={isAuth} />
      <div className="mainBody">
        <Routes>
          <Route path='/' element={<MainPage  />} />
          <Route path='/log' element={<Log isAuth={isAuthHandler} />} />
          <Route path='/reg' element={<Reg isAuth={isAuthHandler} />} />
          <Route path={`/category/:productName`} element={<CategoryPage category={category} />} />
          <Route path={`/best/:productName`} element={<BestPage bestProduct={bestProduct} />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
