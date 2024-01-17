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
export function saveToLocalStorage(hexArray: string[][]) {
  /*
  findes der noget i LS (if)
  hvis der findes noget i ls
  hent LS i variable
  push tilføj til variable
  gem igen i LS
  */
  if(localStorage.getItem('hexPalletteArray')){
    let savedArrays = JSON.parse(localStorage.getItem('hexPalletteArray')!)
    savedArrays?.push(hexArray)
    localStorage.setItem('hexPalletteArray', JSON.stringify(savedArrays))
  } else{
    localStorage.setItem('hexPalletteArray', JSON.stringify([hexArray]))
    // console.log('Set to LS');
  }
}

  