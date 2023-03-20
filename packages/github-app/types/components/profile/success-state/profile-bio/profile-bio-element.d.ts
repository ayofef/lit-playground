import { LitElement } from "lit";
import { SearchDataContext } from "@/search-data-context";
export declare class ProfileBioElement extends LitElement {
    static styles: import("lit").CSSResult[];
    dataContext?: SearchDataContext;
    render(): import("lit").TemplateResult<1>;
    private getHeaderhtml;
    private getBioHandleHtml;
    private getBioDescriptionHtml;
}
