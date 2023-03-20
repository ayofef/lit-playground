import { LitElement } from "lit";
import "./theme-switcher/theme-switcher-element";
import { Theme } from "./theme-switcher/theme-context";
export declare class HeaderElement extends LitElement {
    static styles: import("lit").CSSResult[];
    themeContext?: Theme;
    render(): import("lit").TemplateResult<1>;
}
