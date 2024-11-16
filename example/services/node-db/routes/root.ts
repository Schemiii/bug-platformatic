/// <reference path="../global.d.ts" />
import { FastifyInstance, FastifyPluginOptions } from 'fastify'

declare module 'fastify' {
  interface FastifyInstance {
    example: string
  }
}

export default async function (fastify: FastifyInstance, opts: FastifyPluginOptions) {
  fastify.get('/:nodeId', async (request, reply) => {
    // get a list of nodes and convert it to a tree
    return { hello: fastify.example }
  })
  fastify.get('/tree', async (request, reply) => {
    // get a list of nodes and convert it to a tree
    return { hello: fastify.example }
  })
}
