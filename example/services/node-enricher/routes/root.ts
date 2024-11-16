/// <reference path="../global.d.ts" />
/// <reference path="../node-db/node-db.d.ts" />
import { FastifyInstance, FastifyPluginOptions } from "fastify";

declare module "fastify" {
  interface FastifyInstance {
    example: string;
  }
}

export default async function (
  fastify: FastifyInstance,
  opts: FastifyPluginOptions,
) {
  console.log(opts.apiKeyOpenAi);
  fastify.get("/example", async (request, reply) => {
    return request.nodeDb.getNodes({});
  });
}
