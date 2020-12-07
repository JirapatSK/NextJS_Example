import "../styles/globals.css";
import { ThemeProvider } from "@material-ui/core/styles";
import { useEffect, useState } from "react";
import ThemeConfig from "../components/themeConfig";

function MyApp({ Component, pageProps }) {
  const [sideNav, setSideNav] = useState(true);

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
        sideNav={sideNav}
        setSideNav={(e) => {
          setSideNav(e);
        }}
      />
    </ThemeProvider>
  );
}

export default MyApp;
