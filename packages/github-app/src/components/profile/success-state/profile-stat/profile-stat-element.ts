import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { searchDataContext, SearchDataContext } from "@/search-data-context";
import { consume } from "@lit-labs/context";
import { PROFILE_STAT_ELEMENT_STYLED } from "./profile-stat-element.styled";
import { DATA_KEYS, DATA_LABEL_MAP } from "./constant";

@customElement("profile-stat-element")
export class ProfileStatElement extends LitElement {
    static styles = [PROFILE_STAT_ELEMENT_STYLED];

    @consume({ context: searchDataContext, subscribe: true })
    @property({ attribute: false })
    dataContext?: SearchDataContext;

    render() {
        return html`<div class="stat-wrapper">${this.getStatHtml()}</div>`;
    }

    private getStatHtml() {
        return DATA_KEYS.map((dataKey) => {
            if (typeof this.dataContext?.data?.[dataKey] !== "number") return null;

            return html` <div class="stat">
                <p>${DATA_LABEL_MAP[dataKey]}</p>
                <h3>${this.dataContext?.data?.[dataKey]}</h3>
            </div>`;
        }).filter(Boolean);
    }
}
