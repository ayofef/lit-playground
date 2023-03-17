import { GithubUserData } from "@/types";
import { ApiResponseBuilderError } from "@/helpers";
export type UpdateSearchDataContextParams = Partial<Omit<SearchDataContext, "updateSearchData">>;
export interface SearchDataContext {
    is_loading: boolean;
    error: ApiResponseBuilderError | null;
    data?: GithubUserData | null;
    updateSearchData: (data: UpdateSearchDataContextParams) => void;
}
export declare const searchDataContext: {
    __context__: SearchDataContext;
};
