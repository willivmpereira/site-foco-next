import * as S from "./styled";
import Title from "../Title";
import Link from "next/link";
import Image from 'next/image'
import { RenderIf } from "../RenderIf";
import { useEffect, useState } from "react";
import { Container } from '../Container/index';

export default function NextEvents() {
  const [data, setData] = useState<any>();

  useEffect(() => {
    fetch("https://api.github.com/users/brouwilliam")
      .then((response) => response.json())
      .then((data) => {
        setData(data)
      });
  }, []);

  return (
    <S.NextEvents>
      <Container>
        <Title text="Próximos " textBold="eventos"  />
        <S.Row>
          {Array.from({ length: 3 }).map((_, index) => (
            <S.CardContent key={index}>
              <S.CardThumb>
                <S.CardFigure>
                  <RenderIf condition={!!data?.avatar_url}>
                    <S.CardInfoImg src={data?.avatar_url} 
                    alt="Avatar image"
                    width={351}
                    height={351}
                    layout="responsive"/>
                  </RenderIf>
                </S.CardFigure>
              </S.CardThumb>
              <S.CardInfo>
                <S.CardInfoTitle>{data?.name}</S.CardInfoTitle>
                <S.CardInfoPartner>Parceiro: Ame</S.CardInfoPartner>
                <S.CardInfoDate>Data: 29/04/2022</S.CardInfoDate>
                <S.CardInfoDivider />
                <Link href="/">
                  <S.CardInfoLink>Assistir</S.CardInfoLink>
                </Link>
              </S.CardInfo>
            </S.CardContent>
          ))}
        </S.Row>
        <div className="row">
          <a href="">Ver mais</a>
        </div>
      </Container>
    </S.NextEvents>
  );
}
