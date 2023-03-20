import { css } from "lit";

export const PROFILE_BIO_ELEMENT_STYLED = css`
    .bio-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0;
        margin: 0;
        color: #ffffff;
    }

    .bio-header h2 {
        line-height: 1;
        font-family: "Source Code Pro", monospace;
    }
    .bio-header p {
        font-family: "Source Code Pro", monospace;
    }

    .bio-handle {
        margin-top: -20px;
        font-family: "Source Code Pro", monospace;
    }
    .bio-handle a {
        color: #0279fe;
        text-decoration: none;
        font-family: "Source Code Pro", monospace;
    }

    .bio-description p {
        color: #a9b1d6;
        font-family: "Source Code Pro", monospace;
    }
`;
