import { useContext } from "react";
import Router from "./Router";
import { GlobalStyles } from "./styles/Global.styled";
import { ThemeContextProvider } from "./contexts/ThemeContext"; // Corrected import
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/theme";
import { ThemeContext } from "./contexts/ThemeContext";
import MusicPlayer from "./components/MusicPlayer/MusicPlayer";

function App() {
  const { theme } = useContext(ThemeContext);
  const mode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeContextProvider> {/* Corrected usage */}
      <ThemeProvider theme={mode}>
        <GlobalStyles />
        <Router />
        <MusicPlayer />
      </ThemeProvider>
    </ThemeContextProvider>
  );
}

export default App;