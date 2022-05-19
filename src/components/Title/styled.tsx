import styled from "styled-components";

export const Container = styled.div`
    max-width: 1140px;
    width: 100%;
    margin: 0 auto;
`

export const custonTitle = styled.div`

`

export const custonTitleH4 = styled.h4`
    margin-top: -5px;
    padding-bottom: 10px;
    border-bottom: 1px solid #D8D8D8;
    font-size: 1.875rem;
    color: #3C404C;
    font-weight: 400;
    position: relative;
    

    &:before{
        content: '';
        position: absolute;
        left: 15px;
        bottom: -1px;
        width: 55px;
        height: 2px;
        border-bottom: 2px solid #0096da;
    }
`