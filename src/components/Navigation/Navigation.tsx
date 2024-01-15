import { NavLink } from "react-router-dom";
import style from "./Navigation.module.scss";
import Button from "../Button/Button";
import { Seperator } from "../Seperator/Seperator";


export const Navigation = () => {
  return (
    <nav>
        <div>
            <h1 className={style.headline}>Colorizer Pallette Generator</h1>
      <ul>
        <NavLink to="/">
          <Button text="Random Palette" actionType="randomPalette"></Button>
        </NavLink>
        <NavLink to="/mypallettes">
          <Button text="My Palette" actionType="myPalettes" />
        </NavLink>
      </ul>
        </div>
      
      <Seperator/>
    </nav>
  );
};
