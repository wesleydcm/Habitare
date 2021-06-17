import api from "../../services/api";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { Background, Container, Content } from "./styles";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, Redirect, useHistory } from "react-router-dom";
import { useContext, useEffect, useRef } from "react";
import gsap from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";
import { UserContext } from "../../providers/User";
import { notification } from "antd";
import { FaGrinAlt, FaTimes } from "react-icons/fa";

const Signup = () => {
  const { authenticated } = useContext(UserContext);
  const schema = yup.object().shape({
    username: yup
      .string()
      .required("Todos os campos são obrigatórios!")
      .matches(/^[A-Za-z0-9-_]+$/, "Apenas letras minúsculas e maiúsculas "),
    email: yup
      .string()
      .email("E-mail inválido")
      .required("Todos os campos são obrigatórios!"),
    confirmEmail: yup
      .string()
      .oneOf([yup.ref("email")], "E-mails diferentes")
      .required("Todos os campos são obrigatórios!"),
    password: yup
      .string()
      .min(8, "Mínimo de 8 digitos")
      .required("Todos os campos são obrigatórios!"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas diferentes")
      .required("Todos os campos são obrigatórios!"),
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
      .then((_) => {
        history.push("/login");
        notification.open({
          message: "PARABÉNS",
          closeIcon: <FaTimes />,
          style: {
            fontFamily: "Raleway",
            backgroundColor: "var(--gray)",
            WebkitBorderRadius: 14,
          },
          description: "Você está quase lá, usuário criado com sucesso!",
          icon: <FaGrinAlt style={{ color: "var(--yellow)" }} />,
        });
      })
      .catch((_) =>
        notification.open({
          message: "NOUP",
          closeIcon: <FaTimes />,
          style: {
            fontFamily: "Raleway",
            backgroundColor: "var(--gray)",
            WebkitBorderRadius: 14,
          },
          description:
            "Erro ao realizar cadastro, todos os campos são obrigatórios.",
          icon: <FaGrinAlt style={{ color: "var(--purple)" }} />,
        })
      );
  };

  const rigthSVG = useRef(null);
  const rigthSVGLine = useRef(null);
  const leftSVG = useRef(null);
  const leftSVGLine = useRef(null);
  const bottomSVG = useRef(null);
  const bottomSVGLine = useRef(null);
  const content = useRef([]);

  gsap.registerPlugin(CSSPlugin);

  useEffect(() => {
    if (!authenticated) {
      const totalLengtRight = Math.ceil(rigthSVGLine.current.getTotalLength());
      const totalLengtLeft = Math.ceil(leftSVGLine.current.getTotalLength());
      const totalLengtBottom = Math.ceil(
        bottomSVGLine.current.getTotalLength()
      );

      gsap.set(rigthSVGLine.current, {
        strokeDasharray: totalLengtRight,
        strokeDashoffset: totalLengtRight,
        opacity: 0,
      });

      gsap.set(leftSVGLine.current, {
        strokeDasharray: totalLengtLeft,
        strokeDashoffset: totalLengtLeft,
        opacity: 0,
      });

      gsap.set(bottomSVGLine.current, {
        strokeDasharray: totalLengtBottom,
        strokeDashoffset: totalLengtBottom,
        opacity: 0,
      });

      gsap
        .timeline()
        .to(rigthSVG.current, {
          duration: 1.5,
          opacity: 1,
        })
        .to(
          rigthSVGLine.current,
          {
            strokeDashoffset: totalLengtRight / 2,
            opacity: 1,
            duration: 3,
          },
          "-=1"
        )
        .to(
          leftSVG.current,
          {
            duration: 1.2,
            opacity: 1,
          },
          "-=4"
        )
        .to(
          leftSVGLine.current,
          {
            strokeDashoffset: totalLengtLeft / 2,
            opacity: 1,
            duration: 2,
          },
          "-=2.5"
        )
        .to(
          bottomSVG.current,
          {
            duration: 1,
            opacity: 1,
          },
          "-=3"
        )
        .to(
          bottomSVGLine.current,
          {
            strokeDashoffset: totalLengtBottom / 2,
            opacity: 1,
            duration: 2,
          },
          "-=2.5"
        )
        .from(
          content.current,
          {
            translateY: -50,
            opacity: 0,
            stagger: {
              amount: 0.5,
            },
          },
          "-=3"
        );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <>
      <Container>
        <Content>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <h1 ref={(el) => content.current.push(el)}>Cadastro</h1>
            <div ref={(el) => content.current.push(el)}>
              <Input
                register={register}
                name="username"
                label="Nome"
                placeholder="Nome de usuário"
                error={errors.username?.message}
              />
            </div>
            <div ref={(el) => content.current.push(el)}>
              <Input
                register={register}
                name="email"
                label="Email"
                placeholder="Digite seu email"
                error={errors.email?.message}
              />
            </div>
            <div ref={(el) => content.current.push(el)}>
              <Input
                register={register}
                name="confirmEmail"
                label="Confirme seu email"
                placeholder="Confirme seu e-mail"
                error={errors.confirmEmail?.message}
              />
            </div>
            <div ref={(el) => content.current.push(el)}>
              <Input
                register={register}
                name="password"
                label="Senha"
                placeholder="Digite sua senha"
                type="password"
                error={errors.password?.message}
              />
            </div>
            <div ref={(el) => content.current.push(el)}>
              <Input
                register={register}
                type="password"
                label="Confirme sua senha"
                name="confirmPassword"
                placeholder="Confirme sua senha"
                error={errors.confirmPassword?.message}
              />
            </div>

            <p ref={(el) => content.current.push(el)}>
              Já possui conta? <Link to="/login">Faça login aqui.</Link>
            </p>
            <div ref={(el) => content.current.push(el)}>
              <Button type="submit">Cadastrar</Button>
            </div>
          </form>
        </Content>
      </Container>
      <Background>
        <svg
          width="648"
          height="899"
          viewBox="0 0 648 899"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="right"
          ref={(el) => (rigthSVG.current = el)}
        >
          <path
            d="M416.787 891.277C354.5 923 301.43 820.343 257.109 768.406C212.785 716.463 165.727 661.405 100.755 640.375C82.7762 634.556 63.8644 631.548 46.5044 624.082C29.1455 616.617 12.8257 603.437 8.00781 585.168C3.26658 567.186 10.6473 547.966 21.6957 533.006C32.7441 518.046 47.2888 506.072 59.7157 492.235C103.172 443.849 117.93 371.449 96.8753 309.925C82.9963 269.363 54.8303 233.046 51.4308 190.316C47.5523 141.56 78.1218 95.0997 118.223 67.0878C158.324 39.077 206.849 26.2632 254.509 15.2511C303.881 3.84333 356.825 -5.97248 404.167 12.088C441.431 26.3045 471.017 56.9056 489.267 92.3613C507.518 127.819 515.227 167.897 517.501 207.709C530.336 432.548 711 742 614.5 789"
            fill="#C45FD3"
          />
          <path
            d="M383.16 827.394C378.643 785.044 338.291 759.356 301.131 747.712C260.596 735.01 216.672 732.253 179.358 710.426C163.861 701.363 149.884 689.13 140.957 673.379C130.852 655.547 127.984 634.748 128.611 614.517C130.064 567.61 149.367 521.884 136.263 475.032C124.061 431.396 93.0502 396.784 64.2924 363.119C49.9807 346.366 35.805 329.353 24.0211 310.688C13.3727 293.823 4.47546 274.57 3.67354 254.334C2.14348 215.735 34.0802 194.258 66.5962 182.506C110.434 166.663 156.481 157.337 200.493 142.004C211.186 138.278 221.642 133.67 230.882 127.051C239.544 120.847 247.073 113.238 254.362 105.511C267.957 91.1001 281.177 76.6216 298.658 66.8202C332.958 47.5912 373.945 45.7475 412.341 47.2723C422.46 47.6746 432.565 48.3406 442.665 49.0696C444.924 49.2323 444.918 52.7693 442.642 52.6052C403.107 49.7544 361.574 47.2272 323.346 59.8564C303.606 66.3773 286.635 77.3427 272.003 92.038C258.25 105.851 245.985 121.501 229.495 132.264C211.734 143.855 190.539 148.974 170.442 154.916C146.546 161.981 122.65 169.047 98.7541 176.112C65.13 186.055 19.1217 197.771 8.9784 236.769C3.32766 258.499 11.3833 281.379 21.9238 300.286C32.7651 319.733 46.9736 337.21 61.2995 354.161C88.4012 386.232 117.806 417.716 133.846 457.176C141.995 477.218 145.561 498.245 144.43 519.853C143.19 543.565 137.498 566.696 134.29 590.158C131.367 611.541 130.399 633.958 136.821 654.824C142.977 674.822 156.418 690.964 173.581 702.617C209.015 726.677 252.494 730.437 292.754 741.566C327.835 751.263 364.764 769.573 380.55 804.515C383.85 811.819 385.848 819.456 386.697 827.417C386.938 829.676 383.399 829.635 383.16 827.395"
            stroke="#3E4042"
            strokeWidth="4"
            ref={(el) => (rigthSVGLine.current = el)}
          />
        </svg>

        <svg
          width="1079"
          height="435"
          viewBox="0 0 1079 435"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="bottom"
          ref={(el) => (bottomSVG.current = el)}
        >
          <path
            d="M117.188 321.44C66.2637 258.184 60.712 162.232 104 93.5214C147.291 24.8172 236.248 -11.6094 315.311 7.0001C371.564 20.2418 420.229 57.7662 477.089 68.0961C562.47 83.6075 646.457 35.4004 733.148 31.5559C841.117 26.7678 939.456 90.4621 1023.88 157.914C1052.09 180.449 1082.59 210.961 1076.22 246.495C1069.59 283.435 1027.55 301.143 990.944 309.442C710.627 372.989 399.716 505.5 170.716 375"
            fill="#FBD437"
          />
          <path
            d="M1047.17 237.742C1003.94 175.905 941.324 128.401 870.615 102.266C834.869 89.0546 797.267 81.4586 759.189 79.8609C716.327 78.0604 673.522 83.0309 631.237 89.5727C549.41 102.233 466.016 122.249 382.834 110.606C341.747 104.855 304.534 88.9515 266.453 73.36C228.863 57.97 188.049 43.2346 146.9 51.4065C109.614 58.8115 78.5005 84.2376 56.9671 114.712C32.4504 149.408 20.0919 190.891 10.4703 231.791C8.02794 242.216 5.73974 252.683 3.46354 263.148C2.9742 265.37 -0.430212 264.406 0.0591094 262.185C16.604 186.186 38.4563 96.9566 114.491 58.9042C193.124 19.5518 270.623 78.7224 345.111 99.2563C430.25 122.729 519.136 104.499 604.18 90.3675C646.852 83.2771 689.833 76.7703 733.159 76.0188C772.363 75.3388 811.361 80.0718 848.964 91.3142C920.947 112.834 986.537 156.036 1033.97 214.381C1039.65 221.376 1045.06 228.589 1050.22 235.976C1051.53 237.845 1048.45 239.595 1047.16 237.743"
            stroke="#3E4042"
            strokeWidth="4"
            ref={(el) => (bottomSVGLine.current = el)}
          />
        </svg>

        <svg
          width="742"
          height="616"
          viewBox="0 0 742 616"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="left"
          ref={(el) => (leftSVG.current = el)}
        >
          <path
            d="M696.179 553C740 522 614.294 480.887 620.75 421.818C627.207 362.753 657.133 309.321 683.078 255.861C709.024 202.404 731.972 143.757 723.049 85.0104C718.222 53.2 701.34 20.4559 671.36 8.76378C634.078 -5.77357 593.878 16.4849 556.814 31.5487C498.673 55.1758 433.666 61.6007 372.017 49.8114C316.742 39.2372 263.351 14.3521 207.116 16.5882C137.615 19.3515 74.224 65.4068 39.821 125.842C5.40618 186.277 -2.68078 259.001 5.5001 328.059C13.083 392.054 35.4453 456.636 81.3041 501.908C122.392 542.459 179.07 564.214 236.139 572.919C293.209 581.622 351.352 578.307 408.984 574.971C502.518 569.558 560.322 629.5 610.5 599.5"
            fill="#C45FD3"
          />
          <path
            d="M550.884 612.639C535.228 532.243 561.003 449.37 596.92 386.199C616.435 351.877 639.064 321.235 661.692 290.807C673.245 275.284 684.81 259.785 696.01 243.795C707.102 227.969 718.255 211.777 726.562 192.916C734.748 174.349 739.828 152.645 736.637 130.969C733.925 112.553 725.946 96.3513 715.684 84.1578C690.866 54.6819 656.411 53.6531 625.976 65.1877C592.968 77.6968 564.14 103.85 533.766 124.627C506.888 143.021 478.275 155.905 448.573 162.246C383.626 176.111 315.847 160.279 258.704 116.02C256.729 114.487 258.538 110.322 260.525 111.858C314.108 153.363 377.261 169.621 438.467 159.339C470.313 153.989 501.243 141.217 530.028 121.786C559.542 101.871 587.401 76.6711 618.966 63C646.957 50.8816 679.039 47.7237 705.303 68.2236C726.364 84.6601 742.572 115.048 741.049 149.334C739.221 190.613 715.426 223.343 695.57 251.386C673.053 283.185 649.215 313.205 627.111 345.549C579.123 415.757 534.848 511.451 554.303 611.363C554.89 614.369 551.471 615.629 550.884 612.626"
            stroke="#3E4042"
            strokeWidth="4"
            ref={(el) => (leftSVGLine.current = el)}
          />
        </svg>
      </Background>
    </>
  );
};

export default Signup;
