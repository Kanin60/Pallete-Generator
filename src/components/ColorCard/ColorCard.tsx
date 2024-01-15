import { useState } from "react";
import Style from "./colorCard.module.scss";
import { TiClipboard } from "react-icons/ti";

export function ColorCard() {
    const [colorHex] = useState<string>("#FF0000")
    const copyToClipboard = () => {
        navigator.clipboard.writeText(colorHex);
        alert(`Copied the color`);
    };

    return (
        <div>
            <div className={Style.divCard} style={{ backgroundColor: colorHex }}>
            </div>
            <div className={Style.buttonCantainer}>
                <p>
                    {colorHex}
                </p>
                <button onClick={copyToClipboard}>
                    copy 
                <TiClipboard />
                </button>
            </div>
        </div>
    );
}
