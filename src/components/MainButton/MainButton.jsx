import PropTypes from "prop-types";
import ButtonStyled from "./MainButton.styled";

function MainButton({ children, ...props }) {
  console.log(props);
  return (
    <ButtonStyled {...props}>
      {children}
    </ButtonStyled>
  );
}

MainButton.propTypes = {
  children: PropTypes.string,
};

export default MainButton;
