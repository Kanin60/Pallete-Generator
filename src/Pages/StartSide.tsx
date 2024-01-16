import { useState, useEffect } from "react";
import Button from "../components/Button/Button";
import { PalletCard } from "../components/PalletCard/PalletCard";
import Style from "./StartSide.module.scss";
import {saveToLocalStorage} from '../Helpers'

export const StartSide = () => {

    const [colorArray, setColorArray] = useState<any>([])
    const [hexArray, setHexArray] = useState([])

    
    const getNewColors = () => {
    let url = "http://colormind.io/api/";
    let options = {
        method: "POST",
        body: JSON.stringify({ model: "default" }),
    };
    fetch(url, options)
        .then((res) => res.json())
        .then((colors) => setColorArray(colors))
        .catch((error) => console.error(error));
    };

    useEffect(()=>{
        getNewColors()
    },[])

    useEffect(()=>{
        let hex= colorArray.result?.map((item:any) => {
            return(
                rgbToHex(item[0], item[1], item[2])
            )
        })
        setHexArray(hex)
    },[colorArray])


    // console.log('HER:', colorArray);
    // console.log('HEX COLORS:', hexArray);

    function handleSave() {
        saveToLocalStorage(hexArray)
    }
    
  /**** RGB -> HEX  ****/
    function rgbToHex(r: number, g: number, b: number): string {
        const toHex = (color: number) => color.toString(16).padStart(2, '0')
        return '#' + toHex(r) + toHex(g) + toHex(b)
    }

return(
        <>
            <header className={Style.Headline}>
                <h1> <b>Your new colors</b></h1>
            </header>
            <PalletCard hexProps={hexArray} />
            <div className={Style.startButtonContainer}>
                <Button text='Generate' actionType="generate" action={getNewColors}/>
                <Button text='Save This' actionType="save" action={handleSave} />
            </div>
        </>

        )
}
