import { IncomingMessage, ServerResponse } from 'http'
import DB from '@database'
const allAvos = async (req: IncomingMessage, res: ServerResponse) => {
  const db = new DB()
  const allElements = await db.getAll()
  const length = allElements.length
  res.statusCode = 200 //ok
  res.setHeader('Content-type', 'application/json')
  res.end(JSON.stringify({ data: allElements, length }))
}
export default allAvos
