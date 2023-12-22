import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import "../style.css";
import PrimaryBtn from "../../../elements/btns/primary";
import SecondaryBtn from "../../../elements/btns/secondary";

const Reg = () => {
  const { handleSubmit, register, formState: { errors } } = useForm();
  const [isAuth, setIsAuth] = useState(false)

  const onSubmit = (data) => {
    console.log(data);
    setIsAuth(true)
  };
  if (isAuth) {
    return <Navigate to="/" />;
  }
  return (
    <div className="auth">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3 className="titleH">Регистрация</h3>
        <div className="authInputs">
          <div className="authInputs">
            <label htmlFor="userName">Имя пользователя:</label>
            <input
              type="text"
              name="userName"
              {...register("userName", {
                required: "Укажите имя пользователя",
              })}
            />
          </div>
          <div className="authInputs">
            <label htmlFor="email">Почта:</label>
            <input
              type="text"
              name="email"
              {...register("email", { required: "Укажите почту" })}
            />
          </div>
          <div className="authInputs">
            <label htmlFor="password">Пароль:</label>
            <input
              type="password"
              name="password"
              {...register("password", { required: "Укажите пароль" })}
            />
          </div>
        </div>
        <div className="authBtns">
          <PrimaryBtn type="submit" text="Зарегистрироваться" />
          <Link to="/log">
            <SecondaryBtn
              type="button"
              text="Войти"
              onClick={() => console.log("Авторизация")}
            />
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Reg;