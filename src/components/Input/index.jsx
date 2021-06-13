import { InputItem, ErrorSpan } from "./styles";

const Input = ({ placeholder, error, register, name, ...rest }) => {
  return register ? (
    <>
      {!!error && <ErrorSpan>{error}</ErrorSpan>}
      <InputItem
        {...register(name)}
        isErrored={!!error}
        placeholder={placeholder}
        {...rest}
      ></InputItem>
    </>
  ) : (
    <InputItem placeholder={placeholder} {...rest} />
  );
};

export default Input;
