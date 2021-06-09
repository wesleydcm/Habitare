import { Link, useHistory } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { Container, Content } from "./styles";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { FormContainer } from "./styles";

function Login() {
  const schema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Campo obrigatório!"),
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
    api.post("sessions/", data).then((response) => {
      const { access } = response.data;

      localStorage.setItem("@Habitare:token", JSON.stringify(access));

      return history.push("/dashboard");
    });
  };

  return (
    <Container>
      <Content>
        <FormContainer onSubmit={handleSubmit(onSubmitFunction)}>
          <h1>Login</h1>
          <Input
            register={register}
            name="email"
            label="Email"
            placeholder="Digite seu email"
            error={errors.email?.message}
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
