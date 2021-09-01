import sntwk from "../../assets/img/sntwk.png"
import diplom from "../../assets/img/diplom.png"
import crossing from "../../assets/img/crossing.png"
import porten from "../../assets/img/porten.png"
import s from "../Myworks/Myworks.module.css"
import rigth from "../../assets/icons/Rigth.svg"
import telegramm from "../../assets/icons/telegramm-black.svg"
import Whatsapp from "../../assets/icons/whatsapp-black.svg"
import mail from "../../assets/icons/mail-black.svg"
import phone from "../../assets/icons/phone-call.svg"
const Item = (props) => {
    let arr = props.stack.map((item) =>
        <li key={`${item}` + Math.random()}>{item}</li>
    )
    return <div className={s.item}>
        <div>
            <div className={s.item_container}>
                <img className={s.item__img} src={props.img} alt="images of project" />
            </div>
            <div className={s.item__list}>
                <ul>
                    <li>Stack:</li>
                    {arr}
                </ul>
            </div>
        </div>
        <div className={s.item__links}>
            <div className={s.item__code}>
                Code <a className={s.item__codeLink} rel="noreferrer" href={props.code} target="_blank">HERE</a>
            </div>

            <a rel="noreferrer" className={s.item__btn} target="_blank" href={props.link}>
                on Github pages <img src={rigth} className={s.item__btn_img} alt="rigth" />
            </a>
        </div>
    </div>
}

const Contact = (props) => {
    return <div className={s.contact__item}>
        <a rel="noreferrer" target="_blank" href={props.link}><img src={props.img} className={s.contact__img} alt="icon" /></a>
    </div>
}
const Myworks = () => {
    return <div className={s.container}>
        <div className={s.contact__content}>
            <Contact link={"https://t.me/AlexvapR"} img={telegramm} />
            <Contact link={"https://wa.me/+79520015786"} img={Whatsapp} />
            <Contact link={"mailto:lesha.sinitsin@mail.ru"} img={mail} />
            <Contact link={"tel:+79520015786"} img={phone} />
        </div>
        <div className={s.content}>
            <Item img={sntwk}
                link={"https://test3-54cf0.web.app"}
                code={"https://github.com/kit52/sntwk"}
                stack={["- React", "- Redux", "- Redux-Thunk", "- Firebase", "- Firestore", "- JavaScript", "- Html", "- CSS"]} />
            <Item img={diplom}
                code={"https://github.com/kit52/DIplom"}
                link={"https://kit52.github.io/DIplom/"}
                stack={["- React", "- JavaScript", "- Html", "- CSS"]} />
            <Item img={crossing}
                code={"https://github.com/kit52/Crossings"}
                link={"https://kit52.github.io/Crossings/"}
                stack={["- JavaScript", "- SCSS", "- Html", "- CSS"]} />
            <Item img={porten}
                link={"https://kit52.github.io/scale1/"}
                code={"https://github.com/kit52/scale1"}
                stack={["- JavaScript", "- SCSS", "- Html", "- CSS"]} />
        </div>
    </div>
}
export default Myworks