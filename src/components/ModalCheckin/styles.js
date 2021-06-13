import Modal from "antd/lib/modal/Modal";
import styled from "styled-components";

export const WrapStars = styled.div`
  display: flex;
  color: var(--yellow);
  font-size: 34px;
  margin-top: 8px;

  svg {
    margin-left: 6px;
  }
`;

export const CustomModal = styled(Modal)`
  position: relative;
  h3 {
    position: relative;
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    color: ${(props) =>
      props.category === "spirit"
        ? "var(--colorSpirit)"
        : props.category === "money"
        ? "var(--colorMoney)"
        : props.category === "house"
        ? "var(--colorHouse)"
        : props.category === "night"
        ? "var(--colorNight)"
        : props.category === "fit"
        ? "var(--colorFit)"
        : props.category === "focus" && "var(--colorFocus)"};
  }
  h3 > svg {
    margin-right: 0.5rem;
  }

  .ant-modal-header {
    background-color: var(--white);
    border-radius: 15px;
  }

  .ant-modal-content {
    background-color: var(--white);
    border-radius: 15px;
  }

  .ant-modal-title {
    font-size: 18px;
    font-weight: bold;
  }

  .ant-modal-body {
    background-color: var(--gray);
    z-index: 1;
    padding: 24px 24px 12px;
  }

  .ant-modal-footer {
    background-color: var(--gray);
    border-radius: 15px;
  }

  .ant-modal-footer .wrap {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .ant-btn {
    width: 100px;
    border-radius: 20px;
    background-color: var(--white);
    border: 2px solid var(--purple);
    margin: 0;

    &:hover {
      filter: brightness(0.85);
    }
  }

  .ant-modal-body .ant-btn:first-child {
    width: 75px;
  }

  .ant-btn:last-child {
    background-color: var(--purple);
  }

  .ant-btn span {
    color: var(--purple);
    font-weight: bold;
  }

  .ant-btn:last-child span {
    color: var(--white);
    text-transform: capitalize;
    font-weight: bold;
  }

  @media (min-width: 430px) {
    p {
      font-size: 16px;
    }
  }

  @media (min-width: 460px) {
    .ant-modal-title {
      font-size: 22px;
    }

    @media (min-width: 600px) {
      .ant-btn {
        width: 150px;
      }
    }
  }
`;

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  position: relative;
  z-index: 350;
  min-height: 80px;

  > div {
    position: relative;
    z-index: 350;
  }
`;

export const BarContainer = styled.div`
  width: 100%;
  border: 2px solid var(--purple);
  border-left: none;
  border-right: none;
  height: 10px;
  position: absolute;
  top: 55px;
  left: 0rem;
  z-index: 350;
`;
export const BarFill = styled.div`
  background: var(--purple);
  height: 100%;
  position: absolute;
  top: 0;
  border-radius: 12px;
  left: 0rem;
  width: ${(props) => props.achievedPercentage || 0}%;
  max-width: 100%;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const FrequencyWrapper = styled.div`
  background-color: var(--gray);
  border: 2px solid var(--purple);
  padding: 2px 12px;
  border-radius: 26px;
  font-size: 18px;
  font-weight: 500;
  color: var(--purple);
  text-transform: capitalize;
`

export const ImageContainer = styled.div`
  position: absolute;
  z-index: 300;
  bottom: 1%;
  left: 0px;
  opacity: 0.5;
  transform: ${(props) =>
    props.category === "fit"
      ? "scaleX(-1) translateX(0px)"
      : props.category === "spirit"
      ? "translate(-20px, -5px)"
      : props.category === "focus"
      ? "translate(30px, -1px) scale(1)"
      : props.category === "house"
      ? "translate(20px, 0px)"
      : props.category === "money"
      ? "translate(5px, 0px)"
      : "translate(5px, 0px)"};
  transition: opacity 300ms;

  > div {
    width: ${(props) =>
      props.category === "night"
        ? "190px !important"
        : props.category === "fit"
        ? "240px !important"
        : props.category === "spirit"
        ? "240px !important"
        : "150px !important"};
    height: 180px !important;
  }
`;
