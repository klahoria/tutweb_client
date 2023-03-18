import react from 'react';
import styled, { css } from 'styled-components';

export default (props) => <><TextView {...props} /></>

const TextView = styled.span`
    ${(props) => {
        return css`
        margin-bottom: 0px;
        text-align: ${props.textAlign || 'left'};
        color: ${props.color || '#000'};
        max-width: ${props.maxWidth};
        ${props.style}
        `
    }}
`