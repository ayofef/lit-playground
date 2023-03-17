import { css } from "lit";

export const PROFILE_BIO_ELEMENT_STYLED = css`
    .bio-header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        padding: 0;
        margin: 0;
    }

    .bio-header h2 {
        line-height: 1;
    }

    .bio-handle {
        margin-top: -20px;
    }
    .bio-handle a {
        color: #0279fe;
        text-decoration: none;
    }

    .bio-description p {
        color: #a9b1d6;
    }
`;
