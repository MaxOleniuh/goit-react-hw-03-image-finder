import {ButtonStyled} from './Button.styled'
const Button = ({ onClick = null }) => {
  return (
    <ButtonStyled type="button" onClick={onClick}>
      More
    </ButtonStyled>
  );
};

export default Button;
