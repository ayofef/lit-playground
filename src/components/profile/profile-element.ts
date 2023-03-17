import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("profile-element")
export class HeaderElement extends LitElement {
    render() {
        return html` <div>profile</div> `;
    }
}
