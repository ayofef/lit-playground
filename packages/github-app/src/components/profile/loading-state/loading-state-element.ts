import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("profile-loading-state-element")
export class ProfileLoadingStateElement extends LitElement {
    static styles = css`
        .loader {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 34px;
            height: 34px;
            transform: translate(-50%, -50%);
            border: 3px solid rgba(2, 121, 254, 0.2);
            border-radius: 50%;
            border-top-color: #0279fe;
            animation: spin 0.6s linear infinite;
        }

        @keyframes spin {
            from {
                transform: translate(-50%, -50%) rotate(0deg);
            }
            to {
                transform: translate(-50%, -50%) rotate(360deg);
            }
        }
    `;

    render() {
        return html`<div class="loader">&nbsp;</div>`;
    }
}
