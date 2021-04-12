import styled from 'styled-components';

export const Content = styled.div`
    width: 100%;

    div {
        :first-child {
            position: absolute;
            z-index: 2;
        }
    }

    iframe {
        z-index: 3;
        position: relative;
    }
`;