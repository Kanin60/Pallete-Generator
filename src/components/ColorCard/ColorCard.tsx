import { useState } from "react";
import Style from "./colorCard.module.scss";
import { TiClipboard } from "react-icons/ti";

export function ColorCard() {
    const colors = ["#FF0000", "#00FF00", "#0000FF", "#6D7250", "#3E1D18"];
    const [colorHex] = useState<string>(colors[0]);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(colorHex);
        alert(`Copied the color ${colorHex}`);
    };

    return (
        <>
        
            <div className={Style.divContainer}>
                {colors.map((color, index) => (
                    <div key={index} className={Style.colorItem} style={{ backgroundColor: color }}>
                        {color}
                    </div>
                ))}
            </div>
            <div className={Style.buttonContainer}>
                {colorHex}
                <button onClick={copyToClipboard}>Copy <TiClipboard /></button>
            </div>
        </>
    );
}
