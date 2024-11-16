import { type FastifyReply, type FastifyPluginAsync } from 'fastify'
import { type GetHeadersOptions } from '@platformatic/client'
import { type FormData } from 'undici'

declare namespace nodeDb {
  export type NodeDb = {
    getNodes(req: GetNodesRequest): Promise<GetNodesResponses>;
    createNode(req: CreateNodeRequest): Promise<CreateNodeResponses>;
    updateNodes(req: UpdateNodesRequest): Promise<UpdateNodesResponses>;
    getNodeById(req: GetNodeByIdRequest): Promise<GetNodeByIdResponses>;
    updateNode(req: UpdateNodeRequest): Promise<UpdateNodeResponses>;
    deleteNodes(req: DeleteNodesRequest): Promise<DeleteNodesResponses>;
    getTree(req: GetTreeRequest): Promise<GetTreeResponses>;
  }
  export interface NodeDbOptions {
    url: string
  }
  export const nodeDb: NodeDbPlugin;
  export { nodeDb as default };
  export interface FullResponse<T, U extends number> {
    'statusCode': U;
    'headers': Record<string, string>;
    'body': T;
  }

  export type GetNodesRequest = {
    'limit'?: number;
    'offset'?: number;
    'totalCount'?: boolean;
    'fields'?: Array<'channelNumber' | 'custom' | 'description' | 'icon' | 'id' | 'name' | 'parentId' | 'referenceId' | 'type' | 'weight'>;
    'where.channelNumber.eq'?: number;
    'where.channelNumber.neq'?: number;
    'where.channelNumber.gt'?: number;
    'where.channelNumber.gte'?: number;
    'where.channelNumber.lt'?: number;
    'where.channelNumber.lte'?: number;
    'where.channelNumber.like'?: number;
    'where.channelNumber.ilike'?: number;
    'where.channelNumber.in'?: string;
    'where.channelNumber.nin'?: string;
    'where.channelNumber.contains'?: string;
    'where.channelNumber.contained'?: string;
    'where.channelNumber.overlaps'?: string;
    'where.custom.eq'?: string;
    'where.custom.neq'?: string;
    'where.custom.gt'?: string;
    'where.custom.gte'?: string;
    'where.custom.lt'?: string;
    'where.custom.lte'?: string;
    'where.custom.like'?: string;
    'where.custom.ilike'?: string;
    'where.custom.in'?: string;
    'where.custom.nin'?: string;
    'where.custom.contains'?: string;
    'where.custom.contained'?: string;
    'where.custom.overlaps'?: string;
    'where.description.eq'?: string;
    'where.description.neq'?: string;
    'where.description.gt'?: string;
    'where.description.gte'?: string;
    'where.description.lt'?: string;
    'where.description.lte'?: string;
    'where.description.like'?: string;
    'where.description.ilike'?: string;
    'where.description.in'?: string;
    'where.description.nin'?: string;
    'where.description.contains'?: string;
    'where.description.contained'?: string;
    'where.description.overlaps'?: string;
    'where.icon.eq'?: string;
    'where.icon.neq'?: string;
    'where.icon.gt'?: string;
    'where.icon.gte'?: string;
    'where.icon.lt'?: string;
    'where.icon.lte'?: string;
    'where.icon.like'?: string;
    'where.icon.ilike'?: string;
    'where.icon.in'?: string;
    'where.icon.nin'?: string;
    'where.icon.contains'?: string;
    'where.icon.contained'?: string;
    'where.icon.overlaps'?: string;
    'where.id.eq'?: number;
    'where.id.neq'?: number;
    'where.id.gt'?: number;
    'where.id.gte'?: number;
    'where.id.lt'?: number;
    'where.id.lte'?: number;
    'where.id.like'?: number;
    'where.id.ilike'?: number;
    'where.id.in'?: string;
    'where.id.nin'?: string;
    'where.id.contains'?: string;
    'where.id.contained'?: string;
    'where.id.overlaps'?: string;
    'where.name.eq'?: string;
    'where.name.neq'?: string;
    'where.name.gt'?: string;
    'where.name.gte'?: string;
    'where.name.lt'?: string;
    'where.name.lte'?: string;
    'where.name.like'?: string;
    'where.name.ilike'?: string;
    'where.name.in'?: string;
    'where.name.nin'?: string;
    'where.name.contains'?: string;
    'where.name.contained'?: string;
    'where.name.overlaps'?: string;
    'where.parentId.eq'?: string;
    'where.parentId.neq'?: string;
    'where.parentId.gt'?: string;
    'where.parentId.gte'?: string;
    'where.parentId.lt'?: string;
    'where.parentId.lte'?: string;
    'where.parentId.like'?: string;
    'where.parentId.ilike'?: string;
    'where.parentId.in'?: string;
    'where.parentId.nin'?: string;
    'where.parentId.contains'?: string;
    'where.parentId.contained'?: string;
    'where.parentId.overlaps'?: string;
    'where.referenceId.eq'?: string;
    'where.referenceId.neq'?: string;
    'where.referenceId.gt'?: string;
    'where.referenceId.gte'?: string;
    'where.referenceId.lt'?: string;
    'where.referenceId.lte'?: string;
    'where.referenceId.like'?: string;
    'where.referenceId.ilike'?: string;
    'where.referenceId.in'?: string;
    'where.referenceId.nin'?: string;
    'where.referenceId.contains'?: string;
    'where.referenceId.contained'?: string;
    'where.referenceId.overlaps'?: string;
    'where.type.eq'?: string;
    'where.type.neq'?: string;
    'where.type.gt'?: string;
    'where.type.gte'?: string;
    'where.type.lt'?: string;
    'where.type.lte'?: string;
    'where.type.like'?: string;
    'where.type.ilike'?: string;
    'where.type.in'?: string;
    'where.type.nin'?: string;
    'where.type.contains'?: string;
    'where.type.contained'?: string;
    'where.type.overlaps'?: string;
    'where.weight.eq'?: number;
    'where.weight.neq'?: number;
    'where.weight.gt'?: number;
    'where.weight.gte'?: number;
    'where.weight.lt'?: number;
    'where.weight.lte'?: number;
    'where.weight.like'?: number;
    'where.weight.ilike'?: number;
    'where.weight.in'?: string;
    'where.weight.nin'?: string;
    'where.weight.contains'?: string;
    'where.weight.contained'?: string;
    'where.weight.overlaps'?: string;
    'where.or'?: Array<string>;
    'orderby.channelNumber'?: 'asc' | 'desc';
    'orderby.custom'?: 'asc' | 'desc';
    'orderby.description'?: 'asc' | 'desc';
    'orderby.icon'?: 'asc' | 'desc';
    'orderby.id'?: 'asc' | 'desc';
    'orderby.name'?: 'asc' | 'desc';
    'orderby.parentId'?: 'asc' | 'desc';
    'orderby.referenceId'?: 'asc' | 'desc';
    'orderby.type'?: 'asc' | 'desc';
    'orderby.weight'?: 'asc' | 'desc';
  }

