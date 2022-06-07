import styled from 'styled-components';
import Image from 'next/image'
import Link from 'next/link';

export const TopNavBar = styled.div`
    border-bottom: 1xp solid #F5F5F5;
    position: fixed;
    width: 100%;
    z-index: 999;
    background-color: #FFF;
    top: 0;
`

export const Container = styled.div`
    max-width: 1140px;
    width: 100%;
    margin: 0 auto;
    padding: 0 15px;
`

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 0;
`
export const StyledImg = styled(Image)`

`

export const Row = styled.div`

`

export const ButtonNavbar = styled.button`
    display: none;
    
    @media (max-width: 992px) {
        display: block;
    }
`

export const NavBarCollapse = styled.div`

    @media (max-width: 992px){
        display: none;
    }

`

export const ListLinks = styled.ul`
    display: flex;
    list-style: none;
    padding: 0;

    @media (max-width: 992px) {
        flex-direction: column;
    }
`

export const NavItem = styled.li`

`

export const NavLink = styled.a`
    font-weight: 700;
    font-size: 0.875rem;
    color: #3c404c;
    margin: 8px;
    text-transform: uppercase;
    cursor: pointer;
`

export const DisplayFaqShow = styled.div`
    display: none;

    @media (max-width: 992px) {
        display: block;
    }
`

export const DisplayFaq = styled.div`
    @media (max-width: 992px){
        display: none;
    }
`

export const FaqBtn = styled.a`
    border-radius: 25px;
    padding: 0.7rem 2rem;
    font-size: 0.875rem;
    text-transform: uppercase;
    font-weight: 600;
    color: #FFF;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #0096DA;
    border-color: #0096DA;
`