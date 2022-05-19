import * as S from './styled';  
import gestoCanaisImg from '../../../public/img/gestor-de-canais-topo.png';
import { Container } from '../Container/index';

export default function Header(){
    return (
        <S.Header>
            <Container>
                <S.Grid>
                    <S.ContentInfo>
                        <S.TitleH1>Cursos de Hotelaria: Descomplique agora o conhecimento dos colaboradores do seu meio de hospedagem.</S.TitleH1>
                        <S.SubtitleH2>Explore ao máximo as suas ferramentas de venda e fique por dentro das novidades com o Descomplica da Foco Tecnologia e Marketing.</S.SubtitleH2>
                    </S.ContentInfo>

                    <S.ContentBanner>
                        <S.ContentBannerImg 
                            src={gestoCanaisImg} 
                                alt="Imagem Foco" 
                                width={603} 
                                height={411}
                                layout="responsive"  />
                    </S.ContentBanner>
                </S.Grid>
            </Container>
        </S.Header>
    )
}