import { useState } from "react";
import TransferForm from "../TransferForm/TransferForm";
import { MainComp } from "../MainComp/MainComp";
import { HeaderComp } from "../HeaderComp/HeaderComp";
import { FooterComp } from "../FooterComp/FooterComp";
import { ethers } from "ethers";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



export const MetaMask = ({ newProvider }) => {
   const [account, setAccount] = useState("");
  const [balance, setBalance] = useState(0);
  const [signer, setSigner] = useState(null);
  const [logInSpinner, setLogInSpinner] = useState(false);
  const [reqSpinner, setReqSpinner] = useState(false);

  const connectToMetaMask = async () => {
    try {
      setLogInSpinner(true);
      const signerCreated = newProvider.getSigner();
      setSigner(signerCreated);
      await newProvider.send("eth_requestAccounts", []);

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
};

