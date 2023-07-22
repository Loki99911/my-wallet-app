import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TransferForm from "./components/TransferForm/TransferForm";
import { MainComp } from "./components/MainComp/MainComp";
import { HeaderComp } from "./components/HeaderComp/HeaderComp";
import { FooterComp } from "./components/FooterComp/FooterComp";

function App() {

  return (
    <>
      <HeaderComp />
      <MainComp>
        <TransferForm />
      </MainComp>
      <FooterComp />
    </>
  );
}

export default App;
