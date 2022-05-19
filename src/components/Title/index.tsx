import * as S from "./styled";
import { Container } from '../Container/index';

interface ITitleProps {
    text: string;
    textBold: string;
}

export default function Title({ text, textBold }: ITitleProps) {
    return (
        <>
            <Container>
                <S.custonTitle>
                    <S.custonTitleH4>
                        {text} <strong>{textBold}  </strong>
                    </S.custonTitleH4>
                </S.custonTitle>
            </Container>
        </>
    );
}
