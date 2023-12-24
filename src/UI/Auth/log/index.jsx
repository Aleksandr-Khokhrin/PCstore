import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuth, selectIsAuth } from "../../../redux/slices/auth";
import { Link, useNavigate } from "react-router-dom";
import "../style.css";
import PrimaryBtn from "../../../elements/btns/primary";
import SecondaryBtn from "../../../elements/btns/secondary";

const Log = (props) => {
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
      password: "",
    },
    mode: "onChange",
  });

  const onSubmit = async (values) => {
    try {
      const data = await dispatch(fetchAuth(values));
  
      if (!data || !data.payload) {
        return alert('failedLog');
      }
  
      if ('access' in data.payload) {
        window.localStorage.setItem('token', data.payload.access);
        props.isAuth(true); // Assuming you want to set isAuth to true
        console.log('acsess')
        navigate('/');
      }
    } catch (error) {
      console.error('An error occurred during authentication:', error);
      // Handle the error accordingly, e.g., display an error message
    }
  };
  

  if (isAuth) {
    props.isAuth(isAuth);
    navigate('/');
  }
  return (
    <div className="auth">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3 className="titleH">Авторизация</h3>
        <div className="authInputs">
          <div className="authInputs">
            <label htmlFor="username">Имя пользователя:</label>
            <input
              type="text"
              name="username"
              {...register("username", { required: "Укажите почту" })}
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
          <PrimaryBtn type="submit" text="Войти" />
          <Link to="/reg">
            <SecondaryBtn
              type="button"
              text="Зарегистрироваться"
              onClick={() => console.log("Регистрация")}
            />
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Log;
