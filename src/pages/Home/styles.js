import styled, {css} from 'styled-components';

export const Content = styled.div`
    position: relative;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin: 0 auto;
    min-height: 100vh;
    padding: 40px;

    @media (max-width: 1150px) {
        flex-direction: column;
        padding: 0 0 10px 0;
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
    width: 320px;

    @media (max-width: 1100px) {
        width: 570px;
        margin: 100px auto 50px;
    }

    @media (max-width: 720px) {
        width: 70%;
        margin: 100px auto 50px;
    }
`;

export const Title = styled.div`
    min-width: 396px;
    spanspan
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
        width: 60%;
        min-width: 460px;
        margin-top: 7%;

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

export const Items = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    width: 100%;
    flex-wrap: wrap;
    height: 560px;
    z-index: 1;

    @media (max-width: 1150px) {
        width: 80%;
        margin: 0 auto;
    }
`;

export const Item = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 50%;
    text-align: center;

    @media (max-width: 1400px) and (min-width: 1150px) {
        width: 100%;
        flex-direction: row;
        text-align: left;
        align-items: center;
        justify-content: start;

        img {
            margin-right: 20px;
        }
    }

    @media (max-width: 715px) {
        width: 100%;
        flex-direction: row;
        text-align: left;
        align-items: center;
        justify-content: start;

        img {
            margin-right: 20px;
        }
    }

    p {
        font-size: 13px;
        color: var(--tertiary);
        font-family: 'Roboto Slab',sans-serif;
        line-height: 30px;
        margin-top: 20px;
        width: 70%;
        min-width: 268px;

        @media (max-width: 1400px) and (min-width: 1150px) {
            margin: 0;
        }

        span {
            font-weight: bold;
        }
    }
`;

export const Actions = styled.div`
    display: flex;
    align-items: flex-end;
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
`;
