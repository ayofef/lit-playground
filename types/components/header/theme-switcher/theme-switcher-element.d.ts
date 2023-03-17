import { LitElement } from "lit";
import { Theme } from "./theme-context";
export declare class ThemeSwitcherElement extends LitElement {
    static styles: import("lit").CSSResult[];
    themeContext?: Theme;
    render(): import("lit").TemplateResult<1>;
    toggle(): void;
}
