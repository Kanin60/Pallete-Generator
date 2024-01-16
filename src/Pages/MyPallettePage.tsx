import Button from "../components/Button/Button"
import { PalletCard } from "../components/PalletCard/PalletCard"


export const MyPallettePage = () => {

    return(
        <>
        <h1>Her er MypallettePage</h1>
        <Button text='set active' actionType="setActive"/>
        <Button text='delete' actionType="delete"/>
        <PalletCard/>
        </>
    )
}