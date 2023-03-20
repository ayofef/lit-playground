import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { searchDataContext, SearchDataContext } from "@/search-data-context";
import { consume } from "@lit-labs/context";
import ErrorIcon from "@/assets/error.svg";
import { COMMON_STATE_CSS } from "../common";

@customElement("profile-error-state-element")
export class ProfileErrorStateElement extends LitElement {
    static styles = css`
        .error-wrapper {
            ${COMMON_STATE_CSS};
        }
        .error-wrapper p {
            font-family: "Source Code Pro", monospace;
        }
    `;

    @consume({ context: searchDataContext, subscribe: true })
    @property({ attribute: false })
    dataContext?: SearchDataContext;

    render() {
        return html`<div class="error-wrapper">
            <img src=${ErrorIcon} alt="Error" />
            <p>${this.dataContext?.error?.message}</p>
        </div>`;
    }
}
