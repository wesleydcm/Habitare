import { Link, useHistory } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { Container, Content } from "./styles";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { FormContainer } from "./styles";
import { UserContext } from "../../providers/User";
import { useContext } from "react";

function Login() {
  const { userLogin } = useContext(UserContext);
  const schema = yup.object().shape({
    username: yup.string().required("Campo obrigatório!"),
    password: yup.string().required("Campo obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const history = useHistory();

  const onSubmitFunction = (data) => {
    api
      .post("sessions/", data)
      .then((response) => {
        const { access } = response.data;
        userLogin(access);
        return history.push("/dashboard");
      })
      .catch((err) => console.log(JSON.stringify(err)));
  };

  return (
    <Container>
      <Content>
        <FormContainer onSubmit={handleSubmit(onSubmitFunction)}>
          <h1>Login</h1>
          <Input
            register={register}
            name="username"
            label="Username"
            placeholder="Digite seu usuário"
            error={errors.username?.message}
          ></Input>
          <Input
            register={register}
            name="password"
            label="Senha"
            placeholder="Digite sua senha"
            type="password"
            error={errors.password?.message}
          ></Input>
          <p>
            Não possui conta? <Link to="/signup">Cadastre-se aqui!</Link>
          </p>
          <Button type="submit">Entrar</Button>
        </FormContainer>
      </Content>
    </Container>
  );
}

export default Login;
