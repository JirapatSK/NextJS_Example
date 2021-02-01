import "../styles/globals.scss";
import { ThemeProvider } from "@material-ui/core/styles";
import { useEffect, useState } from "react";
import useLocalStorage from "../components/useLocalStorage";
import { createMuiTheme } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";
import { RecoilRoot } from "recoil";

const env = require(`../environments/${process.env.mode}`);
const ThemeConfig = createMuiTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
  },
});

const initialState = { tabSidenav: true };

function MyApp({ Component, pageProps }) {
  const [userLogin, patchUserLogin] = useLocalStorage("userLogin");
  const [state, patchState] = useState(initialState);

  useEffect(() => {
    console.log("Environments", env);
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <RecoilRoot>
      <ThemeProvider theme={ThemeConfig}>
        <Component
          {...pageProps}
          {...state}
          patchState={(e) => {
            patchState({ ...state, ...e });
          }}
          userLogin={{ ...userLogin }}
          patchUserLogin={(e) => {
            patchUserLogin(e);
          }}
          env={env}
        />
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default MyApp;
