import { css } from "lit";

export const SEARCH_STYLES = css`
    div {
        background-color: #1f2a48;
        border-radius: 8px;
        position: relative;
        padding: 4px;
        font-family: "Source Code Pro", monospace;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 20px;
    }
    /* search icon */
    img {
        position: absolute;
        top: 50%;
        left: 10px;
        transform: translateY(-47%);
    }
    button,
    input {
        font-family: "Source Code Pro", monospace;
        font-weight: 600;
        transition: all 0.3s ease-out;

        outline: none;
        border: none;
    }
    button {
        background-color: #0279fe;
        padding: 12px 20px;
        border-radius: 4px;
        height: 100%;
        cursor: pointer;
    }
    button:hover {
        background-color: rgba(2, 121, 254, 0.7);
    }

    input {
        width: 100%;
        padding-left: 38px;
        background-color: rgba(0, 0, 0, 0);
        height: 40px;
    }
`;
