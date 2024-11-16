import type { PlatformaticApp, PlatformaticDBMixin, PlatformaticDBConfig, Entity, Entities, EntityHooks } from '@platformatic/db'
import { EntityTypes, File,FileExtraction } from './types'

declare module 'fastify' {
  interface FastifyInstance {
    getSchema<T extends 'File' | 'FileExtraction'>(schemaId: T): {
      '$id': string,
      title: string,
      description: string,
      type: string,
      properties: {
        [x in keyof EntityTypes[T]]: { type: string, nullable?: boolean }
      },
      required: string[]
    };
  }
}

interface AppEntities extends Entities {
  file: Entity<File>,
    fileExtraction: Entity<FileExtraction>,
}

interface AppEntityHooks {
  addEntityHooks(entityName: 'file', hooks: EntityHooks<File>): any
    addEntityHooks(entityName: 'fileExtraction', hooks: EntityHooks<FileExtraction>): any
}

declare module 'fastify' {
  interface FastifyInstance {
    platformatic: PlatformaticApp<PlatformaticDBConfig> &
      PlatformaticDBMixin<AppEntities> &
      AppEntityHooks
  }
}
