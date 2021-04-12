import styled, {css} from 'styled-components';

export const Content = styled.div`
    width: 100%;
`;

export const Img = styled.img`
    width: 100%;
    display: none;

    ${props => props.active && css`        
        display: block;
    `} 
`;