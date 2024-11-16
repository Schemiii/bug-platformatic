export interface FullResponse<T, U extends number> {
  'statusCode': U;
  'headers': object;
  'body': T;
}

export type ImportDbGetFileRequest = {
  'limit'?: number;
  'offset'?: number;
  'totalCount'?: boolean;
  'fields'?: Array<'documentType' | 'encoding' | 'hash' | 'id' | 'mimetype' | 'name' | 'path' | 'type'>;
  'where.documentType.eq'?: string;
  'where.documentType.neq'?: string;
  'where.documentType.gt'?: string;
  'where.documentType.gte'?: string;
  'where.documentType.lt'?: string;
  'where.documentType.lte'?: string;
  'where.documentType.like'?: string;
  'where.documentType.in'?: string;
  'where.documentType.nin'?: string;
  'where.documentType.contains'?: string;
  'where.documentType.contained'?: string;
  'where.documentType.overlaps'?: string;
  'where.encoding.eq'?: string;
  'where.encoding.neq'?: string;
  'where.encoding.gt'?: string;
  'where.encoding.gte'?: string;
  'where.encoding.lt'?: string;
  'where.encoding.lte'?: string;
  'where.encoding.like'?: string;
  'where.encoding.in'?: string;
  'where.encoding.nin'?: string;
  'where.encoding.contains'?: string;
  'where.encoding.contained'?: string;
  'where.encoding.overlaps'?: string;
  'where.hash.eq'?: string;
  'where.hash.neq'?: string;
  'where.hash.gt'?: string;
  'where.hash.gte'?: string;
  'where.hash.lt'?: string;
  'where.hash.lte'?: string;
  'where.hash.like'?: string;
  'where.hash.in'?: string;
  'where.hash.nin'?: string;
  'where.hash.contains'?: string;
  'where.hash.contained'?: string;
  'where.hash.overlaps'?: string;
  'where.id.eq'?: number;
  'where.id.neq'?: number;
  'where.id.gt'?: number;
  'where.id.gte'?: number;
  'where.id.lt'?: number;
  'where.id.lte'?: number;
  'where.id.like'?: number;
  'where.id.in'?: string;
  'where.id.nin'?: string;
  'where.id.contains'?: string;
  'where.id.contained'?: string;
  'where.id.overlaps'?: string;
  'where.mimetype.eq'?: string;
  'where.mimetype.neq'?: string;
  'where.mimetype.gt'?: string;
  'where.mimetype.gte'?: string;
  'where.mimetype.lt'?: string;
  'where.mimetype.lte'?: string;
  'where.mimetype.like'?: string;
  'where.mimetype.in'?: string;
  'where.mimetype.nin'?: string;
  'where.mimetype.contains'?: string;
  'where.mimetype.contained'?: string;
  'where.mimetype.overlaps'?: string;
  'where.name.eq'?: string;
  'where.name.neq'?: string;
  'where.name.gt'?: string;
  'where.name.gte'?: string;
  'where.name.lt'?: string;
  'where.name.lte'?: string;
  'where.name.like'?: string;
  'where.name.in'?: string;
  'where.name.nin'?: string;
  'where.name.contains'?: string;
  'where.name.contained'?: string;
  'where.name.overlaps'?: string;
  'where.path.eq'?: string;
  'where.path.neq'?: string;
  'where.path.gt'?: string;
  'where.path.gte'?: string;
  'where.path.lt'?: string;
  'where.path.lte'?: string;
  'where.path.like'?: string;
  'where.path.in'?: string;
  'where.path.nin'?: string;
  'where.path.contains'?: string;
  'where.path.contained'?: string;
  'where.path.overlaps'?: string;
  'where.type.eq'?: string;
  'where.type.neq'?: string;
  'where.type.gt'?: string;
  'where.type.gte'?: string;
  'where.type.lt'?: string;
  'where.type.lte'?: string;
  'where.type.like'?: string;
  'where.type.in'?: string;
  'where.type.nin'?: string;
  'where.type.contains'?: string;
  'where.type.contained'?: string;
  'where.type.overlaps'?: string;
  'where.or'?: Array<string>;
  'orderby.documentType'?: 'asc' | 'desc';
  'orderby.encoding'?: 'asc' | 'desc';
  'orderby.hash'?: 'asc' | 'desc';
  'orderby.id'?: 'asc' | 'desc';
  'orderby.mimetype'?: 'asc' | 'desc';
  'orderby.name'?: 'asc' | 'desc';
  'orderby.path'?: 'asc' | 'desc';
  'orderby.type'?: 'asc' | 'desc';
}

export type ImportDbGetFileResponseOK = Array<{ 'id'?: number | null; 'documentType'?: string | null; 'name'?: string | null; 'encoding'?: string | null; 'mimetype'?: string | null; 'type'?: string | null; 'path'?: string | null; 'hash'?: string | null }>
export type ImportDbGetFileResponses =
  ImportDbGetFileResponseOK

export type ImportDbCreateFileRequest = {
  'id'?: number;
  'documentType': string;
  'name': string;
  'encoding': string;
  'mimetype': string;
  'type': string;
  'path': string;
  'hash': string;
}

export type ImportDbCreateFileResponseOK = {
  'id': number | null;
  'documentType': string | null;
  'name': string | null;
  'encoding': string | null;
  'mimetype': string | null;
  'type': string | null;
  'path': string | null;
  'hash': string | null;
}
export type ImportDbCreateFileResponses =
  ImportDbCreateFileResponseOK

export type ImportDbUpdateFileRequest = {
  'fields'?: Array<'documentType' | 'encoding' | 'hash' | 'id' | 'mimetype' | 'name' | 'path' | 'type'>;
  'where.documentType.eq'?: string;
  'where.documentType.neq'?: string;
  'where.documentType.gt'?: string;
  'where.documentType.gte'?: string;
  'where.documentType.lt'?: string;
  'where.documentType.lte'?: string;
  'where.documentType.like'?: string;
  'where.documentType.in'?: string;
  'where.documentType.nin'?: string;
  'where.documentType.contains'?: string;
  'where.documentType.contained'?: string;
  'where.documentType.overlaps'?: string;
  'where.encoding.eq'?: string;
  'where.encoding.neq'?: string;
  'where.encoding.gt'?: string;
  'where.encoding.gte'?: string;
  'where.encoding.lt'?: string;
  'where.encoding.lte'?: string;
  'where.encoding.like'?: string;
  'where.encoding.in'?: string;
  'where.encoding.nin'?: string;
  'where.encoding.contains'?: string;
  'where.encoding.contained'?: string;
  'where.encoding.overlaps'?: string;
  'where.hash.eq'?: string;
  'where.hash.neq'?: string;
  'where.hash.gt'?: string;
  'where.hash.gte'?: string;
  'where.hash.lt'?: string;
  'where.hash.lte'?: string;
  'where.hash.like'?: string;
  'where.hash.in'?: string;
  'where.hash.nin'?: string;
  'where.hash.contains'?: string;
  'where.hash.contained'?: string;
  'where.hash.overlaps'?: string;
  'where.id.eq'?: number;
  'where.id.neq'?: number;
  'where.id.gt'?: number;
  'where.id.gte'?: number;
  'where.id.lt'?: number;
  'where.id.lte'?: number;
  'where.id.like'?: number;
  'where.id.in'?: string;
  'where.id.nin'?: string;
  'where.id.contains'?: string;
  'where.id.contained'?: string;
  'where.id.overlaps'?: string;
  'where.mimetype.eq'?: string;
  'where.mimetype.neq'?: string;
  'where.mimetype.gt'?: string;
  'where.mimetype.gte'?: string;
  'where.mimetype.lt'?: string;
  'where.mimetype.lte'?: string;
  'where.mimetype.like'?: string;
  'where.mimetype.in'?: string;
  'where.mimetype.nin'?: string;
  'where.mimetype.contains'?: string;
  'where.mimetype.contained'?: string;
  'where.mimetype.overlaps'?: string;
  'where.name.eq'?: string;
  'where.name.neq'?: string;
  'where.name.gt'?: string;
  'where.name.gte'?: string;
  'where.name.lt'?: string;
  'where.name.lte'?: string;
  'where.name.like'?: string;
  'where.name.in'?: string;
  'where.name.nin'?: string;
  'where.name.contains'?: string;
  'where.name.contained'?: string;
  'where.name.overlaps'?: string;
  'where.path.eq'?: string;
  'where.path.neq'?: string;
  'where.path.gt'?: string;
  'where.path.gte'?: string;
  'where.path.lt'?: string;
  'where.path.lte'?: string;
  'where.path.like'?: string;
  'where.path.in'?: string;
  'where.path.nin'?: string;
  'where.path.contains'?: string;
  'where.path.contained'?: string;
  'where.path.overlaps'?: string;
  'where.type.eq'?: string;
  'where.type.neq'?: string;
  'where.type.gt'?: string;
  'where.type.gte'?: string;
  'where.type.lt'?: string;
  'where.type.lte'?: string;
  'where.type.like'?: string;
  'where.type.in'?: string;
  'where.type.nin'?: string;
  'where.type.contains'?: string;
  'where.type.contained'?: string;
  'where.type.overlaps'?: string;
  'where.or'?: Array<string>;
  'id'?: number;
  'documentType': string;
  'name': string;
  'encoding': string;
  'mimetype': string;
  'type': string;
  'path': string;
  'hash': string;
}

export type ImportDbUpdateFileResponseOK = Array<{ 'id'?: number | null; 'documentType'?: string | null; 'name'?: string | null; 'encoding'?: string | null; 'mimetype'?: string | null; 'type'?: string | null; 'path'?: string | null; 'hash'?: string | null }>
export type ImportDbUpdateFileResponses =
  ImportDbUpdateFileResponseOK

export type ImportDbGetFileByIdRequest = {
  'fields'?: Array<'documentType' | 'encoding' | 'hash' | 'id' | 'mimetype' | 'name' | 'path' | 'type'>;
  'id': number;
}

export type ImportDbGetFileByIdResponseOK = {
  'id': number | null;
  'documentType': string | null;
  'name': string | null;
  'encoding': string | null;
  'mimetype': string | null;
  'type': string | null;
  'path': string | null;
  'hash': string | null;
}
export type ImportDbGetFileByIdResponses =
  ImportDbGetFileByIdResponseOK

export type ImportDbUpdateFileRequest = {
  'fields'?: Array<'documentType' | 'encoding' | 'hash' | 'id' | 'mimetype' | 'name' | 'path' | 'type'>;
  'id': number;
  'documentType': string;
  'name': string;
  'encoding': string;
  'mimetype': string;
  'type': string;
  'path': string;
  'hash': string;
}

export type ImportDbUpdateFileResponseOK = {
  'id': number | null;
  'documentType': string | null;
  'name': string | null;
  'encoding': string | null;
  'mimetype': string | null;
  'type': string | null;
  'path': string | null;
  'hash': string | null;
}
export type ImportDbUpdateFileResponses =
  ImportDbUpdateFileResponseOK

export type ImportDbDeleteFileRequest = {
  'fields'?: Array<'documentType' | 'encoding' | 'hash' | 'id' | 'mimetype' | 'name' | 'path' | 'type'>;
  'id': number;
}

export type ImportDbDeleteFileResponseOK = {
  'id': number | null;
  'documentType': string | null;
  'name': string | null;
  'encoding': string | null;
  'mimetype': string | null;
  'type': string | null;
  'path': string | null;
  'hash': string | null;
}
export type ImportDbDeleteFileResponses =
  ImportDbDeleteFileResponseOK

export type ImportDbGetFileExtractionForFileRequest = {
  'fields'?: Array<'content' | 'entities' | 'fileId' | 'id'>;
  'id': number;
}

export type ImportDbGetFileExtractionForFileResponseOK = Array<{ 'id'?: number | null; 'fileId'?: number | null; 'content'?: string | null; 'entities'?: string | null }>
export type ImportDbGetFileExtractionForFileResponses =
  ImportDbGetFileExtractionForFileResponseOK

export type ImportDbGetFileTrainingForFileRequest = {
  'fields'?: Array<'fileId' | 'id' | 'processorPath' | 'status'>;
  'id': number;
}

export type ImportDbGetFileTrainingForFileResponseOK = Array<{ 'id'?: number | null; 'fileId'?: number | null; 'processorPath'?: string | null; 'status'?: string | null }>
export type ImportDbGetFileTrainingForFileResponses =
  ImportDbGetFileTrainingForFileResponseOK

export type ImportDbGetFileExtractionRequest = {
  'limit'?: number;
  'offset'?: number;
  'totalCount'?: boolean;
  'fields'?: Array<'content' | 'entities' | 'fileId' | 'id'>;
  'where.content.eq'?: string;
  'where.content.neq'?: string;
  'where.content.gt'?: string;
  'where.content.gte'?: string;
  'where.content.lt'?: string;
  'where.content.lte'?: string;
  'where.content.like'?: string;
  'where.content.in'?: string;
  'where.content.nin'?: string;
  'where.content.contains'?: string;
  'where.content.contained'?: string;
  'where.content.overlaps'?: string;
  'where.entities.eq'?: string;
  'where.entities.neq'?: string;
  'where.entities.gt'?: string;
  'where.entities.gte'?: string;
  'where.entities.lt'?: string;
  'where.entities.lte'?: string;
  'where.entities.like'?: string;
  'where.entities.in'?: string;
  'where.entities.nin'?: string;
  'where.entities.contains'?: string;
  'where.entities.contained'?: string;
  'where.entities.overlaps'?: string;
  'where.fileId.eq'?: number;
  'where.fileId.neq'?: number;
  'where.fileId.gt'?: number;
  'where.fileId.gte'?: number;
  'where.fileId.lt'?: number;
  'where.fileId.lte'?: number;
  'where.fileId.like'?: number;
  'where.fileId.in'?: string;
  'where.fileId.nin'?: string;
  'where.fileId.contains'?: string;
  'where.fileId.contained'?: string;
  'where.fileId.overlaps'?: string;
  'where.id.eq'?: number;
  'where.id.neq'?: number;
  'where.id.gt'?: number;
  'where.id.gte'?: number;
  'where.id.lt'?: number;
  'where.id.lte'?: number;
  'where.id.like'?: number;
  'where.id.in'?: string;
  'where.id.nin'?: string;
  'where.id.contains'?: string;
  'where.id.contained'?: string;
  'where.id.overlaps'?: string;
  'where.or'?: Array<string>;
  'orderby.content'?: 'asc' | 'desc';
  'orderby.entities'?: 'asc' | 'desc';
  'orderby.fileId'?: 'asc' | 'desc';
  'orderby.id'?: 'asc' | 'desc';
}

export type ImportDbGetFileExtractionResponseOK = Array<{ 'id'?: number | null; 'fileId'?: number | null; 'content'?: string | null; 'entities'?: string | null }>
export type ImportDbGetFileExtractionResponses =
  ImportDbGetFileExtractionResponseOK

export type ImportDbCreateFileExtractionRequest = {
  'id'?: number;
  'fileId': number;
  'content': string;
  'entities': string;
}

export type ImportDbCreateFileExtractionResponseOK = {
  'id': number | null;
  'fileId': number | null;
  'content': string | null;
  'entities': string | null;
}
export type ImportDbCreateFileExtractionResponses =
  ImportDbCreateFileExtractionResponseOK

export type ImportDbUpdateFileExtractionRequest = {
  'fields'?: Array<'content' | 'entities' | 'fileId' | 'id'>;
  'where.content.eq'?: string;
  'where.content.neq'?: string;
  'where.content.gt'?: string;
  'where.content.gte'?: string;
  'where.content.lt'?: string;
  'where.content.lte'?: string;
  'where.content.like'?: string;
  'where.content.in'?: string;
  'where.content.nin'?: string;
  'where.content.contains'?: string;
  'where.content.contained'?: string;
  'where.content.overlaps'?: string;
  'where.entities.eq'?: string;
  'where.entities.neq'?: string;
  'where.entities.gt'?: string;
  'where.entities.gte'?: string;
  'where.entities.lt'?: string;
  'where.entities.lte'?: string;
  'where.entities.like'?: string;
  'where.entities.in'?: string;
  'where.entities.nin'?: string;
  'where.entities.contains'?: string;
  'where.entities.contained'?: string;
  'where.entities.overlaps'?: string;
  'where.fileId.eq'?: number;
  'where.fileId.neq'?: number;
  'where.fileId.gt'?: number;
  'where.fileId.gte'?: number;
  'where.fileId.lt'?: number;
  'where.fileId.lte'?: number;
  'where.fileId.like'?: number;
  'where.fileId.in'?: string;
  'where.fileId.nin'?: string;
  'where.fileId.contains'?: string;
  'where.fileId.contained'?: string;
  'where.fileId.overlaps'?: string;
  'where.id.eq'?: number;
  'where.id.neq'?: number;
  'where.id.gt'?: number;
  'where.id.gte'?: number;
  'where.id.lt'?: number;
  'where.id.lte'?: number;
  'where.id.like'?: number;
  'where.id.in'?: string;
  'where.id.nin'?: string;
  'where.id.contains'?: string;
  'where.id.contained'?: string;
  'where.id.overlaps'?: string;
  'where.or'?: Array<string>;
  'id'?: number;
  'fileId': number;
  'content': string;
  'entities': string;
}

export type ImportDbUpdateFileExtractionResponseOK = Array<{ 'id'?: number | null; 'fileId'?: number | null; 'content'?: string | null; 'entities'?: string | null }>
export type ImportDbUpdateFileExtractionResponses =
  ImportDbUpdateFileExtractionResponseOK

export type ImportDbGetFileExtractionByIdRequest = {
  'fields'?: Array<'content' | 'entities' | 'fileId' | 'id'>;
  'id': number;
}

export type ImportDbGetFileExtractionByIdResponseOK = {
  'id': number | null;
  'fileId': number | null;
  'content': string | null;
  'entities': string | null;
}
export type ImportDbGetFileExtractionByIdResponses =
  ImportDbGetFileExtractionByIdResponseOK

export type ImportDbUpdateFileExtractionRequest = {
  'fields'?: Array<'content' | 'entities' | 'fileId' | 'id'>;
  'id': number;
  'fileId': number;
  'content': string;
  'entities': string;
}

export type ImportDbUpdateFileExtractionResponseOK = {
  'id': number | null;
  'fileId': number | null;
  'content': string | null;
  'entities': string | null;
}
export type ImportDbUpdateFileExtractionResponses =
  ImportDbUpdateFileExtractionResponseOK

export type ImportDbDeleteFileExtractionRequest = {
  'fields'?: Array<'content' | 'entities' | 'fileId' | 'id'>;
  'id': number;
}

export type ImportDbDeleteFileExtractionResponseOK = {
  'id': number | null;
  'fileId': number | null;
  'content': string | null;
  'entities': string | null;
}
export type ImportDbDeleteFileExtractionResponses =
  ImportDbDeleteFileExtractionResponseOK

export type ImportDbGetFileForFileExtractionRequest = {
  'fields'?: Array<'documentType' | 'encoding' | 'hash' | 'id' | 'mimetype' | 'name' | 'path' | 'type'>;
  'id': number;
}

export type ImportDbGetFileForFileExtractionResponseOK = {
  'id': number | null;
  'documentType': string | null;
  'name': string | null;
  'encoding': string | null;
  'mimetype': string | null;
  'type': string | null;
  'path': string | null;
  'hash': string | null;
}
export type ImportDbGetFileForFileExtractionResponses =
  ImportDbGetFileForFileExtractionResponseOK

export type ImportDbGetFileTrainingRequest = {
  'limit'?: number;
  'offset'?: number;
  'totalCount'?: boolean;
  'fields'?: Array<'fileId' | 'id' | 'processorPath' | 'status'>;
  'where.fileId.eq'?: number;
  'where.fileId.neq'?: number;
  'where.fileId.gt'?: number;
  'where.fileId.gte'?: number;
  'where.fileId.lt'?: number;
  'where.fileId.lte'?: number;
  'where.fileId.like'?: number;
  'where.fileId.in'?: string;
  'where.fileId.nin'?: string;
  'where.fileId.contains'?: string;
  'where.fileId.contained'?: string;
  'where.fileId.overlaps'?: string;
  'where.id.eq'?: number;
  'where.id.neq'?: number;
  'where.id.gt'?: number;
  'where.id.gte'?: number;
  'where.id.lt'?: number;
  'where.id.lte'?: number;
  'where.id.like'?: number;
  'where.id.in'?: string;
  'where.id.nin'?: string;
  'where.id.contains'?: string;
  'where.id.contained'?: string;
  'where.id.overlaps'?: string;
  'where.processorPath.eq'?: string;
  'where.processorPath.neq'?: string;
  'where.processorPath.gt'?: string;
  'where.processorPath.gte'?: string;
  'where.processorPath.lt'?: string;
  'where.processorPath.lte'?: string;
  'where.processorPath.like'?: string;
  'where.processorPath.in'?: string;
  'where.processorPath.nin'?: string;
  'where.processorPath.contains'?: string;
  'where.processorPath.contained'?: string;
  'where.processorPath.overlaps'?: string;
  'where.status.eq'?: string;
  'where.status.neq'?: string;
  'where.status.gt'?: string;
  'where.status.gte'?: string;
  'where.status.lt'?: string;
  'where.status.lte'?: string;
  'where.status.like'?: string;
  'where.status.in'?: string;
  'where.status.nin'?: string;
  'where.status.contains'?: string;
  'where.status.contained'?: string;
  'where.status.overlaps'?: string;
  'where.or'?: Array<string>;
  'orderby.fileId'?: 'asc' | 'desc';
  'orderby.id'?: 'asc' | 'desc';
  'orderby.processorPath'?: 'asc' | 'desc';
  'orderby.status'?: 'asc' | 'desc';
}

export type ImportDbGetFileTrainingResponseOK = Array<{ 'id'?: number | null; 'fileId'?: number | null; 'processorPath'?: string | null; 'status'?: string | null }>
export type ImportDbGetFileTrainingResponses =
  ImportDbGetFileTrainingResponseOK

export type ImportDbCreateFileTrainingRequest = {
  'id'?: number;
  'fileId': number;
  'processorPath': string;
  'status': string;
}

export type ImportDbCreateFileTrainingResponseOK = {
  'id': number | null;
  'fileId': number | null;
  'processorPath': string | null;
  'status': string | null;
}
export type ImportDbCreateFileTrainingResponses =
  ImportDbCreateFileTrainingResponseOK

export type ImportDbUpdateFileTrainingRequest = {
  'fields'?: Array<'fileId' | 'id' | 'processorPath' | 'status'>;
  'where.fileId.eq'?: number;
  'where.fileId.neq'?: number;
  'where.fileId.gt'?: number;
  'where.fileId.gte'?: number;
  'where.fileId.lt'?: number;
  'where.fileId.lte'?: number;
  'where.fileId.like'?: number;
  'where.fileId.in'?: string;
  'where.fileId.nin'?: string;
  'where.fileId.contains'?: string;
  'where.fileId.contained'?: string;
  'where.fileId.overlaps'?: string;
  'where.id.eq'?: number;
  'where.id.neq'?: number;
  'where.id.gt'?: number;
  'where.id.gte'?: number;
  'where.id.lt'?: number;
  'where.id.lte'?: number;
  'where.id.like'?: number;
  'where.id.in'?: string;
  'where.id.nin'?: string;
  'where.id.contains'?: string;
  'where.id.contained'?: string;
  'where.id.overlaps'?: string;
  'where.processorPath.eq'?: string;
  'where.processorPath.neq'?: string;
  'where.processorPath.gt'?: string;
  'where.processorPath.gte'?: string;
  'where.processorPath.lt'?: string;
  'where.processorPath.lte'?: string;
  'where.processorPath.like'?: string;
  'where.processorPath.in'?: string;
  'where.processorPath.nin'?: string;
  'where.processorPath.contains'?: string;
  'where.processorPath.contained'?: string;
  'where.processorPath.overlaps'?: string;
  'where.status.eq'?: string;
  'where.status.neq'?: string;
  'where.status.gt'?: string;
  'where.status.gte'?: string;
  'where.status.lt'?: string;
  'where.status.lte'?: string;
  'where.status.like'?: string;
  'where.status.in'?: string;
  'where.status.nin'?: string;
  'where.status.contains'?: string;
  'where.status.contained'?: string;
  'where.status.overlaps'?: string;
  'where.or'?: Array<string>;
  'id'?: number;
  'fileId': number;
  'processorPath': string;
  'status': string;
}

export type ImportDbUpdateFileTrainingResponseOK = Array<{ 'id'?: number | null; 'fileId'?: number | null; 'processorPath'?: string | null; 'status'?: string | null }>
export type ImportDbUpdateFileTrainingResponses =
  ImportDbUpdateFileTrainingResponseOK

export type ImportDbGetFileTrainingByIdRequest = {
  'fields'?: Array<'fileId' | 'id' | 'processorPath' | 'status'>;
  'id': number;
}

export type ImportDbGetFileTrainingByIdResponseOK = {
  'id': number | null;
  'fileId': number | null;
  'processorPath': string | null;
  'status': string | null;
}
export type ImportDbGetFileTrainingByIdResponses =
  ImportDbGetFileTrainingByIdResponseOK

export type ImportDbUpdateFileTrainingRequest = {
  'fields'?: Array<'fileId' | 'id' | 'processorPath' | 'status'>;
  'id': number;
  'fileId': number;
  'processorPath': string;
  'status': string;
}

export type ImportDbUpdateFileTrainingResponseOK = {
  'id': number | null;
  'fileId': number | null;
  'processorPath': string | null;
  'status': string | null;
}
export type ImportDbUpdateFileTrainingResponses =
  ImportDbUpdateFileTrainingResponseOK

export type ImportDbDeleteFileTrainingRequest = {
  'fields'?: Array<'fileId' | 'id' | 'processorPath' | 'status'>;
  'id': number;
}

export type ImportDbDeleteFileTrainingResponseOK = {
  'id': number | null;
  'fileId': number | null;
  'processorPath': string | null;
  'status': string | null;
}
export type ImportDbDeleteFileTrainingResponses =
  ImportDbDeleteFileTrainingResponseOK

export type ImportDbGetFileForFileTrainingRequest = {
  'fields'?: Array<'documentType' | 'encoding' | 'hash' | 'id' | 'mimetype' | 'name' | 'path' | 'type'>;
  'id': number;
}

export type ImportDbGetFileForFileTrainingResponseOK = {
  'id': number | null;
  'documentType': string | null;
  'name': string | null;
  'encoding': string | null;
  'mimetype': string | null;
  'type': string | null;
  'path': string | null;
  'hash': string | null;
}
export type ImportDbGetFileForFileTrainingResponses =
  ImportDbGetFileForFileTrainingResponseOK

export type PostImportInvoiceGoodsRequest = {
  
}

export type PostImportInvoiceGoodsResponseOK = unknown
export type PostImportInvoiceGoodsResponses =
  FullResponse<PostImportInvoiceGoodsResponseOK, 200>

export type PostImportTrainFileIdRequest = {
  'fileId': string;
}

export type PostImportTrainFileIdResponseOK = unknown
export type PostImportTrainFileIdResponses =
  FullResponse<PostImportTrainFileIdResponseOK, 200>

export type PostImportModelFileIdRequest = {
  'fileId': string;
}

export type PostImportModelFileIdResponseOK = unknown
export type PostImportModelFileIdResponses =
  FullResponse<PostImportModelFileIdResponseOK, 200>

