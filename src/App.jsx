import { useState } from "react";
import "./App.css";
import TransferForm from "./components/TransferForm/TransferForm";
import { MainComp } from "./components/MainComp/MainComp";
import { HeaderComp } from "./components/HeaderComp/HeaderComp";
import { FooterComp } from "./components/FooterComp/FooterComp";
import { ethers } from "ethers";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const provider = new ethers.providers.Web3Provider(window.ethereum);

function App() {
  const [account, setAccount] = useState("");
  const [balance, setBalance] = useState(0);
  const [signer, setSigner] = useState(null);
  const [logInSpinner, setLogInSpinner] = useState(false);
  const [reqSpinner, setReqSpinner] = useState(false);

  const connectToMetaMask = async () => {
    try {
      setLogInSpinner(true);
      const signerCreated = provider.getSigner();
      setSigner(signerCreated);
      await provider.send("eth_requestAccounts", []);

      const myAddress = await signerCreated.getAddress();
      setAccount(myAddress);

      const myBalance = await signerCreated.getBalance();
      setBalance(ethers.utils.formatEther(myBalance));
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLogInSpinner(false);
    }
  };

  const sendEthereum = async ({ address: adressTo, quantity: value }) => {
    try {
      setReqSpinner(true);
      const tx = await signer.sendTransaction({
        to: adressTo,
        value: ethers.utils.parseEther(value),
      });
    } catch (error) {
      toast.error(error.message);
    } finally {
      setReqSpinner(false);
    }
  };

  return (
    <>
      <HeaderComp
        account={account}
        balance={balance}
        connectToMetaMask={connectToMetaMask}
        loader={logInSpinner}
      />
      <MainComp>
        <TransferForm
          sendEthereum={sendEthereum}
          account={account}
          loader={reqSpinner}
        />
      </MainComp>
      <FooterComp />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

export default App;
