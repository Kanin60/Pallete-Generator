
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
    //henter dataen fra local storage og gemmer det i savedPalletteArray
    function GetFromLocalStorage(){
        // Henter variablen fra local storage
        const savedPalletteArray = JSON.parse(localStorage.getItem('hexPalletteArray') || 'null');
        console.log('* savedPalletteArray henter data fra local storage: ', savedPalletteArray);
    }

    // Kalder funktionerne
    saveToLocalStorage(arrayFromAPI);
    GetFromLocalStorage()
    
    return (
        <>
            <h1>Her er Startside</h1>
        </>
    );
};