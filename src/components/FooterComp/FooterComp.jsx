import { FaGithub } from "react-icons/fa";
import { FooterLink, FooterWrapper } from "./FooterComp.styled";
export const FooterComp = () => {
  return (
    <>
      <FooterWrapper>
        <FooterLink
          href="https://github.com/Loki99911/my-wallet-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub style={{ fontSize: "36px"}} />
        </FooterLink>
      </FooterWrapper>
    </>
  );
};
