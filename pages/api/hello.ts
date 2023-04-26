// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import admin from "../../lib/firebaseAdmin";

async function addCustomClaimsToUser(uid: string, role: "teacher" | "user") {
  const res = await admin.auth().setCustomUserClaims(uid, { userRole: role });
  console.log(`Custom claims added to user ${uid}`, admin.auth());
  return res;
}

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  // const nn = await addCustomClaimsToUser('BfogrP0V1POnIzBTdyME7csyiH42')

  if (req.method === "POST") {
    const body = JSON.parse(req.body);
    try {
      const uid = body.uid;
      const userRole = body.userRole;
      const response = await addCustomClaimsToUser(uid, userRole);
      res.status(200).json(response);
    } catch (e: any) {
      res.status(500).json(e.message);
    }
  }
  res.status(200).json("private");

  // res.status(200).json({ name: nn })
}
