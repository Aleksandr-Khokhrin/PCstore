import { useState, useEffect } from "react";
import WindowOne from "./windowOne";
import WindowTwo from "./windowTwo";
import WindowThree from "./windowThree";
import WindowFour from "./windowFour";
import WindowFive from "./windowFive";
import WindowSix from "./windowSix";
import WindowSeven from "./windowSeven";
import WindowEight from "./windowEight";
import WindowNine from "./windowNine";
import WindowTen from "./windowsTen";
import WindowEleven from "./windowEleven";
import WindowTwelve from "./windowTwelve";
const MainPage = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
        window.removeEventListener("resize", handleResize);
    }
  }, [windowWidth]);
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };
  return (
    <div>
      <WindowOne />
      <WindowTwo />
      <WindowThree />
      <WindowFour />
      <WindowFive windowWidth={windowWidth}/>
      <WindowSix windowWidth={windowWidth}/>
      <WindowSeven />
      <WindowEight />
      <WindowNine windowWidth={windowWidth}/>
      <WindowTen windowWidth={windowWidth}/>
      <WindowEleven windowWidth={windowWidth}/>
      <WindowTwelve/>
    </div>
  );
};

export default MainPage;
