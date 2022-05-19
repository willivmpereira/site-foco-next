import styled from "styled-components";
import Image from 'next/image'

export const Container = styled.div`
    max-width: 1140px;
    margin: 0 auto;
    width: 100%;
`

export const Header = styled.div`
    background-color: #0096DA;
    padding: 7.5rem 0 2.5rem 0;
`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    justify-content: space-between;
    align-items: center;
`

export const ContentInfo = styled.div`
    max-width: 445px;
`

export const TitleH1 = styled.h1`
    color: #FFF;
    font-weight: 400;
    font-size: 36px;
`

export const SubtitleH2 = styled.h2`
    font-size: 1.25rem;
    color: #FFF;
    font-weight: 400;
    margin-top: 2rem;
    max-width: 375px;
    line-height: 2;
`

export const ContentBanner = styled.div`

`

export const ContentBannerImg = styled(Image)`
    
`