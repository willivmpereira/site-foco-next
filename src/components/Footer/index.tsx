import * as S from "./styled";
import Link from "next/link";
import { FaFacebookF, FaBloggerB } from "react-icons/fa";
import {
    AiFillInstagram,
    AiOutlineTwitter,
    AiFillYoutube,
} from "react-icons/ai";

import logoDescomplica from "../../../public/img/verificacao.png";
import { Container } from "../Container";

export default function Footer() {
    return (
        <>
            <S.Footer>
                <Container>
                    <S.RowFooter>
                        <S.ContentLogo>
                            <Link href="/">
                                <S.ContentLogoData>
                                    <S.ContentLogoImg
                                        src={"/img/logo-foco.png"}
                                        alt="Card thumb"
                                        width={116}
                                        height={43}
                                        // layout="raw"
                                    />
                                    <S.LineContent></S.LineContent>
                                    <S.ContentLogoText>
                                        DFG Produções LTDA
                                        <br />
                                        CNPJ: 08.372.087/0001-30
                                        <br />
                                        <S.ContentLinkData href="oi">
                                            (71) 3013.2022
                                        </S.ContentLinkData>
                                        <br />
                                        <S.ContentLinkData href="oi">
                                            comercial@focomultimidia.com
                                        </S.ContentLinkData>
                                    </S.ContentLogoText>
                                </S.ContentLogoData>
                            </Link>
                        </S.ContentLogo>
                        <S.ContentSocial>
                            <S.ContentSocialLinks>
                                <S.ContentSocialLinksUl>
                                    <S.ContentSocialLinksLi>
                                        <S.ContentSocialLinksLink href="https://www.facebook.com/focotecnologiaemarketing/">
                                            <a target="_blank">
                                                <FaFacebookF color="#7c8391" />
                                            </a>
                                        </S.ContentSocialLinksLink>
                                    </S.ContentSocialLinksLi>
                                    <S.ContentSocialLinksLi>
                                        <S.ContentSocialLinksLink href="https://www.instagram.com/focomultimidia/">
                                            <a target="_blank">
                                                <AiFillInstagram color="#7c8391" />
                                            </a>
                                        </S.ContentSocialLinksLink>
                                    </S.ContentSocialLinksLi>
                                    <S.ContentSocialLinksLi>
                                        <S.ContentSocialLinksLink href="https://www.youtube.com/channel/UCufhGIuMoV3ASJxaOR4Ci_Q">
                                            <a target="_blank">
                                                <AiFillYoutube color="#7c8391" />
                                            </a>
                                        </S.ContentSocialLinksLink>
                                    </S.ContentSocialLinksLi>
                                    <S.ContentSocialLinksLi>
                                        <S.ContentSocialLinksLink href="https://twitter.com/FocoMultimidia_">
                                            <a target="_blank">
                                                <AiOutlineTwitter color="#7c8391" />
                                            </a>
                                        </S.ContentSocialLinksLink>
                                    </S.ContentSocialLinksLi>
                                    <S.ContentSocialLinksLi>
                                        <S.ContentSocialLinksLink href="https://blog.focomultimidia.com/">
                                            <a target="_blank">
                                                <FaBloggerB color="#7c8391" />
                                            </a>
                                        </S.ContentSocialLinksLink>
                                    </S.ContentSocialLinksLi>
                                </S.ContentSocialLinksUl>
                            </S.ContentSocialLinks>
                        </S.ContentSocial>
                    </S.RowFooter>
                </Container>
            </S.Footer>
            <S.FooterCopy>
                <S.Container>
                    <S.RowCopy>
                        <S.ContentInfoFooter>
                            <S.SpanFooterInfo>
                                2021 Desenvolvido por:
                                <S.LogoMiniFooter
                                    src={"/img/foco.png"}
                                    alt="Logo Foco Multimídia"
                                    width={21}
                                    height={21}
                                />
                                Foco Multimidia
                            </S.SpanFooterInfo>
                        </S.ContentInfoFooter>
                        <S.ContentInfoFooter>
                            <S.SpanFooterInfo>
                                <Link href="/">Política de privacidade</Link>
                            </S.SpanFooterInfo>
                        </S.ContentInfoFooter>
                        <S.ContentInfoFooter>
                            <S.ImageVerificaton
                                src={logoDescomplica}
                                alt="Logo Foco Multimídia"
                                width={215}
                                height={47}
                            />
                        </S.ContentInfoFooter>
                    </S.RowCopy>
                </S.Container>
            </S.FooterCopy>
        </>
    );
}
