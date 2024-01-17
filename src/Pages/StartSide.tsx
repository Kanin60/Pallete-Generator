import { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from "../components/Button/Button";
import { PalletCard } from "../components/PalletCard/PalletCard";
import Style from "./StartSide.module.scss";
import {saveToLocalStorage} from '../Helpers'
import { useTheme } from "../Layout/ThemeContext";

export const StartSide = () => {
    //state som gemmer på farvearrayet fra fetch
    const [colorArray, setColorArray] = useState<any>([])
    //state som gemmer på farvearrayet efter det er lavet om fra RGB til HEX
    const [hexArray, setHexArray] = useState([])

    //Fetcher farve arrayet fra apiet
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

    // kalder funktionen getNewColors, som fetcher farvearrayet
    useEffect(()=>{
        getNewColors()
    },[])

    //kalder funktionen rgbToHex, som ændre farverne fra RGB til HEX, retunere dem og gemmer dem i staten hexArray, hver gang staten colorArray ændres
    useEffect(()=>{
        let hex= colorArray.result?.map((item:any) => {
            return(
                rgbToHex(item[0], item[1], item[2])
            )
        })
        setHexArray(hex)
    },[colorArray])    

    //kalder funktionen saveToLocalStorage, som sender hexArray med som props, og kalder funktionen notify
    function handleSave() {
        saveToLocalStorage(hexArray)
        notify() //kalder notify funktionen
    }
    
  /**** RGB -> HEX  ****/
    function rgbToHex(r: number, g: number, b: number): string {
        const toHex = (color: number) => color.toString(16).padStart(2, '0')
        return '#' + toHex(r) + toHex(g) + toHex(b)
    }


    /**** change elements (gradients) ****/
    // const generateGradient = (colors: string[], direction: string = 'to right') => {
    //     return `linear-gradient(${direction}, ${colors.join(', ')})`
    // }
    // useEffect(() => {
    //     if (hexArray?.length > 0) {
    //         const gradient = generateGradient(hexArray)
    //         document.documentElement.style.setProperty('--newGradient', gradient)
    //     }
    // }, [hexArray])

    const {setRandomPaletteTheme} = useTheme()

    useEffect(() => {
        if (hexArray?.length > 0) {
            setRandomPaletteTheme(hexArray)
        }
    },[hexArray])

    //Toast fra react-toastify
    const notify = () => toast("The color palette has been saved !"); //sender toast med besked


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
            <ToastContainer 
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable={false}
                pauseOnHover={false}
                theme="dark"
            />
        </>
        )
}
