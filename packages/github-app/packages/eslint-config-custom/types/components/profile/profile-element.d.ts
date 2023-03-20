import { LitElement } from "lit";
import { SearchDataContext } from "@/search-data-context";
import "./success-state/profile-element-success-state";
import "./loading-state/loading-state-element";
import "./error-state/error-state-element";
import "./empty-state/empty-state-element";
export declare class ProfileElement extends LitElement {
    static styles: import("lit").CSSResult;
    dataContext?: SearchDataContext;
    render(): import("lit").TemplateResult<1>;
}
