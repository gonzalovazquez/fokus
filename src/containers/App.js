import React from "react";
import { Menu } from "./menu/Menu";
import Dashboard from "./dashboard";
import { TaskBoard } from "./taskBoard/TaskBoard";
import styled from "styled-components";
import { isMobile } from "react-device-detect";
import { MobileView } from "./mobileView";
import Settings from "./settings";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./../helpers/themeStyles";
import { useSelector } from "react-redux";
import Notes from "./notes";

const AppContainer = styled.div`
    display: flex;
    height: 100%;
`;

function App() {
    const isDarkTheme = useSelector((s) => s.settings.darkTheme);

    if (!isMobile)
        return (
            <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
                <React.Fragment>
                    <GlobalStyles />
                    <AppContainer>
                        <Router>
                            <Menu />
                            <Routes>
                                <Route index path="/" element={<React.Fragment> <Dashboard /> <TaskBoard /> </React.Fragment>} />
                                <Route path="/notes" element={<Notes /> } />
                                <Route path="/settings" element={<Settings /> } />
                            </Routes>
                        </Router>
                    </AppContainer>
                </React.Fragment>
            </ThemeProvider>
        );
    else {
        return (
            <AppContainer>
                <MobileView />
            </AppContainer>
        );
    }
}

export default App;
