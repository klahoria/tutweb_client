import React from 'react'
import { BsEyeFill, BsPersonCircle } from 'react-icons/bs'
import styled, { css } from 'styled-components'
import Image from '../Image/Image'
import TextViewer from '../TextViewer'

export default function ImageCard(props) {
    return (
        <Card className='card border-0' {...props}>
            <Image design={{ width: props.width ? ((window.innerWidth / Number(props.width) - 40) + 'px') : '380px', height: "350px", objectFit: "cover !important", borderRadius: '10px !important', overflow: 'hidden' }} src="image/png/blog/blogCard (1).png" />
            <TextViewer className="py-2" style={{
                fontFamily: 'Poppins', fontStyle: "normal", fontWeight: 500, fontSize: "1.3em", lineHeight: "120%", color: "#252641", fontWeight: "600 !important"
            }}>Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution</TextViewer>
            {props.show_more && <span className='d-flex align-items-center justify-content-start py-2'>
                <BsPersonCircle className='h1 mb-0' width={"150px"} height="150px" />
                <p className="mb-0 px-2">Lalit Kumar</p>
            </span>}
            <SubTitle {...props} className='py-2 fs-6 fw-semibold'>Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</SubTitle>

            {props.price && <div className="d-flex align-items-center justify-content-between">
                <span className='d-flex align-items-center justify-content-start py-2'>
                    <BsPersonCircle className='h1 mb-0' width={"150px"} height="150px" />
                    <p className="mb-0 px-2">Lalit Kumar</p>
                </span>
                {props.price && <div className="price">
                    <del className='fst-italic px-2 fs-6' style={{ color: "#696984" }}>${props.del_price || 100}</del>
                    <span style={{ color: "var(--dark-green)" }} className="fw-bold">${props.price || "80"}</span>
                </div>}
            </div>}

            {props.show_more && <div className='d-flex align-items-center justify-content-between py-2'>
                <OtherText {...props} className='undeline pointer mb-0'><u>Read more</u></OtherText>
                <span className='d-flex align-items-center justify-content-around'><BsEyeFill className='h5 m-0' style={{ color: "var(--dark-green)" }} /> <span className='px-3'>24516</span></span>
            </div>}


        </Card >
    )
}


const Card = styled.div`
    ${(props) => {
        return css`
            padding: 20px 20px;
            max-width: ${props.width ? (window.innerWidth / Number(props.width) + 'px') : '420px'};
            width: 786px;
            // height: 500px;
            background: #FFFFFF;
            box-shadow: 0px 18.83px 47.08px rgba(47, 50, 125, 0.1);
            border-radius: 20px;
            margin-bottom: 20px;
        `
    }}
`

// const Image = styled.img`
//     width: 400px;
//     height: 150px;
//     object-fit: none !important;
// `


const SubTitle = styled.p`
    ${(props) => {
        return css`
            color: ${props.SubTitleColor} !important;
            ${props.style}
        `
    }}
`

const OtherText = styled.p`
${(props) => {
        return css`
        color: ${props.textColor} !important;
        ${props.style}
    `
    }}
`