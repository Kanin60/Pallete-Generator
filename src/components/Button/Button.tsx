import styles from "./button.module.scss";
import { getFromLocalStorage } from '../../Helpers'
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


function Button({ text, actionType }: ButtonProps) {
  const handleClick = () => {
    switch (actionType) {
      case "generate":
        console.log("generate clicked");
        break;

      case "save":
        console.log("save this clicked");
          // Kalder funktionen som henter data fra local storage
          getFromLocalStorage()
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
