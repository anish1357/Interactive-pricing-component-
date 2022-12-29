import { ThemeProvider } from "@emotion/react";
import { createTheme, CssBaseline, Switch ,IconButton} from "@mui/material";
import { useState } from "react";
import "./App.css";
import InteractivePricing from "./pages/pricePage";
import Pricepage from "./pages/pricePage";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness4Icon from "@mui/icons-material/Brightness4";
function App() {
  const [mode, setMode] = useState("light");

  const theme = createTheme({
    palette: {
      mode: mode ,
    },

  });
  return (
    <ThemeProvider theme={theme}>
      <IconButton
        sx={{ ml: 1 , position: "absolute" ,zIndex:"1"}}
        onClick={() => {
          if (mode === "light") setMode("dark");
          else setMode("light");
        }}
        color="inherit"
      >
        {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
      <CssBaseline />
      <InteractivePricing mode={mode} />
    </ThemeProvider>
  );
}

export default App;
