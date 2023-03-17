import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { provide } from "@lit-labs/context";
import { APP_STYLES } from "./app.styled";
import { themeContext, Theme } from "./components/header/theme-switcher/theme-context";

import "./components/header/header-element.js";
import "./components/search/search-element.ts";
import "./components/profile/profile-element.ts";

@customElement("github-search-app")
export class MyElement extends LitElement {
    static styles = [APP_STYLES];

    @provide({ context: themeContext })
    @property({ attribute: false })
    public themeContext: Theme = {
        is_dark_theme: true,
        toggleTheme: this._toggleTheme.bind(this),
    };

    render() {
        return html`
            <header-element></header-element>
            <search-element></search-element>
            <profile-element></profile-element>
        `;
    }

    _toggleTheme() {
        this.themeContext.is_dark_theme = !this.themeContext.is_dark_theme;
    }
}
