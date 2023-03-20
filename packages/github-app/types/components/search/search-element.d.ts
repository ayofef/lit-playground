import { LitElement } from "lit";
import { Ref } from "lit/directives/ref.js";
import { SearchDataContext } from "@/search-data-context";
export declare class HeaderElement extends LitElement {
    static styles: import("lit").CSSResult[];
    inputRef: Ref<HTMLInputElement>;
    dataContext?: SearchDataContext;
    render(): import("lit").TemplateResult<1>;
    private handleSearch;
    private getSearchData;
    connectedCallback(): void;
}
