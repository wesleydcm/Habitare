import { InputItem } from "./styles";

const Input = ({ placeholder, error, register, name, ...rest }) => {
  return register === true ? (
    <InputItem
      {...register(name)}
      isErrored={!!error}
      placeholder={placeholder}
      {...rest}
    ></InputItem>
  ) : (
    <InputItem placeholder={placeholder} />
  );
};

export default Input;
