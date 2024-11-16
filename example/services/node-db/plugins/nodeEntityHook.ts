/// <reference path="../global.d.ts" />
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
  fastify.platformatic.addEntityHooks("node", {
    save: async (originalSaveMethod, options) => {
      // query some rest api whatever call to enhance your model
      await originalSaveMethod(options);
    },
  });
}
