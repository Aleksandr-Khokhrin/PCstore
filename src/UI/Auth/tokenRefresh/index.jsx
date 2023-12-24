import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchTokenRefresh } from "../../../redux/slices/auth";

const TokenRefresh = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const refreshToken = async () => {
      try {
        const token = localStorage.getItem("token");
        const refresh = localStorage.getItem("refresh");

        if (token && refresh) {
          const values = {
            refresh: refresh
          }
          const data = await dispatch(fetchTokenRefresh(values));
          console.log(data)
          if (!data || !data.payload) {
            return alert("failedLog");
          }

          if ('access' in data.payload) {
            localStorage.setItem('token', data.payload.access);
          }

          if ('refresh' in data.payload) {
            localStorage.setItem('refresh', data.payload.refresh);
          }

          console.log("Refreshing token...");
        }
      } catch (error) {
        console.error("Error refreshing token:", error);
      }
    };

    // Вызываем refreshToken при монтировании компонента
    refreshToken();

    // Устанавливаем интервал на 15 минут (15 * 60 * 1000 миллисекунд)
    const intervalId = setInterval(refreshToken, 15 * 60 * 1000);

    // Очистка интервала при размонтировании компонента
    return () => clearInterval(intervalId);
  }, [dispatch]);

  return null;
};

export default TokenRefresh;