  export type GetNodesResponseOK = Array<{ 'id'?: number | null; 'name'?: string | null; 'type'?: string | null; 'parentId'?: string | null; 'custom'?: string | null; 'weight'?: number | null; 'icon'?: string | null; 'referenceId'?: string | null; 'description'?: string | null; 'channelNumber'?: number | null }>
  export type GetNodesResponses =
    GetNodesResponseOK

  export type CreateNodeRequest = {
    'id'?: number;
    'name'?: string | null;
    'type': string;
    'parentId'?: string | null;
    'custom'?: string | null;
    'weight'?: number | null;
    'icon'?: string | null;
    'referenceId'?: string | null;
    'description'?: string | null;
    'channelNumber'?: number | null;
  }

  export type CreateNodeResponseOK = { 'id'?: number | null; 'name'?: string | null; 'type'?: string | null; 'parentId'?: string | null; 'custom'?: string | null; 'weight'?: number | null; 'icon'?: string | null; 'referenceId'?: string | null; 'description'?: string | null; 'channelNumber'?: number | null }
  export type CreateNodeResponses =
    CreateNodeResponseOK

  export type UpdateNodesRequest = {
    'fields'?: Array<'channelNumber' | 'custom' | 'description' | 'icon' | 'id' | 'name' | 'parentId' | 'referenceId' | 'type' | 'weight'>;
    'where.channelNumber.eq'?: number;
    'where.channelNumber.neq'?: number;
    'where.channelNumber.gt'?: number;
    'where.channelNumber.gte'?: number;
    'where.channelNumber.lt'?: number;
    'where.channelNumber.lte'?: number;
    'where.channelNumber.like'?: number;
    'where.channelNumber.ilike'?: number;
    'where.channelNumber.in'?: string;
    'where.channelNumber.nin'?: string;
    'where.channelNumber.contains'?: string;
    'where.channelNumber.contained'?: string;
    'where.channelNumber.overlaps'?: string;
    'where.custom.eq'?: string;
    'where.custom.neq'?: string;
    'where.custom.gt'?: string;
    'where.custom.gte'?: string;
    'where.custom.lt'?: string;
    'where.custom.lte'?: string;
    'where.custom.like'?: string;
    'where.custom.ilike'?: string;
    'where.custom.in'?: string;
    'where.custom.nin'?: string;
    'where.custom.contains'?: string;
    'where.custom.contained'?: string;
    'where.custom.overlaps'?: string;
    'where.description.eq'?: string;
    'where.description.neq'?: string;
    'where.description.gt'?: string;
    'where.description.gte'?: string;
    'where.description.lt'?: string;
    'where.description.lte'?: string;
    'where.description.like'?: string;
    'where.description.ilike'?: string;
    'where.description.in'?: string;
    'where.description.nin'?: string;
    'where.description.contains'?: string;
    'where.description.contained'?: string;
    'where.description.overlaps'?: string;
    'where.icon.eq'?: string;
    'where.icon.neq'?: string;
    'where.icon.gt'?: string;
    'where.icon.gte'?: string;
    'where.icon.lt'?: string;
    'where.icon.lte'?: string;
    'where.icon.like'?: string;
    'where.icon.ilike'?: string;
    'where.icon.in'?: string;
    'where.icon.nin'?: string;
    'where.icon.contains'?: string;
    'where.icon.contained'?: string;
    'where.icon.overlaps'?: string;
    'where.id.eq'?: number;
    'where.id.neq'?: number;
    'where.id.gt'?: number;
    'where.id.gte'?: number;
    'where.id.lt'?: number;
    'where.id.lte'?: number;
    'where.id.like'?: number;
    'where.id.ilike'?: number;
    'where.id.in'?: string;
    'where.id.nin'?: string;
    'where.id.contains'?: string;
    'where.id.contained'?: string;
    'where.id.overlaps'?: string;
    'where.name.eq'?: string;
    'where.name.neq'?: string;
    'where.name.gt'?: string;
    'where.name.gte'?: string;
    'where.name.lt'?: string;
    'where.name.lte'?: string;
    'where.name.like'?: string;
    'where.name.ilike'?: string;
    'where.name.in'?: string;
    'where.name.nin'?: string;
    'where.name.contains'?: string;
    'where.name.contained'?: string;
    'where.name.overlaps'?: string;
    'where.parentId.eq'?: string;
    'where.parentId.neq'?: string;
    'where.parentId.gt'?: string;
    'where.parentId.gte'?: string;
    'where.parentId.lt'?: string;
    'where.parentId.lte'?: string;
    'where.parentId.like'?: string;
    'where.parentId.ilike'?: string;
    'where.parentId.in'?: string;
    'where.parentId.nin'?: string;
    'where.parentId.contains'?: string;
    'where.parentId.contained'?: string;
    'where.parentId.overlaps'?: string;
    'where.referenceId.eq'?: string;
    'where.referenceId.neq'?: string;
    'where.referenceId.gt'?: string;
    'where.referenceId.gte'?: string;
    'where.referenceId.lt'?: string;
    'where.referenceId.lte'?: string;
    'where.referenceId.like'?: string;
    'where.referenceId.ilike'?: string;
    'where.referenceId.in'?: string;
    'where.referenceId.nin'?: string;
    'where.referenceId.contains'?: string;
    'where.referenceId.contained'?: string;
    'where.referenceId.overlaps'?: string;
    'where.type.eq'?: string;
    'where.type.neq'?: string;
    'where.type.gt'?: string;
    'where.type.gte'?: string;
    'where.type.lt'?: string;
    'where.type.lte'?: string;
    'where.type.like'?: string;
    'where.type.ilike'?: string;
    'where.type.in'?: string;
    'where.type.nin'?: string;
    'where.type.contains'?: string;
    'where.type.contained'?: string;
    'where.type.overlaps'?: string;
    'where.weight.eq'?: number;
    'where.weight.neq'?: number;
    'where.weight.gt'?: number;
    'where.weight.gte'?: number;
    'where.weight.lt'?: number;
    'where.weight.lte'?: number;
    'where.weight.like'?: number;
    'where.weight.ilike'?: number;
    'where.weight.in'?: string;
    'where.weight.nin'?: string;
    'where.weight.contains'?: string;
    'where.weight.contained'?: string;
    'where.weight.overlaps'?: string;
    'where.or'?: Array<string>;
    'id'?: number;
    'name'?: string | null;
    'type': string;
    'parentId'?: string | null;
    'custom'?: string | null;
    'weight'?: number | null;
    'icon'?: string | null;
    'referenceId'?: string | null;
    'description'?: string | null;
    'channelNumber'?: number | null;
  }

