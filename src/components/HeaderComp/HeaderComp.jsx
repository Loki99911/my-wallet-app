import MainButton from "../MainButton/MainButton"
import { HeaderLogo, HeaderWpapper } from "./HeaderComp.styled"

export const HeaderComp = () => {
    return (
      <HeaderWpapper>
        <HeaderLogo>Ethereum walet</HeaderLogo>
        <MainButton>Connect wallet</MainButton>
      </HeaderWpapper>
    );
}