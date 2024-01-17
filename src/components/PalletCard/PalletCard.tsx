import { ColorCard } from "../ColorCard/ColorCard"
import Style from './PalletCard.module.scss'
// Definerer typen af hexProps som en valgfri array af strenge.
interface hexPropsInterface {
    hexProps? : Array<string> // En  array af strenge, der repræsenterer hex-farvekoder.
}
//  PalletCard-komponenten modtager hexProps og opretter farvekort for hver hex-farvekode.
export const PalletCard =({hexProps} : hexPropsInterface)=>{
    
    return(
        <>
 {/* En wrapper-div, der indeholder alle farvekort, med en klasse fra stylesheet.  */}
        <div className={Style.allPalletCard}>
            {
             /* Tjekker om hexProps er defineret og ikke er falsy, før vi mapper over det. */
                hexProps &&
            // Mapper over hexProps-arrayet og opretter et farvekort for hver hex-farvekode.
                hexProps?.map((item : string, index : number) =>{
                    // console.log(item);
                                            
                    // Returnerer et farvekort med den aktuelle hex-farvekode.
                    return(
                        <ColorCard key={index} hexColor={item}/>
                    )
                })
            }
        </div>
        
        </>

    )
}