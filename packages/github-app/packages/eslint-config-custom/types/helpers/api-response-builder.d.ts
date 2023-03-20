export interface ApiResponseBuilderError {
    message: string;
}
export declare const apiResponseBuilder: <TData>(data?: TData | null | undefined, error?: string | null) => {
    data: TData | null | undefined;
    error: ApiResponseBuilderError | null;
};
