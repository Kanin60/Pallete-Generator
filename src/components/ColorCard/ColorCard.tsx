import Style from "./colorCard.module.scss";
import { TiClipboard } from "react-icons/ti";

interface colorCardInterface {
    hexColor : string
}

export function ColorCard({hexColor}: colorCardInterface) {

    const copyToClipboard = () => {
        navigator.clipboard.writeText(hexColor);
        alert(`Copied the color`);
    };

    return (
        <div>
            <div className={Style.divCard} style={{ backgroundColor: hexColor }}>
            </div>
            <div className={Style.buttonCantainer}>
                <p>
                    {hexColor}
                </p>
                <button className={Style.button} onClick={copyToClipboard}>
                <TiClipboard />
                </button>
            </div>
        </div>
    );
}
