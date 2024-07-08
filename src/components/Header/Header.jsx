import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { DarkmodeIcon, HeaderWrapper, LightmodeIcon } from "./Header.styled";
import { ReactComponent as Logo } from "../../assets/tic-tac-toe.svg";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();
  return (
    <HeaderWrapper>
      <Logo className="logo" onclick={() => navigate("/")} />
      <span onClick={() => toggleTheme()}>
        {theme === "light" ? <LightmodeIcon /> : <DarkmodeIcon />}
      </span>

      {/* <button onClick={() => toggleTheme()}>Toggle Theme</button> */}
    </HeaderWrapper>
  );
};

export default Header;
