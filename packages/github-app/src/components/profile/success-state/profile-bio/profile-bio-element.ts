import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { PROFILE_BIO_ELEMENT_STYLED } from "./profile-bio-element.styled";
import { searchDataContext, SearchDataContext } from "@/search-data-context";
import { consume } from "@lit-labs/context";

@customElement("profile-bio-element")
export class ProfileBioElement extends LitElement {
    static styles = [PROFILE_BIO_ELEMENT_STYLED];

    @consume({ context: searchDataContext, subscribe: true })
    @property({ attribute: false })
    dataContext?: SearchDataContext;

    render() {
        return html` ${this.getHeaderhtml()} ${this.getBioHandleHtml()} ${this.getBioDescriptionHtml()} `;
    }

    private getHeaderhtml = () => {
        // format as Jan 20, 2020
        const formattedDate = this.dataContext ? new Date((this.dataContext?.data?.created_at as string) ?? null).toLocaleDateString("en-US", { day: "numeric", year: "numeric", month: "short" }) : "";

        return html`
            <div class="bio-header">
                <h2>${this.dataContext?.data?.name}</h2>
                <p>Joined ${formattedDate}</p>
            </div>
        `;
    };

    private getBioHandleHtml = () => {
        return html`
            <div class="bio-handle">
                <a href=${this.dataContext?.data?.html_url} target="_blank" rel="noopener noreferrer">@${this.dataContext?.data?.login}</a>
            </div>
        `;
    };

    private getBioDescriptionHtml = () => {
        return html`
            <div class="bio-description">
                <p ?hidden=${!Boolean(this.dataContext?.data?.bio)}>${this.dataContext?.data?.bio}</p>
                <p ?hidden=${Boolean(this.dataContext?.data?.bio)}>This profile has no bio</p>
            </div>
        `;
    };
}
