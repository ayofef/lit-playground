export interface ApiResponseBuilderError {
    message: string;
}

export const apiResponseBuilder = <TData>(data?: TData | null, error?: string | null) => ({
    data,
    error: error
        ? ({
              message: error,
          } as ApiResponseBuilderError)
        : null,
});
