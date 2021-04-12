import styled, {css} from 'styled-components';

export const Content = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;
    z-index: 1;

    h1 {
        color: var(--tertiary);
    }
`;

export const Actions = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    width: 100%;
    z-index: 1;
    margin-top: 40px;

    section {
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
        width: 50%;
        z-index: 1;

        :first-child {
            align-items: flex-start;
            justify-content: flex-start;            
        }
        
        @media (max-width: 1400px) {
            width: 90%;
            margin: 90px auto 0;
        }

        button {
            margin-left: 20px;
            font-size: 20px;
        }
    }
`;

export const Pages = styled.span`
    color: var(--tertiary);
    font-weight: bold;
    font-size: 20px;
    margin-right: 15px;
    opacity: 0.3;
    cursor: pointer;

    ${props => props.active && css`        
        opacity: 1;
    `}
`;

export const Items = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 50px;

    a {
        width: 49%;
        color: var(--secondary);
    }
`;

export const Item = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background-color: var(--tertiary);
    padding: 20px;
    border-radius: 10px;
    cursor: pointer;
    margin-bottom: 20px;

    @media (max-width: 1740px) and (min-width: 1150px) {
        flex-direction: column;
    }

    @media (max-width: 950px) {
        flex-direction: column;
    }

    img {
        width: 50%;        

        @media (max-width: 1740px) and (min-width: 1150px) {
            width: 100%;
        }

        @media (max-width: 950px) {
            width: 100%;
        }
    }

    div {
        display: flex;
        align-items: flex-start;
        justify-content: space-evenly;
        flex-direction: column;
        padding-left: 20px;

        @media (max-width: 1740px) and (min-width: 1150px) {
            width: 100%;
            padding-left: 0;
            margin-top: 10px;
        }

        @media (max-width: 950px) {
            width: 100%;
            padding-left: 0;
            margin-top: 10px;
        }

        section {
            h1 {
                color: var(--primary);
                font-weight: bold;
            }

            p {
                span {
                    color: var(--primary);
                    font-weight: bold;
                }
            }

            :first-child {
                margin-bottom: 10px;
            }

            :last-child {
                margin-top: 10px;
            }
        }
    }
`;