import { useState } from "react";
import "./App.css";
import TransferForm from "./components/TransferForm/TransferForm";
import { MainComp } from "./components/MainComp/MainComp";
import { HeaderComp } from "./components/HeaderComp/HeaderComp";
import { FooterComp } from "./components/FooterComp/FooterComp";
import { ethers } from "ethers";
const provider = new ethers.providers.Web3Provider(window.ethereum);

function App() {
  const [account, setAccount] = useState("");
  const [balance, setBalance] = useState(0);
  const [signer, setSigner] = useState(null);

  const connectToMetaMask = async () => {
    const signerCreated = provider.getSigner();
    setSigner(signerCreated);
    await provider.send("eth_requestAccounts", []);

    const myAddress = await signerCreated.getAddress();
    setAccount(myAddress);

    const myBalance = await signerCreated.getBalance();
    setBalance(ethers.utils.formatEther(myBalance));
  };

  const sendEthereum = async ({ address: adressTo, quantity: value }) => {
      try {
      const tx = await signer.sendTransaction({
        to: adressTo,
        value: ethers.utils.parseEther(value),
      });
    } catch (error) {
    } 
  };

  return (
    <>
      <HeaderComp
        account={account}
        balance={balance}
        connectToMetaMask={connectToMetaMask}
      />
      <MainComp>
        <TransferForm sendEthereum={sendEthereum} account={account} />
      </MainComp>
      <FooterComp />
    </>
  );
}

export default App;
