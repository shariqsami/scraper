import styled, {css} from 'styled-components';

export const Content = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;
    z-index: 1;
    padding: 40px 90px;

    h1 {
        color: var(--tertiary);
    }

    p {
        margin-top: 10px;
        font-size: 1px;
        color: var(--tertiary);
    }

    table {
        font-family: arial, sans-serif;
        border-collapse: collapse;
        width: 100%;
        text-align: center;
        margin-top: 40px;
    }

    th {
        border: 1px solid var(--primary);
        background-color: var(--tertiary);
        color: var(--primary);
        font-weight: bold;
        padding: 8px;
    }

    td {
        border: 1px solid var(--tertiary);
        padding: 10px;
        color: var(--tertiary);

        a {
            color: inherit;
        }
    }

    tr:nth-child(odd) {
        background-color: #ca2042;
    }
`;

export const Actions = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    width: 100%;
    z-index: 1;
    margin-top: 40px;

    @media (max-width: 1150px) {
        flex-direction: column;
        align-items: center;
    }

    section {
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
        width: 50%;
        z-index: 1;   

        :first-child {
            align-items: flex-start;
            justify-content: flex-start;

            @media (max-width: 1150px) {
                align-items: center;
                justify-content: center;
                
                span {
                    margin: 0 10px;
                }
            }             
        }
        
        @media (max-width: 1400px) {
            width: 90%;
            margin: 90px auto 0;
        }

        @media (max-width: 1150px) {
            align-items: center;
            justify-content: space-between;
            width: 100%;
            margin: 0 auto 40px;
        }  

        button {
            margin-left: 20px;
            font-size: 20px;            

            @media (max-width: 1150px) {
                margin: 0 10px;
            }
        }
    }
`;

export const Export = styled.div`
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
        font-size: 15px;
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
        width: 24%;
        color: var(--secondary);

        @media (max-width: 1150px) {
            width: 49%;
        }
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
                color: var(--secondary);
                font-size: 12px;
                margin: unset;
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