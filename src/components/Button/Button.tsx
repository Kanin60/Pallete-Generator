import { useState } from "react"
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