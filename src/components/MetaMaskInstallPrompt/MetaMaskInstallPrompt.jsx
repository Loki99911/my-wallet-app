import { MetaMaskInstallPromptWrapper } from "./MetaMaskInstallPrompt.styled";

export const MetaMaskInstallPrompt = () => {
  const installLink = "https://metamask.io/download.html";

  return (
    <MetaMaskInstallPromptWrapper>
      <p>
        To use this site, it is recommended to install the MetaMask extension
        for the browser.
        <a
          href={installLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#007BFF", marginLeft: "10px" }}
        >
          Install MetaMask...
        </a>
      </p>
    </MetaMaskInstallPromptWrapper>
  );
};
