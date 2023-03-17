import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { searchDataContext, SearchDataContext } from "@/search-data-context";
import { consume } from "@lit-labs/context";

@customElement("profile-image-element")
export class ProfileImage extends LitElement {
    @consume({ context: searchDataContext, subscribe: true })
    @property({ attribute: false })
    dataContext?: SearchDataContext;

    static styles = css`
        img {
            width: 100%;
            max-width: 238px;
            border-radius: 8px;
            flex-shrink: 0;
        }
    `;
    render() {
        return html` <img src="${this.dataContext?.data?.avatar_url}" alt="${this.dataContext?.data?.login}" />`;
    }
}