export type FairDbGetProductSupplierRequest = {
  'limit'?: number;
  'offset'?: number;
  'totalCount'?: boolean;
  'fields'?: Array<'bic' | 'city' | 'description' | 'email' | 'homepage' | 'iban' | 'id' | 'name' | 'phone' | 'postalCode' | 'ratingPrice' | 'ratingSupply' | 'state' | 'street' | 'vat'>;
  'where.bic.eq'?: string;
  'where.bic.neq'?: string;
  'where.bic.gt'?: string;
  'where.bic.gte'?: string;
  'where.bic.lt'?: string;
  'where.bic.lte'?: string;
  'where.bic.like'?: string;
  'where.bic.in'?: string;
  'where.bic.nin'?: string;
  'where.bic.contains'?: string;
  'where.bic.contained'?: string;
  'where.bic.overlaps'?: string;
  'where.city.eq'?: string;
  'where.city.neq'?: string;
  'where.city.gt'?: string;
  'where.city.gte'?: string;
  'where.city.lt'?: string;
  'where.city.lte'?: string;
  'where.city.like'?: string;
  'where.city.in'?: string;
  'where.city.nin'?: string;
  'where.city.contains'?: string;
  'where.city.contained'?: string;
  'where.city.overlaps'?: string;
  'where.description.eq'?: string;
  'where.description.neq'?: string;
  'where.description.gt'?: string;
  'where.description.gte'?: string;
  'where.description.lt'?: string;
  'where.description.lte'?: string;
  'where.description.like'?: string;
  'where.description.in'?: string;
  'where.description.nin'?: string;
  'where.description.contains'?: string;
  'where.description.contained'?: string;
  'where.description.overlaps'?: string;
  'where.email.eq'?: string;
  'where.email.neq'?: string;
  'where.email.gt'?: string;
  'where.email.gte'?: string;
  'where.email.lt'?: string;
  'where.email.lte'?: string;
  'where.email.like'?: string;
  'where.email.in'?: string;
  'where.email.nin'?: string;
  'where.email.contains'?: string;
  'where.email.contained'?: string;
  'where.email.overlaps'?: string;
  'where.homepage.eq'?: string;
  'where.homepage.neq'?: string;
  'where.homepage.gt'?: string;
  'where.homepage.gte'?: string;
  'where.homepage.lt'?: string;
  'where.homepage.lte'?: string;
  'where.homepage.like'?: string;
  'where.homepage.in'?: string;
  'where.homepage.nin'?: string;
  'where.homepage.contains'?: string;
  'where.homepage.contained'?: string;
  'where.homepage.overlaps'?: string;
  'where.iban.eq'?: string;
  'where.iban.neq'?: string;
  'where.iban.gt'?: string;
  'where.iban.gte'?: string;
  'where.iban.lt'?: string;
  'where.iban.lte'?: string;
  'where.iban.like'?: string;
  'where.iban.in'?: string;
  'where.iban.nin'?: string;
  'where.iban.contains'?: string;
  'where.iban.contained'?: string;
  'where.iban.overlaps'?: string;
  'where.id.eq'?: number;
  'where.id.neq'?: number;
  'where.id.gt'?: number;
  'where.id.gte'?: number;
  'where.id.lt'?: number;
  'where.id.lte'?: number;
  'where.id.like'?: number;
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
  'where.name.in'?: string;
  'where.name.nin'?: string;
  'where.name.contains'?: string;
  'where.name.contained'?: string;
  'where.name.overlaps'?: string;
  'where.phone.eq'?: string;
  'where.phone.neq'?: string;
  'where.phone.gt'?: string;
  'where.phone.gte'?: string;
  'where.phone.lt'?: string;
  'where.phone.lte'?: string;
  'where.phone.like'?: string;
  'where.phone.in'?: string;
  'where.phone.nin'?: string;
  'where.phone.contains'?: string;
  'where.phone.contained'?: string;
  'where.phone.overlaps'?: string;
  'where.postalCode.eq'?: string;
  'where.postalCode.neq'?: string;
  'where.postalCode.gt'?: string;
  'where.postalCode.gte'?: string;
  'where.postalCode.lt'?: string;
  'where.postalCode.lte'?: string;
  'where.postalCode.like'?: string;
  'where.postalCode.in'?: string;
  'where.postalCode.nin'?: string;
  'where.postalCode.contains'?: string;
  'where.postalCode.contained'?: string;
  'where.postalCode.overlaps'?: string;
  'where.ratingPrice.eq'?: number;
  'where.ratingPrice.neq'?: number;
  'where.ratingPrice.gt'?: number;
  'where.ratingPrice.gte'?: number;
  'where.ratingPrice.lt'?: number;
  'where.ratingPrice.lte'?: number;
  'where.ratingPrice.like'?: number;
  'where.ratingPrice.in'?: string;
  'where.ratingPrice.nin'?: string;
  'where.ratingPrice.contains'?: string;
  'where.ratingPrice.contained'?: string;
  'where.ratingPrice.overlaps'?: string;
  'where.ratingSupply.eq'?: number;
  'where.ratingSupply.neq'?: number;
  'where.ratingSupply.gt'?: number;
  'where.ratingSupply.gte'?: number;
  'where.ratingSupply.lt'?: number;
  'where.ratingSupply.lte'?: number;
  'where.ratingSupply.like'?: number;
  'where.ratingSupply.in'?: string;
  'where.ratingSupply.nin'?: string;
  'where.ratingSupply.contains'?: string;
  'where.ratingSupply.contained'?: string;
  'where.ratingSupply.overlaps'?: string;
  'where.state.eq'?: string;
  'where.state.neq'?: string;
  'where.state.gt'?: string;
  'where.state.gte'?: string;
  'where.state.lt'?: string;
  'where.state.lte'?: string;
  'where.state.like'?: string;
  'where.state.in'?: string;
  'where.state.nin'?: string;
  'where.state.contains'?: string;
  'where.state.contained'?: string;
  'where.state.overlaps'?: string;
  'where.street.eq'?: string;
  'where.street.neq'?: string;
  'where.street.gt'?: string;
  'where.street.gte'?: string;
  'where.street.lt'?: string;
  'where.street.lte'?: string;
  'where.street.like'?: string;
  'where.street.in'?: string;
  'where.street.nin'?: string;
  'where.street.contains'?: string;
  'where.street.contained'?: string;
  'where.street.overlaps'?: string;
  'where.vat.eq'?: string;
  'where.vat.neq'?: string;
  'where.vat.gt'?: string;
  'where.vat.gte'?: string;
  'where.vat.lt'?: string;
  'where.vat.lte'?: string;
  'where.vat.like'?: string;
  'where.vat.in'?: string;
  'where.vat.nin'?: string;
  'where.vat.contains'?: string;
  'where.vat.contained'?: string;
  'where.vat.overlaps'?: string;
  'where.or'?: Array<string>;
  'orderby.bic'?: 'asc' | 'desc';
  'orderby.city'?: 'asc' | 'desc';
  'orderby.description'?: 'asc' | 'desc';
  'orderby.email'?: 'asc' | 'desc';
  'orderby.homepage'?: 'asc' | 'desc';
  'orderby.iban'?: 'asc' | 'desc';
  'orderby.id'?: 'asc' | 'desc';
  'orderby.name'?: 'asc' | 'desc';
  'orderby.phone'?: 'asc' | 'desc';
  'orderby.postalCode'?: 'asc' | 'desc';
  'orderby.ratingPrice'?: 'asc' | 'desc';
  'orderby.ratingSupply'?: 'asc' | 'desc';
  'orderby.state'?: 'asc' | 'desc';
  'orderby.street'?: 'asc' | 'desc';
  'orderby.vat'?: 'asc' | 'desc';
}

export type FairDbGetProductSupplierResponseOK = Array<{ 'id'?: number | null; 'bic'?: string | null; 'description'?: string | null; 'homepage'?: string | null; 'iban'?: string | null; 'name'?: string | null; 'phone'?: string | null; 'ratingPrice'?: number | null; 'ratingSupply'?: number | null; 'email'?: string | null; 'vat'?: string | null; 'city'?: string | null; 'state'?: string | null; 'street'?: string | null; 'postalCode'?: string | null }>
export type FairDbGetProductSupplierResponses =
  FairDbGetProductSupplierResponseOK

export type FairDbCreateProductSupplierRequest = {
  'id'?: number;
  'bic': string;
  'description': string;
  'homepage': string;
  'iban': string;
  'name': string;
  'phone': string;
  'ratingPrice': number;
  'ratingSupply': number;
  'email'?: string | null;
  'vat'?: string | null;
  'city'?: string | null;
  'state'?: string | null;
  'street'?: string | null;
  'postalCode'?: string | null;
}

export type FairDbCreateProductSupplierResponseOK = {
  'id': number | null;
  'bic': string | null;
  'description': string | null;
  'homepage': string | null;
  'iban': string | null;
  'name': string | null;
  'phone': string | null;
  'ratingPrice': number | null;
  'ratingSupply': number | null;
  'email': string | null;
  'vat': string | null;
  'city': string | null;
  'state': string | null;
  'street': string | null;
  'postalCode': string | null;
}
export type FairDbCreateProductSupplierResponses =
  FairDbCreateProductSupplierResponseOK

export type FairDbUpdateProductSupplierRequest = {
  'fields'?: Array<'bic' | 'city' | 'description' | 'email' | 'homepage' | 'iban' | 'id' | 'name' | 'phone' | 'postalCode' | 'ratingPrice' | 'ratingSupply' | 'state' | 'street' | 'vat'>;
  'where.bic.eq'?: string;
  'where.bic.neq'?: string;
  'where.bic.gt'?: string;
  'where.bic.gte'?: string;
  'where.bic.lt'?: string;
  'where.bic.lte'?: string;
  'where.bic.like'?: string;
  'where.bic.in'?: string;
  'where.bic.nin'?: string;
  'where.bic.contains'?: string;
  'where.bic.contained'?: string;
  'where.bic.overlaps'?: string;
  'where.city.eq'?: string;
  'where.city.neq'?: string;
  'where.city.gt'?: string;
  'where.city.gte'?: string;
  'where.city.lt'?: string;
  'where.city.lte'?: string;
  'where.city.like'?: string;
  'where.city.in'?: string;
  'where.city.nin'?: string;
  'where.city.contains'?: string;
  'where.city.contained'?: string;
  'where.city.overlaps'?: string;
  'where.description.eq'?: string;
  'where.description.neq'?: string;
  'where.description.gt'?: string;
  'where.description.gte'?: string;
  'where.description.lt'?: string;
  'where.description.lte'?: string;
  'where.description.like'?: string;
  'where.description.in'?: string;
  'where.description.nin'?: string;
  'where.description.contains'?: string;
  'where.description.contained'?: string;
  'where.description.overlaps'?: string;
  'where.email.eq'?: string;
  'where.email.neq'?: string;
  'where.email.gt'?: string;
  'where.email.gte'?: string;
  'where.email.lt'?: string;
  'where.email.lte'?: string;
  'where.email.like'?: string;
  'where.email.in'?: string;
  'where.email.nin'?: string;
  'where.email.contains'?: string;
  'where.email.contained'?: string;
  'where.email.overlaps'?: string;
  'where.homepage.eq'?: string;
  'where.homepage.neq'?: string;
  'where.homepage.gt'?: string;
  'where.homepage.gte'?: string;
  'where.homepage.lt'?: string;
  'where.homepage.lte'?: string;
  'where.homepage.like'?: string;
  'where.homepage.in'?: string;
  'where.homepage.nin'?: string;
  'where.homepage.contains'?: string;
  'where.homepage.contained'?: string;
  'where.homepage.overlaps'?: string;
  'where.iban.eq'?: string;
  'where.iban.neq'?: string;
  'where.iban.gt'?: string;
  'where.iban.gte'?: string;
  'where.iban.lt'?: string;
  'where.iban.lte'?: string;
  'where.iban.like'?: string;
  'where.iban.in'?: string;
  'where.iban.nin'?: string;
  'where.iban.contains'?: string;
  'where.iban.contained'?: string;
  'where.iban.overlaps'?: string;
  'where.id.eq'?: number;
  'where.id.neq'?: number;
  'where.id.gt'?: number;
  'where.id.gte'?: number;
  'where.id.lt'?: number;
  'where.id.lte'?: number;
  'where.id.like'?: number;
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
  'where.name.in'?: string;
  'where.name.nin'?: string;
  'where.name.contains'?: string;
  'where.name.contained'?: string;
  'where.name.overlaps'?: string;
  'where.phone.eq'?: string;
  'where.phone.neq'?: string;
  'where.phone.gt'?: string;
  'where.phone.gte'?: string;
  'where.phone.lt'?: string;
  'where.phone.lte'?: string;
  'where.phone.like'?: string;
  'where.phone.in'?: string;
  'where.phone.nin'?: string;
  'where.phone.contains'?: string;
  'where.phone.contained'?: string;
  'where.phone.overlaps'?: string;
  'where.postalCode.eq'?: string;
  'where.postalCode.neq'?: string;
  'where.postalCode.gt'?: string;
  'where.postalCode.gte'?: string;
  'where.postalCode.lt'?: string;
  'where.postalCode.lte'?: string;
  'where.postalCode.like'?: string;
  'where.postalCode.in'?: string;
  'where.postalCode.nin'?: string;
  'where.postalCode.contains'?: string;
  'where.postalCode.contained'?: string;
  'where.postalCode.overlaps'?: string;
  'where.ratingPrice.eq'?: number;
  'where.ratingPrice.neq'?: number;
  'where.ratingPrice.gt'?: number;
  'where.ratingPrice.gte'?: number;
  'where.ratingPrice.lt'?: number;
  'where.ratingPrice.lte'?: number;
  'where.ratingPrice.like'?: number;
  'where.ratingPrice.in'?: string;
  'where.ratingPrice.nin'?: string;
  'where.ratingPrice.contains'?: string;
  'where.ratingPrice.contained'?: string;
  'where.ratingPrice.overlaps'?: string;
  'where.ratingSupply.eq'?: number;
  'where.ratingSupply.neq'?: number;
  'where.ratingSupply.gt'?: number;
  'where.ratingSupply.gte'?: number;
  'where.ratingSupply.lt'?: number;
  'where.ratingSupply.lte'?: number;
  'where.ratingSupply.like'?: number;
  'where.ratingSupply.in'?: string;
  'where.ratingSupply.nin'?: string;
  'where.ratingSupply.contains'?: string;
  'where.ratingSupply.contained'?: string;
  'where.ratingSupply.overlaps'?: string;
  'where.state.eq'?: string;
  'where.state.neq'?: string;
  'where.state.gt'?: string;
  'where.state.gte'?: string;
  'where.state.lt'?: string;
  'where.state.lte'?: string;
  'where.state.like'?: string;
  'where.state.in'?: string;
  'where.state.nin'?: string;
  'where.state.contains'?: string;
  'where.state.contained'?: string;
  'where.state.overlaps'?: string;
  'where.street.eq'?: string;
  'where.street.neq'?: string;
  'where.street.gt'?: string;
  'where.street.gte'?: string;
  'where.street.lt'?: string;
  'where.street.lte'?: string;
  'where.street.like'?: string;
  'where.street.in'?: string;
  'where.street.nin'?: string;
  'where.street.contains'?: string;
  'where.street.contained'?: string;
  'where.street.overlaps'?: string;
  'where.vat.eq'?: string;
  'where.vat.neq'?: string;
  'where.vat.gt'?: string;
  'where.vat.gte'?: string;
  'where.vat.lt'?: string;
  'where.vat.lte'?: string;
  'where.vat.like'?: string;
  'where.vat.in'?: string;
  'where.vat.nin'?: string;
  'where.vat.contains'?: string;
  'where.vat.contained'?: string;
  'where.vat.overlaps'?: string;
  'where.or'?: Array<string>;
  'id'?: number;
  'bic': string;
  'description': string;
  'homepage': string;
  'iban': string;
  'name': string;
  'phone': string;
  'ratingPrice': number;
  'ratingSupply': number;
  'email'?: string | null;
  'vat'?: string | null;
  'city'?: string | null;
  'state'?: string | null;
  'street'?: string | null;
  'postalCode'?: string | null;
}

export type FairDbUpdateProductSupplierResponseOK = Array<{ 'id'?: number | null; 'bic'?: string | null; 'description'?: string | null; 'homepage'?: string | null; 'iban'?: string | null; 'name'?: string | null; 'phone'?: string | null; 'ratingPrice'?: number | null; 'ratingSupply'?: number | null; 'email'?: string | null; 'vat'?: string | null; 'city'?: string | null; 'state'?: string | null; 'street'?: string | null; 'postalCode'?: string | null }>
export type FairDbUpdateProductSupplierResponses =
  FairDbUpdateProductSupplierResponseOK

export type FairDbGetProductSupplierByIdRequest = {
  'fields'?: Array<'bic' | 'city' | 'description' | 'email' | 'homepage' | 'iban' | 'id' | 'name' | 'phone' | 'postalCode' | 'ratingPrice' | 'ratingSupply' | 'state' | 'street' | 'vat'>;
  'id': number;
}

export type FairDbGetProductSupplierByIdResponseOK = {
  'id': number | null;
  'bic': string | null;
  'description': string | null;
  'homepage': string | null;
  'iban': string | null;
  'name': string | null;
  'phone': string | null;
  'ratingPrice': number | null;
  'ratingSupply': number | null;
  'email': string | null;
  'vat': string | null;
  'city': string | null;
  'state': string | null;
  'street': string | null;
  'postalCode': string | null;
}
export type FairDbGetProductSupplierByIdResponses =
  FairDbGetProductSupplierByIdResponseOK

export type FairDbUpdateProductSupplierRequest = {
  'fields'?: Array<'bic' | 'city' | 'description' | 'email' | 'homepage' | 'iban' | 'id' | 'name' | 'phone' | 'postalCode' | 'ratingPrice' | 'ratingSupply' | 'state' | 'street' | 'vat'>;
  'id': number;
  'bic': string;
  'description': string;
  'homepage': string;
  'iban': string;
  'name': string;
  'phone': string;
  'ratingPrice': number;
  'ratingSupply': number;
  'email'?: string | null;
  'vat'?: string | null;
  'city'?: string | null;
  'state'?: string | null;
  'street'?: string | null;
  'postalCode'?: string | null;
}

export type FairDbUpdateProductSupplierResponseOK = {
  'id': number | null;
  'bic': string | null;
  'description': string | null;
  'homepage': string | null;
  'iban': string | null;
  'name': string | null;
  'phone': string | null;
  'ratingPrice': number | null;
  'ratingSupply': number | null;
  'email': string | null;
  'vat': string | null;
  'city': string | null;
  'state': string | null;
  'street': string | null;
  'postalCode': string | null;
}
export type FairDbUpdateProductSupplierResponses =
  FairDbUpdateProductSupplierResponseOK

export type FairDbDeleteProductSupplierRequest = {
  'fields'?: Array<'bic' | 'city' | 'description' | 'email' | 'homepage' | 'iban' | 'id' | 'name' | 'phone' | 'postalCode' | 'ratingPrice' | 'ratingSupply' | 'state' | 'street' | 'vat'>;
  'id': number;
}

export type FairDbDeleteProductSupplierResponseOK = {
  'id': number | null;
  'bic': string | null;
  'description': string | null;
  'homepage': string | null;
  'iban': string | null;
  'name': string | null;
  'phone': string | null;
  'ratingPrice': number | null;
  'ratingSupply': number | null;
  'email': string | null;
  'vat': string | null;
  'city': string | null;
  'state': string | null;
  'street': string | null;
  'postalCode': string | null;
}
export type FairDbDeleteProductSupplierResponses =
  FairDbDeleteProductSupplierResponseOK

export type FairDbGetProductForProductSupplierRequest = {
  'fields'?: Array<'active' | 'description' | 'id' | 'productSupplierId' | 'title' | 'unit'>;
  'id': number;
}

export type FairDbGetProductForProductSupplierResponseOK = Array<{ 'id'?: number | null; 'active'?: number | null; 'description'?: string | null; 'productSupplierId'?: number | null; 'title'?: string | null; 'unit'?: string | null }>
export type FairDbGetProductForProductSupplierResponses =
  FairDbGetProductForProductSupplierResponseOK

export type FairDbGetProductOrderForProductSupplierRequest = {
  'fields'?: Array<'id' | 'orderId' | 'priceShipping' | 'productSupplierId' | 'quantity' | 'tmDelivery' | 'tmOrder'>;
  'id': number;
}

export type FairDbGetProductOrderForProductSupplierResponseOK = Array<{ 'id'?: number | null; 'orderId'?: string | null; 'priceShipping'?: number | null; 'productSupplierId'?: number | null; 'quantity'?: number | null; 'tmDelivery'?: string | null; 'tmOrder'?: string | null }>
export type FairDbGetProductOrderForProductSupplierResponses =
  FairDbGetProductOrderForProductSupplierResponseOK

export type FairDbGetProductCategoryRequest = {
  'limit'?: number;
  'offset'?: number;
  'totalCount'?: boolean;
  'fields'?: Array<'category' | 'description' | 'id'>;
  'where.category.eq'?: string;
  'where.category.neq'?: string;
  'where.category.gt'?: string;
  'where.category.gte'?: string;
  'where.category.lt'?: string;
  'where.category.lte'?: string;
  'where.category.like'?: string;
  'where.category.in'?: string;
  'where.category.nin'?: string;
  'where.category.contains'?: string;
  'where.category.contained'?: string;
  'where.category.overlaps'?: string;
  'where.description.eq'?: string;
  'where.description.neq'?: string;
  'where.description.gt'?: string;
  'where.description.gte'?: string;
  'where.description.lt'?: string;
  'where.description.lte'?: string;
  'where.description.like'?: string;
  'where.description.in'?: string;
  'where.description.nin'?: string;
  'where.description.contains'?: string;
  'where.description.contained'?: string;
  'where.description.overlaps'?: string;
  'where.id.eq'?: number;
  'where.id.neq'?: number;
  'where.id.gt'?: number;
  'where.id.gte'?: number;
  'where.id.lt'?: number;
  'where.id.lte'?: number;
  'where.id.like'?: number;
  'where.id.in'?: string;
  'where.id.nin'?: string;
  'where.id.contains'?: string;
  'where.id.contained'?: string;
  'where.id.overlaps'?: string;
  'where.or'?: Array<string>;
  'orderby.category'?: 'asc' | 'desc';
  'orderby.description'?: 'asc' | 'desc';
  'orderby.id'?: 'asc' | 'desc';
}

export type FairDbGetProductCategoryResponseOK = Array<{ 'id'?: number | null; 'category'?: string | null; 'description'?: string | null }>
export type FairDbGetProductCategoryResponses =
  FairDbGetProductCategoryResponseOK

export type FairDbCreateProductCategoryRequest = {
  'id'?: number;
  'category': string;
  'description': string;
}

export type FairDbCreateProductCategoryResponseOK = {
  'id': number | null;
  'category': string | null;
  'description': string | null;
}
export type FairDbCreateProductCategoryResponses =
  FairDbCreateProductCategoryResponseOK

export type FairDbUpdateProductCategoryRequest = {
  'fields'?: Array<'category' | 'description' | 'id'>;
  'where.category.eq'?: string;
  'where.category.neq'?: string;
  'where.category.gt'?: string;
  'where.category.gte'?: string;
  'where.category.lt'?: string;
  'where.category.lte'?: string;
  'where.category.like'?: string;
  'where.category.in'?: string;
  'where.category.nin'?: string;
  'where.category.contains'?: string;
  'where.category.contained'?: string;
  'where.category.overlaps'?: string;
  'where.description.eq'?: string;
  'where.description.neq'?: string;
  'where.description.gt'?: string;
  'where.description.gte'?: string;
  'where.description.lt'?: string;
  'where.description.lte'?: string;
  'where.description.like'?: string;
  'where.description.in'?: string;
  'where.description.nin'?: string;
  'where.description.contains'?: string;
  'where.description.contained'?: string;
  'where.description.overlaps'?: string;
  'where.id.eq'?: number;
  'where.id.neq'?: number;
  'where.id.gt'?: number;
  'where.id.gte'?: number;
  'where.id.lt'?: number;
  'where.id.lte'?: number;
  'where.id.like'?: number;
  'where.id.in'?: string;
  'where.id.nin'?: string;
  'where.id.contains'?: string;
  'where.id.contained'?: string;
  'where.id.overlaps'?: string;
  'where.or'?: Array<string>;
  'id'?: number;
  'category': string;
  'description': string;
}

export type FairDbUpdateProductCategoryResponseOK = Array<{ 'id'?: number | null; 'category'?: string | null; 'description'?: string | null }>
export type FairDbUpdateProductCategoryResponses =
  FairDbUpdateProductCategoryResponseOK

export type FairDbGetProductCategoryByIdRequest = {
  'fields'?: Array<'category' | 'description' | 'id'>;
  'id': number;
}

export type FairDbGetProductCategoryByIdResponseOK = {
  'id': number | null;
  'category': string | null;
  'description': string | null;
}
export type FairDbGetProductCategoryByIdResponses =
  FairDbGetProductCategoryByIdResponseOK

export type FairDbUpdateProductCategoryRequest = {
  'fields'?: Array<'category' | 'description' | 'id'>;
  'id': number;
  'category': string;
  'description': string;
}

export type FairDbUpdateProductCategoryResponseOK = {
  'id': number | null;
  'category': string | null;
  'description': string | null;
}
export type FairDbUpdateProductCategoryResponses =
  FairDbUpdateProductCategoryResponseOK

export type FairDbDeleteProductCategoryRequest = {
  'fields'?: Array<'category' | 'description' | 'id'>;
  'id': number;
}

export type FairDbDeleteProductCategoryResponseOK = {
  'id': number | null;
  'category': string | null;
  'description': string | null;
}
export type FairDbDeleteProductCategoryResponses =
  FairDbDeleteProductCategoryResponseOK

export type FairDbGetProductToProductCategoryForProductCategoryRequest = {
  'fields'?: Array<'productCategoryId' | 'productId'>;
  'id': number;
}

export type FairDbGetProductToProductCategoryForProductCategoryResponseOK = Array<{ 'productCategoryId'?: number | null; 'productId'?: number | null }>
export type FairDbGetProductToProductCategoryForProductCategoryResponses =
  FairDbGetProductToProductCategoryForProductCategoryResponseOK

export type FairDbGetProductRequest = {
  'limit'?: number;
  'offset'?: number;
  'totalCount'?: boolean;
  'fields'?: Array<'active' | 'description' | 'id' | 'productSupplierId' | 'title' | 'unit'>;
  'where.active.eq'?: number;
  'where.active.neq'?: number;
  'where.active.gt'?: number;
  'where.active.gte'?: number;
  'where.active.lt'?: number;
  'where.active.lte'?: number;
  'where.active.like'?: number;
  'where.active.in'?: string;
  'where.active.nin'?: string;
  'where.active.contains'?: string;
  'where.active.contained'?: string;
  'where.active.overlaps'?: string;
  'where.description.eq'?: string;
  'where.description.neq'?: string;
  'where.description.gt'?: string;
  'where.description.gte'?: string;
  'where.description.lt'?: string;
  'where.description.lte'?: string;
  'where.description.like'?: string;
  'where.description.in'?: string;
  'where.description.nin'?: string;
  'where.description.contains'?: string;
  'where.description.contained'?: string;
  'where.description.overlaps'?: string;
  'where.id.eq'?: number;
  'where.id.neq'?: number;
  'where.id.gt'?: number;
  'where.id.gte'?: number;
  'where.id.lt'?: number;
  'where.id.lte'?: number;
  'where.id.like'?: number;
  'where.id.in'?: string;
  'where.id.nin'?: string;
  'where.id.contains'?: string;
  'where.id.contained'?: string;
  'where.id.overlaps'?: string;
  'where.productSupplierId.eq'?: number;
  'where.productSupplierId.neq'?: number;
  'where.productSupplierId.gt'?: number;
  'where.productSupplierId.gte'?: number;
  'where.productSupplierId.lt'?: number;
  'where.productSupplierId.lte'?: number;
  'where.productSupplierId.like'?: number;
  'where.productSupplierId.in'?: string;
  'where.productSupplierId.nin'?: string;
  'where.productSupplierId.contains'?: string;
  'where.productSupplierId.contained'?: string;
  'where.productSupplierId.overlaps'?: string;
  'where.title.eq'?: string;
  'where.title.neq'?: string;
  'where.title.gt'?: string;
  'where.title.gte'?: string;
  'where.title.lt'?: string;
  'where.title.lte'?: string;
  'where.title.like'?: string;
  'where.title.in'?: string;
  'where.title.nin'?: string;
  'where.title.contains'?: string;
  'where.title.contained'?: string;
  'where.title.overlaps'?: string;
  'where.unit.eq'?: string;
  'where.unit.neq'?: string;
  'where.unit.gt'?: string;
  'where.unit.gte'?: string;
  'where.unit.lt'?: string;
  'where.unit.lte'?: string;
  'where.unit.like'?: string;
  'where.unit.in'?: string;
  'where.unit.nin'?: string;
  'where.unit.contains'?: string;
  'where.unit.contained'?: string;
  'where.unit.overlaps'?: string;
  'where.or'?: Array<string>;
  'orderby.active'?: 'asc' | 'desc';
  'orderby.description'?: 'asc' | 'desc';
  'orderby.id'?: 'asc' | 'desc';
  'orderby.productSupplierId'?: 'asc' | 'desc';
  'orderby.title'?: 'asc' | 'desc';
  'orderby.unit'?: 'asc' | 'desc';
}

