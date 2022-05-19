import * as S from "./styled";
import Link from "next/link";
import { Container } from "../Container/index";

export default function NavBar() {
    return (
        <S.TopNavBar>
            <Container>
                <S.Nav>
                    <S.NavLink href="/">
                        <S.StyledImg
                            src={"/img/descomplica_horizontal.png"}
                            alt="Logo Descomplica"
                            width={230}
                            height={55}
                            layout="responsive"
                        />
                    </S.NavLink>
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
                        </S.ListLinks>
                    </S.NavBarCollapse>
                    <Link href="#">
                        <S.FaqBtn>Central de ajuda</S.FaqBtn>
                    </Link>
                </S.Nav>
            </Container>
        </S.TopNavBar>
    );
}
