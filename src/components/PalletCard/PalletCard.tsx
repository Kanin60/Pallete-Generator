import { ColorCard } from "../ColorCard/ColorCard"
import Style from './PalletCard.module.scss'

interface hexPropsInterface {
    hexProps? : Array<string>
}

export const PalletCard =({hexProps} : hexPropsInterface)=>{
    

    return(
        <>
        <div className={Style.allPalletCard}>
            {
                hexProps &&
                hexProps?.map((item : string, index : number) =>{
                    console.log(item);
                    
                    return(
                        <ColorCard key={index} hexColor={item}/>
                    )
                })
            }
        </div>
        
        </>

    )
}