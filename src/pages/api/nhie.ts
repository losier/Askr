// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import NHIEJsonData from "../../assets/never_have_i_ever.json";

type Data = {
  id: number;
  text: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const randomIndex = Math.floor(Math.random() * NHIEJsonData.length);
  const randomNHIE = NHIEJsonData[randomIndex];
  res.status(200).json({ id: randomIndex, text: randomNHIE });
}
