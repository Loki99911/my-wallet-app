import { useEffect, useState } from "react";
import "./App.css";
import { MetaMaskInstallPrompt } from "./components/MetaMaskInstallPrompt/MetaMaskInstallPrompt";
import detectEthereumProvider from "@metamask/detect-provider";
import "react-toastify/dist/ReactToastify.css";
import { MetaMask } from "./components/MetaMask/MetaMask";

function App() {
  const [showPrompt, setShowPrompt] = useState(false);
  let provider;

  useEffect(() => {
    const checkMetaMask = async () => {
      try {
        const detectProvider = await detectEthereumProvider();
        if (!detectProvider) {
          setShowPrompt(true);
          return;
        }
        provider = new ethers.providers.Web3Provider(window.ethereum);
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
        <MetaMask provider={provider} />
      )}
    </>
  );
}

export default App;
