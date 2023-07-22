import styled from 'styled-components';

const font = `
font-family: Inter;
font-weight: 600;
font-size: 16px;
line-height: 24px;
letter-spacing: -0.4px;
`
const ButtonStyled = styled.button`
  height: 48px;
  /* width: 100%; */
  padding: 12px auto;
  border-radius: 8px;
  cursor: pointer;
  ${font}
  border: 1px solid var(--main-black);
  background-color: var(--main-blue);
  color: var(--main-black);

  &[disabled] {
    cursor: not-allowed;
    border: 1px solid var(--main-white);
    background-color: var(--second-opacity);
    color: var(--main-black);
  }

  &:active:not(:disabled) {
    outline: 2px solid var(--dark-blue);
    background-color: ${(props) =>
      props.buttonType === "primary"
        ? "var(--pressed-blue)"
        : props.buttonType === "warning"
        ? "var(--warning-pressed)"
        : props.buttonType === "secondary"
        ? "var(--light-blue)"
        : "var(--pressed-outlined)"};
  }

  @media screen and (min-width: 769px) {
    height: 56px;
    font-size: 20px;
  }
`;
export default ButtonStyled;