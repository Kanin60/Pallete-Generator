import { useState, useEffect } from "react";
import Button from "../components/Button/Button"
import { PalletCard } from "../components/PalletCard/PalletCard"
import Style from "./MyPallettePage.module.scss";
import { useTheme } from '../Layout/ThemeContext';


/* 
Findes der data i LS(if)
Hvis der findes noget i LS så:
Hent arrays fra Local Storage
Gem data i ny state
Map data fra state
Ellers
Vis intet på siden
*/
export const MyPallettePage = () => {
    
    const [arrayPallette, setArrayPallette] = useState([])
    
    function handleArrayPallette() {
        if(localStorage.getItem('hexPalletteArray')){
            let data = JSON.parse(localStorage.getItem('hexPalletteArray')!)
            setArrayPallette(data)
        }else{
            setArrayPallette([])
    }
    } 

    useEffect(()=>{
        handleArrayPallette()
    },[])

    console.log('HER ER DATA FRA MYPALLETPAGE', arrayPallette);

    /**** set active ****/
    const {setMyPaletteTheme} = useTheme()

    const setActive = (palette: string[]) => {
        setMyPaletteTheme(palette)
        localStorage.setItem('activePalette', JSON.stringify(palette))
    }
    useEffect(() => {
        const savedPalette = JSON.parse(localStorage.getItem('activePalette') || 'null')
        if (savedPalette) {
            setMyPaletteTheme(savedPalette)
        }
    }, [setMyPaletteTheme])

    return(
        <><div className={Style.myPallettePage}>
            {
                arrayPallette && arrayPallette.map((item : string[], index : number)=>{
                    return(
                    <>
                        <PalletCard key={index} hexProps={item}/>
                        <div className={Style.buttonStyle}>
                            <Button text='Set active' actionType="setActive" action={() => setActive(item)}/>
                            <Button text='Delete' actionType="delete"/>
                        </div>
                    </>
                    )
                })
            }
            <PalletCard/>
        </div>
            
        </>
    )
}