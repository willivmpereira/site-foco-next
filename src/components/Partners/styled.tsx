import styled from "styled-components";
import Image from 'next/image'

export const InfoPartners = styled.div`
    padding: 3rem 0;
`

export const Container = styled.div`
    max-width: 1140px;
    width: 100%;
    margin: 0 auto;
`

export const Row = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 1rem;

    @media (max-width: 992px) {
        grid-template-columns: 1fr 1fr;
    }
`

// export const ContentImg = styled.div`
//     display: flex;
//     justify-content: center;
//     align-items: center;
// `

export const ImgContent = styled.figure`
    padding: 0 15px;
    margin: 0;
`

export const StyledImg = styled(Image)`
    filter: grayscale(100%);
    opacity: 0.5;
    max-width: 100%;
    height: auto;
    transition: 0.5s ease;
   
    &:hover{
        filter: grayscale(0%);
        opacity: 1;
        transform: scale(1.02);
    }
`