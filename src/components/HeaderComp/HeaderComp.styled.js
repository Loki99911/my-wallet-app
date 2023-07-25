import styled from "styled-components";
export const HeaderWpapper = styled.header`
  display: flex;

  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  gap: 30px;
  padding: 10px 20px;
  background-color: rgba(255, 255, 255, 0.2);
  @media screen and (max-width: 320px) {
    flex-direction: column;
    justify-content: center;
  }
`;
export const HeaderLogo = styled.h1`
  color: var(--main-blue);
`;
