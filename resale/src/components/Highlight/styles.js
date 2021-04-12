import styled from 'styled-components';

export const Img = styled.img`
    position: absolute;
    bottom: 0;
    right: 55%;

    @media (max-width: 1350px) {
        left: -360px;
    }

    @media (max-width: 1150px) {
        display: none;
    }
`;