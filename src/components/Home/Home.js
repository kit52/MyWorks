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
            <h1>Hellow !</h1>
            <div>
                <p>
                    My name is Alexey. I am a junior frontend-developer.
                    I have collected all my works in one place especially for you. Click on the button below and you will see everything for yourself!
                </p>
            </div>
            <div>
                <NavLink className={s.home__btn} to="/Myworks">
                    View portfolio <img src={rigth} className={s.home__btn_img} alt="rigth" />
                </NavLink>
            </div>
        </div>
    </div>
}
export default Home;