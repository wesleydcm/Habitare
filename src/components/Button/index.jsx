import { ButtonItem } from "./styles";

const Button = ({ onClickFunc, children, whiteSchema = false, ...rest }) => {
  return (
    <ButtonItem
      type="button"
      whiteSchema={whiteSchema}
      onClick={onClickFunc}
      {...rest}
    >
      {children}
    </ButtonItem>
  );
};

export default Button;
