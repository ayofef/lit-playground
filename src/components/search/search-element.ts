import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("search-element")
export class HeaderElement extends LitElement {
    render() {
        return html` <div>search</div> `;
    }
}
