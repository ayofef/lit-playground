import { css } from "lit";

export const PROFILE_STAT_ELEMENT_STYLED = css`
    .stat-wrapper {
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
        align-items: center;
        background-color: #151d30;
        padding: 12px 16px;
        border-radius: 8px;
    }

    .stat {
        font-family: "Source Code Pro", monospace;
    }

    .stat p {
        padding: 0;
        margin: 0;
        line-height: 1;
        font-size: 12px;
        font-weight: 600;
        color: #a9b1d6;
        margin-bottom: 8px;
    }
    .stat h3 {
        padding: 0;
        margin: 0;
        line-height: 1;
    }
`;
