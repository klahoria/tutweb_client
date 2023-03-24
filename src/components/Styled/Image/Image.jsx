import React from 'react'
import styled, { css } from 'styled-components'

function Image(props) {
    return (
        <ImageWrapper>
            <UserImage {...props} />
            {props.subtitle && <TitleBar>{props.subtitle}</TitleBar>}
        </ImageWrapper>
    )
}

const UserImage = styled.img`
    ${(props) => {
        return css`
        margin-bottom: 0px;
        max-height: ${props.height || '250px'};
        ${props.design}
        `
    }}
`

const ImageWrapper = styled.span`
${(props) => {
        return css`
        position: relative;
        display: inline;
        max-width: min-content;
    `
    }}
`

const TitleBar = styled.span`
    ${(props) => {
        return css`
        position: absolute;
        top: 50%;
        background: rgba(255,255,255,0.7);
        border-radius: 12px;
        left: 50%;
        padding: 5px 50px;
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 36px;
        text-align: center;
        color: rgba(0,0,0,0.8);
        transform: translate(-50%, 115%);
        `
    }}
`


export default Image