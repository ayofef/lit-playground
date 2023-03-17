import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { consume } from "@lit-labs/context";
import { themeContext, Theme } from "./theme-context";
import { THEME_SWITCHER_STYLES } from "./theme-switcher.styled";

import LightThemeIcon from "../../../assets/light_mode.svg";
import DarkThemeIcon from "../../../assets/dark_mode.svg";

@customElement("theme-switcher-element")
export class ThemeSwitcherElement extends LitElement {
    static styles = [THEME_SWITCHER_STYLES];

    @consume({ context: themeContext, subscribe: true })
    @property({ attribute: false })
    themeContext?: Theme;

    render() {
        const label = this.themeContext?.is_dark_theme ? "dark" : "light";

        return html` <button @click=${this.toggle} type="button">
            <span>${label}</span>
            <img ?hidden=${this.themeContext?.is_dark_theme} src=${LightThemeIcon} alt="light theme" />
            <img ?hidden=${!this.themeContext?.is_dark_theme} src=${DarkThemeIcon} alt="dark theme" />
        </button>`;
    }

    toggle() {
        this.themeContext?.toggleTheme();
        this.requestUpdate();
    }
}
