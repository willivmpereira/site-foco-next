import Title from "../Title";
import * as S from "./styled";

import Booking from "../../../public/img/booking.png";
import Expedia from "../../../public/img/expedia.png";
import Airbnb from "../../../public/img/airbnb.png";
import eHtl from "../../../public/img/e-htl.png";

import { Container } from "../Container/index";

export default function Partners() {
    return (
        <>
            <S.InfoPartners>
                <Title text="Confira nossos " textBold="parceiros" />
                <Container>
                    <S.Row>
                        {/* {Array.from({ length: 4 }).map((_, index) => (
                            <S.StyledImg
                                key={index}
                                src={gestoCanaisImg}
                                alt="Imagem Foco"
                                width={228}
                                height={80}
                                layout="responsive"
                            />
                        ))} */}
                        <S.ImgContent>
                            <S.StyledImg
                                src={Booking}
                                alt="Imagem Foco"
                                width={228}
                                height={80}
                                layout="responsive"
                            />
                        </S.ImgContent>
                        <S.ImgContent>
                        <S.StyledImg
                            src={Expedia}
                            alt="Imagem Foco"
                            width={228}
                            height={80}
                            layout="responsive"
                        />
                        </S.ImgContent>
                        
                        <S.ImgContent>
                        <S.StyledImg
                            src={Airbnb}
                            alt="Imagem Foco"
                            width={228}
                            height={80}
                            layout="responsive"
                        />
                        </S.ImgContent>
                        
                        <S.ImgContent>
                        <S.StyledImg
                            src={eHtl}
                            alt="Imagem Foco"
                            width={228}
                            height={80}
                            layout="responsive"
                        />
                        </S.ImgContent>
                        
                    </S.Row>
                </Container>
            </S.InfoPartners>
        </>
    );
}
