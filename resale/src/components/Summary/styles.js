import styled from 'styled-components';

export const Content = styled.div`
    width: 100%;
    color: var(--tertiary);
    padding: 90px 0 0;

    @media (max-width: 900px) {
        padding: 20px 0;
    }
`;

export const Items = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin: 20px 0 0;    
    align-items: flex-start;
`;

export const Item = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0 0;
    flex-direction: column;
    text-align: center;
    width: 16.66%;

    @media (max-width: 1300px) {
        width: 33.33%;
        margin: 20px 0 40px;
    }

    @media (max-width: 780px) {
        width: 50%;
    }

    @media (max-width: 550px) {
        width: 100%;
    }

    h1 {
        font-size: 30px;
    }

    p {
        font-size: 15px;
    }
`;
