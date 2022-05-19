import Title from "../Title";
import * as S from "./styled";
import Link from "next/link";
import Image from "next/image";

import gestoCanaisImg from "../../../public/img/booking.png";
import { Container } from '../Container/index';

export default function Partners() {
    return (
        <>
            <Title text="Confira nossos " textBold="parceiros" />
            <Container>
                <S.Row>
                    {Array.from({ length: 4 }).map((_, index) => (
                        <S.StyledImg
                            key={index}
                            src={gestoCanaisImg}
                            alt="Imagem Foco"
                            width={228}
                            height={80}
                            layout="responsive"
                        />
                    ))}
                </S.Row>
            </Container>
        </>
    );
}
