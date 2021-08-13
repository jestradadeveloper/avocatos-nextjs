import { NextApiRequest, NextApiResponse } from 'next'
import DB from '@database'

const allAvos = async (request: NextApiRequest, res: NextApiResponse) => {
  const db = new DB()
  const id = request.query.id
  const avo = await db.getById(id as string)
  //res.statusCode = 200 //ok
  //res.setHeader('Content-type','application/json')
  //res.end(JSON.stringify({ data:element}))
  res.status(200).json(avo)
}
export default allAvos
