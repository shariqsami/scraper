import styled from 'styled-components';

export const Content = styled.div`
    width: 100%;

        p {
            color: var(--secondary);
            font-size: 20px;
            background-color: var(--tertiary);
            padding: 10px 30px;
            border-radius: 8px;
            box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
            margin-bottom: 30px;

            span {
                color: var(--primary);
                margin: 0 5px;
            }
        }
`;