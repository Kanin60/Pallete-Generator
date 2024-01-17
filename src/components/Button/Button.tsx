import styles from "./button.module.scss";

interface ButtonProps {
  text: string;
  action?: ()=> void;
  actionType:
    | "generate"
    | "save"
    | "randomPalette"
    | "myPalettes"
    | "setActive"
    | "delete";
}    


function Button({ text, actionType, action }: ButtonProps) {
  const handleClick = () => {
    switch (actionType) {
      case "generate":
        console.log("generate clicked");
        action && action()
        break;

      case "save":
        console.log("save this clicked");
        action && action()
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
        action && action()
        break;
        
      default:
        console.log("default");
    }
  };

  return (
    <button className={styles.button} onClick={handleClick} >
      {text}
    </button>
  );
}

export default Button;
