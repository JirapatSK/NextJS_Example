import "../styles/globals.scss";
import { ThemeProvider } from "@material-ui/core/styles";
import { useEffect, useState } from "react";
import ThemeConfig from "../components/themeConfig";
import useLocalStorage from "../components/localStorage";

const initialState = {
  sideNav: true,
};

function MyApp({ Component, pageProps }) {
  const [userLogin, setUserLogin] = useLocalStorage("userLogin");
  const [state, setState] = useState(initialState);

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
        setState={(e) => {
          setState({ ...state, ...e });
        }}
        userLogin={{ ...userLogin }}
        setUserLogin={(e) => {
          setUserLogin(e);
        }}
      />
    </ThemeProvider>
  );
}

export default MyApp;
