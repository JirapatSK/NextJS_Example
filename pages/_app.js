import "../styles/globals.scss";
import { ThemeProvider } from "@material-ui/core/styles";
import { useEffect, useState } from "react";
import ThemeConfig from "../components/themeConfig";
import useLocalStorage from "../components/localStorage";

const initialState = { tabSidenav: true };

function MyApp({ Component, pageProps }) {
  const [userLogin, patchUserLogin] = useLocalStorage("userLogin");
  const [state, patchState] = useState(initialState);

  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
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
      />
    </ThemeProvider>
  );
}

export default MyApp;
