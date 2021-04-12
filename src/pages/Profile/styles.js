import styled, {css} from 'styled-components';
import 'react-rangeslider/lib/index.css'

export const Content = styled.div`
    position: relative;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin: 0 auto;
    min-height: 100vh;
    padding: 90px;

    @media (max-width: 1400px) {
        flex-direction: column;
        padding: 180px 90px 90px;
    }

    @media (max-width: 850px) {
        padding: 180px 30px 90px;
    }
`;

export const Half = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
    width: 50%;
    z-index: 1;   

    ${props => props.fixed && css`        
        min-width: 800px;

        @media (max-width: 1400px) {
            min-width: unset;
            margin-bottom: 40px;
        }
    `} 

    @media (max-width: 1400px) {
        width: 100%;
    }
`;


export const Logo = styled.img`
    width: 430px;

    @media (max-width: 1150px) {
        width: 600px;
        margin: 110px auto 50px;
    }

    @media (max-width: 750px) {
        width: 80%;
        margin: 110px auto 50px;
    }
`;

export const Title = styled.div`
    min-width: 396px;

    @media (max-width: 1150px) {
        text-align: center;
        width: 80%;
        margin: 90px auto 50px;
    }

    h1 {
        font-size: 80px;
        color: var(--secondary);
    }

    p {
        font-size: 35px;
        color: var(--primary);        
    }
`;

export const Description = styled.div`
    p {
        font-size: 20px;
        color: var(--secondary);
        font-family: 'Roboto Slab', sans-serif;
        line-height: 40px;
        width: 65%;
        min-width: 460px;
        margin-top: 10%;

        span {
            font-weight: bold;
            color: var(--primary);
        }

        @media (max-width: 1150px) {
            text-align: center;
            width: 80%;
            margin: 0 auto 50px;
            min-width: unset;
        }
    }
`;

export const DateInput = styled.section`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 30px;

    p {
        color: white;
        font-size: 20px;
        margin-right: 10px;
        user-select: none;
    }

    .date-input {
        background-color: transparent;
        border: none;
        color: var(--tertiary);
        font-size: 20px;
        border-bottom: 2px solid var(--tertiary);
        width: 110px;
        text-align: center;
        margin-right: 10px;
    }
`;

export const Range = styled.section`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 30px;

    p {
        color: white;
        font-size: 20px;
        margin-right: 10px;
        user-select: none;
    }

    section {
        display: flex;
        justify-content: space-between;
        align-items: center;

        @media (max-width: 630px) {
            flex-direction: column;
            align-items: flex-start;
        }
    }

    input {
        border: none;
        background-color: transparent;
        border-bottom: 1px solid var(--tertiary);
        width: 20%;
        padding: 10px 10px 10px 0;
        color: var(--tertiary);
        font-size: 20px;

        &::placeholder {
            color: var(--tertiary);
        }

        @media (max-width: 850px) {
            width: 80%;
            margin-bottom: 10px;
        }
    }

    @media (max-width: 850px) {
        flex-direction: column;
        align-items: flex-start;
    }

    .rangeslider-horizontal {
        width: 250px;
        height: 1px;
        margin-top: 26px;
        margin-right: 10px;

        @media (max-width: 630px) {
            width: 420px;
        }
    }

    .rangeslider-horizontal .rangeslider__fill {
        background-color: var(--tertiary);
        height: 5px;
        margin-top: -2px;
    }

    .rangeslider, .rangeslider .rangeslider__fill {
        box-shadow: none;
    }

    .rangeslider-horizontal .rangeslider__handle:after {
        display: none;
    }

    .rangeslider .rangeslider__handle {
        box-shadow: none;
        border: none;
    }

    .rangeslider__handle-label {
        color: white;
        position: absolute;
        top: -27px;
        left: -133px;
        width: 300px;
        font-size: 16px;
        text-align: center;
        user-select: none;
    }
`;

export const Input = styled.input`
    border: none;
    background-color: transparent;
    border-bottom: 1px solid var(--tertiary);
    width: 80%;
    padding: 10px 10px 10px 0;
    color: var(--tertiary);
    font-size: 20px;

    ${props => props.small && css`        
        width: 30%;
    `}

    &::placeholder {
        color: var(--tertiary);
    }

    @media (max-width: 850px) {
        width: 100%;
    }
`;

export const Actions = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    width: 100%;
    z-index: 1;
    margin-top: 90px;

    @media (max-width: 1400px) {
        width: 90%;
        margin: 90px auto 0;
    }

    button {
        margin-left: 20px;
        font-size: 20px;
    }
`;

export const SelectInput = styled.section`
    width: 80%;
    margin-top: 30px;

    svg {
        color: var(--tertiary);
    }

    .select-input {
        background-color: transparent;
        border: none;
        color: var(--tertiary);
        font-size: 20px;
        border-bottom: 1px solid var(--tertiary);
    }
`;

export const Checkbox = styled.section`
    width: 290px;
    margin-top: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 25px;
        width: 25px;
    }

    input:checked ~ span {
        background-color: var(--tertiary);
    }

    span {
        height: 25px;
        width: 25px;
        background-color: transparent;
        border: 2px solid white;
    }

    p {
        color: white;
        font-size: 20px;
        margin-right: 10px;
        user-select: none;
    }
`;