export type FairDbGetProductResponseOK = Array<{ 'id'?: number | null; 'active'?: number | null; 'description'?: string | null; 'productSupplierId'?: number | null; 'title'?: string | null; 'unit'?: string | null }>
export type FairDbGetProductResponses =
  FairDbGetProductResponseOK

export type FairDbCreateProductRequest = {
  'id'?: number;
  'active': number;
  'description': string;
  'productSupplierId'?: number | null;
  'title': string;
  'unit': string;
}

export type FairDbCreateProductResponseOK = {
  'id': number | null;
  'active': number | null;
  'description': string | null;
  'productSupplierId': number | null;
  'title': string | null;
  'unit': string | null;
}
export type FairDbCreateProductResponses =
  FairDbCreateProductResponseOK

export type FairDbUpdateProductRequest = {
  'fields'?: Array<'active' | 'description' | 'id' | 'productSupplierId' | 'title' | 'unit'>;
  'where.active.eq'?: number;
  'where.active.neq'?: number;
  'where.active.gt'?: number;
  'where.active.gte'?: number;
  'where.active.lt'?: number;
  'where.active.lte'?: number;
  'where.active.like'?: number;
  'where.active.in'?: string;
  'where.active.nin'?: string;
  'where.active.contains'?: string;
  'where.active.contained'?: string;
  'where.active.overlaps'?: string;
  'where.description.eq'?: string;
  'where.description.neq'?: string;
  'where.description.gt'?: string;
  'where.description.gte'?: string;
  'where.description.lt'?: string;
  'where.description.lte'?: string;
  'where.description.like'?: string;
  'where.description.in'?: string;
  'where.description.nin'?: string;
  'where.description.contains'?: string;
  'where.description.contained'?: string;
  'where.description.overlaps'?: string;
  'where.id.eq'?: number;
  'where.id.neq'?: number;
  'where.id.gt'?: number;
  'where.id.gte'?: number;
  'where.id.lt'?: number;
  'where.id.lte'?: number;
  'where.id.like'?: number;
  'where.id.in'?: string;
  'where.id.nin'?: string;
  'where.id.contains'?: string;
  'where.id.contained'?: string;
  'where.id.overlaps'?: string;
  'where.productSupplierId.eq'?: number;
  'where.productSupplierId.neq'?: number;
  'where.productSupplierId.gt'?: number;
  'where.productSupplierId.gte'?: number;
  'where.productSupplierId.lt'?: number;
  'where.productSupplierId.lte'?: number;
  'where.productSupplierId.like'?: number;
  'where.productSupplierId.in'?: string;
  'where.productSupplierId.nin'?: string;
  'where.productSupplierId.contains'?: string;
  'where.productSupplierId.contained'?: string;
  'where.productSupplierId.overlaps'?: string;
  'where.title.eq'?: string;
  'where.title.neq'?: string;
  'where.title.gt'?: string;
  'where.title.gte'?: string;
  'where.title.lt'?: string;
  'where.title.lte'?: string;
  'where.title.like'?: string;
  'where.title.in'?: string;
  'where.title.nin'?: string;
  'where.title.contains'?: string;
  'where.title.contained'?: string;
  'where.title.overlaps'?: string;
  'where.unit.eq'?: string;
  'where.unit.neq'?: string;
  'where.unit.gt'?: string;
  'where.unit.gte'?: string;
  'where.unit.lt'?: string;
  'where.unit.lte'?: string;
  'where.unit.like'?: string;
  'where.unit.in'?: string;
  'where.unit.nin'?: string;
  'where.unit.contains'?: string;
  'where.unit.contained'?: string;
  'where.unit.overlaps'?: string;
  'where.or'?: Array<string>;
  'id'?: number;
  'active': number;
  'description': string;
  'productSupplierId'?: number | null;
  'title': string;
  'unit': string;
}

export type FairDbUpdateProductResponseOK = Array<{ 'id'?: number | null; 'active'?: number | null; 'description'?: string | null; 'productSupplierId'?: number | null; 'title'?: string | null; 'unit'?: string | null }>
export type FairDbUpdateProductResponses =
  FairDbUpdateProductResponseOK

export type FairDbGetProductByIdRequest = {
  'fields'?: Array<'active' | 'description' | 'id' | 'productSupplierId' | 'title' | 'unit'>;
  'id': number;
}

export type FairDbGetProductByIdResponseOK = {
  'id': number | null;
  'active': number | null;
  'description': string | null;
  'productSupplierId': number | null;
  'title': string | null;
  'unit': string | null;
}
export type FairDbGetProductByIdResponses =
  FairDbGetProductByIdResponseOK

export type FairDbUpdateProductRequest = {
  'fields'?: Array<'active' | 'description' | 'id' | 'productSupplierId' | 'title' | 'unit'>;
  'id': number;
  'active': number;
  'description': string;
  'productSupplierId'?: number | null;
  'title': string;
  'unit': string;
}

export type FairDbUpdateProductResponseOK = {
  'id': number | null;
  'active': number | null;
  'description': string | null;
  'productSupplierId': number | null;
  'title': string | null;
  'unit': string | null;
}
export type FairDbUpdateProductResponses =
  FairDbUpdateProductResponseOK

export type FairDbDeleteProductRequest = {
  'fields'?: Array<'active' | 'description' | 'id' | 'productSupplierId' | 'title' | 'unit'>;
  'id': number;
}

export type FairDbDeleteProductResponseOK = {
  'id': number | null;
  'active': number | null;
  'description': string | null;
  'productSupplierId': number | null;
  'title': string | null;
  'unit': string | null;
}
export type FairDbDeleteProductResponses =
  FairDbDeleteProductResponseOK

export type FairDbGetProductToProductCategoryForProductRequest = {
  'fields'?: Array<'productCategoryId' | 'productId'>;
  'id': number;
}

export type FairDbGetProductToProductCategoryForProductResponseOK = Array<{ 'productCategoryId'?: number | null; 'productId'?: number | null }>
export type FairDbGetProductToProductCategoryForProductResponses =
  FairDbGetProductToProductCategoryForProductResponseOK

export type FairDbGetProductOrderLineForProductRequest = {
  'fields'?: Array<'price' | 'priceTaxRatePercent' | 'productId' | 'productOrderId' | 'quantity'>;
  'id': number;
}

export type FairDbGetProductOrderLineForProductResponseOK = Array<{ 'productId'?: number | null; 'productOrderId'?: number | null; 'price'?: number | null; 'priceTaxRatePercent'?: number | null; 'quantity'?: number | null }>
export type FairDbGetProductOrderLineForProductResponses =
  FairDbGetProductOrderLineForProductResponseOK

export type FairDbGetFairExecutionProductForProductRequest = {
  'fields'?: Array<'fairExecutionId' | 'id' | 'productId' | 'quantityBack' | 'quantityThere'>;
  'id': number;
}

export type FairDbGetFairExecutionProductForProductResponseOK = Array<{ 'id'?: number | null; 'fairExecutionId'?: number | null; 'productId'?: number | null; 'quantityBack'?: number | null; 'quantityThere'?: number | null }>
export type FairDbGetFairExecutionProductForProductResponses =
  FairDbGetFairExecutionProductForProductResponseOK

export type FairDbGetProductSupplierForProductRequest = {
  'fields'?: Array<'bic' | 'city' | 'description' | 'email' | 'homepage' | 'iban' | 'id' | 'name' | 'phone' | 'postalCode' | 'ratingPrice' | 'ratingSupply' | 'state' | 'street' | 'vat'>;
  'id': number;
}

export type FairDbGetProductSupplierForProductResponseOK = {
  'id': number | null;
  'bic': string | null;
  'description': string | null;
  'homepage': string | null;
  'iban': string | null;
  'name': string | null;
  'phone': string | null;
  'ratingPrice': number | null;
  'ratingSupply': number | null;
  'email': string | null;
  'vat': string | null;
  'city': string | null;
  'state': string | null;
  'street': string | null;
  'postalCode': string | null;
}
export type FairDbGetProductSupplierForProductResponses =
  FairDbGetProductSupplierForProductResponseOK

export type FairDbGetProductToProductCategoryRequest = {
  'limit'?: number;
  'offset'?: number;
  'totalCount'?: boolean;
  'fields'?: Array<'productCategoryId' | 'productId'>;
  'where.productCategoryId.eq'?: number;
  'where.productCategoryId.neq'?: number;
  'where.productCategoryId.gt'?: number;
  'where.productCategoryId.gte'?: number;
  'where.productCategoryId.lt'?: number;
  'where.productCategoryId.lte'?: number;
  'where.productCategoryId.like'?: number;
  'where.productCategoryId.in'?: string;
  'where.productCategoryId.nin'?: string;
  'where.productCategoryId.contains'?: string;
  'where.productCategoryId.contained'?: string;
  'where.productCategoryId.overlaps'?: string;
  'where.productId.eq'?: number;
  'where.productId.neq'?: number;
  'where.productId.gt'?: number;
  'where.productId.gte'?: number;
  'where.productId.lt'?: number;
  'where.productId.lte'?: number;
  'where.productId.like'?: number;
  'where.productId.in'?: string;
  'where.productId.nin'?: string;
  'where.productId.contains'?: string;
  'where.productId.contained'?: string;
  'where.productId.overlaps'?: string;
  'where.or'?: Array<string>;
  'orderby.productCategoryId'?: 'asc' | 'desc';
  'orderby.productId'?: 'asc' | 'desc';
}

export type FairDbGetProductToProductCategoryResponseOK = Array<{ 'productCategoryId'?: number | null; 'productId'?: number | null }>
export type FairDbGetProductToProductCategoryResponses =
  FairDbGetProductToProductCategoryResponseOK

export type FairDbCreateProductToProductCategoryRequest = {
  'productCategoryId': number;
  'productId': number;
}

export type FairDbCreateProductToProductCategoryResponseOK = {
  'productCategoryId': number | null;
  'productId': number | null;
}
export type FairDbCreateProductToProductCategoryResponses =
  FairDbCreateProductToProductCategoryResponseOK

export type FairDbUpdateProductToProductCategoryRequest = {
  'fields'?: Array<'productCategoryId' | 'productId'>;
  'where.productCategoryId.eq'?: number;
  'where.productCategoryId.neq'?: number;
  'where.productCategoryId.gt'?: number;
  'where.productCategoryId.gte'?: number;
  'where.productCategoryId.lt'?: number;
  'where.productCategoryId.lte'?: number;
  'where.productCategoryId.like'?: number;
  'where.productCategoryId.in'?: string;
  'where.productCategoryId.nin'?: string;
  'where.productCategoryId.contains'?: string;
  'where.productCategoryId.contained'?: string;
  'where.productCategoryId.overlaps'?: string;
  'where.productId.eq'?: number;
  'where.productId.neq'?: number;
  'where.productId.gt'?: number;
  'where.productId.gte'?: number;
  'where.productId.lt'?: number;
  'where.productId.lte'?: number;
  'where.productId.like'?: number;
  'where.productId.in'?: string;
  'where.productId.nin'?: string;
  'where.productId.contains'?: string;
  'where.productId.contained'?: string;
  'where.productId.overlaps'?: string;
  'where.or'?: Array<string>;
  'productCategoryId': number;
  'productId': number;
}

export type FairDbUpdateProductToProductCategoryResponseOK = Array<{ 'productCategoryId'?: number | null; 'productId'?: number | null }>
export type FairDbUpdateProductToProductCategoryResponses =
  FairDbUpdateProductToProductCategoryResponseOK

export type FairDbGetProductToProductCategoryByProductCategoryIdAndProductIdRequest = {
  'fields'?: Array<'productCategoryId' | 'productId'>;
  'productCategoryId': number;
  'productId': number;
}

export type FairDbGetProductToProductCategoryByProductCategoryIdAndProductIdResponseOK = {
  'productCategoryId': number | null;
  'productId': number | null;
}
export type FairDbGetProductToProductCategoryByProductCategoryIdAndProductIdResponses =
  FairDbGetProductToProductCategoryByProductCategoryIdAndProductIdResponseOK

export type PostProductToProductCategoryProductCategoryProductCategoryIdProductProductIdRequest = {
  'fields'?: Array<'productCategoryId' | 'productId'>;
  'productCategoryId': number;
  'productId': number;
}

export type PostProductToProductCategoryProductCategoryProductCategoryIdProductProductIdResponseOK = {
  'productCategoryId': number | null;
  'productId': number | null;
}
export type PostProductToProductCategoryProductCategoryProductCategoryIdProductProductIdResponses =
  PostProductToProductCategoryProductCategoryProductCategoryIdProductProductIdResponseOK

export type PutProductToProductCategoryProductCategoryProductCategoryIdProductProductIdRequest = {
  'fields'?: Array<'productCategoryId' | 'productId'>;
  'productCategoryId': number;
  'productId': number;
}

export type PutProductToProductCategoryProductCategoryProductCategoryIdProductProductIdResponseOK = {
  'productCategoryId': number | null;
  'productId': number | null;
}
export type PutProductToProductCategoryProductCategoryProductCategoryIdProductProductIdResponses =
  PutProductToProductCategoryProductCategoryProductCategoryIdProductProductIdResponseOK

export type DeleteProductToProductCategoryProductCategoryProductCategoryIdProductProductIdRequest = {
  'fields'?: Array<'productCategoryId' | 'productId'>;
  'productCategoryId': number;
  'productId': number;
}

export type DeleteProductToProductCategoryProductCategoryProductCategoryIdProductProductIdResponseOK = {
  'productCategoryId': number | null;
  'productId': number | null;
}
export type DeleteProductToProductCategoryProductCategoryProductCategoryIdProductProductIdResponses =
  DeleteProductToProductCategoryProductCategoryProductCategoryIdProductProductIdResponseOK

export type FairDbGetProductOrderRequest = {
  'limit'?: number;
  'offset'?: number;
  'totalCount'?: boolean;
  'fields'?: Array<'id' | 'orderId' | 'priceShipping' | 'productSupplierId' | 'quantity' | 'tmDelivery' | 'tmOrder'>;
  'where.id.eq'?: number;
  'where.id.neq'?: number;
  'where.id.gt'?: number;
  'where.id.gte'?: number;
  'where.id.lt'?: number;
  'where.id.lte'?: number;
  'where.id.like'?: number;
  'where.id.in'?: string;
  'where.id.nin'?: string;
  'where.id.contains'?: string;
  'where.id.contained'?: string;
  'where.id.overlaps'?: string;
  'where.orderId.eq'?: string;
  'where.orderId.neq'?: string;
  'where.orderId.gt'?: string;
  'where.orderId.gte'?: string;
  'where.orderId.lt'?: string;
  'where.orderId.lte'?: string;
  'where.orderId.like'?: string;
  'where.orderId.in'?: string;
  'where.orderId.nin'?: string;
  'where.orderId.contains'?: string;
  'where.orderId.contained'?: string;
  'where.orderId.overlaps'?: string;
  'where.priceShipping.eq'?: number;
  'where.priceShipping.neq'?: number;
  'where.priceShipping.gt'?: number;
  'where.priceShipping.gte'?: number;
  'where.priceShipping.lt'?: number;
  'where.priceShipping.lte'?: number;
  'where.priceShipping.like'?: number;
  'where.priceShipping.in'?: string;
  'where.priceShipping.nin'?: string;
  'where.priceShipping.contains'?: string;
  'where.priceShipping.contained'?: string;
  'where.priceShipping.overlaps'?: string;
  'where.productSupplierId.eq'?: number;
  'where.productSupplierId.neq'?: number;
  'where.productSupplierId.gt'?: number;
  'where.productSupplierId.gte'?: number;
  'where.productSupplierId.lt'?: number;
  'where.productSupplierId.lte'?: number;
  'where.productSupplierId.like'?: number;
  'where.productSupplierId.in'?: string;
  'where.productSupplierId.nin'?: string;
  'where.productSupplierId.contains'?: string;
  'where.productSupplierId.contained'?: string;
  'where.productSupplierId.overlaps'?: string;
  'where.quantity.eq'?: number;
  'where.quantity.neq'?: number;
  'where.quantity.gt'?: number;
  'where.quantity.gte'?: number;
  'where.quantity.lt'?: number;
  'where.quantity.lte'?: number;
  'where.quantity.like'?: number;
  'where.quantity.in'?: string;
  'where.quantity.nin'?: string;
  'where.quantity.contains'?: string;
  'where.quantity.contained'?: string;
  'where.quantity.overlaps'?: string;
  'where.tmDelivery.eq'?: string;
  'where.tmDelivery.neq'?: string;
  'where.tmDelivery.gt'?: string;
  'where.tmDelivery.gte'?: string;
  'where.tmDelivery.lt'?: string;
  'where.tmDelivery.lte'?: string;
  'where.tmDelivery.like'?: string;
  'where.tmDelivery.in'?: string;
  'where.tmDelivery.nin'?: string;
  'where.tmDelivery.contains'?: string;
  'where.tmDelivery.contained'?: string;
  'where.tmDelivery.overlaps'?: string;
  'where.tmOrder.eq'?: string;
  'where.tmOrder.neq'?: string;
  'where.tmOrder.gt'?: string;
  'where.tmOrder.gte'?: string;
  'where.tmOrder.lt'?: string;
  'where.tmOrder.lte'?: string;
  'where.tmOrder.like'?: string;
  'where.tmOrder.in'?: string;
  'where.tmOrder.nin'?: string;
  'where.tmOrder.contains'?: string;
  'where.tmOrder.contained'?: string;
  'where.tmOrder.overlaps'?: string;
  'where.or'?: Array<string>;
  'orderby.id'?: 'asc' | 'desc';
  'orderby.orderId'?: 'asc' | 'desc';
  'orderby.priceShipping'?: 'asc' | 'desc';
  'orderby.productSupplierId'?: 'asc' | 'desc';
  'orderby.quantity'?: 'asc' | 'desc';
  'orderby.tmDelivery'?: 'asc' | 'desc';
  'orderby.tmOrder'?: 'asc' | 'desc';
}

export type FairDbGetProductOrderResponseOK = Array<{ 'id'?: number | null; 'orderId'?: string | null; 'priceShipping'?: number | null; 'productSupplierId'?: number | null; 'quantity'?: number | null; 'tmDelivery'?: string | null; 'tmOrder'?: string | null }>
export type FairDbGetProductOrderResponses =
  FairDbGetProductOrderResponseOK

export type FairDbCreateProductOrderRequest = {
  'id'?: number;
  'orderId': string;
  'priceShipping': number;
  'productSupplierId'?: number | null;
  'quantity': number;
  'tmDelivery'?: string | null;
  'tmOrder'?: string | null;
}

export type FairDbCreateProductOrderResponseOK = {
  'id': number | null;
  'orderId': string | null;
  'priceShipping': number | null;
  'productSupplierId': number | null;
  'quantity': number | null;
  'tmDelivery': string | null;
  'tmOrder': string | null;
}
export type FairDbCreateProductOrderResponses =
  FairDbCreateProductOrderResponseOK

export type FairDbUpdateProductOrderRequest = {
  'fields'?: Array<'id' | 'orderId' | 'priceShipping' | 'productSupplierId' | 'quantity' | 'tmDelivery' | 'tmOrder'>;
  'where.id.eq'?: number;
  'where.id.neq'?: number;
  'where.id.gt'?: number;
  'where.id.gte'?: number;
  'where.id.lt'?: number;
  'where.id.lte'?: number;
  'where.id.like'?: number;
  'where.id.in'?: string;
  'where.id.nin'?: string;
  'where.id.contains'?: string;
  'where.id.contained'?: string;
  'where.id.overlaps'?: string;
  'where.orderId.eq'?: string;
  'where.orderId.neq'?: string;
  'where.orderId.gt'?: string;
  'where.orderId.gte'?: string;
  'where.orderId.lt'?: string;
  'where.orderId.lte'?: string;
  'where.orderId.like'?: string;
  'where.orderId.in'?: string;
  'where.orderId.nin'?: string;
  'where.orderId.contains'?: string;
  'where.orderId.contained'?: string;
  'where.orderId.overlaps'?: string;
  'where.priceShipping.eq'?: number;
  'where.priceShipping.neq'?: number;
  'where.priceShipping.gt'?: number;
  'where.priceShipping.gte'?: number;
  'where.priceShipping.lt'?: number;
  'where.priceShipping.lte'?: number;
  'where.priceShipping.like'?: number;
  'where.priceShipping.in'?: string;
  'where.priceShipping.nin'?: string;
  'where.priceShipping.contains'?: string;
  'where.priceShipping.contained'?: string;
  'where.priceShipping.overlaps'?: string;
  'where.productSupplierId.eq'?: number;
  'where.productSupplierId.neq'?: number;
  'where.productSupplierId.gt'?: number;
  'where.productSupplierId.gte'?: number;
  'where.productSupplierId.lt'?: number;
  'where.productSupplierId.lte'?: number;
  'where.productSupplierId.like'?: number;
  'where.productSupplierId.in'?: string;
  'where.productSupplierId.nin'?: string;
  'where.productSupplierId.contains'?: string;
  'where.productSupplierId.contained'?: string;
  'where.productSupplierId.overlaps'?: string;
  'where.quantity.eq'?: number;
  'where.quantity.neq'?: number;
  'where.quantity.gt'?: number;
  'where.quantity.gte'?: number;
  'where.quantity.lt'?: number;
  'where.quantity.lte'?: number;
  'where.quantity.like'?: number;
  'where.quantity.in'?: string;
  'where.quantity.nin'?: string;
  'where.quantity.contains'?: string;
  'where.quantity.contained'?: string;
  'where.quantity.overlaps'?: string;
  'where.tmDelivery.eq'?: string;
  'where.tmDelivery.neq'?: string;
  'where.tmDelivery.gt'?: string;
  'where.tmDelivery.gte'?: string;
  'where.tmDelivery.lt'?: string;
  'where.tmDelivery.lte'?: string;
  'where.tmDelivery.like'?: string;
  'where.tmDelivery.in'?: string;
  'where.tmDelivery.nin'?: string;
  'where.tmDelivery.contains'?: string;
  'where.tmDelivery.contained'?: string;
  'where.tmDelivery.overlaps'?: string;
  'where.tmOrder.eq'?: string;
  'where.tmOrder.neq'?: string;
  'where.tmOrder.gt'?: string;
  'where.tmOrder.gte'?: string;
  'where.tmOrder.lt'?: string;
  'where.tmOrder.lte'?: string;
  'where.tmOrder.like'?: string;
  'where.tmOrder.in'?: string;
  'where.tmOrder.nin'?: string;
  'where.tmOrder.contains'?: string;
  'where.tmOrder.contained'?: string;
  'where.tmOrder.overlaps'?: string;
  'where.or'?: Array<string>;
  'id'?: number;
  'orderId': string;
  'priceShipping': number;
  'productSupplierId'?: number | null;
  'quantity': number;
  'tmDelivery'?: string | null;
  'tmOrder'?: string | null;
}

export type FairDbUpdateProductOrderResponseOK = Array<{ 'id'?: number | null; 'orderId'?: string | null; 'priceShipping'?: number | null; 'productSupplierId'?: number | null; 'quantity'?: number | null; 'tmDelivery'?: string | null; 'tmOrder'?: string | null }>
export type FairDbUpdateProductOrderResponses =
  FairDbUpdateProductOrderResponseOK

export type FairDbGetProductOrderByIdRequest = {
  'fields'?: Array<'id' | 'orderId' | 'priceShipping' | 'productSupplierId' | 'quantity' | 'tmDelivery' | 'tmOrder'>;
  'id': number;
}

export type FairDbGetProductOrderByIdResponseOK = {
  'id': number | null;
  'orderId': string | null;
  'priceShipping': number | null;
  'productSupplierId': number | null;
  'quantity': number | null;
  'tmDelivery': string | null;
  'tmOrder': string | null;
}
export type FairDbGetProductOrderByIdResponses =
  FairDbGetProductOrderByIdResponseOK

export type FairDbUpdateProductOrderRequest = {
  'fields'?: Array<'id' | 'orderId' | 'priceShipping' | 'productSupplierId' | 'quantity' | 'tmDelivery' | 'tmOrder'>;
  'id': number;
  'orderId': string;
  'priceShipping': number;
  'productSupplierId'?: number | null;
  'quantity': number;
  'tmDelivery'?: string | null;
  'tmOrder'?: string | null;
}

export type FairDbUpdateProductOrderResponseOK = {
  'id': number | null;
  'orderId': string | null;
  'priceShipping': number | null;
  'productSupplierId': number | null;
  'quantity': number | null;
  'tmDelivery': string | null;
  'tmOrder': string | null;
}
export type FairDbUpdateProductOrderResponses =
  FairDbUpdateProductOrderResponseOK

export type FairDbDeleteProductOrderRequest = {
  'fields'?: Array<'id' | 'orderId' | 'priceShipping' | 'productSupplierId' | 'quantity' | 'tmDelivery' | 'tmOrder'>;
  'id': number;
}

export type FairDbDeleteProductOrderResponseOK = {
  'id': number | null;
  'orderId': string | null;
  'priceShipping': number | null;
  'productSupplierId': number | null;
  'quantity': number | null;
  'tmDelivery': string | null;
  'tmOrder': string | null;
}
export type FairDbDeleteProductOrderResponses =
  FairDbDeleteProductOrderResponseOK

export type FairDbGetProductOrderLineForProductOrderRequest = {
  'fields'?: Array<'price' | 'priceTaxRatePercent' | 'productId' | 'productOrderId' | 'quantity'>;
  'id': number;
}

export type FairDbGetProductOrderLineForProductOrderResponseOK = Array<{ 'productId'?: number | null; 'productOrderId'?: number | null; 'price'?: number | null; 'priceTaxRatePercent'?: number | null; 'quantity'?: number | null }>
export type FairDbGetProductOrderLineForProductOrderResponses =
  FairDbGetProductOrderLineForProductOrderResponseOK

export type FairDbGetProductSupplierForProductOrderRequest = {
  'fields'?: Array<'bic' | 'city' | 'description' | 'email' | 'homepage' | 'iban' | 'id' | 'name' | 'phone' | 'postalCode' | 'ratingPrice' | 'ratingSupply' | 'state' | 'street' | 'vat'>;
  'id': number;
}

export type FairDbGetProductSupplierForProductOrderResponseOK = {
  'id': number | null;
  'bic': string | null;
  'description': string | null;
  'homepage': string | null;
  'iban': string | null;
  'name': string | null;
  'phone': string | null;
  'ratingPrice': number | null;
  'ratingSupply': number | null;
  'email': string | null;
  'vat': string | null;
  'city': string | null;
  'state': string | null;
  'street': string | null;
  'postalCode': string | null;
}
export type FairDbGetProductSupplierForProductOrderResponses =
  FairDbGetProductSupplierForProductOrderResponseOK

