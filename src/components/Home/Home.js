import React from "react";
import { NavLink } from "react-router-dom";
import Man from "../../assets/icons/man.svg"
import rigth from "../../assets/icons/Rigth.svg"
import s from "../Home/Home.module.css"
const Home = () => {

    return <div className={s.home__container}>
        <div className={s.home__img}>
            <img src={Man} className={s.home__img} alt="man" />
        </div>
        <div className={s.home__content}>
            <h1>Привет, друг!</h1>
            <div>
                <p>
                    Меня зовут Алексей. Я — начинающий fontend-developer.
                    Специально для тебя собрал все свои работы в одном месте. Нажми на кнопку ниже и сам всё увидишь!
                </p>
            </div>
            <div>
                <NavLink className={s.home__btn} to="/Myworks">
                    Смотреть портфолио <img src={rigth} className={s.home__btn_img} alt="rigth" />
                </NavLink>
            </div>
        </div>
    </div>
}
export default Home;