import styled from 'styled-components';

const ButtonStyled = styled.button`
  height: 36px;
  padding: 12px auto;
  border-radius: 8px;
  cursor: pointer;
  border: 1px solid var(--main-black);
  background-color: var(--main-blue);
  color: var(--main-black);
  transition: background-color 350ms linear;

  &[disabled] {
    cursor: not-allowed;
    border: 1px solid var(--main-white);
    background-color: var(--second-opacity);
    color: var(--main-black);
  }

  &:hover {
    background-color: var(--second-blue);
  }
  &:hover:disabled {
    background-color: var(--main-error);
  }
  @media screen and (min-width: 769px) {
    height: 56px;
    font-size: 20px;
  }
`;
export default ButtonStyled;