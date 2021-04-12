import styled, {css} from 'styled-components';

export const Head = styled.div`

    .home-link {
        &:hover {
            filter: unset;
        }
    }
`;

export const Logo = styled.img`
    position: absolute;
    width: 330px;
    left: 70px;
    top: 15px;
    z-index: 4;

    ${props => props.hide && css`        
        display: none !important;
    `}

    @media (max-width: 1300px) {
        top: 5px;
    }

    @media (max-width: 850px) {
        left: 20px;
    }
`;

export const Content = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 900px;
    right: 90px;
    top: 35px;
    z-index: 4;

    svg {
        font-size: 30px;
        position: absolute;
        right: 25px;
        z-index: 5;
        top: 15px;
        color: var(--tertiary);
        display: none;

        @media (max-width: 1300px) {
            display: block;
        }
    }

    @media (max-width: 1500px) {
        width: 810px;
    }

    @media (max-width: 1300px) {
        display: none;
        position: fixed;
        flex-direction: column;
        align-items: flex-end;
        background-color: var(--primary);
        right: 0;
        top: 0;
        width: auto;
        height: 100%;
        justify-content: start;
        padding: 38px;

        ${props => props.show && css`        
            display: block !important;
        `}
    }
`;

export const Item = styled.p`
    color: var(--tertiary);
    font-size: 15px;

    ${props => props.hide && css`        
        display: none !important;
    `}

    img {
        margin: 0 10px 0 -10px;
    }

    ${props => props.button && css`        
        color: var(--primary);
        background-color: var(--tertiary);
        padding: 10px 30px;
        border-radius: 8px;
        box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
        display: flex;
        align-items: center;
    `}

    @media (max-width: 1300px) {
        margin-bottom: 25px;
    }
`;

export const MenuIcon = styled.p`
    svg {
        position: absolute;
        z-index: 4;
        top: 35px;
        right: 90px;
        font-size: 28px;
        display: none;
        color: var(--tertiary);

        @media (max-width: 1300px) {
            display: block;
        }

        @media (max-width: 1150px) {
            color: var(--primary);

            ${props => props.alwaysWhite && css`        
                color: var(--tertiary);
            `} 
        }
    }
`;