import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { HEADER_STYLES } from "./header.styled";
import "./theme-switcher/theme-switcher-element";

@customElement("header-element")
export class HeaderElement extends LitElement {
    static styles = [HEADER_STYLES];

    render() {
        return html`
            <header>
                <h1>DevFinder</h1>
                <theme-switcher-element></theme-switcher-element>
            </header>
        `;
    }
}
