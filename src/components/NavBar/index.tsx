import * as S from "./styled";
import Link from "next/link";
import { Container } from "../Container/index";
import Image from "next/image";
import logoDescomplica from "../../../public/img/descomplica_horizontal.png";

export default function NavBar() {

    function navbarShow(){
        console.log("show");
    }

    return (
        <S.TopNavBar>
            <Container>
                <S.Nav>
                    <Image
                        src={logoDescomplica}
                        alt="Logo Descomplica"
                        width={230}
                        height={55}
                    />
                    
                    <S.ButtonNavbar onClick={navbarShow}>
                        oi
                    </S.ButtonNavbar>
                    <S.NavBarCollapse>
                        <S.ListLinks>
                            <S.NavItem>
                                <Link href="/o-que-e">
                                    <S.NavLink>O que é</S.NavLink>
                                </Link>
                            </S.NavItem>
                            <S.NavItem>
                                <Link href="/proximos-eventos">
                                    <S.NavLink>Próximos eventos</S.NavLink>
                                </Link>
                            </S.NavItem>
                            <S.NavItem>
                                <Link href="/eventos-passados">
                                    <S.NavLink>Eventos passados</S.NavLink>
                                </Link>
                            </S.NavItem>
                            <S.NavItem>
                                <Link href="/parceiros">
                                    <S.NavLink>Parceiros</S.NavLink>
                                </Link>
                            </S.NavItem>
                            <S.DisplayFaqShow>
                                <S.NavItem>
                                    <Link href="/#">
                                    <S.FaqBtn>Central de ajuda</S.FaqBtn>
                                    </Link>
                                </S.NavItem>
                            </S.DisplayFaqShow>
                        </S.ListLinks>
                    </S.NavBarCollapse>
                    <S.DisplayFaq>
                        <Link href="#">
                            <S.FaqBtn>Central de ajuda</S.FaqBtn>
                        </Link>
                    </S.DisplayFaq>
                </S.Nav>
            </Container>
        </S.TopNavBar>
    );
}
