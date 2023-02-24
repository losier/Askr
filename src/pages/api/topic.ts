// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import topicJsonData from "../../assets/truth.json";

type Data = {
  id: number;
  text: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const randomIndex = Math.floor(Math.random() * topicJsonData.length);
  const randomTopic = topicJsonData[randomIndex];
  res.status(200).json({ id: randomIndex, text: randomTopic });
}
