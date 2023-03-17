import { css } from "lit";

export const THEME_SWITCHER_STYLES = css`
    button {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(0, 0, 0, 0);

        border: none;
        outline: none;

        font-size: 14px;
        font-weight: 600;
        cursor: pointer;
    }
    span {
        text-transform: uppercase;
        font-family: "Source Code Pro", monospace;
    }

    img {
        width: 14px;
        margin-left: 10px;

        filter: invert(1);
    }
`;
