import styled from "styled-components";

export const FooterWrapper = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--main-opacity);
  padding: 10px;
`;

export const FooterLink = styled.a`
  color: #ffffff;
  text-decoration: none;
  transition: color 350ms linear;
  &:hover {
    color: var(--main-blue);
  }
`;
