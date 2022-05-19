import * as S from "./styled";
import Link from "next/link";

export default function Footer() {
    return (
        <S.Footer>
            <S.Container>
                <S.Row>
                    <S.ContentLogo>
                        <Link href="/">
                            <>
                            {/* <S.ContentLogoImg src="#" alt="/" /> */}
                            <p>Lorem, ipsum dolor.</p>
                            </>
                        </Link>
                    </S.ContentLogo>
                </S.Row>
            </S.Container>
            <S.ContentSocial>
                <S.ContentSocialLinks>
                    <S.ContentSocialLinksUl>
                        <S.ContentSocialLinksLi>
                            <S.ContentSocialLinksA href="/">facebook</S.ContentSocialLinksA>
                        </S.ContentSocialLinksLi>
                    </S.ContentSocialLinksUl>
                </S.ContentSocialLinks>
            </S.ContentSocial>
             <S.FooterCopy>
             <S.Container>
                 <S.Row>
                     {/* <div className="col-4">
                         <span>
                             2021 desenvolvi
                         </span>
                         <img src="/" alt="/" />
                         Foco multidimia
                     </div>
                     <div className="col-4">
                         <span>
                             <Link href="/">Widghets</Link>
                             |
                             <Link href="/">Politica e prov</Link>
                         </span>
                     </div>
                     <div className="col-4">
                         <img src="/" alt="/" />
                     </div> */}
                 </S.Row>
             </S.Container>
         </S.FooterCopy>
        </S.Footer>
    );
}
