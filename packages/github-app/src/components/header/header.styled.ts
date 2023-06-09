import { css } from "lit";

export const HEADER_STYLES = css`
    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    h1 {
        font-family: "Source Code Pro", monospace;
        font-size: 22px;
        font-weight: 600;
        color: #1f2a48;
    }

    h1.dark {
        color: #fff;
    }
`;
