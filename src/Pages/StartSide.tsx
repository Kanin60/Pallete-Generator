import { PalletCard } from "../components/PalletCard/PalletCard";
import Style from "./StratSide.module.scss";

export const StartSide = () => {

    function saveToLocaleStorage() {
        // Gem variabelen 'minVariabel' i local storage
        const minVariabel = 'Dette er værdien, jeg vil gemme';
        localStorage.setItem('minVariabel', minVariabel);
    
        // Hent variablen fra local storage
        const gemtVariabel = localStorage.getItem('minVariabel');
    
        console.log(gemtVariabel); // Udskriver 'Dette er værdien, jeg vil gemme'
    
    }
    saveToLocaleStorage()


    return(
        <>
        
             <header className={Style.Headline}>
                <h1>Your new colors</h1>
            </header>
        
        
        <PalletCard/>
        </>
    )
}
