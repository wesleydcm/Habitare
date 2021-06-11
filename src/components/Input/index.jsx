import { InputItem } from "./styles";

const Input = ({ placeholder, error, register, name, ...rest }) => {
  return register ? (
    <InputItem
      {...register(name)}
      isErrored={!!error}
      placeholder={placeholder}
      {...rest}
    ></InputItem>
  ) : (
    <InputItem placeholder={placeholder} {...rest} />
  );
};

export default Input;
