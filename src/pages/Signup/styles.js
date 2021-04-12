import styled, {css} from 'styled-components';

export const Content = styled.div`
    position: relative;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin: 0 auto;
    min-height: 100vh;
    padding: 90px;

    @media (max-width: 1150px) {
        flex-direction: column;
        padding: 0 0 90px 0;
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
        min-width: 600px;

        @media (max-width: 1150px) {
            min-width: unset;
            background-color: var(--tertiary);
        }
    `}    

    @media (max-width: 1150px) {
        width: 100%;
    }
`;

export const Logo = styled.img`
    width: 350px;

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
        font-size: 15px;
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

export const Input = styled.input`
    border: none;
    background-color: transparent;
    border-bottom: 1px solid var(--tertiary);
    width: 80%;
    padding: 10px 10px 10px 0;
    color: var(--tertiary);
    font-size: 15px;
    font-weight: lighter;
    margin-bottom: 50px;

    &::placeholder {
        color: var(--tertiary);
    }

    @media (max-width: 850px) {
        width: 100%;
    }
`;

export const Actions = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    z-index: 1;
    margin-top: 90px;

    @media (max-width: 1150px) {
        width: 90%;
        margin: 90px auto 0;
    }

    button {
        margin-left: 20px;
        font-size: 15px;
    }

    a {
        color: white;
    }
`;
