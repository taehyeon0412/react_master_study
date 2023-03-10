import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import App from "./App";
import { darkTheme } from "./theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <ThemeProvider theme={darkTheme}>
        <App />
      </ThemeProvider>
    </RecoilRoot>
  </React.StrictMode>
);

/* Theme를 사용하려면 index에 ThemeProvider를 import하고 
ThemeProvider를 사용할 곳에 감싸주고 theme라는 import { lightTheme, darkTheme } from './theme';
p를 사용해준다
*/
