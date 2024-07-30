import { CssBaseline,  ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import classNames from "classnames/bind";
import styles from "./App.css"; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Fragment } from "react";
import { publicRoutes } from "./router/router";
import GlobalStyle from "./styles/GlobalStyle";
import { DefaultLayout } from "./layouts";




const cx = classNames.bind(styles);

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <GlobalStyle>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        
        <Router>
          <div className={cx("App")}>
              <Routes>
                {publicRoutes.map((route, index) => {
                  let Layout = DefaultLayout;
                  if (route.layout) {
                    Layout = route.layout;
                  } else if (route.layout === null){
                    Layout = Fragment;
                  }

                  const Page = route.component;

                  return (
                    <Route
                      key={index}
                      path={route.path}
                      element={
                        <Layout>
                          <Page />
                        </Layout>
                      }
                    />
                  );
                })}
              </Routes>
           
          </div>
        </Router>
       </ThemeProvider>
      </GlobalStyle>
     </ColorModeContext.Provider>
  );
}

export default App;