import * as S from "./styled";
import Title from "../Title";
import Link from "next/link";
import { RenderIf } from "../RenderIf";
import { useEffect, useState } from "react";
import { Container } from "../Container/index";
import { ButtonDetails } from "../ButtonDetails";
import { DataDescomplica } from "../../pages/api/descomplica-data";



export default function NextEvents() {
    const [descomplicaData, setDescomplicaData] = useState<DataDescomplica[]>();

    useEffect(() => {
        fetch("/api/descomplica-data")
            .then((response) => response.json())
            .then((data) => {
                setDescomplicaData(data);
            });
    }, []);

    return (
        <S.NextEvents>
            <Container>
                <Title text="Próximos " textBold="eventos" />
                <S.Row>
                    {descomplicaData?.map((data, index) => (
                        <S.CardContent key={index}>
                            <S.CardThumb>
                                <S.CardFigure>
                                    <RenderIf condition={!!data?.thumb}>
                                        <S.CardInfoImg
                                            src={data?.thumb}
                                            alt="Avatar image"
                                            width={351}
                                            height={351}
                                            layout="responsive"
                                        />
                                    </RenderIf>
                                </S.CardFigure>
                            </S.CardThumb>
                            <S.CardInfo>
                                <S.CardInfoTitle>oi</S.CardInfoTitle>
                                <S.CardInfoPartner>
                                    Parceiro: {data.partner}
                                </S.CardInfoPartner>
                                <S.CardInfoDate>Data: {data?.date}</S.CardInfoDate>
                                <S.CardInfoDivider />
                                <Link href="/">
                                    <S.CardInfoLink>Assistir</S.CardInfoLink>
                                </Link>
                            </S.CardInfo>
                        </S.CardContent>
                    ))}
                </S.Row>
                <S.RowButtonMoreDetails>
                    <ButtonDetails linkHref="/oque-e" title="Ver mais" />
                </S.RowButtonMoreDetails>
            </Container>
        </S.NextEvents>
    );
}
