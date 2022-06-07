import styled from "styled-components";
import Image from 'next/image'
import Link from 'next/link'

export const Footer = styled.footer`
    border-top: solid 2px #0096da;
    background-color: #f3f3f3;
    padding: 2.5rem 0;
`

export const Container = styled.div`
    max-width: 1140px;
    width: 100%;
    margin: 0 auto;
`

export const RowFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 992px) {
        flex-direction: column;
    }
`

export const ContentLogo = styled.div`
    
`

export const ContentLogoData = styled.div`
    display: flex;
    align-items: center;
`

export const ContentLogoImg = styled(Image)`
    /* border-right: 1px solid #ddd !important; 
    padding: 15px 30px 15px 0 !important; 
    margin-right: 1.875rem !important; */
`

export const LineContent = styled.div`
    width: 1px;
    height: 64px;
    background-color: #ddd;
    margin: 0 0.5rem;
`

export const ContentLogoText = styled.p`
    font-size: 14px;
    margin: 0;
    color: #7b7b7b;
`

export const ContentLinkData = styled(Link)`
    color: #7b7b7b
`

export const ContentSocial = styled.div`
    
`

export const ContentSocialLinks = styled.div`
    
`

export const ContentSocialLinksUl = styled.ul`
    list-style: none;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
`

export const ContentSocialLinksLi = styled.li`
    padding: 0.5rem;
    background-color: #dcdcdc;

    &:hover{
        a{
            svg{
                color: #005995 !important;
            }
        }
    }
    
`

export const ContentSocialLinksLink = styled(Link)`
    
`

export const FooterCopy = styled.div`
    background-color: #0096DA;
    padding: 10px 0;
`

export const RowCopy = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 992px) {
        flex-direction: column;
    }
`

export const ContentInfoFooter = styled.div`
    
`

export const SpanFooterInfo = styled.span`
    display: flex;
    align-items: center;
    margin: 12px 0;
    color: #FFF;
    gap: 1rem;
`

export const LogoMiniFooter = styled(Image)`
    max-width: 100%;
    height: auto;
`

export const ImageVerificaton = styled(Image)`

`