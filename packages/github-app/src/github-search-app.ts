import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { provide } from "@lit-labs/context";
import { APP_STYLES } from "./app.styled";
import { themeContext, Theme } from "./components/header/theme-switcher/theme-context";
import { searchDataContext, SearchDataContext, UpdateSearchDataContextParams } from "./search-data-context";
import { LOCAL_STORAGE_KEYS } from "@/constant";

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

    @provide({ context: searchDataContext })
    @property({ attribute: false })
    public dataContext: SearchDataContext = {
        is_loading: false,
        data: null,
        error: null,
        updateSearchData: this._updateSearchData.bind(this),
    };

    render() {
        return html`
            <main class="${this.themeContext?.is_dark_theme ? "dark" : ""}">
                <div class="app-wrapper">
                    <header-element ?value=${true}></header-element>
                    <search-element></search-element>
                    <profile-element></profile-element>
                </div>
            </main>
        `;
    }

    connectedCallback(): void {
        super.connectedCallback();
        const isDark = localStorage.getItem(LOCAL_STORAGE_KEYS.IS_DARK_THEME);

        this.themeContext = {
            ...this.themeContext,
            is_dark_theme: isDark === "true" ? true : false,
        };
    }

    _toggleTheme() {
        this.themeContext = {
            ...this.themeContext,
            is_dark_theme: !this.themeContext.is_dark_theme,
        };
    }
    _updateSearchData(data: UpdateSearchDataContextParams) {
        this.dataContext = {
            ...this.dataContext,
            ...data,
        };
    }
}
