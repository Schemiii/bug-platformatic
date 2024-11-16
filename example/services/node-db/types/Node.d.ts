/**
 * Node
 * A Node
 */
declare interface Node {
    id?: number;
    channelNumber?: number | null;
    custom?: string | null;
    description?: string | null;
    icon?: string | null;
    name?: string | null;
    parentId?: string | null;
    referenceId?: string | null;
    type: string;
    weight?: number | null;
}
export { Node };
