import { Link, Redirect, useHistory } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { Background, Container, Content } from "./styles";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { FormContainer } from "./styles";
import { UserContext } from "../../providers/User";
import { useContext, useRef, useEffect } from "react";
import gsap from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";
import { notification } from "antd";
import { FaGrinAlt, FaTimes } from "react-icons/fa";
import { AchievementContext } from "../../providers/Achievement";

function Login() {
  const { userLogin, authenticated } = useContext(UserContext);
  const { completeAchievement } = useContext(AchievementContext);
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
    const { username } = data;
    api
      .post("sessions/", data)
      .then((response) => {
        const { access } = response.data;
        userLogin(access, { username });
        completeAchievement("1");
        return history.push("/dashboard");
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
          description: "Erro ao fazer login, usuário ou senha não reconhecidos",
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
          "-=3.5"
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
            translateY: -40,
            opacity: 0,
            stagger: {
              amount: 0.4,
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
          <FormContainer onSubmit={handleSubmit(onSubmitFunction)}>
            <h1 ref={(el) => content.current.push(el)}>Login</h1>
            <div ref={(el) => content.current.push(el)}>
              <Input
                register={register}
                name="username"
                label="Username"
                placeholder="Digite seu usuário"
                error={errors.username?.message}
              ></Input>
            </div>
            <div ref={(el) => content.current.push(el)}>
              <Input
                register={register}
                name="password"
                label="Senha"
                placeholder="Digite sua senha"
                type="password"
                error={errors.password?.message}
              ></Input>
            </div>
            <p ref={(el) => content.current.push(el)}>
              Não possui conta? <Link to="/signup">Cadastre-se aqui!</Link>
            </p>
            <div ref={(el) => content.current.push(el)}>
              <Button type="submit">Entrar</Button>
            </div>
          </FormContainer>
        </Content>
      </Container>
      <Background>
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
            d="M961.328 321.44C1012.25 258.184 1017.8 162.232 974.516 93.5214C931.226 24.8172 842.268 -11.6094 763.205 7.0001C706.952 20.2418 658.288 57.7662 601.427 68.0961C516.046 83.6075 432.059 35.4004 345.368 31.5559C237.399 26.7678 139.06 90.4621 54.6366 157.914C26.4279 180.449 -4.07044 210.961 2.29939 246.495C8.92145 283.435 50.9666 301.143 87.5726 309.442C367.889 372.989 678.8 505.5 907.8 375"
            fill="#FBD437"
          />
          <path
            d="M31.3444 237.742C74.5737 175.905 137.192 128.401 207.901 102.266C243.647 89.0546 281.249 81.4586 319.327 79.8609C362.189 78.0604 404.994 83.0309 447.279 89.5727C529.106 102.233 612.5 122.249 695.682 110.606C736.769 104.855 773.982 88.9515 812.063 73.36C849.653 57.97 890.467 43.2346 931.616 51.4065C968.902 58.8115 1000.02 84.2376 1021.55 114.712C1046.07 149.408 1058.42 190.891 1068.05 231.791C1070.49 242.216 1072.78 252.683 1075.05 263.148C1075.54 265.37 1078.95 264.406 1078.46 262.185C1061.91 186.186 1040.06 96.9566 964.025 58.9042C885.392 19.5518 807.893 78.7224 733.405 99.2563C648.266 122.729 559.38 104.499 474.336 90.3675C431.664 83.2771 388.683 76.7703 345.357 76.0188C306.153 75.3388 267.155 80.0718 229.552 91.3142C157.569 112.834 91.9792 156.036 44.5509 214.381C38.8647 221.376 33.4567 228.589 28.2923 235.976C26.985 237.845 30.0619 239.595 31.3575 237.743"
            fill="transparent"
            stroke="#3E4042"
            strokeWidth="4"
            ref={(el) => (bottomSVGLine.current = el)}
          />
        </svg>
        <svg
          width="648"
          height="899"
          viewBox="0 0 648 899"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="left"
          ref={(el) => (leftSVG.current = el)}
        >
          <path
            d="M230.523 891.277C292.81 923 345.88 820.343 390.201 768.406C434.525 716.463 481.583 661.405 546.555 640.375C564.534 634.556 583.446 631.548 600.806 624.082C618.165 616.617 634.484 603.437 639.302 585.168C644.043 567.186 636.663 547.966 625.614 533.006C614.566 518.046 600.021 506.072 587.594 492.235C544.138 443.849 529.381 371.449 550.435 309.925C564.314 269.363 592.48 233.046 595.879 190.316C599.758 141.56 569.188 95.0997 529.087 67.0878C488.987 39.077 440.461 26.2632 392.801 15.2511C343.429 3.84333 290.486 -5.97248 243.144 12.088C205.879 26.3045 176.293 56.9056 158.043 92.3613C139.792 127.819 132.083 167.897 129.809 207.709C116.974 432.548 -63.6902 742 32.8098 789"
            fill="#C45FD3"
          />
          <path
            d="M264.15 827.394C268.666 785.044 309.018 759.356 346.179 747.712C386.714 735.01 430.637 732.253 467.952 710.426C483.448 701.363 497.426 689.13 506.352 673.379C516.458 655.547 519.326 634.748 518.699 614.517C517.246 567.61 497.943 521.884 511.047 475.032C523.249 431.396 554.26 396.784 583.017 363.119C597.329 346.366 611.505 329.353 623.289 310.688C633.937 293.823 642.834 274.57 643.636 254.334C645.166 215.735 613.23 194.258 580.714 182.506C536.875 166.663 490.829 157.337 446.816 142.004C436.124 138.278 425.668 133.67 416.428 127.051C407.766 120.847 400.237 113.238 392.948 105.511C379.353 91.1001 366.133 76.6216 348.652 66.8202C314.352 47.5912 273.364 45.7475 234.969 47.2723C224.85 47.6746 214.745 48.3406 204.645 49.0696C202.386 49.2323 202.391 52.7693 204.667 52.6052C244.203 49.7544 285.736 47.2272 323.964 59.8564C343.703 66.3773 360.674 77.3427 375.306 92.038C389.059 105.851 401.324 121.501 417.815 132.264C435.576 143.855 456.771 148.974 476.868 154.916C500.764 161.981 524.66 169.047 548.556 176.112C582.18 186.055 628.188 197.771 638.331 236.769C643.982 258.499 635.927 281.379 625.386 300.286C614.545 319.733 600.336 337.21 586.01 354.161C558.909 386.232 529.504 417.716 513.463 457.176C505.315 477.218 501.749 498.245 502.88 519.853C504.12 543.565 509.812 566.696 513.019 590.158C515.943 611.541 516.911 633.958 510.489 654.824C504.333 674.822 490.892 690.964 473.728 702.617C438.295 726.677 394.816 730.437 354.556 741.566C319.475 751.263 282.546 769.573 266.76 804.515C263.46 811.819 261.462 819.456 260.613 827.417C260.372 829.676 263.911 829.635 264.15 827.395"
            fill="transparent"
            stroke="#3E4042"
            strokeWidth="4"
            ref={(el) => (leftSVGLine.current = el)}
          />
        </svg>
        <svg
          width="742"
          height="616"
          viewBox="0 0 742 616"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="right"
          ref={(el) => (rigthSVG.current = el)}
        >
          <path
            d="M45.5446 553C1.723 522 127.429 480.887 120.973 421.818C114.517 362.753 84.5903 309.321 58.6447 255.86C32.6992 202.404 9.75139 143.756 18.6745 85.0101C23.501 53.1997 40.3835 20.4556 70.3633 8.76347C107.646 -5.77387 147.845 16.4846 184.91 31.5484C243.05 55.1755 308.058 61.6004 369.707 49.8111C424.982 39.2369 478.372 14.3517 534.607 16.5879C604.108 19.3512 667.499 65.4065 701.902 125.841C736.317 186.276 744.404 259.001 736.223 328.059C728.64 392.054 706.278 456.636 660.419 501.907C619.331 542.459 562.653 564.214 505.584 572.918C448.514 581.622 390.371 578.307 332.739 574.971C239.205 569.557 181.402 629.5 131.223 599.5"
            fill="#C45FD3"
          />
          <path
            d="M190.839 612.638C206.495 532.242 180.721 449.37 144.803 386.198C125.288 351.877 102.659 321.235 80.0315 290.807C68.4781 275.284 56.913 259.785 45.7131 243.795C34.6212 227.968 23.4677 211.777 15.1612 192.915C6.97539 174.349 1.89522 152.645 5.08617 130.968C7.79853 112.552 15.7773 96.3509 26.0393 84.1573C50.8567 54.6815 85.3124 53.6527 115.747 65.1873C148.755 77.6964 177.583 103.85 207.958 124.626C234.835 143.02 263.449 155.904 293.15 162.245C358.097 176.111 425.876 160.278 483.019 116.019C484.994 114.487 483.185 110.322 481.199 111.857C427.616 153.362 364.462 169.621 303.256 159.338C271.41 153.988 240.48 141.216 211.695 121.785C182.182 101.87 154.322 76.6707 122.757 62.9996C94.7662 50.8812 62.6845 47.7233 36.4203 68.2231C15.3591 84.6597 -0.848931 115.048 0.67407 149.333C2.50253 190.613 26.2973 223.342 46.153 251.386C68.6704 283.184 92.5077 313.205 114.613 345.549C162.601 415.757 206.875 511.451 187.421 611.362C186.833 614.368 190.252 615.628 190.839 612.625"
            fill="transparent"
            stroke="#3E4042"
            strokeWidth="4"
            ref={(el) => (rigthSVGLine.current = el)}
          />
        </svg>
      </Background>
    </>
  );
}

export default Login;
