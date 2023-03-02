import Img from "../../assets/img/products/pro1-1.png";
import { Rating } from "../Rating";

export const Project = ({ type }) => {
    let fleg = false;
    const goDetail = () => {
        if (!fleg) {
            window.location.href = '/product'
        } else {
            console.log('twer')
            window.location.href = '/cart'
        }
    }
    const goCart = () => {
        fleg = true
    }
    return (
        <></>
    )
}