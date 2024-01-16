import { useState, useEffect } from "react";
import Button from "../components/Button/Button"
import { PalletCard } from "../components/PalletCard/PalletCard"
import Style from "./MyPallettePage.module.scss";


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

    return(
        <>
            {
                arrayPallette && arrayPallette.map((item : string[], index : number)=>{
                    return(
                    <>
                        <PalletCard key={index} hexProps={item}/>
                        <div className={Style.buttonStyle}>
                            <Button text='Set active' actionType="setActive"/>
                            <Button text='Delete' actionType="delete"/>
                        </div>
                    </>
                    )
                })
            }
            <PalletCard/>
        </>
    )
}