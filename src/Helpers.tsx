/**** HENTER DATA FRA LOCAL STORAGE****/
//henter dataen fra local storage og gemmer det i savedPalletteArray
export function getFromLocalStorage() {
  // Henter variablen fra local storage
  const savedPalletteArray = JSON.parse(localStorage.getItem('hexPalletteArray') || 'null');
  return savedPalletteArray
    console.log('* savedPalletteArray henter data fra local storage: ', savedPalletteArray[0]);
}

//Funktion til gradient-styling på elementer
export function gradient(colorCode:number) {
  colorCode//IKKE FÆRDIG
}



    //Gemmer dataen fra arrayFromAPI i local storage
    export function saveToLocalStorage(tal: string[]) {
      // Gemmer variabelen i local storage
      const hexPalletteArray = JSON.stringify(tal);
      localStorage.setItem('hexPalletteArray', hexPalletteArray);
      console.log('* hexPalletteArray gemmes i local storage: ', hexPalletteArray);
  }