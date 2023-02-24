// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import nicknameJsonData from "../../assets/nickname.json";

type Data = {
  id: number;
  text: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const randomIndex = Math.floor(Math.random() * nicknameJsonData.length);
  const randomName = nicknameJsonData[randomIndex];
  res.status(200).json({ id: randomIndex, text: randomName });
}
