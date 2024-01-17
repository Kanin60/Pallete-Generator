import { useState, useEffect } from "react";
import Button from "../components/Button/Button"
import { PalletCard } from "../components/PalletCard/PalletCard"
import Style from "./MyPallettePage.module.scss";
import { useTheme } from '../Layout/ThemeContext';
import { Seperator } from "../components/Seperator/Seperator";

export const MyPallettePage = () => {

    const [arrayPallette, setArrayPallette] = useState([])

    /* 
    function handleArrayPallette:
    Trin for trin:
    Findes der data i LS(if)
    Hvis der findes noget i LS så:
    Hent arrays fra Local Storage
    Gem data i ny state
    Map data fra state
    Ellers
    Vis intet på siden
    */
    function handleArrayPallette() {
        if (localStorage.getItem('hexPalletteArray')) {
            let data = JSON.parse(localStorage.getItem('hexPalletteArray')!)
            setArrayPallette(data)
        } else {
            setArrayPallette([])
        }

    } 


    useEffect(() => {
        handleArrayPallette()
    },[])
    
    // console.log('HER ER DATA FRA MYPALLETPAGE', arrayPallette);


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
          
    /* 
    Funktionen vil modtage index(nummer) fra den button, som hører til den palletCard man vil slette, 
    hente local storage, slette palletCard'et og updatere staten og local storage.
    **STEP BY STEP**
    - index sendes med button via en arraow function i action?
    - function modtager index
    delete-function():
    - array fra local storage hentes og gemmes i variable
    - array metoden .splice(index, antal) bruges på variable
    - variablen gemmes i staten(setArrayPallette)
    - variablen gemmes i local storage
    */
function handelDelete(index:number) {
    let savedArrays = JSON.parse(localStorage.getItem('hexPalletteArray')!)
    savedArrays.splice(index, 1)
    setArrayPallette(savedArrays)
    localStorage.setItem('hexPalletteArray', JSON.stringify(savedArrays))
}

    return (
        <><div className={Style.myPallettePage}>
            {
                arrayPallette && arrayPallette.map((item: string[], index: number) => {
                    return (
                        <>
                            <div className={Style.PalletCardStyle}>
                                <PalletCard key={index} hexProps={item} />
                                <div className={Style.buttonStyle}>
                                    <Button text='Set active' actionType="setActive" action={() => setActive(item)}/>
                                    <Button text='Delete' actionType="delete"action={()=>handelDelete(index)} />
                                </div>
                            </div>
                            <div className={Style.SeperatorCantainer}>
                                <div className={Style.Seperator}>
                                    <Seperator />
                                </div>
                            </div>
                        </>

                    )
                })
            }
            <PalletCard />
          </div>

        </>
    )
}