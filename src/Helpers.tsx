
export function fetchPalette(): Promise<string[]> {
    return new Promise((resolve, reject) => { //returnere et promise object med resolve af colorpalette eller reject med error
        var url = "http://colormind.io/api/";
        var data = {
        model: "default",
        input: [], //tomt array til at hente helt randomized farver
      }
      var http = new XMLHttpRequest();
      http.onreadystatechange = function () {
        //tjekker om request er complete/successful
        if (http.readyState == 4) {
            if (http.status == 200) {  
            //parser json response fra api
            var response = JSON.parse(http.responseText);
            var paletteArray = response.result.map((color: number[]) => rgbToHex(color[0], color[1], color[2]))
            //console.log(paletteArray);
            resolve(paletteArray)
            } else {
            reject('error fetching colors ' + http.statusText);
        }
        }
      };
      //åbner connection til api'et
      http.open("POST", url, true);
      //sender api-request med dataen i jason format
      http.send(JSON.stringify(data));
    })
}

/**** RGB -> HEX  ****/
export function rgbToHex(r: number, g: number, b: number): string {
    const toHex = (color: number) => color.toString(16).padStart(2, '0')
    return '#' + toHex(r) + toHex(g) + toHex(b)
}




/* her henter du 5 hex farver
fetchPalette().then(paletteArray => {
    console.log('palette: ' + paletteArray);
}).catch(error => {
    console.error(error)
})
*/
        
/**** HENTER DATA FRA LOCAL STORAGE****/
//henter dataen fra local storage og gemmer det i savedPalletteArray
export function getFromLocalStorage() {
  // Henter variablen fra local storage
  const savedPalletteArray = JSON.parse(localStorage.getItem('hexPalletteArray') || 'null');
  console.log('* savedPalletteArray henter data fra local storage: ', savedPalletteArray[0]);
}

//Funktion til gradient-styling på elementer
export function gradient(colorCode:number) {
  colorCode//IKKE FÆRDIG
}
