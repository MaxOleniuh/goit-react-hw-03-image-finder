import {ButtonStyled} from './Button.styled'
const Button = ({ onClick = null }) => {
  return (
    <ButtonStyled type="button" onClick={onClick}>
     Load more
    </ButtonStyled>
  );
};

export default Button;