export type FairDbGetProductOrderLineRequest = {
  'limit'?: number;
  'offset'?: number;
  'totalCount'?: boolean;
  'fields'?: Array<'price' | 'priceTaxRatePercent' | 'productId' | 'productOrderId' | 'quantity'>;
  'where.price.eq'?: number;
  'where.price.neq'?: number;
  'where.price.gt'?: number;
  'where.price.gte'?: number;
  'where.price.lt'?: number;
  'where.price.lte'?: number;
  'where.price.like'?: number;
  'where.price.in'?: string;
  'where.price.nin'?: string;
  'where.price.contains'?: string;
  'where.price.contained'?: string;
  'where.price.overlaps'?: string;
  'where.priceTaxRatePercent.eq'?: number;
  'where.priceTaxRatePercent.neq'?: number;
  'where.priceTaxRatePercent.gt'?: number;
  'where.priceTaxRatePercent.gte'?: number;
  'where.priceTaxRatePercent.lt'?: number;
  'where.priceTaxRatePercent.lte'?: number;
  'where.priceTaxRatePercent.like'?: number;
  'where.priceTaxRatePercent.in'?: string;
  'where.priceTaxRatePercent.nin'?: string;
  'where.priceTaxRatePercent.contains'?: string;
  'where.priceTaxRatePercent.contained'?: string;
  'where.priceTaxRatePercent.overlaps'?: string;
  'where.productId.eq'?: number;
  'where.productId.neq'?: number;
  'where.productId.gt'?: number;
  'where.productId.gte'?: number;
  'where.productId.lt'?: number;
  'where.productId.lte'?: number;
  'where.productId.like'?: number;
  'where.productId.in'?: string;
  'where.productId.nin'?: string;
  'where.productId.contains'?: string;
  'where.productId.contained'?: string;
  'where.productId.overlaps'?: string;
  'where.productOrderId.eq'?: number;
  'where.productOrderId.neq'?: number;
  'where.productOrderId.gt'?: number;
  'where.productOrderId.gte'?: number;
  'where.productOrderId.lt'?: number;
  'where.productOrderId.lte'?: number;
  'where.productOrderId.like'?: number;
  'where.productOrderId.in'?: string;
  'where.productOrderId.nin'?: string;
  'where.productOrderId.contains'?: string;
  'where.productOrderId.contained'?: string;
  'where.productOrderId.overlaps'?: string;
  'where.quantity.eq'?: number;
  'where.quantity.neq'?: number;
  'where.quantity.gt'?: number;
  'where.quantity.gte'?: number;
  'where.quantity.lt'?: number;
  'where.quantity.lte'?: number;
  'where.quantity.like'?: number;
  'where.quantity.in'?: string;
  'where.quantity.nin'?: string;
  'where.quantity.contains'?: string;
  'where.quantity.contained'?: string;
  'where.quantity.overlaps'?: string;
  'where.or'?: Array<string>;
  'orderby.price'?: 'asc' | 'desc';
  'orderby.priceTaxRatePercent'?: 'asc' | 'desc';
  'orderby.productId'?: 'asc' | 'desc';
  'orderby.productOrderId'?: 'asc' | 'desc';
  'orderby.quantity'?: 'asc' | 'desc';
}

export type FairDbGetProductOrderLineResponseOK = Array<{ 'productId'?: number | null; 'productOrderId'?: number | null; 'price'?: number | null; 'priceTaxRatePercent'?: number | null; 'quantity'?: number | null }>
export type FairDbGetProductOrderLineResponses =
  FairDbGetProductOrderLineResponseOK

export type FairDbCreateProductOrderLineRequest = {
  'productId'?: number;
  'productOrderId'?: number;
  'price': number;
  'priceTaxRatePercent': number;
  'quantity': number;
}

export type FairDbCreateProductOrderLineResponseOK = {
  'productId': number | null;
  'productOrderId': number | null;
  'price': number | null;
  'priceTaxRatePercent': number | null;
  'quantity': number | null;
}
export type FairDbCreateProductOrderLineResponses =
  FairDbCreateProductOrderLineResponseOK

export type FairDbUpdateProductOrderLineRequest = {
  'fields'?: Array<'price' | 'priceTaxRatePercent' | 'productId' | 'productOrderId' | 'quantity'>;
  'where.price.eq'?: number;
  'where.price.neq'?: number;
  'where.price.gt'?: number;
  'where.price.gte'?: number;
  'where.price.lt'?: number;
  'where.price.lte'?: number;
  'where.price.like'?: number;
  'where.price.in'?: string;
  'where.price.nin'?: string;
  'where.price.contains'?: string;
  'where.price.contained'?: string;
  'where.price.overlaps'?: string;
  'where.priceTaxRatePercent.eq'?: number;
  'where.priceTaxRatePercent.neq'?: number;
  'where.priceTaxRatePercent.gt'?: number;
  'where.priceTaxRatePercent.gte'?: number;
  'where.priceTaxRatePercent.lt'?: number;
  'where.priceTaxRatePercent.lte'?: number;
  'where.priceTaxRatePercent.like'?: number;
  'where.priceTaxRatePercent.in'?: string;
  'where.priceTaxRatePercent.nin'?: string;
  'where.priceTaxRatePercent.contains'?: string;
  'where.priceTaxRatePercent.contained'?: string;
  'where.priceTaxRatePercent.overlaps'?: string;
  'where.productId.eq'?: number;
  'where.productId.neq'?: number;
  'where.productId.gt'?: number;
  'where.productId.gte'?: number;
  'where.productId.lt'?: number;
  'where.productId.lte'?: number;
  'where.productId.like'?: number;
  'where.productId.in'?: string;
  'where.productId.nin'?: string;
  'where.productId.contains'?: string;
  'where.productId.contained'?: string;
  'where.productId.overlaps'?: string;
  'where.productOrderId.eq'?: number;
  'where.productOrderId.neq'?: number;
  'where.productOrderId.gt'?: number;
  'where.productOrderId.gte'?: number;
  'where.productOrderId.lt'?: number;
  'where.productOrderId.lte'?: number;
  'where.productOrderId.like'?: number;
  'where.productOrderId.in'?: string;
  'where.productOrderId.nin'?: string;
  'where.productOrderId.contains'?: string;
  'where.productOrderId.contained'?: string;
  'where.productOrderId.overlaps'?: string;
  'where.quantity.eq'?: number;
  'where.quantity.neq'?: number;
  'where.quantity.gt'?: number;
  'where.quantity.gte'?: number;
  'where.quantity.lt'?: number;
  'where.quantity.lte'?: number;
  'where.quantity.like'?: number;
  'where.quantity.in'?: string;
  'where.quantity.nin'?: string;
  'where.quantity.contains'?: string;
  'where.quantity.contained'?: string;
  'where.quantity.overlaps'?: string;
  'where.or'?: Array<string>;
  'productId'?: number;
  'productOrderId'?: number;
  'price': number;
  'priceTaxRatePercent': number;
  'quantity': number;
}

export type FairDbUpdateProductOrderLineResponseOK = Array<{ 'productId'?: number | null; 'productOrderId'?: number | null; 'price'?: number | null; 'priceTaxRatePercent'?: number | null; 'quantity'?: number | null }>
export type FairDbUpdateProductOrderLineResponses =
  FairDbUpdateProductOrderLineResponseOK

export type FairDbGetProductOrderLineByProductIdAndProductOrderIdRequest = {
  'fields'?: Array<'price' | 'priceTaxRatePercent' | 'productId' | 'productOrderId' | 'quantity'>;
  'productId': number;
  'productOrderId': number;
}

export type FairDbGetProductOrderLineByProductIdAndProductOrderIdResponseOK = {
  'productId': number | null;
  'productOrderId': number | null;
  'price': number | null;
  'priceTaxRatePercent': number | null;
  'quantity': number | null;
}
export type FairDbGetProductOrderLineByProductIdAndProductOrderIdResponses =
  FairDbGetProductOrderLineByProductIdAndProductOrderIdResponseOK

export type PostProductOrderLineProductProductIdProductOrderProductOrderIdRequest = {
  'fields'?: Array<'price' | 'priceTaxRatePercent' | 'productId' | 'productOrderId' | 'quantity'>;
  'productId': number;
  'productOrderId': number;
  'price': number;
  'priceTaxRatePercent': number;
  'quantity': number;
}

export type PostProductOrderLineProductProductIdProductOrderProductOrderIdResponseOK = {
  'productId': number | null;
  'productOrderId': number | null;
  'price': number | null;
  'priceTaxRatePercent': number | null;
  'quantity': number | null;
}
export type PostProductOrderLineProductProductIdProductOrderProductOrderIdResponses =
  PostProductOrderLineProductProductIdProductOrderProductOrderIdResponseOK

export type PutProductOrderLineProductProductIdProductOrderProductOrderIdRequest = {
  'fields'?: Array<'price' | 'priceTaxRatePercent' | 'productId' | 'productOrderId' | 'quantity'>;
  'productId': number;
  'productOrderId': number;
  'price': number;
  'priceTaxRatePercent': number;
  'quantity': number;
}

export type PutProductOrderLineProductProductIdProductOrderProductOrderIdResponseOK = {
  'productId': number | null;
  'productOrderId': number | null;
  'price': number | null;
  'priceTaxRatePercent': number | null;
  'quantity': number | null;
}
export type PutProductOrderLineProductProductIdProductOrderProductOrderIdResponses =
  PutProductOrderLineProductProductIdProductOrderProductOrderIdResponseOK

export type DeleteProductOrderLineProductProductIdProductOrderProductOrderIdRequest = {
  'fields'?: Array<'price' | 'priceTaxRatePercent' | 'productId' | 'productOrderId' | 'quantity'>;
  'productId': number;
  'productOrderId': number;
}

export type DeleteProductOrderLineProductProductIdProductOrderProductOrderIdResponseOK = {
  'productId': number | null;
  'productOrderId': number | null;
  'price': number | null;
  'priceTaxRatePercent': number | null;
  'quantity': number | null;
}
export type DeleteProductOrderLineProductProductIdProductOrderProductOrderIdResponses =
  DeleteProductOrderLineProductProductIdProductOrderProductOrderIdResponseOK

export type FairDbGetFairPresenterRequest = {
  'limit'?: number;
  'offset'?: number;
  'totalCount'?: boolean;
  'fields'?: Array<'bic' | 'description' | 'homepage' | 'iban' | 'id' | 'name' | 'phone' | 'ratingFair' | 'ratingPrice'>;
  'where.bic.eq'?: string;
  'where.bic.neq'?: string;
  'where.bic.gt'?: string;
  'where.bic.gte'?: string;
  'where.bic.lt'?: string;
  'where.bic.lte'?: string;
  'where.bic.like'?: string;
  'where.bic.in'?: string;
  'where.bic.nin'?: string;
  'where.bic.contains'?: string;
  'where.bic.contained'?: string;
  'where.bic.overlaps'?: string;
  'where.description.eq'?: string;
  'where.description.neq'?: string;
  'where.description.gt'?: string;
  'where.description.gte'?: string;
  'where.description.lt'?: string;
  'where.description.lte'?: string;
  'where.description.like'?: string;
  'where.description.in'?: string;
  'where.description.nin'?: string;
  'where.description.contains'?: string;
  'where.description.contained'?: string;
  'where.description.overlaps'?: string;
  'where.homepage.eq'?: string;
  'where.homepage.neq'?: string;
  'where.homepage.gt'?: string;
  'where.homepage.gte'?: string;
  'where.homepage.lt'?: string;
  'where.homepage.lte'?: string;
  'where.homepage.like'?: string;
  'where.homepage.in'?: string;
  'where.homepage.nin'?: string;
  'where.homepage.contains'?: string;
  'where.homepage.contained'?: string;
  'where.homepage.overlaps'?: string;
  'where.iban.eq'?: string;
  'where.iban.neq'?: string;
  'where.iban.gt'?: string;
  'where.iban.gte'?: string;
  'where.iban.lt'?: string;
  'where.iban.lte'?: string;
  'where.iban.like'?: string;
  'where.iban.in'?: string;
  'where.iban.nin'?: string;
  'where.iban.contains'?: string;
  'where.iban.contained'?: string;
  'where.iban.overlaps'?: string;
  'where.id.eq'?: number;
  'where.id.neq'?: number;
  'where.id.gt'?: number;
  'where.id.gte'?: number;
  'where.id.lt'?: number;
  'where.id.lte'?: number;
  'where.id.like'?: number;
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
  'where.name.in'?: string;
  'where.name.nin'?: string;
  'where.name.contains'?: string;
  'where.name.contained'?: string;
  'where.name.overlaps'?: string;
  'where.phone.eq'?: string;
  'where.phone.neq'?: string;
  'where.phone.gt'?: string;
  'where.phone.gte'?: string;
  'where.phone.lt'?: string;
  'where.phone.lte'?: string;
  'where.phone.like'?: string;
  'where.phone.in'?: string;
  'where.phone.nin'?: string;
  'where.phone.contains'?: string;
  'where.phone.contained'?: string;
  'where.phone.overlaps'?: string;
  'where.ratingFair.eq'?: number;
  'where.ratingFair.neq'?: number;
  'where.ratingFair.gt'?: number;
  'where.ratingFair.gte'?: number;
  'where.ratingFair.lt'?: number;
  'where.ratingFair.lte'?: number;
  'where.ratingFair.like'?: number;
  'where.ratingFair.in'?: string;
  'where.ratingFair.nin'?: string;
  'where.ratingFair.contains'?: string;
  'where.ratingFair.contained'?: string;
  'where.ratingFair.overlaps'?: string;
  'where.ratingPrice.eq'?: number;
  'where.ratingPrice.neq'?: number;
  'where.ratingPrice.gt'?: number;
  'where.ratingPrice.gte'?: number;
  'where.ratingPrice.lt'?: number;
  'where.ratingPrice.lte'?: number;
  'where.ratingPrice.like'?: number;
  'where.ratingPrice.in'?: string;
  'where.ratingPrice.nin'?: string;
  'where.ratingPrice.contains'?: string;
  'where.ratingPrice.contained'?: string;
  'where.ratingPrice.overlaps'?: string;
  'where.or'?: Array<string>;
  'orderby.bic'?: 'asc' | 'desc';
  'orderby.description'?: 'asc' | 'desc';
  'orderby.homepage'?: 'asc' | 'desc';
  'orderby.iban'?: 'asc' | 'desc';
  'orderby.id'?: 'asc' | 'desc';
  'orderby.name'?: 'asc' | 'desc';
  'orderby.phone'?: 'asc' | 'desc';
  'orderby.ratingFair'?: 'asc' | 'desc';
  'orderby.ratingPrice'?: 'asc' | 'desc';
}

export type FairDbGetFairPresenterResponseOK = Array<{ 'id'?: number | null; 'bic'?: string | null; 'description'?: string | null; 'homepage'?: string | null; 'iban'?: string | null; 'name'?: string | null; 'phone'?: string | null; 'ratingFair'?: number | null; 'ratingPrice'?: number | null }>
export type FairDbGetFairPresenterResponses =
  FairDbGetFairPresenterResponseOK

export type FairDbCreateFairPresenterRequest = {
  'id'?: number;
  'bic': string;
  'description': string;
  'homepage': string;
  'iban': string;
  'name': string;
  'phone': string;
  'ratingFair': number;
  'ratingPrice': number;
}

export type FairDbCreateFairPresenterResponseOK = {
  'id': number | null;
  'bic': string | null;
  'description': string | null;
  'homepage': string | null;
  'iban': string | null;
  'name': string | null;
  'phone': string | null;
  'ratingFair': number | null;
  'ratingPrice': number | null;
}
export type FairDbCreateFairPresenterResponses =
  FairDbCreateFairPresenterResponseOK

export type FairDbUpdateFairPresenterRequest = {
  'fields'?: Array<'bic' | 'description' | 'homepage' | 'iban' | 'id' | 'name' | 'phone' | 'ratingFair' | 'ratingPrice'>;
  'where.bic.eq'?: string;
  'where.bic.neq'?: string;
  'where.bic.gt'?: string;
  'where.bic.gte'?: string;
  'where.bic.lt'?: string;
  'where.bic.lte'?: string;
  'where.bic.like'?: string;
  'where.bic.in'?: string;
  'where.bic.nin'?: string;
  'where.bic.contains'?: string;
  'where.bic.contained'?: string;
  'where.bic.overlaps'?: string;
  'where.description.eq'?: string;
  'where.description.neq'?: string;
  'where.description.gt'?: string;
  'where.description.gte'?: string;
  'where.description.lt'?: string;
  'where.description.lte'?: string;
  'where.description.like'?: string;
  'where.description.in'?: string;
  'where.description.nin'?: string;
  'where.description.contains'?: string;
  'where.description.contained'?: string;
  'where.description.overlaps'?: string;
  'where.homepage.eq'?: string;
  'where.homepage.neq'?: string;
  'where.homepage.gt'?: string;
  'where.homepage.gte'?: string;
  'where.homepage.lt'?: string;
  'where.homepage.lte'?: string;
  'where.homepage.like'?: string;
  'where.homepage.in'?: string;
  'where.homepage.nin'?: string;
  'where.homepage.contains'?: string;
  'where.homepage.contained'?: string;
  'where.homepage.overlaps'?: string;
  'where.iban.eq'?: string;
  'where.iban.neq'?: string;
  'where.iban.gt'?: string;
  'where.iban.gte'?: string;
  'where.iban.lt'?: string;
  'where.iban.lte'?: string;
  'where.iban.like'?: string;
  'where.iban.in'?: string;
  'where.iban.nin'?: string;
  'where.iban.contains'?: string;
  'where.iban.contained'?: string;
  'where.iban.overlaps'?: string;
  'where.id.eq'?: number;
  'where.id.neq'?: number;
  'where.id.gt'?: number;
  'where.id.gte'?: number;
  'where.id.lt'?: number;
  'where.id.lte'?: number;
  'where.id.like'?: number;
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
  'where.name.in'?: string;
  'where.name.nin'?: string;
  'where.name.contains'?: string;
  'where.name.contained'?: string;
  'where.name.overlaps'?: string;
  'where.phone.eq'?: string;
  'where.phone.neq'?: string;
  'where.phone.gt'?: string;
  'where.phone.gte'?: string;
  'where.phone.lt'?: string;
  'where.phone.lte'?: string;
  'where.phone.like'?: string;
  'where.phone.in'?: string;
  'where.phone.nin'?: string;
  'where.phone.contains'?: string;
  'where.phone.contained'?: string;
  'where.phone.overlaps'?: string;
  'where.ratingFair.eq'?: number;
  'where.ratingFair.neq'?: number;
  'where.ratingFair.gt'?: number;
  'where.ratingFair.gte'?: number;
  'where.ratingFair.lt'?: number;
  'where.ratingFair.lte'?: number;
  'where.ratingFair.like'?: number;
  'where.ratingFair.in'?: string;
  'where.ratingFair.nin'?: string;
  'where.ratingFair.contains'?: string;
  'where.ratingFair.contained'?: string;
  'where.ratingFair.overlaps'?: string;
  'where.ratingPrice.eq'?: number;
  'where.ratingPrice.neq'?: number;
  'where.ratingPrice.gt'?: number;
  'where.ratingPrice.gte'?: number;
  'where.ratingPrice.lt'?: number;
  'where.ratingPrice.lte'?: number;
  'where.ratingPrice.like'?: number;
  'where.ratingPrice.in'?: string;
  'where.ratingPrice.nin'?: string;
  'where.ratingPrice.contains'?: string;
  'where.ratingPrice.contained'?: string;
  'where.ratingPrice.overlaps'?: string;
  'where.or'?: Array<string>;
  'id'?: number;
  'bic': string;
  'description': string;
  'homepage': string;
  'iban': string;
  'name': string;
  'phone': string;
  'ratingFair': number;
  'ratingPrice': number;
}

export type FairDbUpdateFairPresenterResponseOK = Array<{ 'id'?: number | null; 'bic'?: string | null; 'description'?: string | null; 'homepage'?: string | null; 'iban'?: string | null; 'name'?: string | null; 'phone'?: string | null; 'ratingFair'?: number | null; 'ratingPrice'?: number | null }>
export type FairDbUpdateFairPresenterResponses =
  FairDbUpdateFairPresenterResponseOK

export type FairDbGetFairPresenterByIdRequest = {
  'fields'?: Array<'bic' | 'description' | 'homepage' | 'iban' | 'id' | 'name' | 'phone' | 'ratingFair' | 'ratingPrice'>;
  'id': number;
}

export type FairDbGetFairPresenterByIdResponseOK = {
  'id': number | null;
  'bic': string | null;
  'description': string | null;
  'homepage': string | null;
  'iban': string | null;
  'name': string | null;
  'phone': string | null;
  'ratingFair': number | null;
  'ratingPrice': number | null;
}
export type FairDbGetFairPresenterByIdResponses =
  FairDbGetFairPresenterByIdResponseOK

export type FairDbUpdateFairPresenterRequest = {
  'fields'?: Array<'bic' | 'description' | 'homepage' | 'iban' | 'id' | 'name' | 'phone' | 'ratingFair' | 'ratingPrice'>;
  'id': number;
  'bic': string;
  'description': string;
  'homepage': string;
  'iban': string;
  'name': string;
  'phone': string;
  'ratingFair': number;
  'ratingPrice': number;
}

export type FairDbUpdateFairPresenterResponseOK = {
  'id': number | null;
  'bic': string | null;
  'description': string | null;
  'homepage': string | null;
  'iban': string | null;
  'name': string | null;
  'phone': string | null;
  'ratingFair': number | null;
  'ratingPrice': number | null;
}
export type FairDbUpdateFairPresenterResponses =
  FairDbUpdateFairPresenterResponseOK

export type FairDbDeleteFairPresenterRequest = {
  'fields'?: Array<'bic' | 'description' | 'homepage' | 'iban' | 'id' | 'name' | 'phone' | 'ratingFair' | 'ratingPrice'>;
  'id': number;
}

export type FairDbDeleteFairPresenterResponseOK = {
  'id': number | null;
  'bic': string | null;
  'description': string | null;
  'homepage': string | null;
  'iban': string | null;
  'name': string | null;
  'phone': string | null;
  'ratingFair': number | null;
  'ratingPrice': number | null;
}
export type FairDbDeleteFairPresenterResponses =
  FairDbDeleteFairPresenterResponseOK

export type FairDbGetFairForFairPresenterRequest = {
  'fields'?: Array<'city' | 'fairPresenterId' | 'id' | 'notes' | 'sellingHoursUsually' | 'street' | 'title' | 'usualPrice' | 'usualTax'>;
  'id': number;
}

export type FairDbGetFairForFairPresenterResponseOK = Array<{ 'id'?: number | null; 'fairPresenterId'?: number | null; 'city'?: string | null; 'notes'?: string | null; 'sellingHoursUsually'?: number | null; 'street'?: string | null; 'title'?: string | null; 'usualPrice'?: number | null; 'usualTax'?: number | null }>
export type FairDbGetFairForFairPresenterResponses =
  FairDbGetFairForFairPresenterResponseOK

export type FairDbGetFairHelperRequest = {
  'limit'?: number;
  'offset'?: number;
  'totalCount'?: boolean;
  'fields'?: Array<'city' | 'id' | 'name' | 'notes' | 'phone' | 'ratingCut' | 'ratingPlate' | 'ratingSell' | 'street' | 'usualWagePerDay' | 'usualWagePerHour'>;
  'where.city.eq'?: string;
  'where.city.neq'?: string;
  'where.city.gt'?: string;
  'where.city.gte'?: string;
  'where.city.lt'?: string;
  'where.city.lte'?: string;
  'where.city.like'?: string;
  'where.city.in'?: string;
  'where.city.nin'?: string;
  'where.city.contains'?: string;
  'where.city.contained'?: string;
  'where.city.overlaps'?: string;
  'where.id.eq'?: number;
  'where.id.neq'?: number;
  'where.id.gt'?: number;
  'where.id.gte'?: number;
  'where.id.lt'?: number;
  'where.id.lte'?: number;
  'where.id.like'?: number;
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
  'where.name.in'?: string;
  'where.name.nin'?: string;
  'where.name.contains'?: string;
  'where.name.contained'?: string;
  'where.name.overlaps'?: string;
  'where.notes.eq'?: string;
  'where.notes.neq'?: string;
  'where.notes.gt'?: string;
  'where.notes.gte'?: string;
  'where.notes.lt'?: string;
  'where.notes.lte'?: string;
  'where.notes.like'?: string;
  'where.notes.in'?: string;
  'where.notes.nin'?: string;
  'where.notes.contains'?: string;
  'where.notes.contained'?: string;
  'where.notes.overlaps'?: string;
  'where.phone.eq'?: string;
  'where.phone.neq'?: string;
  'where.phone.gt'?: string;
  'where.phone.gte'?: string;
  'where.phone.lt'?: string;
  'where.phone.lte'?: string;
  'where.phone.like'?: string;
  'where.phone.in'?: string;
  'where.phone.nin'?: string;
  'where.phone.contains'?: string;
  'where.phone.contained'?: string;
  'where.phone.overlaps'?: string;
  'where.ratingCut.eq'?: number;
  'where.ratingCut.neq'?: number;
  'where.ratingCut.gt'?: number;
  'where.ratingCut.gte'?: number;
  'where.ratingCut.lt'?: number;
  'where.ratingCut.lte'?: number;
  'where.ratingCut.like'?: number;
  'where.ratingCut.in'?: string;
  'where.ratingCut.nin'?: string;
  'where.ratingCut.contains'?: string;
  'where.ratingCut.contained'?: string;
  'where.ratingCut.overlaps'?: string;
  'where.ratingPlate.eq'?: number;
  'where.ratingPlate.neq'?: number;
  'where.ratingPlate.gt'?: number;
  'where.ratingPlate.gte'?: number;
  'where.ratingPlate.lt'?: number;
  'where.ratingPlate.lte'?: number;
  'where.ratingPlate.like'?: number;
  'where.ratingPlate.in'?: string;
  'where.ratingPlate.nin'?: string;
  'where.ratingPlate.contains'?: string;
  'where.ratingPlate.contained'?: string;
  'where.ratingPlate.overlaps'?: string;
  'where.ratingSell.eq'?: number;
  'where.ratingSell.neq'?: number;
  'where.ratingSell.gt'?: number;
  'where.ratingSell.gte'?: number;
  'where.ratingSell.lt'?: number;
  'where.ratingSell.lte'?: number;
  'where.ratingSell.like'?: number;
  'where.ratingSell.in'?: string;
  'where.ratingSell.nin'?: string;
  'where.ratingSell.contains'?: string;
  'where.ratingSell.contained'?: string;
  'where.ratingSell.overlaps'?: string;
  'where.street.eq'?: string;
  'where.street.neq'?: string;
  'where.street.gt'?: string;
  'where.street.gte'?: string;
  'where.street.lt'?: string;
  'where.street.lte'?: string;
  'where.street.like'?: string;
  'where.street.in'?: string;
  'where.street.nin'?: string;
  'where.street.contains'?: string;
  'where.street.contained'?: string;
  'where.street.overlaps'?: string;
  'where.usualWagePerDay.eq'?: number;
  'where.usualWagePerDay.neq'?: number;
  'where.usualWagePerDay.gt'?: number;
  'where.usualWagePerDay.gte'?: number;
  'where.usualWagePerDay.lt'?: number;
  'where.usualWagePerDay.lte'?: number;
  'where.usualWagePerDay.like'?: number;
  'where.usualWagePerDay.in'?: string;
  'where.usualWagePerDay.nin'?: string;
  'where.usualWagePerDay.contains'?: string;
  'where.usualWagePerDay.contained'?: string;
  'where.usualWagePerDay.overlaps'?: string;
  'where.usualWagePerHour.eq'?: number;
  'where.usualWagePerHour.neq'?: number;
  'where.usualWagePerHour.gt'?: number;
  'where.usualWagePerHour.gte'?: number;
  'where.usualWagePerHour.lt'?: number;
  'where.usualWagePerHour.lte'?: number;
  'where.usualWagePerHour.like'?: number;
  'where.usualWagePerHour.in'?: string;
  'where.usualWagePerHour.nin'?: string;
  'where.usualWagePerHour.contains'?: string;
  'where.usualWagePerHour.contained'?: string;
  'where.usualWagePerHour.overlaps'?: string;
  'where.or'?: Array<string>;
  'orderby.city'?: 'asc' | 'desc';
  'orderby.id'?: 'asc' | 'desc';
  'orderby.name'?: 'asc' | 'desc';
  'orderby.notes'?: 'asc' | 'desc';
  'orderby.phone'?: 'asc' | 'desc';
  'orderby.ratingCut'?: 'asc' | 'desc';
  'orderby.ratingPlate'?: 'asc' | 'desc';
  'orderby.ratingSell'?: 'asc' | 'desc';
  'orderby.street'?: 'asc' | 'desc';
  'orderby.usualWagePerDay'?: 'asc' | 'desc';
  'orderby.usualWagePerHour'?: 'asc' | 'desc';
}

export type FairDbGetFairHelperResponseOK = Array<{ 'id'?: number | null; 'city'?: string | null; 'name'?: string | null; 'notes'?: string | null; 'phone'?: string | null; 'ratingCut'?: number | null; 'ratingPlate'?: number | null; 'ratingSell'?: number | null; 'street'?: string | null; 'usualWagePerDay'?: number | null; 'usualWagePerHour'?: number | null }>
export type FairDbGetFairHelperResponses =
  FairDbGetFairHelperResponseOK

