import Button from "../components/Button/Button"
import { PalletCard } from "../components/PalletCard/PalletCard"
import Style from "./MyPallettePage.module.scss";




export const MyPallettePage = () => {

    return(
        <>
        <div className={Style.buttonStyle}>
        <Button text='Set active' actionType="setActive"/>
        <Button text='Delete' actionType="delete"/>
        </div>
        <PalletCard/>
        </>
    )
}