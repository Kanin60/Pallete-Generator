import { ColorCard } from "../ColorCard/ColorCard"
import Style from './PalletCard.module.scss'


export const PalletCard =()=>{
    return(
        <>
        <div className={Style.allPalletCard}>
        <ColorCard/>
        <ColorCard/>
        <ColorCard/>
        <ColorCard/>
        <ColorCard/>
        </div>
        
        </>

    )
}