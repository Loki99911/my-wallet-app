import MainButton from "../MainButton/MainButton";
import { Spinner } from "../Spinner/Spinner";
import { HeaderBalance, HeaderLogo, HeaderWpapper } from "./HeaderComp.styled";

export const HeaderComp = ({ account, balance, connectToMetaMask, loader }) => {
  const handleConnectWallet = () => {
    connectToMetaMask();
  };
  const sliseAccount = account.slice(0, 5) + "..." + account.slice(-4);
  const sliseBalance = Number(balance).toFixed(3);

  return (
    <HeaderWpapper>
      <HeaderLogo>Ethereum walet</HeaderLogo>
      {account === "" && (
        <MainButton onClick={handleConnectWallet}>
          {loader ? <Spinner/> : <span>Connect wallet</span>}
        </MainButton>
      )}
      {account !== "" && (
        <p>
          <HeaderBalance style={{ marginRight: "10px" }}>
            {sliseBalance}
          </HeaderBalance>
          {sliseAccount}
        </p>
      )}
    </HeaderWpapper>
  );
};
