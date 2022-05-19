import * as S from "./styled";
import Title from "../Title";
import { Container } from "../Container";
import React from "react";
import YouTube, { YouTubeProps } from "react-youtube";

export default function InfoHome() {
    const onPlayerReady: YouTubeProps["onReady"] = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    };

    const opts: YouTubeProps["opts"] = {
        height: "268",
        width: "100%",
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
            origin: "http://localhost:3000",
        },
    };
    return (
        <S.InfoHome>
            <Container>
                <Title text="O que é o " textBold="Descomplica" />
                <S.Row>
                    <S.contentInfo>
                        <S.Description>
                            Criado para ampliar o conhecimento e facilitar o
                            acesso à informação, o curso de hotelaria
                            descomplica é o ambiente que reune todo conteúdo já
                            apresentado e o que ainda está por vir. Webinars com
                            parceiros conectados e orientação sobre as nossas
                            ferramentas, permitindo que os usuários dos sistemas
                            da Foco possam aprender de forma clara e direta.
                        </S.Description>
                    </S.contentInfo>
                    <S.contentVideo>
                        <YouTube
                            videoId="T1emn-l-k0k"
                            opts={opts}
                            onReady={onPlayerReady}
                        />
                    </S.contentVideo>
                </S.Row>
            </Container>
        </S.InfoHome>
    );
}
