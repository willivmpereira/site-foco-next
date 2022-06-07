// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export type DataDescomplica = {
    thumb: string;
    theme: string;
    partner: string;
    date: string;
};

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<DataDescomplica[]>
) {
    res.status(200).json([
        {
            thumb: "https://focomultimidia.com/imgs/home/reservas-hotel.png",
            theme: "A nova conexão da Foco!",
            partner: "Ame",
            date: "29/04/2022",
        },
        {
            thumb: "https://focomultimidia.com/imgs/home/motor-reservas-painel.png",
            theme: "A nova conexão da Foco!",
            partner: "Airbnb",
            date: "29/04/2022",
        },
        {
            thumb: "https://focomultimidia.com/imgs/home/channel-manager-painel.png",
            theme: "Como otimizar seu anúncio.",
            partner: "Ame",
            date: "29/04/2022",
        },
    ]);
}
