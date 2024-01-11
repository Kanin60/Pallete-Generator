// import { TiClipboard } from "react-icons/ti";
{/* <TiClipboard /> */}


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
        <h1>Her er Startside</h1>
        </>
    )
}
