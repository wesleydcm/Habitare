import { InputItem } from "./styles";

const Input = ({ placeholder, error, register, name }) => {
  return (
    <InputItem
      {...register(name)}
      isErrored={!!error}
      placeholder={placeholder}
    ></InputItem>
  );
};

export default Input;
