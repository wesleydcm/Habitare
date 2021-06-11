import { Background, Container, Content } from "./styles";
import Button from "../../components/Button";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";

const NotFound = () => {
  const history = useHistory();

  const socketBottom = useRef(null);
  const socketTop = useRef(null);
  const sticksLeft = useRef(null);
  const sticksRight = useRef(null);
  const background = useRef(null);

  useEffect(() => {
    gsap.set(background.current, { opacity: 0 });

    gsap
      .timeline()
      .to(background.current, {
        opacity: 1,
        duration: 1.5,
      })
      .to(
        socketBottom.current,
        {
          translateY: -25,
          yoyo: true,
          repeat: -1,
          duration: 0.5,
        },
        "<"
      )
      .to(
        socketTop.current,
        {
          translateY: 25,
          yoyo: true,
          repeat: -1,
          duration: 0.5,
        },
        "<"
      )
      .to(sticksLeft.current, {
        scale: 0,
        opacity: 0,
        translateX: 60,
        translateY: 20,
        duration: .5,
        yoyo: true,
        repeat: -1,
        ease:"steps(2)"
      })
      .to(sticksRight.current, {
        scale: 0,
        opacity: 0,
        translateX: -60,
        translateY: -20,
        duration: .5,
        yoyo: true,
        repeat: -1,
        ease:"steps(2)"
      }, "<")
      ;
  });

  return (
    <>
      <Container>
        <Content>
          <div>
            <h1>404</h1>
            <h2>Ops! Não encontramos essa página =( </h2>
            <p>
              Mas não se preocupe, ainda podemos te ajudar a praticar bons
              hábitos. Só clicar em retornar!
            </p>
            <Button onClickFunc={() => history.goBack()}>RETORNAR</Button>
          </div>
        </Content>
      </Container>

      <Background>
        <svg
          className="back"
          width="2239"
          height="1886"
          viewBox="0 0 2239 1886"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          ref={(el) => (background.current = el)}
        >
          <path
            d="M317.183 1087.78C262.757 1128.98 225.5 1205.5 229 1243.5L231 1259L233.5 1276.5L331.121 1886H2238.5V951.987V0H937.04H726.54H216.54H52.5402C-3.85984 0 -11.3797 185 13.5402 274C52.0401 411.5 182.04 359 236.54 354C309.537 343.826 423.508 370.411 331.121 463.415C238.734 556.419 373.432 617.754 462.533 612.743C512.311 609.943 619.631 556.419 664.63 601.719C709.629 647.018 608.381 675.38 676.577 728.497C728.843 767.081 662.141 848.259 608.381 836.734C546.843 823.541 331.121 845.754 417.236 951.987C476.969 1008.61 381.396 1039.18 317.183 1087.78Z"
            fill="#FBC037"
          />
        </svg>
        <svg
          className="left"
          width="85"
          height="136"
          viewBox="0 0 85 136"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          ref={(el) => (sticksLeft.current = el)}
        >
          <rect
            x="22.3003"
            y="126.943"
            width="60"
            height="10"
            rx="5"
            transform="rotate(-31.18 22.3003 126.943)"
            fill="#7A5AED"
          />
          <rect
            x="38.8462"
            y="0.5271"
            width="60"
            height="10"
            rx="5"
            transform="rotate(39.75 38.8462 0.5271)"
            fill="#7A5AED"
          />
          <rect
            x="1.14624"
            y="55.5092"
            width="60"
            height="10"
            rx="5"
            transform="rotate(6.45 1.14624 55.5092)"
            fill="#7A5AED"
          />
        </svg>
        <svg
          className="right"
          width="109"
          height="145"
          viewBox="0 0 109 145"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          ref={(el) => (sticksRight.current = el)}
        >
          <rect
            x="81.0825"
            y="20.986"
            width="60"
            height="10"
            rx="5"
            transform="rotate(162.19 81.0825 20.986)"
            fill="#7A5AED"
          />
          <rect
            x="45.7625"
            y="136.611"
            width="60"
            height="10"
            rx="5"
            transform="rotate(-128.878 45.7625 136.611)"
            fill="#7A5AED"
          />
          <rect
            x="94.1091"
            y="86.9866"
            width="60"
            height="10"
            rx="5"
            transform="rotate(-165.29 94.1091 86.9866)"
            fill="#7A5AED"
          />
        </svg>

        <div>
          <svg
            className="tomada-top"
            width="814"
            height="269"
            viewBox="0 0 814 269"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            ref={(el) => (socketTop.current = el)}
          >
            <path
              d="M813.5 5.37854H113.614C74.0773 6.51425 60.0001 23.9285 60 51.1857C59.9999 83.8943 61.5662 139.898 61.5662 164"
              stroke="#7A5AED"
              stroke-width="10"
            />
            <path
              d="M39 189H84V176C84 169.373 78.6274 164 72 164H51C44.3726 164 39 169.373 39 176V189Z"
              fill="#7A5AED"
            />
            <rect y="254" width="120" height="15" rx="5" fill="#7A5AED" />
            <path
              d="M15 254H108V202C108 193.716 101.284 187 93 187H30C21.7157 187 15 193.716 15 202V254Z"
              fill="#7A5AED"
            />
          </svg>

          <svg
            className="tomada-bottom"
            width="340"
            height="504"
            viewBox="0 0 340 504"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            ref={(el) => (socketBottom.current = el)}
          >
            <path
              d="M5.33887 504V303.079C5.33865 291 9.23409 268.737 48.7855 268.737C88.337 268.737 172.134 268.737 209.089 268.737H247.042C265.02 268.737 281 269.368 281 241.895C281 214.421 281 178.605 281 114"
              stroke="#7A5AED"
              stroke-width="10"
            />
            <path
              d="M257 127H302V140C302 146.627 296.627 152 290 152H269C262.373 152 257 146.627 257 140V127Z"
              fill="#7A5AED"
            />
            <path
              d="M232 60H325V112C325 120.284 318.284 127 310 127H247C238.716 127 232 120.284 232 112V60Z"
              fill="#7A5AED"
            />
            <rect
              x="220"
              y="46"
              width="120"
              height="15"
              rx="5"
              fill="#7A5AED"
            />
            <path
              d="M257 5C257 2.23858 259.239 0 262 0V0C264.761 0 267 2.23858 267 5V46H257V5Z"
              fill="#7A5AED"
            />
            <path
              d="M291 5C291 2.23858 293.239 0 296 0V0C298.761 0 301 2.23858 301 5V46H291V5Z"
              fill="#7A5AED"
            />
          </svg>
        </div>
      </Background>
    </>
  );
};

export default NotFound;