export type FairDbCreateFairHelperRequest = {
  'id'?: number;
  'city': string;
  'name': string;
  'notes': string;
  'phone': string;
  'ratingCut'?: number | null;
  'ratingPlate'?: number | null;
  'ratingSell'?: number | null;
  'street': string;
  'usualWagePerDay': number;
  'usualWagePerHour': number;
}

export type FairDbCreateFairHelperResponseOK = {
  'id': number | null;
  'city': string | null;
  'name': string | null;
  'notes': string | null;
  'phone': string | null;
  'ratingCut': number | null;
  'ratingPlate': number | null;
  'ratingSell': number | null;
  'street': string | null;
  'usualWagePerDay': number | null;
  'usualWagePerHour': number | null;
}
export type FairDbCreateFairHelperResponses =
  FairDbCreateFairHelperResponseOK

export type FairDbUpdateFairHelperRequest = {
  'fields'?: Array<'city' | 'id' | 'name' | 'notes' | 'phone' | 'ratingCut' | 'ratingPlate' | 'ratingSell' | 'street' | 'usualWagePerDay' | 'usualWagePerHour'>;
  'where.city.eq'?: string;
  'where.city.neq'?: string;
  'where.city.gt'?: string;
  'where.city.gte'?: string;
  'where.city.lt'?: string;
  'where.city.lte'?: string;
  'where.city.like'?: string;
  'where.city.in'?: string;
  'where.city.nin'?: string;
  'where.city.contains'?: string;
  'where.city.contained'?: string;
  'where.city.overlaps'?: string;
  'where.id.eq'?: number;
  'where.id.neq'?: number;
  'where.id.gt'?: number;
  'where.id.gte'?: number;
  'where.id.lt'?: number;
  'where.id.lte'?: number;
  'where.id.like'?: number;
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
  'where.name.in'?: string;
  'where.name.nin'?: string;
  'where.name.contains'?: string;
  'where.name.contained'?: string;
  'where.name.overlaps'?: string;
  'where.notes.eq'?: string;
  'where.notes.neq'?: string;
  'where.notes.gt'?: string;
  'where.notes.gte'?: string;
  'where.notes.lt'?: string;
  'where.notes.lte'?: string;
  'where.notes.like'?: string;
  'where.notes.in'?: string;
  'where.notes.nin'?: string;
  'where.notes.contains'?: string;
  'where.notes.contained'?: string;
  'where.notes.overlaps'?: string;
  'where.phone.eq'?: string;
  'where.phone.neq'?: string;
  'where.phone.gt'?: string;
  'where.phone.gte'?: string;
  'where.phone.lt'?: string;
  'where.phone.lte'?: string;
  'where.phone.like'?: string;
  'where.phone.in'?: string;
  'where.phone.nin'?: string;
  'where.phone.contains'?: string;
  'where.phone.contained'?: string;
  'where.phone.overlaps'?: string;
  'where.ratingCut.eq'?: number;
  'where.ratingCut.neq'?: number;
  'where.ratingCut.gt'?: number;
  'where.ratingCut.gte'?: number;
  'where.ratingCut.lt'?: number;
  'where.ratingCut.lte'?: number;
  'where.ratingCut.like'?: number;
  'where.ratingCut.in'?: string;
  'where.ratingCut.nin'?: string;
  'where.ratingCut.contains'?: string;
  'where.ratingCut.contained'?: string;
  'where.ratingCut.overlaps'?: string;
  'where.ratingPlate.eq'?: number;
  'where.ratingPlate.neq'?: number;
  'where.ratingPlate.gt'?: number;
  'where.ratingPlate.gte'?: number;
  'where.ratingPlate.lt'?: number;
  'where.ratingPlate.lte'?: number;
  'where.ratingPlate.like'?: number;
  'where.ratingPlate.in'?: string;
  'where.ratingPlate.nin'?: string;
  'where.ratingPlate.contains'?: string;
  'where.ratingPlate.contained'?: string;
  'where.ratingPlate.overlaps'?: string;
  'where.ratingSell.eq'?: number;
  'where.ratingSell.neq'?: number;
  'where.ratingSell.gt'?: number;
  'where.ratingSell.gte'?: number;
  'where.ratingSell.lt'?: number;
  'where.ratingSell.lte'?: number;
  'where.ratingSell.like'?: number;
  'where.ratingSell.in'?: string;
  'where.ratingSell.nin'?: string;
  'where.ratingSell.contains'?: string;
  'where.ratingSell.contained'?: string;
  'where.ratingSell.overlaps'?: string;
  'where.street.eq'?: string;
  'where.street.neq'?: string;
  'where.street.gt'?: string;
  'where.street.gte'?: string;
  'where.street.lt'?: string;
  'where.street.lte'?: string;
  'where.street.like'?: string;
  'where.street.in'?: string;
  'where.street.nin'?: string;
  'where.street.contains'?: string;
  'where.street.contained'?: string;
  'where.street.overlaps'?: string;
  'where.usualWagePerDay.eq'?: number;
  'where.usualWagePerDay.neq'?: number;
  'where.usualWagePerDay.gt'?: number;
  'where.usualWagePerDay.gte'?: number;
  'where.usualWagePerDay.lt'?: number;
  'where.usualWagePerDay.lte'?: number;
  'where.usualWagePerDay.like'?: number;
  'where.usualWagePerDay.in'?: string;
  'where.usualWagePerDay.nin'?: string;
  'where.usualWagePerDay.contains'?: string;
  'where.usualWagePerDay.contained'?: string;
  'where.usualWagePerDay.overlaps'?: string;
  'where.usualWagePerHour.eq'?: number;
  'where.usualWagePerHour.neq'?: number;
  'where.usualWagePerHour.gt'?: number;
  'where.usualWagePerHour.gte'?: number;
  'where.usualWagePerHour.lt'?: number;
  'where.usualWagePerHour.lte'?: number;
  'where.usualWagePerHour.like'?: number;
  'where.usualWagePerHour.in'?: string;
  'where.usualWagePerHour.nin'?: string;
  'where.usualWagePerHour.contains'?: string;
  'where.usualWagePerHour.contained'?: string;
  'where.usualWagePerHour.overlaps'?: string;
  'where.or'?: Array<string>;
  'id'?: number;
  'city': string;
  'name': string;
  'notes': string;
  'phone': string;
  'ratingCut'?: number | null;
  'ratingPlate'?: number | null;
  'ratingSell'?: number | null;
  'street': string;
  'usualWagePerDay': number;
  'usualWagePerHour': number;
}

export type FairDbUpdateFairHelperResponseOK = Array<{ 'id'?: number | null; 'city'?: string | null; 'name'?: string | null; 'notes'?: string | null; 'phone'?: string | null; 'ratingCut'?: number | null; 'ratingPlate'?: number | null; 'ratingSell'?: number | null; 'street'?: string | null; 'usualWagePerDay'?: number | null; 'usualWagePerHour'?: number | null }>
export type FairDbUpdateFairHelperResponses =
  FairDbUpdateFairHelperResponseOK

export type FairDbGetFairHelperByIdRequest = {
  'fields'?: Array<'city' | 'id' | 'name' | 'notes' | 'phone' | 'ratingCut' | 'ratingPlate' | 'ratingSell' | 'street' | 'usualWagePerDay' | 'usualWagePerHour'>;
  'id': number;
}

export type FairDbGetFairHelperByIdResponseOK = {
  'id': number | null;
  'city': string | null;
  'name': string | null;
  'notes': string | null;
  'phone': string | null;
  'ratingCut': number | null;
  'ratingPlate': number | null;
  'ratingSell': number | null;
  'street': string | null;
  'usualWagePerDay': number | null;
  'usualWagePerHour': number | null;
}
export type FairDbGetFairHelperByIdResponses =
  FairDbGetFairHelperByIdResponseOK

export type FairDbUpdateFairHelperRequest = {
  'fields'?: Array<'city' | 'id' | 'name' | 'notes' | 'phone' | 'ratingCut' | 'ratingPlate' | 'ratingSell' | 'street' | 'usualWagePerDay' | 'usualWagePerHour'>;
  'id': number;
  'city': string;
  'name': string;
  'notes': string;
  'phone': string;
  'ratingCut'?: number | null;
  'ratingPlate'?: number | null;
  'ratingSell'?: number | null;
  'street': string;
  'usualWagePerDay': number;
  'usualWagePerHour': number;
}

export type FairDbUpdateFairHelperResponseOK = {
  'id': number | null;
  'city': string | null;
  'name': string | null;
  'notes': string | null;
  'phone': string | null;
  'ratingCut': number | null;
  'ratingPlate': number | null;
  'ratingSell': number | null;
  'street': string | null;
  'usualWagePerDay': number | null;
  'usualWagePerHour': number | null;
}
export type FairDbUpdateFairHelperResponses =
  FairDbUpdateFairHelperResponseOK

export type FairDbDeleteFairHelperRequest = {
  'fields'?: Array<'city' | 'id' | 'name' | 'notes' | 'phone' | 'ratingCut' | 'ratingPlate' | 'ratingSell' | 'street' | 'usualWagePerDay' | 'usualWagePerHour'>;
  'id': number;
}

export type FairDbDeleteFairHelperResponseOK = {
  'id': number | null;
  'city': string | null;
  'name': string | null;
  'notes': string | null;
  'phone': string | null;
  'ratingCut': number | null;
  'ratingPlate': number | null;
  'ratingSell': number | null;
  'street': string | null;
  'usualWagePerDay': number | null;
  'usualWagePerHour': number | null;
}
export type FairDbDeleteFairHelperResponses =
  FairDbDeleteFairHelperResponseOK

export type FairDbGetFairRequest = {
  'limit'?: number;
  'offset'?: number;
  'totalCount'?: boolean;
  'fields'?: Array<'city' | 'fairPresenterId' | 'id' | 'notes' | 'sellingHoursUsually' | 'street' | 'title' | 'usualPrice' | 'usualTax'>;
  'where.city.eq'?: string;
  'where.city.neq'?: string;
  'where.city.gt'?: string;
  'where.city.gte'?: string;
  'where.city.lt'?: string;
  'where.city.lte'?: string;
  'where.city.like'?: string;
  'where.city.in'?: string;
  'where.city.nin'?: string;
  'where.city.contains'?: string;
  'where.city.contained'?: string;
  'where.city.overlaps'?: string;
  'where.fairPresenterId.eq'?: number;
  'where.fairPresenterId.neq'?: number;
  'where.fairPresenterId.gt'?: number;
  'where.fairPresenterId.gte'?: number;
  'where.fairPresenterId.lt'?: number;
  'where.fairPresenterId.lte'?: number;
  'where.fairPresenterId.like'?: number;
  'where.fairPresenterId.in'?: string;
  'where.fairPresenterId.nin'?: string;
  'where.fairPresenterId.contains'?: string;
  'where.fairPresenterId.contained'?: string;
  'where.fairPresenterId.overlaps'?: string;
  'where.id.eq'?: number;
  'where.id.neq'?: number;
  'where.id.gt'?: number;
  'where.id.gte'?: number;
  'where.id.lt'?: number;
  'where.id.lte'?: number;
  'where.id.like'?: number;
  'where.id.in'?: string;
  'where.id.nin'?: string;
  'where.id.contains'?: string;
  'where.id.contained'?: string;
  'where.id.overlaps'?: string;
  'where.notes.eq'?: string;
  'where.notes.neq'?: string;
  'where.notes.gt'?: string;
  'where.notes.gte'?: string;
  'where.notes.lt'?: string;
  'where.notes.lte'?: string;
  'where.notes.like'?: string;
  'where.notes.in'?: string;
  'where.notes.nin'?: string;
  'where.notes.contains'?: string;
  'where.notes.contained'?: string;
  'where.notes.overlaps'?: string;
  'where.sellingHoursUsually.eq'?: number;
  'where.sellingHoursUsually.neq'?: number;
  'where.sellingHoursUsually.gt'?: number;
  'where.sellingHoursUsually.gte'?: number;
  'where.sellingHoursUsually.lt'?: number;
  'where.sellingHoursUsually.lte'?: number;
  'where.sellingHoursUsually.like'?: number;
  'where.sellingHoursUsually.in'?: string;
  'where.sellingHoursUsually.nin'?: string;
  'where.sellingHoursUsually.contains'?: string;
  'where.sellingHoursUsually.contained'?: string;
  'where.sellingHoursUsually.overlaps'?: string;
  'where.street.eq'?: string;
  'where.street.neq'?: string;
  'where.street.gt'?: string;
  'where.street.gte'?: string;
  'where.street.lt'?: string;
  'where.street.lte'?: string;
  'where.street.like'?: string;
  'where.street.in'?: string;
  'where.street.nin'?: string;
  'where.street.contains'?: string;
  'where.street.contained'?: string;
  'where.street.overlaps'?: string;
  'where.title.eq'?: string;
  'where.title.neq'?: string;
  'where.title.gt'?: string;
  'where.title.gte'?: string;
  'where.title.lt'?: string;
  'where.title.lte'?: string;
  'where.title.like'?: string;
  'where.title.in'?: string;
  'where.title.nin'?: string;
  'where.title.contains'?: string;
  'where.title.contained'?: string;
  'where.title.overlaps'?: string;
  'where.usualPrice.eq'?: number;
  'where.usualPrice.neq'?: number;
  'where.usualPrice.gt'?: number;
  'where.usualPrice.gte'?: number;
  'where.usualPrice.lt'?: number;
  'where.usualPrice.lte'?: number;
  'where.usualPrice.like'?: number;
  'where.usualPrice.in'?: string;
  'where.usualPrice.nin'?: string;
  'where.usualPrice.contains'?: string;
  'where.usualPrice.contained'?: string;
  'where.usualPrice.overlaps'?: string;
  'where.usualTax.eq'?: number;
  'where.usualTax.neq'?: number;
  'where.usualTax.gt'?: number;
  'where.usualTax.gte'?: number;
  'where.usualTax.lt'?: number;
  'where.usualTax.lte'?: number;
  'where.usualTax.like'?: number;
  'where.usualTax.in'?: string;
  'where.usualTax.nin'?: string;
  'where.usualTax.contains'?: string;
  'where.usualTax.contained'?: string;
  'where.usualTax.overlaps'?: string;
  'where.or'?: Array<string>;
  'orderby.city'?: 'asc' | 'desc';
  'orderby.fairPresenterId'?: 'asc' | 'desc';
  'orderby.id'?: 'asc' | 'desc';
  'orderby.notes'?: 'asc' | 'desc';
  'orderby.sellingHoursUsually'?: 'asc' | 'desc';
  'orderby.street'?: 'asc' | 'desc';
  'orderby.title'?: 'asc' | 'desc';
  'orderby.usualPrice'?: 'asc' | 'desc';
  'orderby.usualTax'?: 'asc' | 'desc';
}

export type FairDbGetFairResponseOK = Array<{ 'id'?: number | null; 'fairPresenterId'?: number | null; 'city'?: string | null; 'notes'?: string | null; 'sellingHoursUsually'?: number | null; 'street'?: string | null; 'title'?: string | null; 'usualPrice'?: number | null; 'usualTax'?: number | null }>
export type FairDbGetFairResponses =
  FairDbGetFairResponseOK

export type FairDbCreateFairRequest = {
  'id'?: number;
  'fairPresenterId': number;
  'city': string;
  'notes': string;
  'sellingHoursUsually': number;
  'street': string;
  'title': string;
  'usualPrice': number;
  'usualTax': number;
}

export type FairDbCreateFairResponseOK = {
  'id': number | null;
  'fairPresenterId': number | null;
  'city': string | null;
  'notes': string | null;
  'sellingHoursUsually': number | null;
  'street': string | null;
  'title': string | null;
  'usualPrice': number | null;
  'usualTax': number | null;
}
export type FairDbCreateFairResponses =
  FairDbCreateFairResponseOK

export type FairDbUpdateFairRequest = {
  'fields'?: Array<'city' | 'fairPresenterId' | 'id' | 'notes' | 'sellingHoursUsually' | 'street' | 'title' | 'usualPrice' | 'usualTax'>;
  'where.city.eq'?: string;
  'where.city.neq'?: string;
  'where.city.gt'?: string;
  'where.city.gte'?: string;
  'where.city.lt'?: string;
  'where.city.lte'?: string;
  'where.city.like'?: string;
  'where.city.in'?: string;
  'where.city.nin'?: string;
  'where.city.contains'?: string;
  'where.city.contained'?: string;
  'where.city.overlaps'?: string;
  'where.fairPresenterId.eq'?: number;
  'where.fairPresenterId.neq'?: number;
  'where.fairPresenterId.gt'?: number;
  'where.fairPresenterId.gte'?: number;
  'where.fairPresenterId.lt'?: number;
  'where.fairPresenterId.lte'?: number;
  'where.fairPresenterId.like'?: number;
  'where.fairPresenterId.in'?: string;
  'where.fairPresenterId.nin'?: string;
  'where.fairPresenterId.contains'?: string;
  'where.fairPresenterId.contained'?: string;
  'where.fairPresenterId.overlaps'?: string;
  'where.id.eq'?: number;
  'where.id.neq'?: number;
  'where.id.gt'?: number;
  'where.id.gte'?: number;
  'where.id.lt'?: number;
  'where.id.lte'?: number;
  'where.id.like'?: number;
  'where.id.in'?: string;
  'where.id.nin'?: string;
  'where.id.contains'?: string;
  'where.id.contained'?: string;
  'where.id.overlaps'?: string;
  'where.notes.eq'?: string;
  'where.notes.neq'?: string;
  'where.notes.gt'?: string;
  'where.notes.gte'?: string;
  'where.notes.lt'?: string;
  'where.notes.lte'?: string;
  'where.notes.like'?: string;
  'where.notes.in'?: string;
  'where.notes.nin'?: string;
  'where.notes.contains'?: string;
  'where.notes.contained'?: string;
  'where.notes.overlaps'?: string;
  'where.sellingHoursUsually.eq'?: number;
  'where.sellingHoursUsually.neq'?: number;
  'where.sellingHoursUsually.gt'?: number;
  'where.sellingHoursUsually.gte'?: number;
  'where.sellingHoursUsually.lt'?: number;
  'where.sellingHoursUsually.lte'?: number;
  'where.sellingHoursUsually.like'?: number;
  'where.sellingHoursUsually.in'?: string;
  'where.sellingHoursUsually.nin'?: string;
  'where.sellingHoursUsually.contains'?: string;
  'where.sellingHoursUsually.contained'?: string;
  'where.sellingHoursUsually.overlaps'?: string;
  'where.street.eq'?: string;
  'where.street.neq'?: string;
  'where.street.gt'?: string;
  'where.street.gte'?: string;
  'where.street.lt'?: string;
  'where.street.lte'?: string;
  'where.street.like'?: string;
  'where.street.in'?: string;
  'where.street.nin'?: string;
  'where.street.contains'?: string;
  'where.street.contained'?: string;
  'where.street.overlaps'?: string;
  'where.title.eq'?: string;
  'where.title.neq'?: string;
  'where.title.gt'?: string;
  'where.title.gte'?: string;
  'where.title.lt'?: string;
  'where.title.lte'?: string;
  'where.title.like'?: string;
  'where.title.in'?: string;
  'where.title.nin'?: string;
  'where.title.contains'?: string;
  'where.title.contained'?: string;
  'where.title.overlaps'?: string;
  'where.usualPrice.eq'?: number;
  'where.usualPrice.neq'?: number;
  'where.usualPrice.gt'?: number;
  'where.usualPrice.gte'?: number;
  'where.usualPrice.lt'?: number;
  'where.usualPrice.lte'?: number;
  'where.usualPrice.like'?: number;
  'where.usualPrice.in'?: string;
  'where.usualPrice.nin'?: string;
  'where.usualPrice.contains'?: string;
  'where.usualPrice.contained'?: string;
  'where.usualPrice.overlaps'?: string;
  'where.usualTax.eq'?: number;
  'where.usualTax.neq'?: number;
  'where.usualTax.gt'?: number;
  'where.usualTax.gte'?: number;
  'where.usualTax.lt'?: number;
  'where.usualTax.lte'?: number;
  'where.usualTax.like'?: number;
  'where.usualTax.in'?: string;
  'where.usualTax.nin'?: string;
  'where.usualTax.contains'?: string;
  'where.usualTax.contained'?: string;
  'where.usualTax.overlaps'?: string;
  'where.or'?: Array<string>;
  'id'?: number;
  'fairPresenterId': number;
  'city': string;
  'notes': string;
  'sellingHoursUsually': number;
  'street': string;
  'title': string;
  'usualPrice': number;
  'usualTax': number;
}

export type FairDbUpdateFairResponseOK = Array<{ 'id'?: number | null; 'fairPresenterId'?: number | null; 'city'?: string | null; 'notes'?: string | null; 'sellingHoursUsually'?: number | null; 'street'?: string | null; 'title'?: string | null; 'usualPrice'?: number | null; 'usualTax'?: number | null }>
export type FairDbUpdateFairResponses =
  FairDbUpdateFairResponseOK

export type FairDbGetFairByIdRequest = {
  'fields'?: Array<'city' | 'fairPresenterId' | 'id' | 'notes' | 'sellingHoursUsually' | 'street' | 'title' | 'usualPrice' | 'usualTax'>;
  'id': number;
}

export type FairDbGetFairByIdResponseOK = {
  'id': number | null;
  'fairPresenterId': number | null;
  'city': string | null;
  'notes': string | null;
  'sellingHoursUsually': number | null;
  'street': string | null;
  'title': string | null;
  'usualPrice': number | null;
  'usualTax': number | null;
}
export type FairDbGetFairByIdResponses =
  FairDbGetFairByIdResponseOK

export type FairDbUpdateFairRequest = {
  'fields'?: Array<'city' | 'fairPresenterId' | 'id' | 'notes' | 'sellingHoursUsually' | 'street' | 'title' | 'usualPrice' | 'usualTax'>;
  'id': number;
  'fairPresenterId': number;
  'city': string;
  'notes': string;
  'sellingHoursUsually': number;
  'street': string;
  'title': string;
  'usualPrice': number;
  'usualTax': number;
}

export type FairDbUpdateFairResponseOK = {
  'id': number | null;
  'fairPresenterId': number | null;
  'city': string | null;
  'notes': string | null;
  'sellingHoursUsually': number | null;
  'street': string | null;
  'title': string | null;
  'usualPrice': number | null;
  'usualTax': number | null;
}
export type FairDbUpdateFairResponses =
  FairDbUpdateFairResponseOK

export type FairDbDeleteFairRequest = {
  'fields'?: Array<'city' | 'fairPresenterId' | 'id' | 'notes' | 'sellingHoursUsually' | 'street' | 'title' | 'usualPrice' | 'usualTax'>;
  'id': number;
}

export type FairDbDeleteFairResponseOK = {
  'id': number | null;
  'fairPresenterId': number | null;
  'city': string | null;
  'notes': string | null;
  'sellingHoursUsually': number | null;
  'street': string | null;
  'title': string | null;
  'usualPrice': number | null;
  'usualTax': number | null;
}
export type FairDbDeleteFairResponses =
  FairDbDeleteFairResponseOK

export type FairDbGetFairExecutionForFairRequest = {
  'fields'?: Array<'black' | 'fairId' | 'id' | 'notes' | 'tmFrom' | 'tmTo'>;
  'id': number;
}

export type FairDbGetFairExecutionForFairResponseOK = Array<{ 'id'?: number | null; 'fairId'?: number | null; 'notes'?: string | null; 'tmFrom'?: string | null; 'tmTo'?: string | null; 'black'?: number | null }>
export type FairDbGetFairExecutionForFairResponses =
  FairDbGetFairExecutionForFairResponseOK

export type FairDbGetFairExecutionDayForFairRequest = {
  'fields'?: Array<'fairId' | 'id' | 'notes' | 'tmDay' | 'tmSellingHoursFrom' | 'tmSellingHoursTo'>;
  'id': number;
}

export type FairDbGetFairExecutionDayForFairResponseOK = Array<{ 'id'?: number | null; 'fairId'?: number | null; 'notes'?: string | null; 'tmDay'?: string | null; 'tmSellingHoursFrom'?: string | null; 'tmSellingHoursTo'?: string | null }>
export type FairDbGetFairExecutionDayForFairResponses =
  FairDbGetFairExecutionDayForFairResponseOK

export type FairDbGetFairPresenterForFairRequest = {
  'fields'?: Array<'bic' | 'description' | 'homepage' | 'iban' | 'id' | 'name' | 'phone' | 'ratingFair' | 'ratingPrice'>;
  'id': number;
}

export type FairDbGetFairPresenterForFairResponseOK = {
  'id': number | null;
  'bic': string | null;
  'description': string | null;
  'homepage': string | null;
  'iban': string | null;
  'name': string | null;
  'phone': string | null;
  'ratingFair': number | null;
  'ratingPrice': number | null;
}
export type FairDbGetFairPresenterForFairResponses =
  FairDbGetFairPresenterForFairResponseOK

export type FairDbGetFairExecutionRequest = {
  'limit'?: number;
  'offset'?: number;
  'totalCount'?: boolean;
  'fields'?: Array<'black' | 'fairId' | 'id' | 'notes' | 'tmFrom' | 'tmTo'>;
  'where.black.eq'?: number;
  'where.black.neq'?: number;
  'where.black.gt'?: number;
  'where.black.gte'?: number;
  'where.black.lt'?: number;
  'where.black.lte'?: number;
  'where.black.like'?: number;
  'where.black.in'?: string;
  'where.black.nin'?: string;
  'where.black.contains'?: string;
  'where.black.contained'?: string;
  'where.black.overlaps'?: string;
  'where.fairId.eq'?: number;
  'where.fairId.neq'?: number;
  'where.fairId.gt'?: number;
  'where.fairId.gte'?: number;
  'where.fairId.lt'?: number;
  'where.fairId.lte'?: number;
  'where.fairId.like'?: number;
  'where.fairId.in'?: string;
  'where.fairId.nin'?: string;
  'where.fairId.contains'?: string;
  'where.fairId.contained'?: string;
  'where.fairId.overlaps'?: string;
  'where.id.eq'?: number;
  'where.id.neq'?: number;
  'where.id.gt'?: number;
  'where.id.gte'?: number;
  'where.id.lt'?: number;
  'where.id.lte'?: number;
  'where.id.like'?: number;
  'where.id.in'?: string;
  'where.id.nin'?: string;
  'where.id.contains'?: string;
  'where.id.contained'?: string;
  'where.id.overlaps'?: string;
  'where.notes.eq'?: string;
  'where.notes.neq'?: string;
  'where.notes.gt'?: string;
  'where.notes.gte'?: string;
  'where.notes.lt'?: string;
  'where.notes.lte'?: string;
  'where.notes.like'?: string;
  'where.notes.in'?: string;
  'where.notes.nin'?: string;
  'where.notes.contains'?: string;
  'where.notes.contained'?: string;
  'where.notes.overlaps'?: string;
  'where.tmFrom.eq'?: string;
  'where.tmFrom.neq'?: string;
  'where.tmFrom.gt'?: string;
  'where.tmFrom.gte'?: string;
  'where.tmFrom.lt'?: string;
  'where.tmFrom.lte'?: string;
  'where.tmFrom.like'?: string;
  'where.tmFrom.in'?: string;
  'where.tmFrom.nin'?: string;
  'where.tmFrom.contains'?: string;
  'where.tmFrom.contained'?: string;
  'where.tmFrom.overlaps'?: string;
  'where.tmTo.eq'?: string;
  'where.tmTo.neq'?: string;
  'where.tmTo.gt'?: string;
  'where.tmTo.gte'?: string;
  'where.tmTo.lt'?: string;
  'where.tmTo.lte'?: string;
  'where.tmTo.like'?: string;
  'where.tmTo.in'?: string;
  'where.tmTo.nin'?: string;
  'where.tmTo.contains'?: string;
  'where.tmTo.contained'?: string;
  'where.tmTo.overlaps'?: string;
  'where.or'?: Array<string>;
  'orderby.black'?: 'asc' | 'desc';
  'orderby.fairId'?: 'asc' | 'desc';
  'orderby.id'?: 'asc' | 'desc';
  'orderby.notes'?: 'asc' | 'desc';
  'orderby.tmFrom'?: 'asc' | 'desc';
  'orderby.tmTo'?: 'asc' | 'desc';
}

