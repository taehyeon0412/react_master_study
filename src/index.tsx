import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./App";
import { darkTheme, lightTheme } from "./theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

/* Theme를 사용하려면 index에 ThemeProvider를 import하고 
ThemeProvider를 사용할 곳에 감싸주고 theme라는 proimport { lightTheme } from './theme';
p를 사용해준다
*/
