import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { searchDataContext, SearchDataContext } from "@/search-data-context";
import { consume } from "@lit-labs/context";
import { COMMON_STATE_CSS } from "../common";

@customElement("profile-empty-state-element")
export class ProfileEmptyStateElement extends LitElement {
    static styles = css`
        .empty-wrapper {
            ${COMMON_STATE_CSS};
        }
    `;

    @consume({ context: searchDataContext, subscribe: true })
    @property({ attribute: false })
    dataContext?: SearchDataContext;

    render() {
        return html`<div class="empty-wrapper">
            <p>Search github user by username to view profile details</p>
        </div>`;
    }
}
