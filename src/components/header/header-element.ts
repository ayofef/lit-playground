import { LitElement, html } from "lit";
import { consume } from "@lit-labs/context";

import { customElement, property } from "lit/decorators.js";
import { HEADER_STYLES } from "./header.styled";
import "./theme-switcher/theme-switcher-element";

import { themeContext, Theme } from "./theme-switcher/theme-context";

@customElement("header-element")
export class HeaderElement extends LitElement {
    static styles = [HEADER_STYLES];

    @consume({ context: themeContext, subscribe: true })
    @property({ attribute: false })
    themeContext?: Theme;

    render() {
        return html`
            <header>
                <h1 class="${this.themeContext?.is_dark_theme ? "dark" : ""}">DevFinder</h1>
                <theme-switcher-element></theme-switcher-element>
            </header>
        `;
    }
}
