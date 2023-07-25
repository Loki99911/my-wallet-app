import styled from "styled-components";

export const FormLayout = styled.div`
  font-style: normal;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;
  border-radius: 30px;
  background-color: var(--main-opacity);
  box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
  color: var(--main-black);

  @media screen and (min-width: 768px) {
    width: 425px;
    padding: 55px 85px;
  }
  @media screen and (min-width: 1280px) {
    width: 425px;
  }
`;

export const FormText = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.16;
  letter-spacing: 0.04em;
`;

export const Form = styled.form`
  display: flex;
  position: relative;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;

  font-weight: 400;
  font-size: 10px;
  line-height: 1.2;
  letter-spacing: 0.04em;
  color: var(--main-white);
`;

export const LoginLabel = styled.label`
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 1.16;
  text-align: left;
  color: var(--main-white);
  margin-bottom: 12px;
`;

export const LoginInput = styled.input`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.14;
  letter-spacing: 0.04em;
  background-color: var(--third-opacity);
  border: none;
  height: 50px;
  padding: 0 20px;
  border-radius: 16px;
  margin-bottom: 50px;
`;

export const ErrorText = styled.span`
  font-size: 14px;
  display: flex;
  position: absolute;
  top: 100px;
  color: var(--main-error);

  &:last-of-type {
    top: 240px;
  }
`;
