import styled from 'styled-components';

export const Content = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    min-height: 100vh;
    padding: 90px;

    @media (max-width: 1150px) {
        flex-direction: column;
        padding: 0 0 90px 0;
    }
`;

export const Items = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    width: 100%;

    @media (max-width: 1150px) {
        flex-direction: column;
        align-items: center;
        padding: 90px 0;
    }
`;

export const Item = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;
    width: 28%;
    text-align: center;
    padding: 50px 10px;
    background-color: var(--tertiary);
    border-radius: 10px;

    @media (max-width: 1150px) {
        width: 35%;
        margin-bottom: 40px;
    }

    h1 {
        color: var(--primary);
        font-size: 45px;
        margin-bottom: 40px;
    }

    p {
        font-size: 20px;
        color: var(--secondary);
        font-family: 'Roboto Slab',sans-serif;
        line-height: 30px;
        margin-top: 20px;
        width: 70%;
        min-width: 268px;
        font-weight: bold;
    }

    button {
        color: var(--tertiary);
        background-color: var(--primary);
        margin-top: 60px;
    }
`;

export const Recommended = styled.h1`
    width: 120%;
    color: var(--tertiary) !important;
    background-color: var(--primary);
    padding: 15px;
    box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
`;