import { ethers } from "ethers";
import { useEffect, useState } from "react";
import "./App.css";
import { MetaMaskInstallPrompt } from "./components/MetaMaskInstallPrompt/MetaMaskInstallPrompt";
import detectEthereumProvider from "@metamask/detect-provider";
import "react-toastify/dist/ReactToastify.css";
import { MetaMask } from "./components/MetaMask/MetaMask";

function App() {
  const [showPrompt, setShowPrompt] = useState(false);
  const [provider, setProvider] = useState(false);
  
  useEffect(() => {
    const checkMetaMask = async () => {
      try {
        const detectProvider = await detectEthereumProvider();
        if (!detectProvider) {
          setShowPrompt(true);
          return;
        }
        const newProvider = new ethers.providers.Web3Provider(window.ethereum);
        setProvider(newProvider);
        
      } catch (error) {
        console.log(error);
      }
    };

    checkMetaMask();
  }, []);

  return (
    <>
      {showPrompt ? (
        <MetaMaskInstallPrompt />
      ) : (
        <MetaMask newProvider={provider} />
      )}
    </>
  );
}

export default App;
