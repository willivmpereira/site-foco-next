import * as S from "./styled";
import Title from "../Title";
import Link from "next/link";
import { Container } from '../Container/index';

export default function PastEvents() {
  return (
    <S.PastEvents>
      <Container>
        <Title  text="Eventos" textBold="Passados"/>
        <S.Row>
          {Array.from({ length: 3 }).map((_, index) => (
            <S.CardContent key={index}>
              <S.CardThumb>
                <S.CardFigure>
                  <S.CardInfoImg
                    src={"/img/1084-200x200.jpg"}
                    alt="Card thumb"
                    width={351}
                    height={351}
                    layout="responsive"
                  />
                </S.CardFigure>
              </S.CardThumb>
              <S.CardInfo>
                <S.CardInfoTitle>A nova conexão da Foco!</S.CardInfoTitle>
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
    </S.PastEvents>
  );
}
