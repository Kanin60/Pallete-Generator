import { NavLink } from "react-router-dom";
import style from "./Navigation.module.scss";
import Button from "../Button/Button";

export const Navigation = () => {
  return (
    <nav>
      <h1 className={style.headline}>Colorizer Pallette Generator</h1>
      <ul>
        <NavLink to="/">
          <Button text="Random Palette" actionType="randomPalette" />
        </NavLink>
        <NavLink to="/mypallettes">
          <Button text="My Palette" actionType="myPalettes" />
        </NavLink>
      </ul>
    </nav>
  );
};
