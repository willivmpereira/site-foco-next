import { UrlObject } from "url";
import * as S from "./styled";
import Link from 'next/link'

interface IButtonMoreDetails {
    linkHref: UrlObject | string;
    title?: string;
}

export const ButtonDetails = ({ linkHref, title }: IButtonMoreDetails) => {
    return(
        <>
            <Link href={linkHref}>
                <S.Abuttn>{title}</S.Abuttn>
            </Link>
        </>
    )
};
