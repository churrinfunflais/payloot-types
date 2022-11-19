export interface FirestoreAPIError {
    code: number;
    message: string;
    status: string;
    details: Detail[];
}
export interface Detail {
    '@type': string;
    links?: Link[];
    reason?: string;
    domain?: string;
    metadata?: Metadata;
}
export interface Link {
    description: string;
    url: string;
}
export interface Metadata {
    consumer: string;
    service: string;
}
export declare class HttpError extends Error {
    statusCode: number;
    code: string;
    constructor(statusCode: number, message: string, code?: string);
}
