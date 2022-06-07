import styled from "styled-components";

export const InfoHome = styled.div`
    padding: 3rem 0;
`

export const Container = styled.div`
    max-width: 1140px;
    width: 100%;
    margin: 0 auto;
`

export const Row = styled.div`
    margin: 30px 0 0 0;
    padding: 40px 30px;
    border: solid 1px #EFEFEF;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 1rem;
    justify-content: center;
    align-items: center;

    @media (max-width: 992px) {
        grid-template-columns: 1fr;
    }
`

export const contentInfo = styled.div`

`

export const contentVideo = styled.div`

`

export const Description = styled.p`
    line-height: 1.8;
    font-size: 1.25rem;
`
