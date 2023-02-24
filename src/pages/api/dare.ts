// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import dareJsonData from "../../assets/dare.json";

type Data = {
  id: number;
  text: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const randomIndex = Math.floor(Math.random() * dareJsonData.length);
  const randomDare = dareJsonData[randomIndex];
  res.status(200).json({ id: randomIndex, text: randomDare });
}
