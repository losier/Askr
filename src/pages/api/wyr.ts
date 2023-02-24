// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import wyrJsonData from "../../assets/would_you_rather.json";

type Data = {
  id: number;
  text: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const randomIndex = Math.floor(Math.random() * wyrJsonData.length);
  const randomWYR = wyrJsonData[randomIndex];
  res.status(200).json({ id: randomIndex, text: randomWYR });
}
