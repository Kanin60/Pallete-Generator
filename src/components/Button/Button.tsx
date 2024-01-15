import { fetchPalette, rgbToHex } from "../../Helpers";
import styles from "./button.module.scss";
interface ButtonProps {
  text: string;
  actionType:
    | "generate"
    | "save"
    | "randomPalette"
    | "myPalettes"
    | "setActive"
    | "delete";
    
}
/* import { useState } from "react"
import { fetchPalette, rgbToHex } from "../../Helpers"

interface ButtonProps {
    initialColor: string
}

const ColorChangeButton = ({initialColor}: ButtonProps) => {

    const [color, setColor] = useState<string>(initialColor)

    const handleClick = () => {
        fetchPalette((paletteArray) => {
            const randomIndex = Math.floor(Math.random() * paletteArray.length)
            const randomColorRgb = paletteArray[randomIndex]
            const newColorHex = rgbToHex(...randomColorRgb as [number, number, number])
            setColor(newColorHex)
        })
    }
    
    return (
    <button style={{ backgroundColor: color, color: 'white', padding: '10px 20px', cursor: 'pointer'}} onClick={handleClick}>
        change color
    </button>
    )
}
export default ColorChangeButton
*/

function Button({ text, actionType }: ButtonProps) {
  const handleClick = () => {
    switch (actionType) {
      case "generate":
        fetchPalette((paletteArray) => {
            const hexPalette = paletteArray.map((color) => {
                const rgbColor = color as [number, number, number]
                return rgbToHex(...rgbColor)
            })
            console.log("generate clicked", hexPalette);
        })
        
        break;

      case "save":
        console.log("save this clicked");
        break;

      case "randomPalette":
        console.log("random palettes clicked");
        break;

      case "myPalettes":
        console.log("my palette clicked");
        break;

      case "setActive":
        console.log("set active clicked");
        break;

      case "delete":
        console.log("delete clicked");
        break;
        
      default:
        console.log("default");
    }
  };

  return (
    <button className={styles.button} onClick={handleClick}>
      {text}
    </button>
  );
}

export default Button;
