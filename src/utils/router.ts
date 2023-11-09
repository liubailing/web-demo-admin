import { NextApiRequest, NextApiResponse } from 'next'
import { HandlerOptions, createRouter } from 'next-connect'
import { NodeRouter } from 'next-connect/dist/types/node'

export const handlerOptions: HandlerOptions<(req: NextApiRequest, resp: NextApiResponse) => void> = {
  onError: (er, _, resp) => {
    console.log(`-------------- onError`)
    let message = 'server error'
    if (er instanceof Error) {
      message = er.message
    }
    console.error(message)
    resp.status(500).end(message)
  },
  onNoMatch: (_, resp) => {
    console.log(`-------------- onNoMatch`)
    resp.status(405).end('method not allowed')
  },
}

export const createApiRouter: <T = any>() => NodeRouter<NextApiRequest, NextApiResponse<T>> = () => createRouter()
