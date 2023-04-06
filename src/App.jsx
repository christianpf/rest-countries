import { useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Nav from "./components/Nav";

import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Country from "./pages/Country";

import {
  DarkModeContext,
  DarkModeContextProvider,
} from "./context/useDarkModeContext";
import Layout from "./layout/Layout";

function App() {
  return (
    <div className="App">
      <DarkModeContextProvider>
        <Layout>
        <Nav/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/country/:name" element={<Country/>}/>
          </Routes>
        </Layout>
      </DarkModeContextProvider>
    </div>
  );
}

export default App;
