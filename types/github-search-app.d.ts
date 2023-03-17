import { LitElement } from "lit";
import { Theme } from "./components/header/theme-switcher/theme-context";
import { SearchDataContext, UpdateSearchDataContextParams } from "./search-data-context";
import "./components/header/header-element.js";
import "./components/search/search-element.ts";
import "./components/profile/profile-element.ts";
export declare class MyElement extends LitElement {
    static styles: import("lit").CSSResult[];
    themeContext: Theme;
    dataContext: SearchDataContext;
    render(): import("lit").TemplateResult<1>;
    connectedCallback(): void;
    _toggleTheme(): void;
    _updateSearchData(data: UpdateSearchDataContextParams): void;
}
