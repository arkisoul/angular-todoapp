export class ServerResponse<T> {
    success: boolean;
    message: string;
    data: T | null;
    error: Error | null;
    resource: string;

    constructor(success: boolean, message: string, data: T | null, error: Error | null, resource: string) {
        this.success = success;
        this.message = message;
        this.data = data;
        this.error = error;
        this.resource = resource;
    }
}