import React from "react";
import * as S from "./styled";

interface IContainerProps {
    children: React.ReactElement[] | React.ReactElement;
}

export const Container = ({ children }: IContainerProps) => {
    return <S.Container>{children}</S.Container>;
};
