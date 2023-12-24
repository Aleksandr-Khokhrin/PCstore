import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { fetchRegister, selectIsAuth } from "../../../redux/slices/auth";
import { Link, useNavigate } from "react-router-dom";
import "../style.css";
import PrimaryBtn from "../../../elements/btns/primary";
import SecondaryBtn from "../../../elements/btns/secondary";

const Reg = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
    mode: "onChange",
  });
  
  const onSubmit = async (values) => {
    try {
      const data = await dispatch(fetchRegister(values));
  
      if (!data || !data.payload) {
        return alert('failedLog');
      }
  
     
      if (data) {
        navigate('/log');
      }
    } catch (error) {
      console.error('An error occurred during authentication:', error);
    }
  };
  return (
    <div className="auth">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3 className="titleH">Регистрация</h3>
        <div className="authInputs">
          <div className="authInputs">
            <label htmlFor="username">Имя пользователя:</label>
            <input
              type="text"
              name="username"
              {...register("username", {
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
