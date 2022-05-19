import styled from "styled-components";
import Image from 'next/image'

export const Container = styled.div`
    max-width: 1140px;
    width: 100%;
    margin: 0 auto;
`

export const Row = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 1rem;
`

// export const ContentImg = styled.div`
//     display: flex;
//     justify-content: center;
//     align-items: center;
// `

export const StyledImg = styled(Image)`
    filter: grayscale(100%);
    opacity: 0.5;
    max-width: 100%;
    height: auto;
    transition: 0.5s ease;
   
    &:hover{
        filter: grayscale(0%);
        opacity: 1;
        transform: scale(1.05);
    }
`