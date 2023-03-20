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
        transition: all 0.3s ease-out;
        padding: 6px 14px;
        border-radius: 6px;
    }
    button:hover {
        background-color: #1f2a48;
    }
    button.light {
        background-color: #1f2a48;
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
