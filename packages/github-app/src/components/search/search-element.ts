import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ref, createRef, Ref } from "lit/directives/ref.js";
import { consume } from "@lit-labs/context";
import SearchIcon from "@/assets/search.svg";
import { SEARCH_STYLES } from "./search-element.styled";
import { apiResponseBuilder } from "@/helpers";
import { GithubUserData } from "@/types";
import { searchDataContext, SearchDataContext } from "@/search-data-context";

const INPUT_ID = "search-input";

interface CustomKeyboardEventDetail extends KeyboardEvent {
    originalTarget: HTMLInputElement;
}

@customElement("search-element")
export class HeaderElement extends LitElement {
    static styles = [SEARCH_STYLES];

    inputRef: Ref<HTMLInputElement> = createRef();

    @consume({ context: searchDataContext, subscribe: true })
    @property({ attribute: false })
    dataContext?: SearchDataContext;

    render() {
        const buttonLabel = this.dataContext?.is_loading ? "Searching.." : "Search";

        return html`
            <div>
                <img src=${SearchIcon} alt="Search" />
                <input type="text" placeholder="Search GitHub username.." ${ref(this.inputRef)} id=${INPUT_ID} />
                <button type="button" @click=${this.handleSearch}>${buttonLabel}</button>
            </div>
        `;
    }

    private async handleSearch(defaultSearchQuery?: string) {
        let searchQuery: string = "";

        if (defaultSearchQuery) {
            searchQuery = defaultSearchQuery;
        }

        if (this.inputRef.value) {
            const inputRefObj = this.inputRef.value;
            searchQuery = inputRefObj.value;
            inputRefObj.value = "";
        }

        this.dataContext?.updateSearchData({ is_loading: true });

        const searchResult = await this.getSearchData(searchQuery);

        this.dataContext?.updateSearchData({ is_loading: false, data: searchResult.data, error: searchResult.error });
    }

    private async getSearchData(query: string) {
        try {
            // get search query first
            const response = await fetch(`https://api.github.com/search/users?q=${query}`);
            const data = await response.json();

            if (!data?.items || data?.items?.length === 0 || !data?.items?.[0]?.url) return apiResponseBuilder(null, "No user found");

            // const get user details

            const userDetailsResponse = await fetch(data?.items?.[0]?.url);
            const userDetails = await userDetailsResponse.json();

            return apiResponseBuilder<GithubUserData>(userDetails);
        } catch (error) {
            return apiResponseBuilder(null, (error as Error)?.message || "Something went wrong");
        }
    }

    connectedCallback() {
        super.connectedCallback();

        this.handleSearch("ayofef");

        window.addEventListener("keyup", (event) => {
            event.preventDefault();
            event.stopPropagation();

            if (event.key === "Enter" && (event as CustomKeyboardEventDetail)?.originalTarget?.id === INPUT_ID) {
                this.handleSearch();
            }
        });
    }
}