export type FairDbGetFairExecutionResponseOK = Array<{ 'id'?: number | null; 'fairId'?: number | null; 'notes'?: string | null; 'tmFrom'?: string | null; 'tmTo'?: string | null; 'black'?: number | null }>
export type FairDbGetFairExecutionResponses =
  FairDbGetFairExecutionResponseOK

export type FairDbCreateFairExecutionRequest = {
  'id'?: number;
  'fairId': number;
  'notes': string;
  'tmFrom': string;
  'tmTo': string;
  'black': number;
}

export type FairDbCreateFairExecutionResponseOK = {
  'id': number | null;
  'fairId': number | null;
  'notes': string | null;
  'tmFrom': string | null;
  'tmTo': string | null;
  'black': number | null;
}
export type FairDbCreateFairExecutionResponses =
  FairDbCreateFairExecutionResponseOK

export type FairDbUpdateFairExecutionRequest = {
  'fields'?: Array<'black' | 'fairId' | 'id' | 'notes' | 'tmFrom' | 'tmTo'>;
  'where.black.eq'?: number;
  'where.black.neq'?: number;
  'where.black.gt'?: number;
  'where.black.gte'?: number;
  'where.black.lt'?: number;
  'where.black.lte'?: number;
  'where.black.like'?: number;
  'where.black.in'?: string;
  'where.black.nin'?: string;
  'where.black.contains'?: string;
  'where.black.contained'?: string;
  'where.black.overlaps'?: string;
  'where.fairId.eq'?: number;
  'where.fairId.neq'?: number;
  'where.fairId.gt'?: number;
  'where.fairId.gte'?: number;
  'where.fairId.lt'?: number;
  'where.fairId.lte'?: number;
  'where.fairId.like'?: number;
  'where.fairId.in'?: string;
  'where.fairId.nin'?: string;
  'where.fairId.contains'?: string;
  'where.fairId.contained'?: string;
  'where.fairId.overlaps'?: string;
  'where.id.eq'?: number;
  'where.id.neq'?: number;
  'where.id.gt'?: number;
  'where.id.gte'?: number;
  'where.id.lt'?: number;
  'where.id.lte'?: number;
  'where.id.like'?: number;
  'where.id.in'?: string;
  'where.id.nin'?: string;
  'where.id.contains'?: string;
  'where.id.contained'?: string;
  'where.id.overlaps'?: string;
  'where.notes.eq'?: string;
  'where.notes.neq'?: string;
  'where.notes.gt'?: string;
  'where.notes.gte'?: string;
  'where.notes.lt'?: string;
  'where.notes.lte'?: string;
  'where.notes.like'?: string;
  'where.notes.in'?: string;
  'where.notes.nin'?: string;
  'where.notes.contains'?: string;
  'where.notes.contained'?: string;
  'where.notes.overlaps'?: string;
  'where.tmFrom.eq'?: string;
  'where.tmFrom.neq'?: string;
  'where.tmFrom.gt'?: string;
  'where.tmFrom.gte'?: string;
  'where.tmFrom.lt'?: string;
  'where.tmFrom.lte'?: string;
  'where.tmFrom.like'?: string;
  'where.tmFrom.in'?: string;
  'where.tmFrom.nin'?: string;
  'where.tmFrom.contains'?: string;
  'where.tmFrom.contained'?: string;
  'where.tmFrom.overlaps'?: string;
  'where.tmTo.eq'?: string;
  'where.tmTo.neq'?: string;
  'where.tmTo.gt'?: string;
  'where.tmTo.gte'?: string;
  'where.tmTo.lt'?: string;
  'where.tmTo.lte'?: string;
  'where.tmTo.like'?: string;
  'where.tmTo.in'?: string;
  'where.tmTo.nin'?: string;
  'where.tmTo.contains'?: string;
  'where.tmTo.contained'?: string;
  'where.tmTo.overlaps'?: string;
  'where.or'?: Array<string>;
  'id'?: number;
  'fairId': number;
  'notes': string;
  'tmFrom': string;
  'tmTo': string;
  'black': number;
}

export type FairDbUpdateFairExecutionResponseOK = Array<{ 'id'?: number | null; 'fairId'?: number | null; 'notes'?: string | null; 'tmFrom'?: string | null; 'tmTo'?: string | null; 'black'?: number | null }>
export type FairDbUpdateFairExecutionResponses =
  FairDbUpdateFairExecutionResponseOK

export type FairDbGetFairExecutionByIdRequest = {
  'fields'?: Array<'black' | 'fairId' | 'id' | 'notes' | 'tmFrom' | 'tmTo'>;
  'id': number;
}

export type FairDbGetFairExecutionByIdResponseOK = {
  'id': number | null;
  'fairId': number | null;
  'notes': string | null;
  'tmFrom': string | null;
  'tmTo': string | null;
  'black': number | null;
}
export type FairDbGetFairExecutionByIdResponses =
  FairDbGetFairExecutionByIdResponseOK

export type FairDbUpdateFairExecutionRequest = {
  'fields'?: Array<'black' | 'fairId' | 'id' | 'notes' | 'tmFrom' | 'tmTo'>;
  'id': number;
  'fairId': number;
  'notes': string;
  'tmFrom': string;
  'tmTo': string;
  'black': number;
}

export type FairDbUpdateFairExecutionResponseOK = {
  'id': number | null;
  'fairId': number | null;
  'notes': string | null;
  'tmFrom': string | null;
  'tmTo': string | null;
  'black': number | null;
}
export type FairDbUpdateFairExecutionResponses =
  FairDbUpdateFairExecutionResponseOK

export type FairDbDeleteFairExecutionRequest = {
  'fields'?: Array<'black' | 'fairId' | 'id' | 'notes' | 'tmFrom' | 'tmTo'>;
  'id': number;
}

export type FairDbDeleteFairExecutionResponseOK = {
  'id': number | null;
  'fairId': number | null;
  'notes': string | null;
  'tmFrom': string | null;
  'tmTo': string | null;
  'black': number | null;
}
export type FairDbDeleteFairExecutionResponses =
  FairDbDeleteFairExecutionResponseOK

export type FairDbGetFairForFairExecutionRequest = {
  'fields'?: Array<'city' | 'fairPresenterId' | 'id' | 'notes' | 'sellingHoursUsually' | 'street' | 'title' | 'usualPrice' | 'usualTax'>;
  'id': number;
}

export type FairDbGetFairForFairExecutionResponseOK = {
  'id': number | null;
  'fairPresenterId': number | null;
  'city': string | null;
  'notes': string | null;
  'sellingHoursUsually': number | null;
  'street': string | null;
  'title': string | null;
  'usualPrice': number | null;
  'usualTax': number | null;
}
export type FairDbGetFairForFairExecutionResponses =
  FairDbGetFairForFairExecutionResponseOK

export type FairDbGetFairExecutionDayRequest = {
  'limit'?: number;
  'offset'?: number;
  'totalCount'?: boolean;
  'fields'?: Array<'fairId' | 'id' | 'notes' | 'tmDay' | 'tmSellingHoursFrom' | 'tmSellingHoursTo'>;
  'where.fairId.eq'?: number;
  'where.fairId.neq'?: number;
  'where.fairId.gt'?: number;
  'where.fairId.gte'?: number;
  'where.fairId.lt'?: number;
  'where.fairId.lte'?: number;
  'where.fairId.like'?: number;
  'where.fairId.in'?: string;
  'where.fairId.nin'?: string;
  'where.fairId.contains'?: string;
  'where.fairId.contained'?: string;
  'where.fairId.overlaps'?: string;
  'where.id.eq'?: number;
  'where.id.neq'?: number;
  'where.id.gt'?: number;
  'where.id.gte'?: number;
  'where.id.lt'?: number;
  'where.id.lte'?: number;
  'where.id.like'?: number;
  'where.id.in'?: string;
  'where.id.nin'?: string;
  'where.id.contains'?: string;
  'where.id.contained'?: string;
  'where.id.overlaps'?: string;
  'where.notes.eq'?: string;
  'where.notes.neq'?: string;
  'where.notes.gt'?: string;
  'where.notes.gte'?: string;
  'where.notes.lt'?: string;
  'where.notes.lte'?: string;
  'where.notes.like'?: string;
  'where.notes.in'?: string;
  'where.notes.nin'?: string;
  'where.notes.contains'?: string;
  'where.notes.contained'?: string;
  'where.notes.overlaps'?: string;
  'where.tmDay.eq'?: string;
  'where.tmDay.neq'?: string;
  'where.tmDay.gt'?: string;
  'where.tmDay.gte'?: string;
  'where.tmDay.lt'?: string;
  'where.tmDay.lte'?: string;
  'where.tmDay.like'?: string;
  'where.tmDay.in'?: string;
  'where.tmDay.nin'?: string;
  'where.tmDay.contains'?: string;
  'where.tmDay.contained'?: string;
  'where.tmDay.overlaps'?: string;
  'where.tmSellingHoursFrom.eq'?: string;
  'where.tmSellingHoursFrom.neq'?: string;
  'where.tmSellingHoursFrom.gt'?: string;
  'where.tmSellingHoursFrom.gte'?: string;
  'where.tmSellingHoursFrom.lt'?: string;
  'where.tmSellingHoursFrom.lte'?: string;
  'where.tmSellingHoursFrom.like'?: string;
  'where.tmSellingHoursFrom.in'?: string;
  'where.tmSellingHoursFrom.nin'?: string;
  'where.tmSellingHoursFrom.contains'?: string;
  'where.tmSellingHoursFrom.contained'?: string;
  'where.tmSellingHoursFrom.overlaps'?: string;
  'where.tmSellingHoursTo.eq'?: string;
  'where.tmSellingHoursTo.neq'?: string;
  'where.tmSellingHoursTo.gt'?: string;
  'where.tmSellingHoursTo.gte'?: string;
  'where.tmSellingHoursTo.lt'?: string;
  'where.tmSellingHoursTo.lte'?: string;
  'where.tmSellingHoursTo.like'?: string;
  'where.tmSellingHoursTo.in'?: string;
  'where.tmSellingHoursTo.nin'?: string;
  'where.tmSellingHoursTo.contains'?: string;
  'where.tmSellingHoursTo.contained'?: string;
  'where.tmSellingHoursTo.overlaps'?: string;
  'where.or'?: Array<string>;
  'orderby.fairId'?: 'asc' | 'desc';
  'orderby.id'?: 'asc' | 'desc';
  'orderby.notes'?: 'asc' | 'desc';
  'orderby.tmDay'?: 'asc' | 'desc';
  'orderby.tmSellingHoursFrom'?: 'asc' | 'desc';
  'orderby.tmSellingHoursTo'?: 'asc' | 'desc';
}

export type FairDbGetFairExecutionDayResponseOK = Array<{ 'id'?: number | null; 'fairId'?: number | null; 'notes'?: string | null; 'tmDay'?: string | null; 'tmSellingHoursFrom'?: string | null; 'tmSellingHoursTo'?: string | null }>
export type FairDbGetFairExecutionDayResponses =
  FairDbGetFairExecutionDayResponseOK

export type FairDbCreateFairExecutionDayRequest = {
  'id'?: number;
  'fairId': number;
  'notes': string;
  'tmDay': string;
  'tmSellingHoursFrom': string;
  'tmSellingHoursTo': string;
}

export type FairDbCreateFairExecutionDayResponseOK = {
  'id': number | null;
  'fairId': number | null;
  'notes': string | null;
  'tmDay': string | null;
  'tmSellingHoursFrom': string | null;
  'tmSellingHoursTo': string | null;
}
export type FairDbCreateFairExecutionDayResponses =
  FairDbCreateFairExecutionDayResponseOK

export type FairDbUpdateFairExecutionDayRequest = {
  'fields'?: Array<'fairId' | 'id' | 'notes' | 'tmDay' | 'tmSellingHoursFrom' | 'tmSellingHoursTo'>;
  'where.fairId.eq'?: number;
  'where.fairId.neq'?: number;
  'where.fairId.gt'?: number;
  'where.fairId.gte'?: number;
  'where.fairId.lt'?: number;
  'where.fairId.lte'?: number;
  'where.fairId.like'?: number;
  'where.fairId.in'?: string;
  'where.fairId.nin'?: string;
  'where.fairId.contains'?: string;
  'where.fairId.contained'?: string;
  'where.fairId.overlaps'?: string;
  'where.id.eq'?: number;
  'where.id.neq'?: number;
  'where.id.gt'?: number;
  'where.id.gte'?: number;
  'where.id.lt'?: number;
  'where.id.lte'?: number;
  'where.id.like'?: number;
  'where.id.in'?: string;
  'where.id.nin'?: string;
  'where.id.contains'?: string;
  'where.id.contained'?: string;
  'where.id.overlaps'?: string;
  'where.notes.eq'?: string;
  'where.notes.neq'?: string;
  'where.notes.gt'?: string;
  'where.notes.gte'?: string;
  'where.notes.lt'?: string;
  'where.notes.lte'?: string;
  'where.notes.like'?: string;
  'where.notes.in'?: string;
  'where.notes.nin'?: string;
  'where.notes.contains'?: string;
  'where.notes.contained'?: string;
  'where.notes.overlaps'?: string;
  'where.tmDay.eq'?: string;
  'where.tmDay.neq'?: string;
  'where.tmDay.gt'?: string;
  'where.tmDay.gte'?: string;
  'where.tmDay.lt'?: string;
  'where.tmDay.lte'?: string;
  'where.tmDay.like'?: string;
  'where.tmDay.in'?: string;
  'where.tmDay.nin'?: string;
  'where.tmDay.contains'?: string;
  'where.tmDay.contained'?: string;
  'where.tmDay.overlaps'?: string;
  'where.tmSellingHoursFrom.eq'?: string;
  'where.tmSellingHoursFrom.neq'?: string;
  'where.tmSellingHoursFrom.gt'?: string;
  'where.tmSellingHoursFrom.gte'?: string;
  'where.tmSellingHoursFrom.lt'?: string;
  'where.tmSellingHoursFrom.lte'?: string;
  'where.tmSellingHoursFrom.like'?: string;
  'where.tmSellingHoursFrom.in'?: string;
  'where.tmSellingHoursFrom.nin'?: string;
  'where.tmSellingHoursFrom.contains'?: string;
  'where.tmSellingHoursFrom.contained'?: string;
  'where.tmSellingHoursFrom.overlaps'?: string;
  'where.tmSellingHoursTo.eq'?: string;
  'where.tmSellingHoursTo.neq'?: string;
  'where.tmSellingHoursTo.gt'?: string;
  'where.tmSellingHoursTo.gte'?: string;
  'where.tmSellingHoursTo.lt'?: string;
  'where.tmSellingHoursTo.lte'?: string;
  'where.tmSellingHoursTo.like'?: string;
  'where.tmSellingHoursTo.in'?: string;
  'where.tmSellingHoursTo.nin'?: string;
  'where.tmSellingHoursTo.contains'?: string;
  'where.tmSellingHoursTo.contained'?: string;
  'where.tmSellingHoursTo.overlaps'?: string;
  'where.or'?: Array<string>;
  'id'?: number;
  'fairId': number;
  'notes': string;
  'tmDay': string;
  'tmSellingHoursFrom': string;
  'tmSellingHoursTo': string;
}

export type FairDbUpdateFairExecutionDayResponseOK = Array<{ 'id'?: number | null; 'fairId'?: number | null; 'notes'?: string | null; 'tmDay'?: string | null; 'tmSellingHoursFrom'?: string | null; 'tmSellingHoursTo'?: string | null }>
export type FairDbUpdateFairExecutionDayResponses =
  FairDbUpdateFairExecutionDayResponseOK

export type FairDbGetFairExecutionDayByIdRequest = {
  'fields'?: Array<'fairId' | 'id' | 'notes' | 'tmDay' | 'tmSellingHoursFrom' | 'tmSellingHoursTo'>;
  'id': number;
}

export type FairDbGetFairExecutionDayByIdResponseOK = {
  'id': number | null;
  'fairId': number | null;
  'notes': string | null;
  'tmDay': string | null;
  'tmSellingHoursFrom': string | null;
  'tmSellingHoursTo': string | null;
}
export type FairDbGetFairExecutionDayByIdResponses =
  FairDbGetFairExecutionDayByIdResponseOK

export type FairDbUpdateFairExecutionDayRequest = {
  'fields'?: Array<'fairId' | 'id' | 'notes' | 'tmDay' | 'tmSellingHoursFrom' | 'tmSellingHoursTo'>;
  'id': number;
  'fairId': number;
  'notes': string;
  'tmDay': string;
  'tmSellingHoursFrom': string;
  'tmSellingHoursTo': string;
}

export type FairDbUpdateFairExecutionDayResponseOK = {
  'id': number | null;
  'fairId': number | null;
  'notes': string | null;
  'tmDay': string | null;
  'tmSellingHoursFrom': string | null;
  'tmSellingHoursTo': string | null;
}
export type FairDbUpdateFairExecutionDayResponses =
  FairDbUpdateFairExecutionDayResponseOK

export type FairDbDeleteFairExecutionDayRequest = {
  'fields'?: Array<'fairId' | 'id' | 'notes' | 'tmDay' | 'tmSellingHoursFrom' | 'tmSellingHoursTo'>;
  'id': number;
}

export type FairDbDeleteFairExecutionDayResponseOK = {
  'id': number | null;
  'fairId': number | null;
  'notes': string | null;
  'tmDay': string | null;
  'tmSellingHoursFrom': string | null;
  'tmSellingHoursTo': string | null;
}
export type FairDbDeleteFairExecutionDayResponses =
  FairDbDeleteFairExecutionDayResponseOK

export type FairDbGetFairExecutionProductForFairExecutionDayRequest = {
  'fields'?: Array<'fairExecutionId' | 'id' | 'productId' | 'quantityBack' | 'quantityThere'>;
  'id': number;
}

export type FairDbGetFairExecutionProductForFairExecutionDayResponseOK = Array<{ 'id'?: number | null; 'fairExecutionId'?: number | null; 'productId'?: number | null; 'quantityBack'?: number | null; 'quantityThere'?: number | null }>
export type FairDbGetFairExecutionProductForFairExecutionDayResponses =
  FairDbGetFairExecutionProductForFairExecutionDayResponseOK

export type FairDbGetFairExecutionDaySaleForFairExecutionDayRequest = {
  'fields'?: Array<'fairExecutionDayId' | 'id' | 'salesCard' | 'salesCardTax' | 'salesCash' | 'salesCashTax'>;
  'id': number;
}

export type FairDbGetFairExecutionDaySaleForFairExecutionDayResponseOK = Array<{ 'id'?: number | null; 'fairExecutionDayId'?: number | null; 'salesCard'?: number | null; 'salesCardTax'?: number | null; 'salesCash'?: number | null; 'salesCashTax'?: number | null }>
export type FairDbGetFairExecutionDaySaleForFairExecutionDayResponses =
  FairDbGetFairExecutionDaySaleForFairExecutionDayResponseOK

export type FairDbGetFairExecutionCostForFairExecutionDayRequest = {
  'fields'?: Array<'description' | 'fairExecutionId' | 'id' | 'price' | 'tax'>;
  'id': number;
}

export type FairDbGetFairExecutionCostForFairExecutionDayResponseOK = Array<{ 'id'?: number | null; 'fairExecutionId'?: number | null; 'description'?: string | null; 'price'?: number | null; 'tax'?: number | null }>
export type FairDbGetFairExecutionCostForFairExecutionDayResponses =
  FairDbGetFairExecutionCostForFairExecutionDayResponseOK

export type FairDbGetFairExecutionDayCostHelperForFairExecutionDayRequest = {
  'fields'?: Array<'fairExecutionDayId' | 'fairHelperId' | 'wage'>;
  'id': number;
}

export type FairDbGetFairExecutionDayCostHelperForFairExecutionDayResponseOK = Array<{ 'fairExecutionDayId'?: number | null; 'fairHelperId'?: number | null; 'wage'?: number | null }>
export type FairDbGetFairExecutionDayCostHelperForFairExecutionDayResponses =
  FairDbGetFairExecutionDayCostHelperForFairExecutionDayResponseOK

export type FairDbGetFairForFairExecutionDayRequest = {
  'fields'?: Array<'city' | 'fairPresenterId' | 'id' | 'notes' | 'sellingHoursUsually' | 'street' | 'title' | 'usualPrice' | 'usualTax'>;
  'id': number;
}

export type FairDbGetFairForFairExecutionDayResponseOK = {
  'id': number | null;
  'fairPresenterId': number | null;
  'city': string | null;
  'notes': string | null;
  'sellingHoursUsually': number | null;
  'street': string | null;
  'title': string | null;
  'usualPrice': number | null;
  'usualTax': number | null;
}
export type FairDbGetFairForFairExecutionDayResponses =
  FairDbGetFairForFairExecutionDayResponseOK

export type FairDbGetFairExecutionProductRequest = {
  'limit'?: number;
  'offset'?: number;
  'totalCount'?: boolean;
  'fields'?: Array<'fairExecutionId' | 'id' | 'productId' | 'quantityBack' | 'quantityThere'>;
  'where.fairExecutionId.eq'?: number;
  'where.fairExecutionId.neq'?: number;
  'where.fairExecutionId.gt'?: number;
  'where.fairExecutionId.gte'?: number;
  'where.fairExecutionId.lt'?: number;
  'where.fairExecutionId.lte'?: number;
  'where.fairExecutionId.like'?: number;
  'where.fairExecutionId.in'?: string;
  'where.fairExecutionId.nin'?: string;
  'where.fairExecutionId.contains'?: string;
  'where.fairExecutionId.contained'?: string;
  'where.fairExecutionId.overlaps'?: string;
  'where.id.eq'?: number;
  'where.id.neq'?: number;
  'where.id.gt'?: number;
  'where.id.gte'?: number;
  'where.id.lt'?: number;
  'where.id.lte'?: number;
  'where.id.like'?: number;
  'where.id.in'?: string;
  'where.id.nin'?: string;
  'where.id.contains'?: string;
  'where.id.contained'?: string;
  'where.id.overlaps'?: string;
  'where.productId.eq'?: number;
  'where.productId.neq'?: number;
  'where.productId.gt'?: number;
  'where.productId.gte'?: number;
  'where.productId.lt'?: number;
  'where.productId.lte'?: number;
  'where.productId.like'?: number;
  'where.productId.in'?: string;
  'where.productId.nin'?: string;
  'where.productId.contains'?: string;
  'where.productId.contained'?: string;
  'where.productId.overlaps'?: string;
  'where.quantityBack.eq'?: number;
  'where.quantityBack.neq'?: number;
  'where.quantityBack.gt'?: number;
  'where.quantityBack.gte'?: number;
  'where.quantityBack.lt'?: number;
  'where.quantityBack.lte'?: number;
  'where.quantityBack.like'?: number;
  'where.quantityBack.in'?: string;
  'where.quantityBack.nin'?: string;
  'where.quantityBack.contains'?: string;
  'where.quantityBack.contained'?: string;
  'where.quantityBack.overlaps'?: string;
  'where.quantityThere.eq'?: number;
  'where.quantityThere.neq'?: number;
  'where.quantityThere.gt'?: number;
  'where.quantityThere.gte'?: number;
  'where.quantityThere.lt'?: number;
  'where.quantityThere.lte'?: number;
  'where.quantityThere.like'?: number;
  'where.quantityThere.in'?: string;
  'where.quantityThere.nin'?: string;
  'where.quantityThere.contains'?: string;
  'where.quantityThere.contained'?: string;
  'where.quantityThere.overlaps'?: string;
  'where.or'?: Array<string>;
  'orderby.fairExecutionId'?: 'asc' | 'desc';
  'orderby.id'?: 'asc' | 'desc';
  'orderby.productId'?: 'asc' | 'desc';
  'orderby.quantityBack'?: 'asc' | 'desc';
  'orderby.quantityThere'?: 'asc' | 'desc';
}

export type FairDbGetFairExecutionProductResponseOK = Array<{ 'id'?: number | null; 'fairExecutionId'?: number | null; 'productId'?: number | null; 'quantityBack'?: number | null; 'quantityThere'?: number | null }>
export type FairDbGetFairExecutionProductResponses =
  FairDbGetFairExecutionProductResponseOK

export type FairDbCreateFairExecutionProductRequest = {
  'id'?: number;
  'fairExecutionId': number;
  'productId': number;
  'quantityBack': number;
  'quantityThere': number;
}

export type FairDbCreateFairExecutionProductResponseOK = {
  'id': number | null;
  'fairExecutionId': number | null;
  'productId': number | null;
  'quantityBack': number | null;
  'quantityThere': number | null;
}
export type FairDbCreateFairExecutionProductResponses =
  FairDbCreateFairExecutionProductResponseOK

export type FairDbUpdateFairExecutionProductRequest = {
  'fields'?: Array<'fairExecutionId' | 'id' | 'productId' | 'quantityBack' | 'quantityThere'>;
  'where.fairExecutionId.eq'?: number;
  'where.fairExecutionId.neq'?: number;
  'where.fairExecutionId.gt'?: number;
  'where.fairExecutionId.gte'?: number;
  'where.fairExecutionId.lt'?: number;
  'where.fairExecutionId.lte'?: number;
  'where.fairExecutionId.like'?: number;
  'where.fairExecutionId.in'?: string;
  'where.fairExecutionId.nin'?: string;
  'where.fairExecutionId.contains'?: string;
  'where.fairExecutionId.contained'?: string;
  'where.fairExecutionId.overlaps'?: string;
  'where.id.eq'?: number;
  'where.id.neq'?: number;
  'where.id.gt'?: number;
  'where.id.gte'?: number;
  'where.id.lt'?: number;
  'where.id.lte'?: number;
  'where.id.like'?: number;
  'where.id.in'?: string;
  'where.id.nin'?: string;
  'where.id.contains'?: string;
  'where.id.contained'?: string;
  'where.id.overlaps'?: string;
  'where.productId.eq'?: number;
  'where.productId.neq'?: number;
  'where.productId.gt'?: number;
  'where.productId.gte'?: number;
  'where.productId.lt'?: number;
  'where.productId.lte'?: number;
  'where.productId.like'?: number;
  'where.productId.in'?: string;
  'where.productId.nin'?: string;
  'where.productId.contains'?: string;
  'where.productId.contained'?: string;
  'where.productId.overlaps'?: string;
  'where.quantityBack.eq'?: number;
  'where.quantityBack.neq'?: number;
  'where.quantityBack.gt'?: number;
  'where.quantityBack.gte'?: number;
  'where.quantityBack.lt'?: number;
  'where.quantityBack.lte'?: number;
  'where.quantityBack.like'?: number;
  'where.quantityBack.in'?: string;
  'where.quantityBack.nin'?: string;
  'where.quantityBack.contains'?: string;
  'where.quantityBack.contained'?: string;
  'where.quantityBack.overlaps'?: string;
  'where.quantityThere.eq'?: number;
  'where.quantityThere.neq'?: number;
  'where.quantityThere.gt'?: number;
  'where.quantityThere.gte'?: number;
  'where.quantityThere.lt'?: number;
  'where.quantityThere.lte'?: number;
  'where.quantityThere.like'?: number;
  'where.quantityThere.in'?: string;
  'where.quantityThere.nin'?: string;
  'where.quantityThere.contains'?: string;
  'where.quantityThere.contained'?: string;
  'where.quantityThere.overlaps'?: string;
  'where.or'?: Array<string>;
  'id'?: number;
  'fairExecutionId': number;
  'productId': number;
  'quantityBack': number;
  'quantityThere': number;
}

export type FairDbUpdateFairExecutionProductResponseOK = Array<{ 'id'?: number | null; 'fairExecutionId'?: number | null; 'productId'?: number | null; 'quantityBack'?: number | null; 'quantityThere'?: number | null }>
export type FairDbUpdateFairExecutionProductResponses =
  FairDbUpdateFairExecutionProductResponseOK

export type FairDbGetFairExecutionProductByIdRequest = {
  'fields'?: Array<'fairExecutionId' | 'id' | 'productId' | 'quantityBack' | 'quantityThere'>;
  'id': number;
}

