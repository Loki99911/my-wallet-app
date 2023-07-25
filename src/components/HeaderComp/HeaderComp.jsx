import MainButton from "../MainButton/MainButton";
import { HeaderLogo, HeaderWpapper } from "./HeaderComp.styled";

export const HeaderComp = ({ account, balance, connectToMetaMask }) => {
  const handleConnectWallet = () => {
    connectToMetaMask();
  };
const sliseAccount =
  account.slice(0, 5) +
  "..." +
    account.slice(-4);
  const sliseBalance = Number(balance).toFixed(3);

  return (
    <HeaderWpapper>
      <HeaderLogo>Ethereum walet</HeaderLogo>
      {account === "" && (
        <MainButton onClick={handleConnectWallet}>Connect wallet</MainButton>
      )}
      {account !== "" && (
        <p>
          <span style={{ marginRight: "10px" }}>{sliseBalance}</span>
          {sliseAccount}
        </p>
      )}
    </HeaderWpapper>
  );
};

// const handleConnectWallet = () => {
//   const connectToMetaMask = async () => {
//     if (window.ethereum) {
//       try {
//         const accounts = await window.ethereum.request({
//           method: "eth_requestAccounts",
//         });
//         setAccount(accounts[0]);
//       } catch (error) {
//         console.log("ERROR You have no accounts on Metamask!");
//       }
//     }
//   };
//   connectToMetaMask();
// };
