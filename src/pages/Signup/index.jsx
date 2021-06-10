import api from "../../services/api";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { Container, Content } from "./styles";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useHistory } from "react-router-dom";

const Signup = () => {
  const schema = yup.object().shape({
    username: yup.string().required("Campo obrigatório!"),
    email: yup.string().email("E-mail inválido").required("Campo obrigatório!"),
    confirmEmail: yup
      .string()
      .oneOf([yup.ref("email")], "E-mails diferentes")
      .required("Campo obrigatório!"),
    password: yup.string().min(8).required("Campo obrigatório!"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas diferentes")
      .required("Campo obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const history = useHistory();

  const onSubmitFunction = ({ username, email, password }) => {
    const user = { username, password, email };
    api
      .post("users/", user)
      .then((_) => history.push("/login"))
      .catch((err) => console.log(err));
  };

  return (
    <Container>
      <Content>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <h1>Cadastro</h1>
          <Input
            register={register}
            name="username"
            label="Nome"
            placeholder="Digite seu nome"
            error={errors.username?.message}
          />
          <Input
            register={register}
            name="email"
            label="Email"
            placeholder="Digite seu email"
            error={errors.email?.message}
          />
          <Input
            register={register}
            name="confirmEmail"
            label="Confirme seu email"
            placeholder="confirme seu e-mail"
            error={errors.confirmEmail?.message}
          />
          <Input
            register={register}
            name="password"
            label="Senha"
            placeholder="Digite sua senha"
            type="password"
            error={errors.password?.message}
          />
          <Input
            register={register}
            type="password"
            label="Confirme sua senha"
            name="confirmPassword"
            placeholder="Confirme sua senha"
            error={errors.confirmPassword?.message}
          />
          <p>
            Já possui conta? <Link to="/login">Faça login aqui!</Link>
          </p>
          <Button type="submit">Cadastrar</Button>
        </form>
      </Content>
    </Container>
  );
};

export default Signup;
