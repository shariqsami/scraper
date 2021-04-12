import styled from 'styled-components';

export const Content = styled.div`
    width: 100%;
    color: var(--tertiary);
    padding: 90px 0;    

    @media (max-width: 900px) {
        padding: 20px 0;
    }

    @media (max-width: 750px) {
        display: none;
    }
`;

export const GraphContainer = styled.div`
    width: 100%;
    height: 500px;
    margin-bottom: 50px;

    text {
        fill: var(--tertiary) !important;
    }
`;