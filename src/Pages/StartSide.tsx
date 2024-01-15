import { getFromLocalStorage } from "../Helpers"
import { fetchColors } from "../Helpers";
import { ColorCard } from "../components/ColorCard/ColorCard";
import Button from "../components/Button/Button";
import { PalletCard } from "../components/PalletCard/PalletCard";
import Style from "./StratSide.module.scss";
import { Seperator } from "../components/Seperator/Seperator";

export const StartSide = () => {

    //Interface til arrayFromAPI, som sætter typen af data fra API'et
    interface arrayFromAPIProps {
        result: number[][];
    }

    //Dummy data - data fra API'et skal gemmes i denne variabel
    const arrayFromAPI: arrayFromAPIProps[] = [
        { result: [[214, 78, 69], [247, 242, 163], [201, 216, 147], [57, 141, 112], [62, 80, 64]] }
    ];

    //Gemmer dataen fra arrayFromAPI i local storage
    function saveToLocalStorage(tal: arrayFromAPIProps[]) {
        // Gemmer variabelen i local storage
        const hexPalletteArray = JSON.stringify(tal);
        localStorage.setItem('hexPalletteArray', hexPalletteArray);
        console.log('* hexPalletteArray gemmes i local storage: ', hexPalletteArray);
    }
    

    // Kalder funktionen som gemmer data arrayFromAPI i local storage
    saveToLocalStorage(arrayFromAPI);
   

return(
        <>
            <header className={Style.Headline}>
                <h1>Your new colors</h1>
            </header>
            <PalletCard />
            <Button text='generate' actionType="generate"/>
        <Button text='save this' actionType="save"/>
        </>

        )
}
