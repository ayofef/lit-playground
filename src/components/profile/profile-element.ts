import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { searchDataContext, SearchDataContext } from "@/search-data-context";
import { consume } from "@lit-labs/context";

import "./success-state/profile-element-success-state";
import "./loading-state/loading-state-element";
import "./error-state/error-state-element";
import "./empty-state/empty-state-element";
@customElement("profile-element")
export class ProfileElement extends LitElement {
    static styles = css`
        .profile-wrapper {
            position: relative;
            background-color: #1f2a48;
            border-radius: 8px;
            padding: 22px 20px 18px 20px;
            min-height: 200px;
        }
    `;

    @consume({ context: searchDataContext, subscribe: true })
    @property({ attribute: false })
    dataContext?: SearchDataContext;

    render() {
        const showLoadingState = Boolean(this.dataContext?.is_loading);
        const showErrorState = Boolean(this.dataContext?.error?.message);
        const showSuccessState = !this.dataContext?.is_loading && !this.dataContext?.error?.message && this.dataContext?.data;
        const showEmptyState = !this.dataContext?.is_loading && !this.dataContext?.error && !this.dataContext?.data;

        return html`<div class="profile-wrapper">
            <profile-loading-state-element ?hidden=${!showLoadingState}> </profile-loading-state-element>
            <profile-error-state-element ?hidden=${!showErrorState}></profile-error-state-element>
            <profile-empty-state-element ?hidden=${!showEmptyState}></profile-empty-state-element>
            <profile-element-success-state ?hidden=${!showSuccessState}> </profile-element-success-state>
        </div>`;
    }
}
