import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;
    background-color: var(--white);
    padding: 24px 48px;
    display: none;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    @media screen and (min-width: 540px) {
        display: flex;
    }
`;

export const ButtonsWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
`