export type FairDbGetFairExecutionProductByIdResponseOK = {
  'id': number | null;
  'fairExecutionId': number | null;
  'productId': number | null;
  'quantityBack': number | null;
  'quantityThere': number | null;
}
export type FairDbGetFairExecutionProductByIdResponses =
  FairDbGetFairExecutionProductByIdResponseOK

export type FairDbUpdateFairExecutionProductRequest = {
  'fields'?: Array<'fairExecutionId' | 'id' | 'productId' | 'quantityBack' | 'quantityThere'>;
  'id': number;
  'fairExecutionId': number;
  'productId': number;
  'quantityBack': number;
  'quantityThere': number;
}

export type FairDbUpdateFairExecutionProductResponseOK = {
  'id': number | null;
  'fairExecutionId': number | null;
  'productId': number | null;
  'quantityBack': number | null;
  'quantityThere': number | null;
}
export type FairDbUpdateFairExecutionProductResponses =
  FairDbUpdateFairExecutionProductResponseOK

export type FairDbDeleteFairExecutionProductRequest = {
  'fields'?: Array<'fairExecutionId' | 'id' | 'productId' | 'quantityBack' | 'quantityThere'>;
  'id': number;
}

export type FairDbDeleteFairExecutionProductResponseOK = {
  'id': number | null;
  'fairExecutionId': number | null;
  'productId': number | null;
  'quantityBack': number | null;
  'quantityThere': number | null;
}
export type FairDbDeleteFairExecutionProductResponses =
  FairDbDeleteFairExecutionProductResponseOK

export type FairDbGetProductForFairExecutionProductRequest = {
  'fields'?: Array<'active' | 'description' | 'id' | 'productSupplierId' | 'title' | 'unit'>;
  'id': number;
}

export type FairDbGetProductForFairExecutionProductResponseOK = {
  'id': number | null;
  'active': number | null;
  'description': string | null;
  'productSupplierId': number | null;
  'title': string | null;
  'unit': string | null;
}
export type FairDbGetProductForFairExecutionProductResponses =
  FairDbGetProductForFairExecutionProductResponseOK

export type FairDbGetFairExecutionDayForFairExecutionProductRequest = {
  'fields'?: Array<'fairId' | 'id' | 'notes' | 'tmDay' | 'tmSellingHoursFrom' | 'tmSellingHoursTo'>;
  'id': number;
}

export type FairDbGetFairExecutionDayForFairExecutionProductResponseOK = {
  'id': number | null;
  'fairId': number | null;
  'notes': string | null;
  'tmDay': string | null;
  'tmSellingHoursFrom': string | null;
  'tmSellingHoursTo': string | null;
}
export type FairDbGetFairExecutionDayForFairExecutionProductResponses =
  FairDbGetFairExecutionDayForFairExecutionProductResponseOK

export type FairDbGetFairExecutionDaySaleRequest = {
  'limit'?: number;
  'offset'?: number;
  'totalCount'?: boolean;
  'fields'?: Array<'fairExecutionDayId' | 'id' | 'salesCard' | 'salesCardTax' | 'salesCash' | 'salesCashTax'>;
  'where.fairExecutionDayId.eq'?: number;
  'where.fairExecutionDayId.neq'?: number;
  'where.fairExecutionDayId.gt'?: number;
  'where.fairExecutionDayId.gte'?: number;
  'where.fairExecutionDayId.lt'?: number;
  'where.fairExecutionDayId.lte'?: number;
  'where.fairExecutionDayId.like'?: number;
  'where.fairExecutionDayId.in'?: string;
  'where.fairExecutionDayId.nin'?: string;
  'where.fairExecutionDayId.contains'?: string;
  'where.fairExecutionDayId.contained'?: string;
  'where.fairExecutionDayId.overlaps'?: string;
  'where.id.eq'?: number;
  'where.id.neq'?: number;
  'where.id.gt'?: number;
  'where.id.gte'?: number;
  'where.id.lt'?: number;
  'where.id.lte'?: number;
  'where.id.like'?: number;
  'where.id.in'?: string;
  'where.id.nin'?: string;
  'where.id.contains'?: string;
  'where.id.contained'?: string;
  'where.id.overlaps'?: string;
  'where.salesCard.eq'?: number;
  'where.salesCard.neq'?: number;
  'where.salesCard.gt'?: number;
  'where.salesCard.gte'?: number;
  'where.salesCard.lt'?: number;
  'where.salesCard.lte'?: number;
  'where.salesCard.like'?: number;
  'where.salesCard.in'?: string;
  'where.salesCard.nin'?: string;
  'where.salesCard.contains'?: string;
  'where.salesCard.contained'?: string;
  'where.salesCard.overlaps'?: string;
  'where.salesCardTax.eq'?: number;
  'where.salesCardTax.neq'?: number;
  'where.salesCardTax.gt'?: number;
  'where.salesCardTax.gte'?: number;
  'where.salesCardTax.lt'?: number;
  'where.salesCardTax.lte'?: number;
  'where.salesCardTax.like'?: number;
  'where.salesCardTax.in'?: string;
  'where.salesCardTax.nin'?: string;
  'where.salesCardTax.contains'?: string;
  'where.salesCardTax.contained'?: string;
  'where.salesCardTax.overlaps'?: string;
  'where.salesCash.eq'?: number;
  'where.salesCash.neq'?: number;
  'where.salesCash.gt'?: number;
  'where.salesCash.gte'?: number;
  'where.salesCash.lt'?: number;
  'where.salesCash.lte'?: number;
  'where.salesCash.like'?: number;
  'where.salesCash.in'?: string;
  'where.salesCash.nin'?: string;
  'where.salesCash.contains'?: string;
  'where.salesCash.contained'?: string;
  'where.salesCash.overlaps'?: string;
  'where.salesCashTax.eq'?: number;
  'where.salesCashTax.neq'?: number;
  'where.salesCashTax.gt'?: number;
  'where.salesCashTax.gte'?: number;
  'where.salesCashTax.lt'?: number;
  'where.salesCashTax.lte'?: number;
  'where.salesCashTax.like'?: number;
  'where.salesCashTax.in'?: string;
  'where.salesCashTax.nin'?: string;
  'where.salesCashTax.contains'?: string;
  'where.salesCashTax.contained'?: string;
  'where.salesCashTax.overlaps'?: string;
  'where.or'?: Array<string>;
  'orderby.fairExecutionDayId'?: 'asc' | 'desc';
  'orderby.id'?: 'asc' | 'desc';
  'orderby.salesCard'?: 'asc' | 'desc';
  'orderby.salesCardTax'?: 'asc' | 'desc';
  'orderby.salesCash'?: 'asc' | 'desc';
  'orderby.salesCashTax'?: 'asc' | 'desc';
}

export type FairDbGetFairExecutionDaySaleResponseOK = Array<{ 'id'?: number | null; 'fairExecutionDayId'?: number | null; 'salesCard'?: number | null; 'salesCardTax'?: number | null; 'salesCash'?: number | null; 'salesCashTax'?: number | null }>
export type FairDbGetFairExecutionDaySaleResponses =
  FairDbGetFairExecutionDaySaleResponseOK

export type FairDbCreateFairExecutionDaySaleRequest = {
  'id'?: number;
  'fairExecutionDayId'?: number | null;
  'salesCard': number;
  'salesCardTax': number;
  'salesCash': number;
  'salesCashTax': number;
}

export type FairDbCreateFairExecutionDaySaleResponseOK = {
  'id': number | null;
  'fairExecutionDayId': number | null;
  'salesCard': number | null;
  'salesCardTax': number | null;
  'salesCash': number | null;
  'salesCashTax': number | null;
}
export type FairDbCreateFairExecutionDaySaleResponses =
  FairDbCreateFairExecutionDaySaleResponseOK

export type FairDbUpdateFairExecutionDaySaleRequest = {
  'fields'?: Array<'fairExecutionDayId' | 'id' | 'salesCard' | 'salesCardTax' | 'salesCash' | 'salesCashTax'>;
  'where.fairExecutionDayId.eq'?: number;
  'where.fairExecutionDayId.neq'?: number;
  'where.fairExecutionDayId.gt'?: number;
  'where.fairExecutionDayId.gte'?: number;
  'where.fairExecutionDayId.lt'?: number;
  'where.fairExecutionDayId.lte'?: number;
  'where.fairExecutionDayId.like'?: number;
  'where.fairExecutionDayId.in'?: string;
  'where.fairExecutionDayId.nin'?: string;
  'where.fairExecutionDayId.contains'?: string;
  'where.fairExecutionDayId.contained'?: string;
  'where.fairExecutionDayId.overlaps'?: string;
  'where.id.eq'?: number;
  'where.id.neq'?: number;
  'where.id.gt'?: number;
  'where.id.gte'?: number;
  'where.id.lt'?: number;
  'where.id.lte'?: number;
  'where.id.like'?: number;
  'where.id.in'?: string;
  'where.id.nin'?: string;
  'where.id.contains'?: string;
  'where.id.contained'?: string;
  'where.id.overlaps'?: string;
  'where.salesCard.eq'?: number;
  'where.salesCard.neq'?: number;
  'where.salesCard.gt'?: number;
  'where.salesCard.gte'?: number;
  'where.salesCard.lt'?: number;
  'where.salesCard.lte'?: number;
  'where.salesCard.like'?: number;
  'where.salesCard.in'?: string;
  'where.salesCard.nin'?: string;
  'where.salesCard.contains'?: string;
  'where.salesCard.contained'?: string;
  'where.salesCard.overlaps'?: string;
  'where.salesCardTax.eq'?: number;
  'where.salesCardTax.neq'?: number;
  'where.salesCardTax.gt'?: number;
  'where.salesCardTax.gte'?: number;
  'where.salesCardTax.lt'?: number;
  'where.salesCardTax.lte'?: number;
  'where.salesCardTax.like'?: number;
  'where.salesCardTax.in'?: string;
  'where.salesCardTax.nin'?: string;
  'where.salesCardTax.contains'?: string;
  'where.salesCardTax.contained'?: string;
  'where.salesCardTax.overlaps'?: string;
  'where.salesCash.eq'?: number;
  'where.salesCash.neq'?: number;
  'where.salesCash.gt'?: number;
  'where.salesCash.gte'?: number;
  'where.salesCash.lt'?: number;
  'where.salesCash.lte'?: number;
  'where.salesCash.like'?: number;
  'where.salesCash.in'?: string;
  'where.salesCash.nin'?: string;
  'where.salesCash.contains'?: string;
  'where.salesCash.contained'?: string;
  'where.salesCash.overlaps'?: string;
  'where.salesCashTax.eq'?: number;
  'where.salesCashTax.neq'?: number;
  'where.salesCashTax.gt'?: number;
  'where.salesCashTax.gte'?: number;
  'where.salesCashTax.lt'?: number;
  'where.salesCashTax.lte'?: number;
  'where.salesCashTax.like'?: number;
  'where.salesCashTax.in'?: string;
  'where.salesCashTax.nin'?: string;
  'where.salesCashTax.contains'?: string;
  'where.salesCashTax.contained'?: string;
  'where.salesCashTax.overlaps'?: string;
  'where.or'?: Array<string>;
  'id'?: number;
  'fairExecutionDayId'?: number | null;
  'salesCard': number;
  'salesCardTax': number;
  'salesCash': number;
  'salesCashTax': number;
}

export type FairDbUpdateFairExecutionDaySaleResponseOK = Array<{ 'id'?: number | null; 'fairExecutionDayId'?: number | null; 'salesCard'?: number | null; 'salesCardTax'?: number | null; 'salesCash'?: number | null; 'salesCashTax'?: number | null }>
export type FairDbUpdateFairExecutionDaySaleResponses =
  FairDbUpdateFairExecutionDaySaleResponseOK

export type FairDbGetFairExecutionDaySaleByIdRequest = {
  'fields'?: Array<'fairExecutionDayId' | 'id' | 'salesCard' | 'salesCardTax' | 'salesCash' | 'salesCashTax'>;
  'id': number;
}

export type FairDbGetFairExecutionDaySaleByIdResponseOK = {
  'id': number | null;
  'fairExecutionDayId': number | null;
  'salesCard': number | null;
  'salesCardTax': number | null;
  'salesCash': number | null;
  'salesCashTax': number | null;
}
export type FairDbGetFairExecutionDaySaleByIdResponses =
  FairDbGetFairExecutionDaySaleByIdResponseOK

export type FairDbUpdateFairExecutionDaySaleRequest = {
  'fields'?: Array<'fairExecutionDayId' | 'id' | 'salesCard' | 'salesCardTax' | 'salesCash' | 'salesCashTax'>;
  'id': number;
  'fairExecutionDayId'?: number | null;
  'salesCard': number;
  'salesCardTax': number;
  'salesCash': number;
  'salesCashTax': number;
}

export type FairDbUpdateFairExecutionDaySaleResponseOK = {
  'id': number | null;
  'fairExecutionDayId': number | null;
  'salesCard': number | null;
  'salesCardTax': number | null;
  'salesCash': number | null;
  'salesCashTax': number | null;
}
export type FairDbUpdateFairExecutionDaySaleResponses =
  FairDbUpdateFairExecutionDaySaleResponseOK

export type FairDbDeleteFairExecutionDaySaleRequest = {
  'fields'?: Array<'fairExecutionDayId' | 'id' | 'salesCard' | 'salesCardTax' | 'salesCash' | 'salesCashTax'>;
  'id': number;
}

export type FairDbDeleteFairExecutionDaySaleResponseOK = {
  'id': number | null;
  'fairExecutionDayId': number | null;
  'salesCard': number | null;
  'salesCardTax': number | null;
  'salesCash': number | null;
  'salesCashTax': number | null;
}
export type FairDbDeleteFairExecutionDaySaleResponses =
  FairDbDeleteFairExecutionDaySaleResponseOK

export type FairDbGetFairExecutionDayForFairExecutionDaySaleRequest = {
  'fields'?: Array<'fairId' | 'id' | 'notes' | 'tmDay' | 'tmSellingHoursFrom' | 'tmSellingHoursTo'>;
  'id': number;
}

export type FairDbGetFairExecutionDayForFairExecutionDaySaleResponseOK = {
  'id': number | null;
  'fairId': number | null;
  'notes': string | null;
  'tmDay': string | null;
  'tmSellingHoursFrom': string | null;
  'tmSellingHoursTo': string | null;
}
export type FairDbGetFairExecutionDayForFairExecutionDaySaleResponses =
  FairDbGetFairExecutionDayForFairExecutionDaySaleResponseOK

export type FairDbGetFairExecutionCostRequest = {
  'limit'?: number;
  'offset'?: number;
  'totalCount'?: boolean;
  'fields'?: Array<'description' | 'fairExecutionId' | 'id' | 'price' | 'tax'>;
  'where.description.eq'?: string;
  'where.description.neq'?: string;
  'where.description.gt'?: string;
  'where.description.gte'?: string;
  'where.description.lt'?: string;
  'where.description.lte'?: string;
  'where.description.like'?: string;
  'where.description.in'?: string;
  'where.description.nin'?: string;
  'where.description.contains'?: string;
  'where.description.contained'?: string;
  'where.description.overlaps'?: string;
  'where.fairExecutionId.eq'?: number;
  'where.fairExecutionId.neq'?: number;
  'where.fairExecutionId.gt'?: number;
  'where.fairExecutionId.gte'?: number;
  'where.fairExecutionId.lt'?: number;
  'where.fairExecutionId.lte'?: number;
  'where.fairExecutionId.like'?: number;
  'where.fairExecutionId.in'?: string;
  'where.fairExecutionId.nin'?: string;
  'where.fairExecutionId.contains'?: string;
  'where.fairExecutionId.contained'?: string;
  'where.fairExecutionId.overlaps'?: string;
  'where.id.eq'?: number;
  'where.id.neq'?: number;
  'where.id.gt'?: number;
  'where.id.gte'?: number;
  'where.id.lt'?: number;
  'where.id.lte'?: number;
  'where.id.like'?: number;
  'where.id.in'?: string;
  'where.id.nin'?: string;
  'where.id.contains'?: string;
  'where.id.contained'?: string;
  'where.id.overlaps'?: string;
  'where.price.eq'?: number;
  'where.price.neq'?: number;
  'where.price.gt'?: number;
  'where.price.gte'?: number;
  'where.price.lt'?: number;
  'where.price.lte'?: number;
  'where.price.like'?: number;
  'where.price.in'?: string;
  'where.price.nin'?: string;
  'where.price.contains'?: string;
  'where.price.contained'?: string;
  'where.price.overlaps'?: string;
  'where.tax.eq'?: number;
  'where.tax.neq'?: number;
  'where.tax.gt'?: number;
  'where.tax.gte'?: number;
  'where.tax.lt'?: number;
  'where.tax.lte'?: number;
  'where.tax.like'?: number;
  'where.tax.in'?: string;
  'where.tax.nin'?: string;
  'where.tax.contains'?: string;
  'where.tax.contained'?: string;
  'where.tax.overlaps'?: string;
  'where.or'?: Array<string>;
  'orderby.description'?: 'asc' | 'desc';
  'orderby.fairExecutionId'?: 'asc' | 'desc';
  'orderby.id'?: 'asc' | 'desc';
  'orderby.price'?: 'asc' | 'desc';
  'orderby.tax'?: 'asc' | 'desc';
}

export type FairDbGetFairExecutionCostResponseOK = Array<{ 'id'?: number | null; 'fairExecutionId'?: number | null; 'description'?: string | null; 'price'?: number | null; 'tax'?: number | null }>
export type FairDbGetFairExecutionCostResponses =
  FairDbGetFairExecutionCostResponseOK

export type FairDbCreateFairExecutionCostRequest = {
  'id'?: number;
  'fairExecutionId': number;
  'description': string;
  'price': number;
  'tax': number;
}

export type FairDbCreateFairExecutionCostResponseOK = {
  'id': number | null;
  'fairExecutionId': number | null;
  'description': string | null;
  'price': number | null;
  'tax': number | null;
}
export type FairDbCreateFairExecutionCostResponses =
  FairDbCreateFairExecutionCostResponseOK

export type FairDbUpdateFairExecutionCostRequest = {
  'fields'?: Array<'description' | 'fairExecutionId' | 'id' | 'price' | 'tax'>;
  'where.description.eq'?: string;
  'where.description.neq'?: string;
  'where.description.gt'?: string;
  'where.description.gte'?: string;
  'where.description.lt'?: string;
  'where.description.lte'?: string;
  'where.description.like'?: string;
  'where.description.in'?: string;
  'where.description.nin'?: string;
  'where.description.contains'?: string;
  'where.description.contained'?: string;
  'where.description.overlaps'?: string;
  'where.fairExecutionId.eq'?: number;
  'where.fairExecutionId.neq'?: number;
  'where.fairExecutionId.gt'?: number;
  'where.fairExecutionId.gte'?: number;
  'where.fairExecutionId.lt'?: number;
  'where.fairExecutionId.lte'?: number;
  'where.fairExecutionId.like'?: number;
  'where.fairExecutionId.in'?: string;
  'where.fairExecutionId.nin'?: string;
  'where.fairExecutionId.contains'?: string;
  'where.fairExecutionId.contained'?: string;
  'where.fairExecutionId.overlaps'?: string;
  'where.id.eq'?: number;
  'where.id.neq'?: number;
  'where.id.gt'?: number;
  'where.id.gte'?: number;
  'where.id.lt'?: number;
  'where.id.lte'?: number;
  'where.id.like'?: number;
  'where.id.in'?: string;
  'where.id.nin'?: string;
  'where.id.contains'?: string;
  'where.id.contained'?: string;
  'where.id.overlaps'?: string;
  'where.price.eq'?: number;
  'where.price.neq'?: number;
  'where.price.gt'?: number;
  'where.price.gte'?: number;
  'where.price.lt'?: number;
  'where.price.lte'?: number;
  'where.price.like'?: number;
  'where.price.in'?: string;
  'where.price.nin'?: string;
  'where.price.contains'?: string;
  'where.price.contained'?: string;
  'where.price.overlaps'?: string;
  'where.tax.eq'?: number;
  'where.tax.neq'?: number;
  'where.tax.gt'?: number;
  'where.tax.gte'?: number;
  'where.tax.lt'?: number;
  'where.tax.lte'?: number;
  'where.tax.like'?: number;
  'where.tax.in'?: string;
  'where.tax.nin'?: string;
  'where.tax.contains'?: string;
  'where.tax.contained'?: string;
  'where.tax.overlaps'?: string;
  'where.or'?: Array<string>;
  'id'?: number;
  'fairExecutionId': number;
  'description': string;
  'price': number;
  'tax': number;
}

export type FairDbUpdateFairExecutionCostResponseOK = Array<{ 'id'?: number | null; 'fairExecutionId'?: number | null; 'description'?: string | null; 'price'?: number | null; 'tax'?: number | null }>
export type FairDbUpdateFairExecutionCostResponses =
  FairDbUpdateFairExecutionCostResponseOK

export type FairDbGetFairExecutionCostByIdRequest = {
  'fields'?: Array<'description' | 'fairExecutionId' | 'id' | 'price' | 'tax'>;
  'id': number;
}

export type FairDbGetFairExecutionCostByIdResponseOK = {
  'id': number | null;
  'fairExecutionId': number | null;
  'description': string | null;
  'price': number | null;
  'tax': number | null;
}
export type FairDbGetFairExecutionCostByIdResponses =
  FairDbGetFairExecutionCostByIdResponseOK

export type FairDbUpdateFairExecutionCostRequest = {
  'fields'?: Array<'description' | 'fairExecutionId' | 'id' | 'price' | 'tax'>;
  'id': number;
  'fairExecutionId': number;
  'description': string;
  'price': number;
  'tax': number;
}

export type FairDbUpdateFairExecutionCostResponseOK = {
  'id': number | null;
  'fairExecutionId': number | null;
  'description': string | null;
  'price': number | null;
  'tax': number | null;
}
export type FairDbUpdateFairExecutionCostResponses =
  FairDbUpdateFairExecutionCostResponseOK

export type FairDbDeleteFairExecutionCostRequest = {
  'fields'?: Array<'description' | 'fairExecutionId' | 'id' | 'price' | 'tax'>;
  'id': number;
}

export type FairDbDeleteFairExecutionCostResponseOK = {
  'id': number | null;
  'fairExecutionId': number | null;
  'description': string | null;
  'price': number | null;
  'tax': number | null;
}
export type FairDbDeleteFairExecutionCostResponses =
  FairDbDeleteFairExecutionCostResponseOK

export type FairDbGetFairExecutionDayForFairExecutionCostRequest = {
  'fields'?: Array<'fairId' | 'id' | 'notes' | 'tmDay' | 'tmSellingHoursFrom' | 'tmSellingHoursTo'>;
  'id': number;
}

export type FairDbGetFairExecutionDayForFairExecutionCostResponseOK = {
  'id': number | null;
  'fairId': number | null;
  'notes': string | null;
  'tmDay': string | null;
  'tmSellingHoursFrom': string | null;
  'tmSellingHoursTo': string | null;
}
export type FairDbGetFairExecutionDayForFairExecutionCostResponses =
  FairDbGetFairExecutionDayForFairExecutionCostResponseOK

export type FairDbGetFairExecutionDayCostHelperRequest = {
  'limit'?: number;
  'offset'?: number;
  'totalCount'?: boolean;
  'fields'?: Array<'fairExecutionDayId' | 'fairHelperId' | 'wage'>;
  'where.fairExecutionDayId.eq'?: number;
  'where.fairExecutionDayId.neq'?: number;
  'where.fairExecutionDayId.gt'?: number;
  'where.fairExecutionDayId.gte'?: number;
  'where.fairExecutionDayId.lt'?: number;
  'where.fairExecutionDayId.lte'?: number;
  'where.fairExecutionDayId.like'?: number;
  'where.fairExecutionDayId.in'?: string;
  'where.fairExecutionDayId.nin'?: string;
  'where.fairExecutionDayId.contains'?: string;
  'where.fairExecutionDayId.contained'?: string;
  'where.fairExecutionDayId.overlaps'?: string;
  'where.fairHelperId.eq'?: number;
  'where.fairHelperId.neq'?: number;
  'where.fairHelperId.gt'?: number;
  'where.fairHelperId.gte'?: number;
  'where.fairHelperId.lt'?: number;
  'where.fairHelperId.lte'?: number;
  'where.fairHelperId.like'?: number;
  'where.fairHelperId.in'?: string;
  'where.fairHelperId.nin'?: string;
  'where.fairHelperId.contains'?: string;
  'where.fairHelperId.contained'?: string;
  'where.fairHelperId.overlaps'?: string;
  'where.wage.eq'?: number;
  'where.wage.neq'?: number;
  'where.wage.gt'?: number;
  'where.wage.gte'?: number;
  'where.wage.lt'?: number;
  'where.wage.lte'?: number;
  'where.wage.like'?: number;
  'where.wage.in'?: string;
  'where.wage.nin'?: string;
  'where.wage.contains'?: string;
  'where.wage.contained'?: string;
  'where.wage.overlaps'?: string;
  'where.or'?: Array<string>;
  'orderby.fairExecutionDayId'?: 'asc' | 'desc';
  'orderby.fairHelperId'?: 'asc' | 'desc';
  'orderby.wage'?: 'asc' | 'desc';
}

export type FairDbGetFairExecutionDayCostHelperResponseOK = Array<{ 'fairExecutionDayId'?: number | null; 'fairHelperId'?: number | null; 'wage'?: number | null }>
export type FairDbGetFairExecutionDayCostHelperResponses =
  FairDbGetFairExecutionDayCostHelperResponseOK

export type FairDbCreateFairExecutionDayCostHelperRequest = {
  'fairExecutionDayId'?: number;
  'fairHelperId'?: number;
  'wage': number;
}

export type FairDbCreateFairExecutionDayCostHelperResponseOK = {
  'fairExecutionDayId': number | null;
  'fairHelperId': number | null;
  'wage': number | null;
}
export type FairDbCreateFairExecutionDayCostHelperResponses =
  FairDbCreateFairExecutionDayCostHelperResponseOK

export type FairDbUpdateFairExecutionDayCostHelperRequest = {
  'fields'?: Array<'fairExecutionDayId' | 'fairHelperId' | 'wage'>;
  'where.fairExecutionDayId.eq'?: number;
  'where.fairExecutionDayId.neq'?: number;
  'where.fairExecutionDayId.gt'?: number;
  'where.fairExecutionDayId.gte'?: number;
  'where.fairExecutionDayId.lt'?: number;
  'where.fairExecutionDayId.lte'?: number;
  'where.fairExecutionDayId.like'?: number;
  'where.fairExecutionDayId.in'?: string;
  'where.fairExecutionDayId.nin'?: string;
  'where.fairExecutionDayId.contains'?: string;
  'where.fairExecutionDayId.contained'?: string;
  'where.fairExecutionDayId.overlaps'?: string;
  'where.fairHelperId.eq'?: number;
  'where.fairHelperId.neq'?: number;
  'where.fairHelperId.gt'?: number;
  'where.fairHelperId.gte'?: number;
  'where.fairHelperId.lt'?: number;
  'where.fairHelperId.lte'?: number;
  'where.fairHelperId.like'?: number;
  'where.fairHelperId.in'?: string;
  'where.fairHelperId.nin'?: string;
  'where.fairHelperId.contains'?: string;
  'where.fairHelperId.contained'?: string;
  'where.fairHelperId.overlaps'?: string;
  'where.wage.eq'?: number;
  'where.wage.neq'?: number;
  'where.wage.gt'?: number;
  'where.wage.gte'?: number;
  'where.wage.lt'?: number;
  'where.wage.lte'?: number;
  'where.wage.like'?: number;
  'where.wage.in'?: string;
  'where.wage.nin'?: string;
  'where.wage.contains'?: string;
  'where.wage.contained'?: string;
  'where.wage.overlaps'?: string;
  'where.or'?: Array<string>;
  'fairExecutionDayId'?: number;
  'fairHelperId'?: number;
  'wage': number;
}

export type FairDbUpdateFairExecutionDayCostHelperResponseOK = Array<{ 'fairExecutionDayId'?: number | null; 'fairHelperId'?: number | null; 'wage'?: number | null }>
export type FairDbUpdateFairExecutionDayCostHelperResponses =
  FairDbUpdateFairExecutionDayCostHelperResponseOK

