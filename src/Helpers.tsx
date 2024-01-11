

//// fetch data fra api
export function fetchColors(callback: (colors: number[][]) => void): void {
  //definerer Colormind api endpoint
    var url = "http://colormind.io/api/";
    //definerer dataen der bliver sendt i api-request
    var data = {
    model: "default",
    input: [], //tomt array til at hente helt randomized farver
  };

  var http = new XMLHttpRequest();

  //definerer en callback function til at håndtere response fra api
  http.onreadystatechange = function () {
    //tjekker om request er complete/successful
    if (http.readyState == 4) {
        if (http.status == 200) {
        //parser json response fra api
        var response = JSON.parse(http.responseText);
        //udtrækker color palette fra response
        var palette = response.result
        callback(palette);
        console.log(palette);
        } else {
        console.error('error fetching colors', http.statusText);
    }
    }
  };
  //åbner connection til api'et
  http.open("POST", url, true);
  //sender api-request med dataen i jason format
  http.send(JSON.stringify(data));
}








/**** RGB -> HEX testing ****/

// const componentToHex = (c) => {
//     const hex = c.toString(16);
//     return hex.length == 1 ? "0" + hex : hex;
//   }

//   const rgbToHex = (r, g, b) => {
//     return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
//   }

//   console.log(rgbToHex(255, 51, 255));