  export type UpdateNodesResponseOK = Array<{ 'id'?: number | null; 'name'?: string | null; 'type'?: string | null; 'parentId'?: string | null; 'custom'?: string | null; 'weight'?: number | null; 'icon'?: string | null; 'referenceId'?: string | null; 'description'?: string | null; 'channelNumber'?: number | null }>
  export type UpdateNodesResponses =
    UpdateNodesResponseOK

  export type GetNodeByIdRequest = {
    'fields'?: Array<'channelNumber' | 'custom' | 'description' | 'icon' | 'id' | 'name' | 'parentId' | 'referenceId' | 'type' | 'weight'>;
    'id': number;
  }

  export type GetNodeByIdResponseOK = { 'id'?: number | null; 'name'?: string | null; 'type'?: string | null; 'parentId'?: string | null; 'custom'?: string | null; 'weight'?: number | null; 'icon'?: string | null; 'referenceId'?: string | null; 'description'?: string | null; 'channelNumber'?: number | null }
  export type GetNodeByIdResponses =
    GetNodeByIdResponseOK

  export type UpdateNodeRequest = {
    'fields'?: Array<'channelNumber' | 'custom' | 'description' | 'icon' | 'id' | 'name' | 'parentId' | 'referenceId' | 'type' | 'weight'>;
    'id': number;
    'name'?: string | null;
    'type': string;
    'parentId'?: string | null;
    'custom'?: string | null;
    'weight'?: number | null;
    'icon'?: string | null;
    'referenceId'?: string | null;
    'description'?: string | null;
    'channelNumber'?: number | null;
  }

