import styled, {css} from 'styled-components';

export const Content = styled.div`
    position: relative;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin: 0 auto;
    min-height: 100vh;
    padding: 90px 90px 40px;

    @media (max-width: 1150px) {
        flex-direction: column;
        padding: 0 0 90px;
    }
`;

export const Half = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
    width: 50%;
    z-index: 1;    
    
    :last-of-type {
        height: 800px;

        @media (max-width: 1150px) {
            height: unset;
            padding: 40px 90px 0;
        }

        @media (max-width: 900px) {
            height: unset;
            padding: 40px 30px 0;
        }
    }

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
    width: 200px;
    position: absolute;
    top: 20px;
    right: 75px;

    @media (max-width: 1150px) {
        display: none;
    }
`;

export const LogoColor = styled.img`
    width: 200px;
    position: absolute;
    top: 20px;
    right: 75px;
    display: none;
    z-index: 2;

    @media (max-width: 1150px) {
        display: block;
    }
`;

export const Title = styled.div`
    min-width: 396px;
    width: 100%;

    @media (max-width: 1150px) {
        text-align: center;
        width: 80%;
        margin: 90px auto 50px;
    }

    h1 {
        font-size: 65px;
        color: var(--primary);
        width: 70%;

        @media (max-width: 1150px) {
            text-align: center;
            width: 100%;
            margin: 0 auto;
        }
    }

    p {
        font-size: 35px;
        color: var(--secondary);  
    }
`;

export const Description = styled.div`
    margin-top: 30px;

    @media (max-width: 1150px) {
        width: 100%;
        margin: 0 auto 30px;
    }

    p {
        font-size: 20px;
        color: var(--secondary);
        font-family: 'Roboto Slab', sans-serif;
        line-height: 40px;
        width: 65%;
        min-width: 460px;      
        font-weight: bold;

        span {
            font-weight: bold;
            color: var(--primary);
        }

        @media (max-width: 1150px) {
            text-align: center;
            width: 80%;
            margin: 0 auto;
            min-width: unset;
        }
    }
`;

export const Menu = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 1150px) {
        margin-bottom: 40px;
    }
`;

export const Item = styled.div`
    font-size: 20px;
    color: var(--tertiary);
    opacity: 0.3;
    cursor: pointer;

    ${props => props.active && css`        
        opacity: 1;
    `} 
`;

export const Actions = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    width: 100%;
    z-index: 1;

    @media (max-width: 1150px) {
        width: 90%;
        margin: 90px auto 0;
    }

    button {
        margin-left: 20px;
        font-size: 20px;
    }
`;
