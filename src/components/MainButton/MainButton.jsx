import ButtonStyled from "./MainButton.styled";

function MainButton({ children, ...props }) {
  return (
    <ButtonStyled {...props}>
      {children}
    </ButtonStyled>
  );
}


export default MainButton;
