import { InputItem } from "./styles";

const Input = ({ placeholder, error, register, name, ...rest }) => {
  return (
    <InputItem
      {...register(name)}
      isErrored={!!error}
      placeholder={placeholder}
      {...rest}
    ></InputItem>
  );
};

export default Input;
