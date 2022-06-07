import styled from "styled-components";

export const Container = styled.div`
    max-width: 1140px;
    width: 100%;
    margin: 0 auto;
    padding: 0 15px;

    @media (max-width: 992px) {
        max-width: 960px;
    }

    @media (max-width: 768px) {
        max-width: 720px;
    }

    @media (max-width: 576px) {
        max-width: 540px;
    }

    

`