  export type UpdateNodeResponseOK = { 'id'?: number | null; 'name'?: string | null; 'type'?: string | null; 'parentId'?: string | null; 'custom'?: string | null; 'weight'?: number | null; 'icon'?: string | null; 'referenceId'?: string | null; 'description'?: string | null; 'channelNumber'?: number | null }
  export type UpdateNodeResponses =
    UpdateNodeResponseOK

  export type DeleteNodesRequest = {
    'fields'?: Array<'channelNumber' | 'custom' | 'description' | 'icon' | 'id' | 'name' | 'parentId' | 'referenceId' | 'type' | 'weight'>;
    'id': number;
  }

  export type DeleteNodesResponseOK = { 'id'?: number | null; 'name'?: string | null; 'type'?: string | null; 'parentId'?: string | null; 'custom'?: string | null; 'weight'?: number | null; 'icon'?: string | null; 'referenceId'?: string | null; 'description'?: string | null; 'channelNumber'?: number | null }
  export type DeleteNodesResponses =
    DeleteNodesResponseOK

  export type GetTreeRequest = {
    
  }

  export type GetTreeResponseOK = unknown
  export type GetTreeResponses =
    FullResponse<GetTreeResponseOK, 200>

}

type NodeDbPlugin = FastifyPluginAsync<NonNullable<nodeDb.NodeDbOptions>>

declare module 'fastify' {
  interface ConfigureNodeDb {
    getHeaders(req: FastifyRequest, reply: FastifyReply, options: GetHeadersOptions): Promise<Record<string,string>>;
  }
  interface FastifyInstance {
    configureNodeDb(opts: ConfigureNodeDb): unknown
  }

  interface FastifyRequest {
    'nodeDb': nodeDb.NodeDb;
  }
}

declare function nodeDb(...params: Parameters<NodeDbPlugin>): ReturnType<NodeDbPlugin>;
export = nodeDb;