export type FairDbGetFairExecutionDayCostHelperByFairExecutionDayIdAndFairHelperIdRequest = {
  'fields'?: Array<'fairExecutionDayId' | 'fairHelperId' | 'wage'>;
  'fairExecutionDayId': number;
  'fairHelperId': number;
}

export type FairDbGetFairExecutionDayCostHelperByFairExecutionDayIdAndFairHelperIdResponseOK = {
  'fairExecutionDayId': number | null;
  'fairHelperId': number | null;
  'wage': number | null;
}
export type FairDbGetFairExecutionDayCostHelperByFairExecutionDayIdAndFairHelperIdResponses =
  FairDbGetFairExecutionDayCostHelperByFairExecutionDayIdAndFairHelperIdResponseOK

export type PostFairExecutionDayCostHelperFairExecutionDayFairExecutionDayIdFairHelperIdFairHelperIdRequest = {
  'fields'?: Array<'fairExecutionDayId' | 'fairHelperId' | 'wage'>;
  'fairExecutionDayId': number;
  'fairHelperId': number;
  'wage': number;
}

export type PostFairExecutionDayCostHelperFairExecutionDayFairExecutionDayIdFairHelperIdFairHelperIdResponseOK = {
  'fairExecutionDayId': number | null;
  'fairHelperId': number | null;
  'wage': number | null;
}
export type PostFairExecutionDayCostHelperFairExecutionDayFairExecutionDayIdFairHelperIdFairHelperIdResponses =
  PostFairExecutionDayCostHelperFairExecutionDayFairExecutionDayIdFairHelperIdFairHelperIdResponseOK

export type PutFairExecutionDayCostHelperFairExecutionDayFairExecutionDayIdFairHelperIdFairHelperIdRequest = {
  'fields'?: Array<'fairExecutionDayId' | 'fairHelperId' | 'wage'>;
  'fairExecutionDayId': number;
  'fairHelperId': number;
  'wage': number;
}

export type PutFairExecutionDayCostHelperFairExecutionDayFairExecutionDayIdFairHelperIdFairHelperIdResponseOK = {
  'fairExecutionDayId': number | null;
  'fairHelperId': number | null;
  'wage': number | null;
}
export type PutFairExecutionDayCostHelperFairExecutionDayFairExecutionDayIdFairHelperIdFairHelperIdResponses =
  PutFairExecutionDayCostHelperFairExecutionDayFairExecutionDayIdFairHelperIdFairHelperIdResponseOK

export type DeleteFairExecutionDayCostHelperFairExecutionDayFairExecutionDayIdFairHelperIdFairHelperIdRequest = {
  'fields'?: Array<'fairExecutionDayId' | 'fairHelperId' | 'wage'>;
  'fairExecutionDayId': number;
  'fairHelperId': number;
}

export type DeleteFairExecutionDayCostHelperFairExecutionDayFairExecutionDayIdFairHelperIdFairHelperIdResponseOK = {
  'fairExecutionDayId': number | null;
  'fairHelperId': number | null;
  'wage': number | null;
}
export type DeleteFairExecutionDayCostHelperFairExecutionDayFairExecutionDayIdFairHelperIdFairHelperIdResponses =
  DeleteFairExecutionDayCostHelperFairExecutionDayFairExecutionDayIdFairHelperIdFairHelperIdResponseOK

export type PostExtractPdfRequest = {
  'fileId': string;
  'path': string;
  'hash': string;
  'mimetype': string;
  'type': string;
}

export type PostExtractPdfResponseOK = unknown
export type PostExtractPdfResponses =
  FullResponse<PostExtractPdfResponseOK, 200>

export type GetAiImportTestRequest = {
  
}

export type GetAiImportTestResponseOK = unknown
export type GetAiImportTestResponses =
  FullResponse<GetAiImportTestResponseOK, 200>

export type PostAiImportInvoiceGoodsFileIdRequest = {
  'fileId': string;
}

export type PostAiImportInvoiceGoodsFileIdResponseOK = unknown
export type PostAiImportInvoiceGoodsFileIdResponses =
  FullResponse<PostAiImportInvoiceGoodsFileIdResponseOK, 200>

export type GetAiTestAssistantRequest = {
  
}

export type GetAiTestAssistantResponseOK = unknown
export type GetAiTestAssistantResponses =
  FullResponse<GetAiTestAssistantResponseOK, 200>

export type PostAiTestSupplierRequest = {
  
}

export type PostAiTestSupplierResponseOK = unknown
export type PostAiTestSupplierResponses =
  FullResponse<PostAiTestSupplierResponseOK, 200>



export interface Api {
  setBaseUrl(newUrl: string) : void;
  setDefaultHeaders(headers: Object) : void;
  importDbGetFile(req: ImportDbGetFileRequest): Promise<ImportDbGetFileResponses>;
  importDbCreateFile(req: ImportDbCreateFileRequest): Promise<ImportDbCreateFileResponses>;
  importDbUpdateFile(req: ImportDbUpdateFileRequest): Promise<ImportDbUpdateFileResponses>;
  importDbGetFileById(req: ImportDbGetFileByIdRequest): Promise<ImportDbGetFileByIdResponses>;
  importDbUpdateFile(req: ImportDbUpdateFileRequest): Promise<ImportDbUpdateFileResponses>;
  importDbDeleteFile(req: ImportDbDeleteFileRequest): Promise<ImportDbDeleteFileResponses>;
  importDbGetFileExtractionForFile(req: ImportDbGetFileExtractionForFileRequest): Promise<ImportDbGetFileExtractionForFileResponses>;
  importDbGetFileTrainingForFile(req: ImportDbGetFileTrainingForFileRequest): Promise<ImportDbGetFileTrainingForFileResponses>;
  importDbGetFileExtraction(req: ImportDbGetFileExtractionRequest): Promise<ImportDbGetFileExtractionResponses>;
  importDbCreateFileExtraction(req: ImportDbCreateFileExtractionRequest): Promise<ImportDbCreateFileExtractionResponses>;
  importDbUpdateFileExtraction(req: ImportDbUpdateFileExtractionRequest): Promise<ImportDbUpdateFileExtractionResponses>;
  importDbGetFileExtractionById(req: ImportDbGetFileExtractionByIdRequest): Promise<ImportDbGetFileExtractionByIdResponses>;
  importDbUpdateFileExtraction(req: ImportDbUpdateFileExtractionRequest): Promise<ImportDbUpdateFileExtractionResponses>;
  importDbDeleteFileExtraction(req: ImportDbDeleteFileExtractionRequest): Promise<ImportDbDeleteFileExtractionResponses>;
  importDbGetFileForFileExtraction(req: ImportDbGetFileForFileExtractionRequest): Promise<ImportDbGetFileForFileExtractionResponses>;
  importDbGetFileTraining(req: ImportDbGetFileTrainingRequest): Promise<ImportDbGetFileTrainingResponses>;
  importDbCreateFileTraining(req: ImportDbCreateFileTrainingRequest): Promise<ImportDbCreateFileTrainingResponses>;
  importDbUpdateFileTraining(req: ImportDbUpdateFileTrainingRequest): Promise<ImportDbUpdateFileTrainingResponses>;
  importDbGetFileTrainingById(req: ImportDbGetFileTrainingByIdRequest): Promise<ImportDbGetFileTrainingByIdResponses>;
  importDbUpdateFileTraining(req: ImportDbUpdateFileTrainingRequest): Promise<ImportDbUpdateFileTrainingResponses>;
  importDbDeleteFileTraining(req: ImportDbDeleteFileTrainingRequest): Promise<ImportDbDeleteFileTrainingResponses>;
  importDbGetFileForFileTraining(req: ImportDbGetFileForFileTrainingRequest): Promise<ImportDbGetFileForFileTrainingResponses>;
  postImportInvoiceGoods(req: PostImportInvoiceGoodsRequest): Promise<PostImportInvoiceGoodsResponses>;
  postImportTrainFileId(req: PostImportTrainFileIdRequest): Promise<PostImportTrainFileIdResponses>;
  postImportModelFileId(req: PostImportModelFileIdRequest): Promise<PostImportModelFileIdResponses>;
  fairDbGetProductSupplier(req: FairDbGetProductSupplierRequest): Promise<FairDbGetProductSupplierResponses>;
  fairDbCreateProductSupplier(req: FairDbCreateProductSupplierRequest): Promise<FairDbCreateProductSupplierResponses>;
  fairDbUpdateProductSupplier(req: FairDbUpdateProductSupplierRequest): Promise<FairDbUpdateProductSupplierResponses>;
  fairDbGetProductSupplierById(req: FairDbGetProductSupplierByIdRequest): Promise<FairDbGetProductSupplierByIdResponses>;
  fairDbUpdateProductSupplier(req: FairDbUpdateProductSupplierRequest): Promise<FairDbUpdateProductSupplierResponses>;
  fairDbDeleteProductSupplier(req: FairDbDeleteProductSupplierRequest): Promise<FairDbDeleteProductSupplierResponses>;
  fairDbGetProductForProductSupplier(req: FairDbGetProductForProductSupplierRequest): Promise<FairDbGetProductForProductSupplierResponses>;
  fairDbGetProductOrderForProductSupplier(req: FairDbGetProductOrderForProductSupplierRequest): Promise<FairDbGetProductOrderForProductSupplierResponses>;
  fairDbGetProductCategory(req: FairDbGetProductCategoryRequest): Promise<FairDbGetProductCategoryResponses>;
  fairDbCreateProductCategory(req: FairDbCreateProductCategoryRequest): Promise<FairDbCreateProductCategoryResponses>;
  fairDbUpdateProductCategory(req: FairDbUpdateProductCategoryRequest): Promise<FairDbUpdateProductCategoryResponses>;
  fairDbGetProductCategoryById(req: FairDbGetProductCategoryByIdRequest): Promise<FairDbGetProductCategoryByIdResponses>;
  fairDbUpdateProductCategory(req: FairDbUpdateProductCategoryRequest): Promise<FairDbUpdateProductCategoryResponses>;
  fairDbDeleteProductCategory(req: FairDbDeleteProductCategoryRequest): Promise<FairDbDeleteProductCategoryResponses>;
  fairDbGetProductToProductCategoryForProductCategory(req: FairDbGetProductToProductCategoryForProductCategoryRequest): Promise<FairDbGetProductToProductCategoryForProductCategoryResponses>;
  fairDbGetProduct(req: FairDbGetProductRequest): Promise<FairDbGetProductResponses>;
  fairDbCreateProduct(req: FairDbCreateProductRequest): Promise<FairDbCreateProductResponses>;
  fairDbUpdateProduct(req: FairDbUpdateProductRequest): Promise<FairDbUpdateProductResponses>;
  fairDbGetProductById(req: FairDbGetProductByIdRequest): Promise<FairDbGetProductByIdResponses>;
  fairDbUpdateProduct(req: FairDbUpdateProductRequest): Promise<FairDbUpdateProductResponses>;
  fairDbDeleteProduct(req: FairDbDeleteProductRequest): Promise<FairDbDeleteProductResponses>;
  fairDbGetProductToProductCategoryForProduct(req: FairDbGetProductToProductCategoryForProductRequest): Promise<FairDbGetProductToProductCategoryForProductResponses>;
  fairDbGetProductOrderLineForProduct(req: FairDbGetProductOrderLineForProductRequest): Promise<FairDbGetProductOrderLineForProductResponses>;
  fairDbGetFairExecutionProductForProduct(req: FairDbGetFairExecutionProductForProductRequest): Promise<FairDbGetFairExecutionProductForProductResponses>;
  fairDbGetProductSupplierForProduct(req: FairDbGetProductSupplierForProductRequest): Promise<FairDbGetProductSupplierForProductResponses>;
  fairDbGetProductToProductCategory(req: FairDbGetProductToProductCategoryRequest): Promise<FairDbGetProductToProductCategoryResponses>;
  fairDbCreateProductToProductCategory(req: FairDbCreateProductToProductCategoryRequest): Promise<FairDbCreateProductToProductCategoryResponses>;
  fairDbUpdateProductToProductCategory(req: FairDbUpdateProductToProductCategoryRequest): Promise<FairDbUpdateProductToProductCategoryResponses>;
  fairDbGetProductToProductCategoryByProductCategoryIdAndProductId(req: FairDbGetProductToProductCategoryByProductCategoryIdAndProductIdRequest): Promise<FairDbGetProductToProductCategoryByProductCategoryIdAndProductIdResponses>;
  postProductToProductCategoryProductCategoryProductCategoryIdProductProductId(req: PostProductToProductCategoryProductCategoryProductCategoryIdProductProductIdRequest): Promise<PostProductToProductCategoryProductCategoryProductCategoryIdProductProductIdResponses>;
  putProductToProductCategoryProductCategoryProductCategoryIdProductProductId(req: PutProductToProductCategoryProductCategoryProductCategoryIdProductProductIdRequest): Promise<PutProductToProductCategoryProductCategoryProductCategoryIdProductProductIdResponses>;
  deleteProductToProductCategoryProductCategoryProductCategoryIdProductProductId(req: DeleteProductToProductCategoryProductCategoryProductCategoryIdProductProductIdRequest): Promise<DeleteProductToProductCategoryProductCategoryProductCategoryIdProductProductIdResponses>;
  fairDbGetProductOrder(req: FairDbGetProductOrderRequest): Promise<FairDbGetProductOrderResponses>;
  fairDbCreateProductOrder(req: FairDbCreateProductOrderRequest): Promise<FairDbCreateProductOrderResponses>;
  fairDbUpdateProductOrder(req: FairDbUpdateProductOrderRequest): Promise<FairDbUpdateProductOrderResponses>;
  fairDbGetProductOrderById(req: FairDbGetProductOrderByIdRequest): Promise<FairDbGetProductOrderByIdResponses>;
  fairDbUpdateProductOrder(req: FairDbUpdateProductOrderRequest): Promise<FairDbUpdateProductOrderResponses>;
  fairDbDeleteProductOrder(req: FairDbDeleteProductOrderRequest): Promise<FairDbDeleteProductOrderResponses>;
  fairDbGetProductOrderLineForProductOrder(req: FairDbGetProductOrderLineForProductOrderRequest): Promise<FairDbGetProductOrderLineForProductOrderResponses>;
  fairDbGetProductSupplierForProductOrder(req: FairDbGetProductSupplierForProductOrderRequest): Promise<FairDbGetProductSupplierForProductOrderResponses>;
  fairDbGetProductOrderLine(req: FairDbGetProductOrderLineRequest): Promise<FairDbGetProductOrderLineResponses>;
  fairDbCreateProductOrderLine(req: FairDbCreateProductOrderLineRequest): Promise<FairDbCreateProductOrderLineResponses>;
  fairDbUpdateProductOrderLine(req: FairDbUpdateProductOrderLineRequest): Promise<FairDbUpdateProductOrderLineResponses>;
  fairDbGetProductOrderLineByProductIdAndProductOrderId(req: FairDbGetProductOrderLineByProductIdAndProductOrderIdRequest): Promise<FairDbGetProductOrderLineByProductIdAndProductOrderIdResponses>;
  postProductOrderLineProductProductIdProductOrderProductOrderId(req: PostProductOrderLineProductProductIdProductOrderProductOrderIdRequest): Promise<PostProductOrderLineProductProductIdProductOrderProductOrderIdResponses>;
  putProductOrderLineProductProductIdProductOrderProductOrderId(req: PutProductOrderLineProductProductIdProductOrderProductOrderIdRequest): Promise<PutProductOrderLineProductProductIdProductOrderProductOrderIdResponses>;
  deleteProductOrderLineProductProductIdProductOrderProductOrderId(req: DeleteProductOrderLineProductProductIdProductOrderProductOrderIdRequest): Promise<DeleteProductOrderLineProductProductIdProductOrderProductOrderIdResponses>;
  fairDbGetFairPresenter(req: FairDbGetFairPresenterRequest): Promise<FairDbGetFairPresenterResponses>;
  fairDbCreateFairPresenter(req: FairDbCreateFairPresenterRequest): Promise<FairDbCreateFairPresenterResponses>;
  fairDbUpdateFairPresenter(req: FairDbUpdateFairPresenterRequest): Promise<FairDbUpdateFairPresenterResponses>;
  fairDbGetFairPresenterById(req: FairDbGetFairPresenterByIdRequest): Promise<FairDbGetFairPresenterByIdResponses>;
  fairDbUpdateFairPresenter(req: FairDbUpdateFairPresenterRequest): Promise<FairDbUpdateFairPresenterResponses>;
  fairDbDeleteFairPresenter(req: FairDbDeleteFairPresenterRequest): Promise<FairDbDeleteFairPresenterResponses>;
  fairDbGetFairForFairPresenter(req: FairDbGetFairForFairPresenterRequest): Promise<FairDbGetFairForFairPresenterResponses>;
  fairDbGetFairHelper(req: FairDbGetFairHelperRequest): Promise<FairDbGetFairHelperResponses>;
  fairDbCreateFairHelper(req: FairDbCreateFairHelperRequest): Promise<FairDbCreateFairHelperResponses>;
  fairDbUpdateFairHelper(req: FairDbUpdateFairHelperRequest): Promise<FairDbUpdateFairHelperResponses>;
  fairDbGetFairHelperById(req: FairDbGetFairHelperByIdRequest): Promise<FairDbGetFairHelperByIdResponses>;
  fairDbUpdateFairHelper(req: FairDbUpdateFairHelperRequest): Promise<FairDbUpdateFairHelperResponses>;
  fairDbDeleteFairHelper(req: FairDbDeleteFairHelperRequest): Promise<FairDbDeleteFairHelperResponses>;
  fairDbGetFair(req: FairDbGetFairRequest): Promise<FairDbGetFairResponses>;
  fairDbCreateFair(req: FairDbCreateFairRequest): Promise<FairDbCreateFairResponses>;
  fairDbUpdateFair(req: FairDbUpdateFairRequest): Promise<FairDbUpdateFairResponses>;
  fairDbGetFairById(req: FairDbGetFairByIdRequest): Promise<FairDbGetFairByIdResponses>;
  fairDbUpdateFair(req: FairDbUpdateFairRequest): Promise<FairDbUpdateFairResponses>;
  fairDbDeleteFair(req: FairDbDeleteFairRequest): Promise<FairDbDeleteFairResponses>;
  fairDbGetFairExecutionForFair(req: FairDbGetFairExecutionForFairRequest): Promise<FairDbGetFairExecutionForFairResponses>;
  fairDbGetFairExecutionDayForFair(req: FairDbGetFairExecutionDayForFairRequest): Promise<FairDbGetFairExecutionDayForFairResponses>;
  fairDbGetFairPresenterForFair(req: FairDbGetFairPresenterForFairRequest): Promise<FairDbGetFairPresenterForFairResponses>;
  fairDbGetFairExecution(req: FairDbGetFairExecutionRequest): Promise<FairDbGetFairExecutionResponses>;
  fairDbCreateFairExecution(req: FairDbCreateFairExecutionRequest): Promise<FairDbCreateFairExecutionResponses>;
  fairDbUpdateFairExecution(req: FairDbUpdateFairExecutionRequest): Promise<FairDbUpdateFairExecutionResponses>;
  fairDbGetFairExecutionById(req: FairDbGetFairExecutionByIdRequest): Promise<FairDbGetFairExecutionByIdResponses>;
  fairDbUpdateFairExecution(req: FairDbUpdateFairExecutionRequest): Promise<FairDbUpdateFairExecutionResponses>;
  fairDbDeleteFairExecution(req: FairDbDeleteFairExecutionRequest): Promise<FairDbDeleteFairExecutionResponses>;
  fairDbGetFairForFairExecution(req: FairDbGetFairForFairExecutionRequest): Promise<FairDbGetFairForFairExecutionResponses>;
  fairDbGetFairExecutionDay(req: FairDbGetFairExecutionDayRequest): Promise<FairDbGetFairExecutionDayResponses>;
  fairDbCreateFairExecutionDay(req: FairDbCreateFairExecutionDayRequest): Promise<FairDbCreateFairExecutionDayResponses>;
  fairDbUpdateFairExecutionDay(req: FairDbUpdateFairExecutionDayRequest): Promise<FairDbUpdateFairExecutionDayResponses>;
  fairDbGetFairExecutionDayById(req: FairDbGetFairExecutionDayByIdRequest): Promise<FairDbGetFairExecutionDayByIdResponses>;
  fairDbUpdateFairExecutionDay(req: FairDbUpdateFairExecutionDayRequest): Promise<FairDbUpdateFairExecutionDayResponses>;
  fairDbDeleteFairExecutionDay(req: FairDbDeleteFairExecutionDayRequest): Promise<FairDbDeleteFairExecutionDayResponses>;
  fairDbGetFairExecutionProductForFairExecutionDay(req: FairDbGetFairExecutionProductForFairExecutionDayRequest): Promise<FairDbGetFairExecutionProductForFairExecutionDayResponses>;
  fairDbGetFairExecutionDaySaleForFairExecutionDay(req: FairDbGetFairExecutionDaySaleForFairExecutionDayRequest): Promise<FairDbGetFairExecutionDaySaleForFairExecutionDayResponses>;
  fairDbGetFairExecutionCostForFairExecutionDay(req: FairDbGetFairExecutionCostForFairExecutionDayRequest): Promise<FairDbGetFairExecutionCostForFairExecutionDayResponses>;
  fairDbGetFairExecutionDayCostHelperForFairExecutionDay(req: FairDbGetFairExecutionDayCostHelperForFairExecutionDayRequest): Promise<FairDbGetFairExecutionDayCostHelperForFairExecutionDayResponses>;
  fairDbGetFairForFairExecutionDay(req: FairDbGetFairForFairExecutionDayRequest): Promise<FairDbGetFairForFairExecutionDayResponses>;
  fairDbGetFairExecutionProduct(req: FairDbGetFairExecutionProductRequest): Promise<FairDbGetFairExecutionProductResponses>;
  fairDbCreateFairExecutionProduct(req: FairDbCreateFairExecutionProductRequest): Promise<FairDbCreateFairExecutionProductResponses>;
  fairDbUpdateFairExecutionProduct(req: FairDbUpdateFairExecutionProductRequest): Promise<FairDbUpdateFairExecutionProductResponses>;
  fairDbGetFairExecutionProductById(req: FairDbGetFairExecutionProductByIdRequest): Promise<FairDbGetFairExecutionProductByIdResponses>;
  fairDbUpdateFairExecutionProduct(req: FairDbUpdateFairExecutionProductRequest): Promise<FairDbUpdateFairExecutionProductResponses>;
  fairDbDeleteFairExecutionProduct(req: FairDbDeleteFairExecutionProductRequest): Promise<FairDbDeleteFairExecutionProductResponses>;
  fairDbGetProductForFairExecutionProduct(req: FairDbGetProductForFairExecutionProductRequest): Promise<FairDbGetProductForFairExecutionProductResponses>;
  fairDbGetFairExecutionDayForFairExecutionProduct(req: FairDbGetFairExecutionDayForFairExecutionProductRequest): Promise<FairDbGetFairExecutionDayForFairExecutionProductResponses>;
  fairDbGetFairExecutionDaySale(req: FairDbGetFairExecutionDaySaleRequest): Promise<FairDbGetFairExecutionDaySaleResponses>;
  fairDbCreateFairExecutionDaySale(req: FairDbCreateFairExecutionDaySaleRequest): Promise<FairDbCreateFairExecutionDaySaleResponses>;
  fairDbUpdateFairExecutionDaySale(req: FairDbUpdateFairExecutionDaySaleRequest): Promise<FairDbUpdateFairExecutionDaySaleResponses>;
  fairDbGetFairExecutionDaySaleById(req: FairDbGetFairExecutionDaySaleByIdRequest): Promise<FairDbGetFairExecutionDaySaleByIdResponses>;
  fairDbUpdateFairExecutionDaySale(req: FairDbUpdateFairExecutionDaySaleRequest): Promise<FairDbUpdateFairExecutionDaySaleResponses>;
  fairDbDeleteFairExecutionDaySale(req: FairDbDeleteFairExecutionDaySaleRequest): Promise<FairDbDeleteFairExecutionDaySaleResponses>;
  fairDbGetFairExecutionDayForFairExecutionDaySale(req: FairDbGetFairExecutionDayForFairExecutionDaySaleRequest): Promise<FairDbGetFairExecutionDayForFairExecutionDaySaleResponses>;
  fairDbGetFairExecutionCost(req: FairDbGetFairExecutionCostRequest): Promise<FairDbGetFairExecutionCostResponses>;
  fairDbCreateFairExecutionCost(req: FairDbCreateFairExecutionCostRequest): Promise<FairDbCreateFairExecutionCostResponses>;
  fairDbUpdateFairExecutionCost(req: FairDbUpdateFairExecutionCostRequest): Promise<FairDbUpdateFairExecutionCostResponses>;
  fairDbGetFairExecutionCostById(req: FairDbGetFairExecutionCostByIdRequest): Promise<FairDbGetFairExecutionCostByIdResponses>;
  fairDbUpdateFairExecutionCost(req: FairDbUpdateFairExecutionCostRequest): Promise<FairDbUpdateFairExecutionCostResponses>;
  fairDbDeleteFairExecutionCost(req: FairDbDeleteFairExecutionCostRequest): Promise<FairDbDeleteFairExecutionCostResponses>;
  fairDbGetFairExecutionDayForFairExecutionCost(req: FairDbGetFairExecutionDayForFairExecutionCostRequest): Promise<FairDbGetFairExecutionDayForFairExecutionCostResponses>;
  fairDbGetFairExecutionDayCostHelper(req: FairDbGetFairExecutionDayCostHelperRequest): Promise<FairDbGetFairExecutionDayCostHelperResponses>;
  fairDbCreateFairExecutionDayCostHelper(req: FairDbCreateFairExecutionDayCostHelperRequest): Promise<FairDbCreateFairExecutionDayCostHelperResponses>;
  fairDbUpdateFairExecutionDayCostHelper(req: FairDbUpdateFairExecutionDayCostHelperRequest): Promise<FairDbUpdateFairExecutionDayCostHelperResponses>;
  fairDbGetFairExecutionDayCostHelperByFairExecutionDayIdAndFairHelperId(req: FairDbGetFairExecutionDayCostHelperByFairExecutionDayIdAndFairHelperIdRequest): Promise<FairDbGetFairExecutionDayCostHelperByFairExecutionDayIdAndFairHelperIdResponses>;
  postFairExecutionDayCostHelperFairExecutionDayFairExecutionDayIdFairHelperIdFairHelperId(req: PostFairExecutionDayCostHelperFairExecutionDayFairExecutionDayIdFairHelperIdFairHelperIdRequest): Promise<PostFairExecutionDayCostHelperFairExecutionDayFairExecutionDayIdFairHelperIdFairHelperIdResponses>;
  putFairExecutionDayCostHelperFairExecutionDayFairExecutionDayIdFairHelperIdFairHelperId(req: PutFairExecutionDayCostHelperFairExecutionDayFairExecutionDayIdFairHelperIdFairHelperIdRequest): Promise<PutFairExecutionDayCostHelperFairExecutionDayFairExecutionDayIdFairHelperIdFairHelperIdResponses>;
  deleteFairExecutionDayCostHelperFairExecutionDayFairExecutionDayIdFairHelperIdFairHelperId(req: DeleteFairExecutionDayCostHelperFairExecutionDayFairExecutionDayIdFairHelperIdFairHelperIdRequest): Promise<DeleteFairExecutionDayCostHelperFairExecutionDayFairExecutionDayIdFairHelperIdFairHelperIdResponses>;
  postExtractPdf(req: PostExtractPdfRequest): Promise<PostExtractPdfResponses>;
  getAiImportTest(req: GetAiImportTestRequest): Promise<GetAiImportTestResponses>;
  postAiImportInvoiceGoodsFileId(req: PostAiImportInvoiceGoodsFileIdRequest): Promise<PostAiImportInvoiceGoodsFileIdResponses>;
  getAiTestAssistant(req: GetAiTestAssistantRequest): Promise<GetAiTestAssistantResponses>;
  postAiTestSupplier(req: PostAiTestSupplierRequest): Promise<PostAiTestSupplierResponses>;
}
type PlatformaticFrontendClient = Omit<Api, 'setBaseUrl'>
type BuildOptions = {
  headers?: Object
}
export default function build(url: string, options?: BuildOptions): PlatformaticFrontendClient
