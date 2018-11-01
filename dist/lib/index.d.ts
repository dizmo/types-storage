import { UUID } from "@dizmo/types-uuid";
export interface Storage {
    [key: string]: any;
}
export interface Storage {
    getProperty: <T>(path: string, options?: {
        fallback?: T;
        nodes?: boolean;
        string?: boolean;
    }) => T;
    setProperty: <T>(path: string, value: T, options?: {
        file?: boolean;
        timeout?: number;
        string?: boolean;
    }) => void;
    deleteProperty: (path: string) => void;
}
export interface Storage {
    subscribeToProperty: (path: string, callback: Function, options?: {
        nodes?: boolean;
        recursive?: boolean;
        string?: boolean;
    }, subscribedCallback?: Function) => UUID;
    unsubscribeProperty: (subscriptionId: UUID) => void;
}
export interface Storage {
    beginUpdate: (path: string) => void;
    endUpdate: (path: string) => void;
}
export default Storage;
//# sourceMappingURL=index.d.ts.map