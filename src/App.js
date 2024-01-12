import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import './mainStyles/style.css'
import './mainStyles/colors.css'
import Header from "./Header/index";
import Footer from "./Footer/index";
import MainPage from "./pages/MainPage";
import CategoryPage from './pages/FilterPage'
import BestPage from './pages/BestProductsPage'
import Log from "./UI/Auth/log";
import Reg from "./UI/Auth/reg";
import TokenRefresh from "./UI/Auth/tokenRefresh";
function App() {
  const [isAuth, setIsAuth] = useState(false)
  const [category, setCategory] = useState('')
  const [bestProduct, setBestProduct] = useState('')
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsAuth(true)
    }
  }, [])

  const isAuthHandler = (elem) => {
    // console.log(`это App ${elem}`)
    setIsAuth(elem)
  }
  return (
    <div>
      <TokenRefresh />
      <Header isAuth={isAuth} isAuthDelete={isAuthHandler} />
      <div className="mainBody">
        <Routes>
          <Route path='/' element={<MainPage />} />
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
