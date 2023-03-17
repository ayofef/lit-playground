import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { ref, createRef, Ref } from "lit/directives/ref.js";
import SearchIcon from "@/assets/search.svg";
import { SEARCH_STYLES } from "./search-element.styled";
import { apiResponseBuilder } from "@/helpers";
import { GithubSearchData } from "@/types";

@customElement("search-element")
export class HeaderElement extends LitElement {
    static styles = [SEARCH_STYLES];

    inputRef: Ref<HTMLInputElement> = createRef();

    render() {
        return html`
            <div>
                <img src=${SearchIcon} alt="Search" />
                <input type="text" placeholder="Search GitHub username.." ${ref(this.inputRef)} />
                <button type="button" @click=${this.handleSearch}>Search</button>
            </div>
        `;
    }

    private async handleSearch() {
        const inputRefObj = this.inputRef.value;
        if (!inputRefObj) return;

        const searchQuery = inputRefObj.value;

        inputRefObj.value = "";

        const searchResult = await this.getSearchData(searchQuery);
        console.log("🚀 ~ file: search-element.ts:34 ~ HeaderElement ~ handleSearch ~ searchResult:", searchResult);

        /**
         * TODO: set the search result to  context
         * - context should have loading state too
         * - error state too
         */
    }

    private async getSearchData(query: string) {
        try {
            const response = await fetch(`https://api.github.com/search/users?q=${query}`);
            const data = await response.json();

            if (!data?.items || data?.items?.length === 0) return apiResponseBuilder(null, "No user found");
            return apiResponseBuilder<GithubSearchData>(data?.items?.[0]);
        } catch (error) {
            return apiResponseBuilder(null, (error as Error)?.message || "Something went wrong");
        }
    }
}
