import styled from 'styled-components'
import Image from 'next/image'

export const NextEvents = styled.div`
    padding: 3rem 0;
    background-color: #f8f8f8;
`

export const Container = styled.div`
    max-width: 1140px;
    width: 100%;
    margin: 0 auto;
`

export const Row = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 1rem;
`

export const CardContent = styled.div`
    background-color: #FFF;
    border: solid 1px #D8D8D8;
    display: grid;
`

export const CardThumb = styled.div`


`

export const CardFigure = styled.figure`
    margin: 0;
`

export const CardInfoImg = styled(Image)`
    width: 100%;
    object-fit: cover;
    max-width: 100%;
    height: auto;
`

export const CardInfo = styled.div`
    padding: 1rem 1.5rem;
    display: grid;

`

export const CardInfoTitle = styled.h4`
    font-size: 1.15rem;
    margin: 0;
`

export const CardInfoPartner = styled.p`
    font-size: 0.85rem;
    margin-bottom: 0.4rem;
`

export const CardInfoDate = styled.p`
    font-size: 0.85rem;
    margin-bottom: 0.4rem
`
export const CardInfoLink = styled.a`
    cursor: pointer;
    background-color: #0096da;
    border-color: #0096da;
    color: #FFF;
    font-weight: 400;
    display: inline-block;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    user-select: none;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    text-decoration: none;
`

export const CardInfoDivider = styled.div`
    width: 100%;
    height: 1px;
    background-color: #d8d8d8;
    margin: 1rem 0;
`

export const BtnMoreDetails = styled.a`
    
`